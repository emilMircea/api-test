const express = require("express");
var proxy = require("express-http-proxy");
var cors = require("cors");
const app = express();
const port = 3000;

var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.options("*", cors());
app.use(cors());
app.use("/vms", proxy("http://localhost:8080"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/vms`);
});
