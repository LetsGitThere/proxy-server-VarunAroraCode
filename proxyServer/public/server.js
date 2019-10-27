const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan')
const PORT = 4003;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(morgan('dev'))
app.use("/:productID",express.static(path.join(__dirname, 'lib')));

app.listen(PORT, () => {
  console.log(`Server listening on port: http://ec2-18-224-110-64.us-east-2.compute.amazonaws.com:${PORT}`);
});
