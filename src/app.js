import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createRoles } from "./libs/initalSetup";

import pkg from "../package.json";

import classRoutes from "./routes/class.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import reportRoutes from "./routes/report.routes";
import reportDataRoutes from "./routes/reportData.routes"
import reportDeleteRoutes from './routes/reportDelete.routes'
import classRoutesAdmin from "./routes/class.routes.admin"

const app = express();

createRoles();

app.set("pkg", pkg);
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/class", classRoutes);
app.use("/api/classadmin", classRoutesAdmin);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/reportedit", reportDataRoutes);
app.use("/api/reportdelete", reportDeleteRoutes);

app.get("*", (req, res) => {
  res.status(404).json({ message: "404!" });
});
export default app;
