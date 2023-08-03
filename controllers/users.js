// const bcrypt = require("bcrypt-nodejs");

const login = (req, res) => {

  let users = [{'email':'luber@gmail.com', 'pwd': '123'}, {'email':'jorge@gmail.com', 'pwd': '456'}, {'email':'Alan@gmail.com', 'pwd': '789'}]
  
  if (!req.body) {
    return res.sendStatus(400);
  }

  let customer = {};
  customer.email = req.body.email;
  customer.upwd = req.body.upwd;
  customer.valid = false;
 
  for (let i=0; i<users.length; i++){
   if (req.body.email == users[i].email && req.body.upwd ==users[i].pwd) {
     customer.valid = true;
   }
  };
  
  res.send(customer);
}

const createUser = (req, res) => {
  
}

module.exports = {login, createUser};