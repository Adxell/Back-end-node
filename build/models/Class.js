"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var classSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  time: {
    type: String
  },
  description: {
    type: String
  },
  professor: [{
    ref: "User",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Class", classSchema);

exports["default"] = _default;