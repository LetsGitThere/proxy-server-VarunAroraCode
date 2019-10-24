const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = 4000;


//,amage CORS policy
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(morgan('dev'));
app.use("/:productId/checkout",express.static(path.join(__dirname, 'lib')));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});