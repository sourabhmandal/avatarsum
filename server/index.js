import { ClerkExpressMiddleware } from '@clerk/clerk-sdk-node';
import Cookies from 'cookies';
const express = require('express');
const app = express();
const port = 3000;

app.use(ClerkExpressMiddleware());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
