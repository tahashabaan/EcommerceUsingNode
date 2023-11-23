const mongoose = require('mongoose');

const  dbConnection = async () => {
 
    try{
         const res=  await mongoose.connect(process.env.DB_URI)
          console.log(`' connected database'${res.connection.host}`)
    } catch(err){
          console.log(`err conneted with database :${  err.message}`);
    }
}

module.exports =dbConnection;

