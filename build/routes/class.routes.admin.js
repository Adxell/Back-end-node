"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var classControllersAdmin = _interopRequireWildcard(require("../controllers/class.controller.admin"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.get("/", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], classControllersAdmin.getClassAdmin);
router.get("/:classid", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], classControllersAdmin.getClassByIdAdmin);
router.put("/:classid", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], classControllersAdmin.updateClassByIdAdmin);
router["delete"]("/:classid", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], classControllersAdmin.deleteClassByIdAdmin);
var _default = router;
exports["default"] = _default;