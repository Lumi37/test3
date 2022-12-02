import express from "express";

const testServer = express();
let data;

testServer.use(express.static('../client'));
testServer.use(express.json())

testServer.get('/g',(req,res)=>{
    res.send('hhhh')
})

testServer.post('/b',(req,res)=>{
     data = req.body.tvalue
   res.end()
})

testServer.get('/b',(req,res) =>{
    console.log(data)   
    if(data != undefined)

        res.json({ textInfo: data });
    else
        res.end()
    
})
testServer.listen(3000, ()=>console.log("testServer listens to port 3000"));