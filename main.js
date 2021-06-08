const express = require('express');

const app = express();

const fib = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fib(n - 2) + fib(n - 1);
};

app.get('/', (req, res) => {
  const n = parseInt(req.query.n);
  return res.send(`{ "result": ${fib(n)}}`);
});

app.listen('8080', () => console.log(`Listening on port 8080`));
