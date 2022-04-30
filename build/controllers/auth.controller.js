"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singUp = exports.singIn = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Role = _interopRequireDefault(require("../models/Role"));

var singUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, email, password, document, roles, newUser, foundRoles, role, saveUser, token;

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
            _context.t5 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3,
              document: _context.t4
            };
            newUser = new _context.t0(_context.t5);

            if (!roles) {
              _context.next = 22;
              break;
            }

            _context.next = 16;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 16:
            foundRoles = _context.sent;
            console.log(foundRoles);
            console.log(roles);
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 26;
            break;

          case 22:
            _context.next = 24;
            return _Role["default"].findOne({
              name: "user"
            });

          case 24:
            role = _context.sent;
            newUser.roles = [role._id];

          case 26:
            _context.next = 28;
            return newUser.save();

          case 28:
            saveUser = _context.sent;
            console.log(saveUser);
            token = _jsonwebtoken["default"].sign({
              id: saveUser._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            res.status(200).json({
              token: token
            }).redirect("/");
            _context.next = 38;
            break;

          case 34:
            _context.prev = 34;
            _context.t6 = _context["catch"](0);
            console.error(_context.t6);
            res.status(400), json({
              message: _context.t6
            });

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 34]]);
  }));

  return function singUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.singUp = singUp;

var singIn = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userFound, rolesA, userId, matchPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user["default"].findOne({
              email: req.body.email
            }).populate("roles");

          case 3:
            userFound = _context2.sent;
            rolesA = [];
            userFound.roles.forEach(function (element) {
              rolesA.push(element.name);
            });
            userId = userFound._id;

            if (userFound) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "User not found"
            }));

          case 9:
            _context2.next = 11;
            return _user["default"].comparePassword(req.body.password, userFound.password);

          case 11:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: "Invalid password"
            }));

          case 14:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            res.json({
              token: token,
              rolesA: rolesA,
              userId: userId
            });
            _context2.next = 22;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            res.status(401).json({
              token: null,
              message: "Invalid password"
            });

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 18]]);
  }));

  return function singIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.singIn = singIn;