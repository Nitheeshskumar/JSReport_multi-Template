 const noobTemplate =   ` <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="icon" href="data:,">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<body>
        <table width="100%" style="height: 100%;" cellpadding="0" cellspacing="10" border="0">
          <tr><td colspan="2" align="center"><h3 style="margin-bottom: 20px;">Noob Report</h3></td></tr>
          <tr>
            <td colspan="2">
              <h4 style="margin-bottom: 10px;" class="section-head">Notes</h4>
              <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                      </p>
            </td>
          </tr>
          {{#each groupBy}}
          <tr>
            <td colspan="2" bgcolor="#FFF">
              <h4 style="margin-top: 25px;" class="section-head"> {{alias @key ../inflList}}</h4>
              <table style="margin-top: 15px;" border="0" class="table-bordered colored-table">
                <thead>
                  <tr>
                    <th width="15%">
                      Name
                    </th>
                    <th width="15%">
                      Phone
                    </th>                  
                  </tr>
                </thead>
                <tbody>
                  {{#each this}}
                  <tr>
                    <td>{{fname}} {{lname}}</td>
                    <td> {{phone}}</td>                   
                  </tr>
                  {{/each}}
                </tbody>
              </table>
            </td>
          </tr>
          {{/each}}
        </table>
      </body>
      </html>`

 const perfectTemplate = `
        <!--
        Invoice dynamically rendered into html using handlebars and converted into pdf
        using chrome-pdf recipe. The styles are extracted into separate asset for
        better readability and later reuse.

        Data to this sample are mocked at the design time and should be filled on the
        incoming API request.
        !-->

        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">

      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link rel="icon" href="data:,">
        <style>
          body,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            font-family: 'Roboto', sans-serif;
            margin: 0;
          }

          body {
            color: #444444;
            padding: 15px;
          }

          b {
            font-weight: 700;
          }

          td {
            font-size: 13px;
            background: #fff;
          }


          table {
            background: #fff;
            border-collapse: collapse;
          }

          table.table-bordered {
            border: 0;
          }

          .table-bordered th,
          .table-bordered td {
            border: 1px solid #ddd;
          }

          .table-bordered td {
            padding: 5px 7px;
          }

          .logo {
            height: 60px;
            max-height: 100%;
            margin-bottom: 5px;
          }

          .tenant-details h3 {
            color: #263778;
            margin-bottom: 5px;
          }

          .colored-table {
            width: 100%;
            border: 1px solid #ddd;
          }

          .colored-table tr th {
            background-color: #eee;
            text-align: left;
            color: #fff;
            padding: 7px;
          }

          .box-table-wrap {
            padding: 15px 0;
            border: 1px solid #ddd;
            width: 290px;
          }


          .box-table {
            width: 100%;
          }

          .box-table tr td {
            padding: 3px;
          }

          .text-right {
            text-align: right;
          }

          .message {
            padding: 10px;
            border: 1px solid #ddd;
          }
          .footer-section{
            margin-top: 40px;
          }
          .bottom-footer{
            padding: 10px;
            border-top: 1px solid #ddd;
            margin-top: 10px;
            font-weight: 700;
            color: #2672AD;
          }
          .address-section{
            height: 100px;
            vertical-align: top;
          }

          .section-head{
            color: #263778;
          }

          @media print {
            .colored-table tr th {
                  background-color: #2672AF !important;
                  -webkit-print-color-adjust: exact;
            }
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
        </style>
      </head>
      <body>
        <table width="100%" style="height: 100%;" cellpadding="0" cellspacing="10" border="0">
          <tr><td colspan="2" align="center"><h3 style="margin-bottom: 20px;">Influence Report</h3></td></tr>
          <tr>
            <td colspan="2">
              <h4 style="margin-bottom: 10px;" class="section-head">Notes</h4>
              <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                      </p>
            </td>
          </tr>
          {{#each groupBy}}
          <tr>
            <td colspan="2" bgcolor="#FFF">
              <h4 style="margin-top: 25px;" class="section-head"> {{alias @key ../inflList}}</h4>
              <table style="margin-top: 15px;" border="0" class="table-bordered colored-table">
                <thead>
                  <tr>
                    <th width="15%">
                      Name
                    </th>
                    <th width="15%">
                      Phone
                    </th>                   
                  </tr>
                </thead>
                <tbody>
                  {{#each this}}
                  <tr>
                    <td>{{fname}} {{lname}}</td>
                    <td> {{phone}}</td>
                   
                  </tr>
                  {{/each}}
                </tbody>
              </table>
            </td>
          </tr>
          {{/each}}
       </table>
      </body>
      </html>
        `

module.exports.noobTemplate = noobTemplate

module.exports.perfectTemplate = perfectTemplate
