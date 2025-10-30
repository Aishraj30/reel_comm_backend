const express = require('express')
require('dotenv').config()
const userroute = require('./src/routes/user.routes')
const connectDB = require('./src/db/db')
const itemroute = require('../src/routes/item.routes')
const cookieParser = require("cookie-parser");
const cors = require('cors')
const adminroutes = require("../src/routes/admin.routes")





const app = express();
app.use(cookieParser()); 
app.use(cors({
    origin:"https://reel-comm-frontend-1.vercel.app",
    credentials:true,
}));




app.use(express.json()); 
app.use('/api/user' , userroute)
app.use('/api/item' , itemroute )
app.use("/api/admin" , adminroutes)
connectDB();



app.listen(3000 , ()=>{
    console.log("server is runnig at port 3000")
})