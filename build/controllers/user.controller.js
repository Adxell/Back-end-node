"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserById = exports.getAllUser = exports.deleteUserById = exports.createUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, email, password, document, roles, newUser, userSave;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, document = _req$body.document, roles = _req$body.roles;
            _context.t0 = _user["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 7;
            return _user["default"].encryptData(password);

          case 7:
            _context.t3 = _context.sent;
            _context.next = 10;
            return _user["default"].encryptData(document);

          case 10:
            _context.t4 = _context.sent;
            _context.t5 = roles;
            _context.t6 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3,
              document: _context.t4,
              roles: _context.t5
            };
            newUser = new _context.t0(_context.t6);
            _context.next = 16;
            return newUser.save();

          case 16:
            userSave = _context.sent;
            res.status(201).json(userSave);
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t7 = _context["catch"](0);
            console.error(_context.t7);
            res.status(400).json({
              message: _context.t7
            });

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var updateUserById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var updateUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user["default"].findByIdAndUpdate(req.body.id, {
              "new": true
            });

          case 3:
            updateUser = _context2.sent;
            res.status(200).json(updateUser);
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(400).json({
              message: "Error"
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function updateUserById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateUserById = updateUserById;

var deleteUserById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var responseDelete;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _user["default"].findByIdAndDelete(req.body.id);

          case 3:
            responseDelete = _context3.sent;
            res.status(200).json(responseDelete);
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            res.status(400).json({
              message: "Error"
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function deleteUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteUserById = deleteUserById;

var getAllUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _user["default"].find();

          case 3:
            users = _context4.sent;
            res.status(200).json({
              users: users
            });
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log("Error", _context4.t0);
            res.status(400).json({
              message: "Error"
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function getAllUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllUser = getAllUser;