"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

_mongoose["default"].connect("mongodb+srv://adxell:7oQTjcYECemnPh5c@cluster0.3ygul.mongodb.net/proyect?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (response) {
  return console.log("Db is coonneted");
})["catch"](function (err) {
  return console.log(err);
});