"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var schemaReport = (0, _mongoose.Schema)({
  description: {
    type: String
  },
  idClass: {
    ref: "Class",
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Report", schemaReport);

exports["default"] = _default;