const http = require('http');
const os = require('os');

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // השרת יגיד שלום ויציין את שם המחשב (הפוד) שהוא רץ עליו
  res.end(`Hello Noga! This is my CUSTOM server running on: ${os.hostname()}\n`);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});