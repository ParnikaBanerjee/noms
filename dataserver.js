const express= require('express')
const mongoose= require('mongoose')
const path= require('path')
const port= 3019

const app= express();
app.get('/', (req, res)=>{
  res.send('Hello World')
})
app.listen(port, ()=>{
  console.log(`Server is running at port ${port}`)
})