const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const dotenv = require ('dotenv');

dotenv.config();
const app = express()

const hostName = process.env.HOSTNAME || localhost;
const port = process.env.PORT || 3000;



app.get("/" , (req, res)=>{
res.send("This is the Cyan API")



})

app.listen(port, ()=>{
    console.log (`Cyan server is running at http://${hostName}:${port}/`)
    console.log ("working!")



})
