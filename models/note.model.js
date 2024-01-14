const mongoose = require("mongoose");
 
const noteSchema = mongoose.Schema({
    title:String,
    body:String,
    userID:String,
    username:String
},{
    versionKey:false
})

const noteModel = mongoose.model("note",noteSchema)

module.exports = {
    noteModel
}