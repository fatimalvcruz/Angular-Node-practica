const mongoose = require("mongoose");

const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
    
    createdAt: String,
    name: String,
    lastname: String,
    company: String,
    email: String,
    city: String,
    address: String,
    cp: String, 
    id: String
    
  })
);

module.exports = Client;
