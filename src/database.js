const mongoose = require('mongoose');
require('dotenv').config();

const startDatabase = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('connected to MongoDB 👨‍💻');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

const stopDatabase = async ()=>{
    try{
        await mongoose.connection.close();
        console.log('Disconnected from MongoDB 🙋‍♂️');
    }catch(err){
        console.log(err);
    }
}

const isConnected = ()=>{
    return mongoose.connection.readyState === 1;
}

module.exports = { startDatabase, stopDatabase, isConnected}