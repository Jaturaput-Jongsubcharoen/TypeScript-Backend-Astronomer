import express from "express";
import compression from "compression";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

export default app;
