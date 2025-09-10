import mongoose from "mongoose";
const db = async ()=>{
    try{
    const conn = await mongoose.connect(process.env.mongo_url);
    console.log(`mongodb connected : ${conn.connection.host}`.yellow.bold);
    
    }
    catch(error){
        console.log(`error:${error.message}`);
        process.exit();
    }
}

export default db;
