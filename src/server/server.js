import express from "express";

const testServer = express();

testServer.use(express.static('../client'));



testServer.listen(3000, ()=>console.log("testServer listens to port 3000"));