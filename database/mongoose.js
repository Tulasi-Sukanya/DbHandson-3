//establish connection to db using mongoose...
const mongoose=require("mongoose");
const url=`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.fozwuv6.mongodb.net/Human_Resource?retryWrites=true&w=majority`;

mongoose.set("strictQuery",true);

//making connection..
const connect=async()=>{
try{
    console.log("Connection to mongodb...!!!!");
    const dbConnection = await mongoose.connect(url);
    console.log("Connected =>");
}
catch(error){
    console.log("Error in connecting to db..",error);
}
}

module.exports=connect;
