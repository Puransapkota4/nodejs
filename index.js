// in this code , we used the node js module http with create server feature. http itself is a function
// const fs = require("fs");
// const http = require("http");
// const os = require("os");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({
//         data: "Hello world!",
//       })
//     );
//   })
//   .listen(8000);
// console.log("Application is running");

// http:// localhost:8000

//fs os  ( events like http , these  nother package of node js)

//fs use then show the content of hello.txt

// const result = fs.readFileSync("./hello.txt").toString();
// console.log({ result });

//os use and show total memory

// const mem = os.totalmem();
// console.log({ memory: mem });

//Built in node js Module

//crete your custom node js module

const { converter } = require("./library");

const result = converter(6000);
console.log(result);
