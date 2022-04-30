"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClassByIdAdmin = exports.getClassByIdAdmin = exports.getClassAdmin = exports.deleteClassByIdAdmin = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Class = _interopRequireDefault(require("../models/Class"));

var getClassAdmin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var getclass;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Class["default"].find();

          case 3:
            getclass = _context.sent;
            res.json(getclass);
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "error"
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getClassAdmin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getClassAdmin = getClassAdmin;

var getClassByIdAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var class1;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Class["default"].findById(req.params.classid);

          case 3:
            class1 = _context2.sent;
            res.status(200).json(class1);
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(400).json({
              message: _context2.t0
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getClassByIdAdmin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getClassByIdAdmin = getClassByIdAdmin;

var updateClassByIdAdmin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _id, name, time, description, updateClass;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _id = req.params.classid;
            name = req.body.name;
            time = req.body.time;
            description = req.body.description;
            _context3.next = 7;
            return _Class["default"].findByIdAndUpdate({
              _id: _id
            }, {
              $set: {
                name: name,
                time: time,
                description: description
              }
            }, {
              "new": true
            });

          case 7:
            updateClass = _context3.sent;
            res.status(200).json(updateClass);
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(400).json({
              message: _context3.t0
            });

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function updateClassByIdAdmin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateClassByIdAdmin = updateClassByIdAdmin;

var deleteClassByIdAdmin = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var responseDelete;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Class["default"].findByIdAndDelete(req.params.classid);

          case 3:
            responseDelete = _context4.sent;
            res.status(200).json(responseDelete);
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            res.status(400).json({
              message: _context4.t0
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function deleteClassByIdAdmin(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteClassByIdAdmin = deleteClassByIdAdmin;