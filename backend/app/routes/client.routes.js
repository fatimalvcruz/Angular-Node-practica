const { authJwt } = require("../middlewares");
const controller = require("../controllers/client.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/test/clients",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.allclients
  );
  
  app.get(
    "/api/test/client/:clientId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getClientById
  );
};
