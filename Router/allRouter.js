import express from 'express';

const route=express.Router();

route.get('/all',(req,res)=>{
    res.send("All users");
});

export default route;