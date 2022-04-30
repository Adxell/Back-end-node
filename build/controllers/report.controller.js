"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReport = exports.createReport = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Report = _interopRequireDefault(require("../models/Report"));

var _Class = _interopRequireDefault(require("../models/Class"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var createReport = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var idClas, description, idClass, newReport, saveData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            idClas = req.params.classid;
            description = req.body.description;
            idClass = _mongoose["default"].Types.ObjectId(idClas);
            newReport = new _Report["default"]({
              description: description,
              idClass: idClass
            });
            _context.next = 7;
            return newReport.save();

          case 7:
            saveData = _context.sent;
            res.status(200).json({
              saveData: saveData
            });
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: _context.t0
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function createReport(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createReport = createReport;

var getReport = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var idClass, dataReport;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            idClass = req.params.classid;
            _context2.next = 4;
            return _Report["default"].find({
              idClass: idClass
            });

          case 4:
            dataReport = _context2.sent;
            res.status(200).json(dataReport);
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: _context2.t0
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getReport(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getReport = getReport;