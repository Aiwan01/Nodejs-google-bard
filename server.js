const express = require("express");
const dotenv = require("dotenv")
const path = require("path")
dotenv.config();
const getBardResult = require("./getBardResponse")


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT || 8000;

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, 'bardUi.html'));
})



app.post("/api/searchonAi", async(req, res)=>{
    const prompt = req.body.query;
    
    const response = await getBardResult(prompt)
    res.status(200).json({"result":response})
 })



app.listen(port, ()=>{
    console.log("server running on port "+port)
})