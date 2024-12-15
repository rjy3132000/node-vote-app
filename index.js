const express = require("express");
const { dbconnect } = require("./db");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

const personRoutes = require("./routes/person/index");

dbconnect();
const PORT = process.env.PORT;
app.use(bodyParser.json());

app.use("/person", personRoutes);

app.listen(PORT, () => console.log(`Server is running on this port: ${PORT}`));
