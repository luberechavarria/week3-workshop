let express = require('express');
let app = express();
let bodyParser = require('body-parser');

const userRoutes = require("./routes/users");

app.use(bodyParser.json());
app.use(express.static(__dirname + '/www'));

app.listen(3000, '127.0.0.1', function(){
  let d = new Date();
  let n = d.getHours();
  let m = d.getMinutes();

  console.log('Server is running at:' + n + ':' + m)
})

const validate = (req, res, next) => {
  // Logic here to validate headers
  next();
 };


app.use("/api", validate, userRoutes);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/www/form.html');
});



