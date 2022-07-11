"use strict";

const home = (req, res) => { // app을 router로 변경
    res.render("home/index"); //home에 index파일을 띄워라
};

const login = (req, res) => {  // app을 router로 변경
    res.render("home/login");
}

module.exports = {
    home,
    login,
};