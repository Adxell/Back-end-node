"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _initalSetup = require("./libs/initalSetup");

var _package = _interopRequireDefault(require("../package.json"));

var _class = _interopRequireDefault(require("./routes/class.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _report = _interopRequireDefault(require("./routes/report.routes"));

var _reportData = _interopRequireDefault(require("./routes/reportData.routes"));

var _reportDelete = _interopRequireDefault(require("./routes/reportDelete.routes"));

var _classRoutes = _interopRequireDefault(require("./routes/class.routes.admin"));

var app = (0, _express["default"])();
(0, _initalSetup.createRoles)();
app.set("pkg", _package["default"]);
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev"));
app.get("/", function (req, res) {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version
  });
});
app.use("/api/class", _class["default"]);
app.use("/api/classadmin", _classRoutes["default"]);
app.use("/api/auth", _auth["default"]);
app.use("/api/user", _user["default"]);
app.use("/api/report", _report["default"]);
app.use("/api/reportedit", _reportData["default"]);
app.use("/api/reportdelete", _reportDelete["default"]);
app.get("*", function (req, res) {
  res.status(404).json({
    message: "404!"
  });
});
var _default = app;
exports["default"] = _default;