"use strict";

const app = require("../app");

const PORT = 3000;

app.listen(PORT, () => {
    console.log("start sever");
} );  // listen이라는 명령어로 3000포트를 열어달라, 파라미터로는 콜백할수를 넘길 수 있음