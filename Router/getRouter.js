import express from 'express';

const Route=express.Router();

Route.get('/all',(req,res)=>{
    res.send("All users");
});

export default Route;