const express = require("express");
const router = express.Router();

const QuestionController = require("../controllers/question");

router.get("", QuestionController.getAllQuestions);

module.exports = router;
