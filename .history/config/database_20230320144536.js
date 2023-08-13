const mongoose = require('mongoose');

const  dbConnection = () => {

    mongoose.connect(process.env.DB_URI).then((res) =>  {
        console.log(`' connected database'${res.connection.host}`)
    }).catch(err => {
         console.log(` database err:${err}`);
  })
  
}

module.exports =dbConnection;

