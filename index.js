import express from 'express';
import Books from './books.js';

const app = express();

app.get('/books', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(JSON.stringify({ books: await Books.find().toArray() }, null, 2));
});

app.listen(3000, () => {
  console.log('App running on localhost:3000');
});
