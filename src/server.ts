import express from "express";
import { routes } from "./routes"

import "./database";

const app = express();

app.use(express.json());

app.listen(3333, () => console.log("Server is running on port 3333..."))

app.use(routes)