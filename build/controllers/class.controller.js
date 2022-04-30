"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClassById = exports.getClassById = exports.getClass = exports.deleteClassById = exports.createClass = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Class = _interopRequireDefault(require("../models/Class"));

var _Report = _interopRequireDefault(require("../models/Report"));

var createClass = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, time, description, professor, newClass, classSaved;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, time = _req$body.time, description = _req$body.description, professor = _req$body.professor;
            newClass = new _Class["default"]({
              name: name,
              time: time,
              description: description,
              professor: professor
            });
            _context.next = 5;
            return newClass.save();

          case 5:
            classSaved = _context.sent;
            res.status(201).json(classSaved);
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
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

  return function createClass(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createClass = createClass;

var getClass = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userId, getclass;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            userId = req.params.userId;
            console.log(userId);
            _context2.next = 5;
            return _Class["default"].find({
              professor: {
                $in: userId
              }
            });

          case 5:
            getclass = _context2.sent;
            res.json(getclass);
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(400).json({
              message: _context2.t0
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function getClass(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getClass = getClass;

var getClassById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var class1;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Class["default"].findById(req.params.classid);

          case 3:
            class1 = _context3.sent;
            res.status(200).json(class1);
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            res.status(400).json({
              message: _context3.t0
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getClassById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getClassById = getClassById;

var updateClassById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var updateClass;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Class["default"].findByIdAndUpdate(req.params.classid, req.body, {
              "new": true
            });

          case 3:
            updateClass = _context4.sent;
            res.status(200).json(updateClass);
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

  return function updateClassById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateClassById = updateClassById;

var deleteClassById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var responseDelete;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Class["default"].findByIdAndDelete(req.params.classid);

          case 3:
            responseDelete = _context5.sent;
            res.status(200).json(responseDelete);
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
            res.status(400).json({
              message: _context5.t0
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function deleteClassById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteClassById = deleteClassById;