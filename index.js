const express = require("express");
const {connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors());
app.use("/users",userRouter)
app.use("/notes",noteRouter)
app.listen(8080,async()=>{
    try{

        await connection
        console.log("connected to db")
        console.log("server running at port 8080")
    }catch(err){
        console.log(err)
    }
    
})