"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateById = exports.getReportById = exports.deleteReport = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Report = _interopRequireDefault(require("../models/Report"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var getReportById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var idReport, id, dataReport;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            idReport = req.params.reportid;
            id = _mongoose["default"].Types.ObjectId(idReport);
            _context.next = 5;
            return _Report["default"].findById(id);

          case 5:
            dataReport = _context.sent;
            res.status(200).json(dataReport);
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(400).json({
              message: _context.t0
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function getReportById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getReportById = getReportById;

var deleteReport = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var idReport, dataReport;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            idReport = req.params.reportid;
            _context2.next = 4;
            return _Report["default"].findOneAndDelete({
              idReport: idReport
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
            res.status(400).json({
              message: _context2.t0
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function deleteReport(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteReport = deleteReport;

var updateById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _id, description, dataReport;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _id = req.params.reportid;
            description = req.body.description;
            _context3.next = 5;
            return _Report["default"].findByIdAndUpdate({
              _id: _id
            }, {
              $set: {
                description: description
              }
            }, {
              "new": true
            });

          case 5:
            dataReport = _context3.sent;
            res.status(200).json(dataReport);
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(400).json({
              message: _context3.t0
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function updateById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateById = updateById;