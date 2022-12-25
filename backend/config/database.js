const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
        .connect(process.env.database, {
            useNewUrlParser: true, 
            useUnifiedTopology: true ,
            
        })
        .then((data) => {
            console.log(`Database Connect: ${data.connection.host}`);
        })
        
};

module.exports = connectDatabase;