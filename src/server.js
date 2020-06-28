const express = require("express");
const axios = require("axios");

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get("/hw", function(req, res) {
    const _st = Date.now() / 60000;

    axios(`https://www.xuexi.cn/lgdata/index.json?_st=${_st}`).then((data) => {
        res.send(data.data);
    });
});

app.listen(3001);
