const express = require("express");
const { ListOfStudent, register, signin, dashboard,verified,sendMailer } = require("../controllers/user.controller")
const router = express.Router();




router.get("/", ListOfStudent)
router.post("/register", register)
router.post("/login", signin)
router.get("/dashboard", dashboard)
router.get("/verifyUser", verified)
router.post("/sendMailer", sendMailer)


module.exports = router