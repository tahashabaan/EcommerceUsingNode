const mongoose = require('mongoose');

const  dbConnection = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }

    mongoose.connect(process.env.DB_URI, connectionParams).then((res) =>  {
        console.log(`' connected database'${res.connection.host}`)})
}

module.exports =dbConnection;

