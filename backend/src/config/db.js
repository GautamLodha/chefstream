const mongosse = require('mongoose')

async function  connectDB(url){    
    try {
        await mongosse.connect(url);
        console.log("connected SuccessFully");
    } catch (error) {
        console.log("Error while connecting with db",error);
    }
}
module.exports = {connectDB}

