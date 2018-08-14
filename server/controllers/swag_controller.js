// server/controllers/swag_controller.js
const swag = require('../models/swag');

module.exports = {
  read: ( req, res, next ) => {
    res.status(200).send( swag );
  }
};
