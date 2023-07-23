import express from "express";
import getEmployee from "./Router/getRouter.js";
import { dbConnect } from "./Database/db.js";
import Employee from './Model/employeeModel.js';

const app=express();
const PORT=5000;

app.use(express.json());

dbConnect();
const insert=async()=>{
    Employee.create({
        name:'John Doe',
        age:28,
        emailId:"johndoe@gmail",
    });
}

insert();

app.use('/employee',getEmployee);

app.listen(PORT,()=>{
    console.log('Server is running...',PORT);
});