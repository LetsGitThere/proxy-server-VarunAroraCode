const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan')
const PORT = 4001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(morgan('dev'))
app.use("/:productID",express.static(path.join(__dirname, 'lib')));
app.get("*", (req, res) =>{
  //link my html to the get request

})
// app.get("http://localhost:4000/:productID/bundle.js", (req, res) => {
  
//   res.send()
// })

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});