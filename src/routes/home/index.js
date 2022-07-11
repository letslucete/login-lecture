"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

// 서버 경로 설정 
router.get("/", ctrl.home);

// 로그인 경로 설정
router.get("/login", ctrl.login);

// app.js 파일에 연결하기 위해서는 외부로 던져주기
module.exports = router;