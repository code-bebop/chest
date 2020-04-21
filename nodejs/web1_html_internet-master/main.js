var http = require('http');
var url = require('url');
var fs = require('fs');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathName = url.parse(_url, true).pathname;


  if (pathName === "/") {
    if (queryData.id === undefined) {

      fs.readdir("../data", (err, files) => {
        var title = "Welcome";
        var description = "Hello, Node.js";
        var list = '<ul>';
        var i = 0;
        while (i < files.length) {
          list += `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`
          i++;
        }
        list += '</ul>';
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
      })
    } else {
      fs.readFile(`../data/${queryData.id}`, 'utf8', function (err, description) {
        fs.readdir("../data", (err, files) => {
          var title = queryData.id;
          var list = '<ul>';
          var i = 0;
          while (i < files.length) {
            list += `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`
            i++;
          }
          list += '</ul>';
          var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>
        `;
          response.writeHead(200);
          response.end(template);
        });
      })
    }
  } else {
    response.writeHead(400);
    response.end("Not found");
  }
});
app.listen(3000);
