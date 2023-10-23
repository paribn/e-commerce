import express from "express";
import cors from "cors";

import { DProducts } from "./data/products.js";
let app = express();

app.use(cors(["http://localhost:5500"]));

app.get("/products", function (_, res) {
  res.json(DProducts).status(200);
});

const port = 4000;

app.listen(port, function () {
  console.log(" Mock server is running http://localhost:" + port);
});
