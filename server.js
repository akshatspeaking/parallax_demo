const FS = require("fs");
const HTTP = require("http");

let server = HTTP.createServer(handleRequest);

async function handleRequest(req, res) {
try {
   if (req.method == "GET") {
      // console.log(req.url);
      switch (req.url) {
         case "/":
         case "/index.html":
         case "/index":
            res.setHeader("content-type", "text/html");
            FS.createReadStream("./index.html").pipe(res);
            break;
         case "/heroes":
         case "/heroes.html":
            res.setHeader("content-type", "text/html");
            FS.createReadStream("./heroes.html").pipe(res);
            break;
         case "/students-speak":
         case "/students-speak.html":
            res.setHeader("content-type", "text/html");
            FS.createReadStream("./students-speak.html").pipe(res);
            break;
      }
      if (req.url.endsWith(".jpg") || req.url.endsWith(".JPG")) {
         res.setHeader("content-type", "image/jpeg");
         FS.createReadStream(`.${req.url}`).pipe(res);
      } else if (req.url.endsWith(".js")) {
         res.setHeader("content-type", "text/javascript");
         FS.createReadStream(`.${req.url}`).pipe(res);
      } else if (req.url.endsWith(".css")) {
         res.setHeader("content-type", "text/css");
         FS.createReadStream(`.${req.url}`).pipe(res);
      }
      else if (req.url.endsWith(".png")) {
         res.setHeader("content-type", "image/png");
         FS.createReadStream(`.${req.url}`).pipe(res);
      }
      // FS.createReadStream(`.${req.url}`).pipe(res);
   } else {
      res.statusCode = 404;
      res.end("Not found");
   }
} catch(err) {
   console.log(err);
}
}

server.listen(3001)