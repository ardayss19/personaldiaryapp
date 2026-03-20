const diaryController = require("../controller/personalDiary");

const { Router } = require("express");

const diaryRouter = Router();

diaryRouter.post("/", diaryController.postEntry);

module.exports = diaryRouter;
