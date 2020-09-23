const {noobTemplate , perfectTemplate} = require ('./template')
const express = require('express');
const JsReport = require('jsreport')
const path = require('path')
const app = express();
const fs = require('fs');

var content = fs.readFileSync("data.json");
var parsedContent = JSON.parse(content);
console.log(parsedContent)

// The group by array
  let inflArr = ['Cococola','Pepsi','Sprite','7up']


let group ={};
inflArr.forEach((el,i)=>{
    group[el]= parsedContent.filter(cust=>cust.infl.includes(el))
})
console.log(group);

// data injected to JSReport
   let data= {
    groupBy:group,
    inflList:inflArr

  }
// console.log(data)

let jsReportGenerator

const server = app.listen(3001);

// #######################################
// #######################################

// For Generator

(async () => {
  try {
    jsReportGenerator = JsReport({
      configFile: path.join(__dirname, 'prod.config.json')
    })
    jsReportGenerator.init().then(() => {
      console.log('jsreport generator started')
      printReport()
    }).catch((e) => {
      console.error(e);
    });
  } catch (error) {
    console.log(error)
  }
})()

app.get('/*',async(req,res) => {
console.log(req.params[0])
try {
const content = await printReport(req.params[0])
console.log("######################3",content)
 res.send(content.content)
}
catch{
res.send("error")}

})
const getTemplate= (name) => {
console.log('------------>',name)
switch (name) {
	case 'noob':
	return noobTemplate;
	case 'perfect':
	default:
	return perfectTemplate;
}

}
const printReport= async (name)=>{

let response = await jsReportGenerator.render(
    {
      template: {
        content: getTemplate(name),
        engine: 'handlebars',
        recipe: 'chrome-pdf',
        helpers: `
      function alias(items,inflList) {
        let finder =inflList.find(e=>e === items)
        return finder?finder:'Unknown Source'
    } `
      },
      data: data
    }
  )
  // .then(async (resp) => {
  //   // write report buffer to a file
  //   const respo = await fs.writeFileSync('InfluenceReport.pdf', resp.content);

  //   //res.send('download success');
  // }).catch((e) => {
  //   //res.send(JSON.stringify(e));
  //   console.error(e);
  // });
//});
return response
}
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
