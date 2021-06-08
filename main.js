const express = require('express');

const app = express();

const memo = new Map();

const fib = (n) => {
  if (n < 0) return 0; // this to avoid negatives
  if (memo.has(n)) return memo.get(n); // If the value has already calculated return from memory

  // If not, calculate as usual and the result stored it in memory
  const result = fib(n - 2) + fib(n - 1);
  memo.set(n, result);
  return result;
};

app.get('/', (req, res) => {
  const n = parseInt(req.query.n);
  return res.send(`{ "result": ${fib(n)}}`);
});

app.listen('8080', () => {
  memo.set(0, 0);
  memo.set(1, 1);
  console.log(`Listening on port 8080`);
});
