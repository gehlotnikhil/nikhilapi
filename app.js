require("dotenv").config() // used in .env

const cors = require("cors")

const express = require("express")

const app = express()
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 5000;
const product_router = require("./routes/products")

const start = async()=>{
app.use(cors())
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, ()=>{
            console.log("Server is running at port ",PORT)
        })
    }
    catch(error){
        console.log({err:error})
    }
}
start();
app.use(express.json())
app.use("/api/products",product_router)

app.get("/",(req,res)=>{
    res.send("I am Live")
})