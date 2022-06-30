const http = require('http');

const port = process.env.PORT || 3000;

const axios = require('axios');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, World</h1>');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

//GET req
// axios
//   .get('https://example.com/todos')
//   .then((res) => {
//     console.log(`statusCode : ${res.status}`);
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//POST req
axios
  .post('https://whatever.com/todos', {
    todo: 'Learn some stuff',
  })
  .then((res) => {
    console.log(`statusCode : ${res.statusCode}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
