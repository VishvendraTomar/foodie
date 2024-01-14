const express = require("express");
const {nodemodel, noteModel} = require("../models/note.model")
const {auth} = require("../middleware/auth.middleware")
const jwt  = require("jsonwebtoken");
const noteRouter = express.Router()

noteRouter.post("/create",auth,async(req,res)=>{
    try{
        const note = new noteModel(req.body)
        await note.save()
        res.status(200).send({"msg":"a new note has been added"})

    }catch(err){
         res.status(400).send({"err":err})
    }
})
noteRouter.get("/",auth,async(req,res)=>{
    try{
        const notes = await noteModel.find({userID:req.body.userID})
        res.status(200).send(notes)

    }catch(err){
        res.status(400).send({"error":err})
    }
})
noteRouter.patch("/update/:noteID",auth,async(req,res)=>{
    const {noteID} = req.params
    try{
        await noteModel.findByIdAndUpdate({_id:noteID},req.body)
        res.status(200).send({"msg":`note with id${noteID} has been updated`})
    }catch(err){
        res.status(400).send({"error":err})
    }
})
noteRouter.delete("/delete/:noteID",auth,async(req,res)=>{
    const {noteID} = req.params
    try{
        await noteModel.findByIdAndDelete({_id:noteID})
        res.status(200).send({"msg":`note with id${noteID} has been deleted`})
    }catch(err){
        res.status(400).send({"error":err})
    }
})
module.exports = {
    noteRouter
}