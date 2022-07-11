"use strict";

//모듈 
const express = require("express");
const app = express();  // app이라는 변수에 express 실행 시켜서 변수안에 넣어 주기


// 앱 세팅
app.set("views", "./views");
// views 폴더 안에 코드를 어떤 엔진으로 읽을지 설정
app.set("view engine", "ejs");
// views 폴더 안에 home 폴더 생성


// 외부로 던져진 index.js 파일 가져오기
const home = require("./routes/home");
app.use("/", home);   // use는 미들 뭬어를 등록해주는 메서드


module.exports = app;