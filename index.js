const express = require("express");
const app = express();
const { dbconnect } = require("./db");
require("dotenv").config();

dbconnect();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on this port: ${PORT}`));
