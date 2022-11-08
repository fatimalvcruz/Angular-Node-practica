const config = require("../config/auth.config");
const db = require("../models");
const Client = db.client;

exports.allclients = (req, res) => {

  Client.find({})
  .exec((err, client) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    
    res.status(200).send(client);
  });

};

exports.getClientById = (req, res) => {

  Client.findOne({id: req.params.clientId})
  .exec((err, client) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    
    res.status(200).send(client);
  });

};