"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

var PORT = process.env.PORT || 3002;

_app["default"].listen(PORT);

console.log("Server listen on port", PORT);