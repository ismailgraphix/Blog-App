import express from 'express'
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://ismailgrapix:ismailgrapix2020@blog-app.q9joetr.mongodb.net/blog-app?retryWrites=true&w=majority')
const app = express();
app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})