import express from 'express';
import { addHackathon, enrollInHackathon, getAllEmployee, getAllHackathons } from '../Controller/hackathonController.js';

const route=express.Router();

route.get('/employee/all',async(req,res)=>{
    await getAllEmployee(req,res);
});

route.get('/all',async(req,res)=>{
    await getAllHackathons(req,res);
});

route.post('/add',async(req,res)=>{
    await addHackathon(req,res);
});

route.post('/enroll',async(req,res)=>{
    await enrollInHackathon(req,res);
});

export default route;