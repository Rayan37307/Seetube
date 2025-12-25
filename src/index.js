import dotenv from 'dotenv'
import connectDB from './db/index.js'
dotenv.config()
import e from 'express'
const app = e()

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8080,() => {
        console.log(`Server is running on http:/localhost:${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("mongodb connection failed", err);
    
})