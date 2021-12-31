const mongoose = require('mongoose'); 
const config = require('config'); 
const db = config.get('mongoURI'); 

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        }); 

    }catch (err){
        //Escape if necessary
        process.exit(1)
    }
}; 

module.exports = connectDB; 