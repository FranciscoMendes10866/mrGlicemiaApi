"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const verifyToken = async (req, res, next) => {
  // Get auth header value
  const bearerHeader = req.headers.authorization; // Check if bearer is undefined

  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' '); // Get token from array

    const bearerToken = bearer[1]; // Set the token

    req.token = bearerToken; // Next middleware

    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
};

var _default = verifyToken;
exports.default = _default;