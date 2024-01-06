const  mongoose = require("mongoose")
// const url= "mongodb+srv://gehlotnikhil38:GsoPf2JANNziWTNF@cluster0.jun7rcy.mongodb.net/Cluster0?retryWrites=true&w=majority"
const connectDB = (url)=>{
    console.log("connect db")
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}
module.exports =connectDB