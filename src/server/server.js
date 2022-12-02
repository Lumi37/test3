import express from "express";
import fs from 'fs/promises';


const testServer = express();


testServer.use(express.static('../client'));
testServer.use(express.json())


testServer.get('/g',(req,res)=>{
    res.send('hhhh')
})

testServer.post('/btnSave',(req,res)=>{
    console.log(req.body.fieldContent)
     let data = req.body.fieldContent

    async function writeToFile(){
        try{
            await fs.writeFile('/home/kostas/test3/src/server/data.txt',data); 
        }catch (err) {
            console.error(err);
          }
    }
    writeToFile();
   res.end()
})

testServer.get('/btnLoad',async (req,res) =>{
    let content =""
    await readToFile();
    
    
    if(content != undefined)
        res.json({ fieldObj: content });
    else
        res.end()
    
    
    
    async function readToFile() {
        try {
            content = await fs.readFile('/home/kostas/test3/src/server/data.txt', { encoding: 'utf8' });
        } catch (err) {
            console.log(err);
        }
    }
})


testServer.get('/loadWindow',async (req,res) =>{
    let content = "";
    await readToFile();
    res.send(content);
    
    async function readToFile() {
        try {
            content = await fs.readFile('/home/kostas/test3/src/server/data.txt', { encoding: 'utf8' });
        } catch (err) {
            console.log(err);
        }
    }
})



testServer.listen(3000, ()=>console.log("testServer listens to port 3000"));