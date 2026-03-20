const express = require("express");
const cors = require("cors");
const diaryRoutes = require("./routes/personalDiary");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/diary", diaryRoutes);

module.exports = app;
