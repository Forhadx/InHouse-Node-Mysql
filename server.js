const express = require("express");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT);
