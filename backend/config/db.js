const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGODB connected: ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        console.log(err);
        process.exit(1); // close the process : 1 - exit with failure code
    }
}
module.exports = connectDB;