"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRolesExisted = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = _interopRequireDefault(require("../models/Role"));

var checkRolesExisted = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var foundRoles, i;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Role["default"].find({
              name: {
                $in: req.body.roles
              }
            });

          case 3:
            foundRoles = _context.sent;
            i = 0;

          case 5:
            if (!(i < req.body.roles.length)) {
              _context.next = 11;
              break;
            }

            if (!req.body.roles.includes(foundRoles[i].name)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              message: "role does exist"
            }));

          case 8:
            i++;
            _context.next = 5;
            break;

          case 11:
            return _context.abrupt("return", res.status(400).json({
              message: "role does not exists"
            }));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            res.status(404).json({
              message: "role does not exists"
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function checkRolesExisted(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkRolesExisted = checkRolesExisted;