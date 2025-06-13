// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // Opsional, untuk menghindari peringatan
            useUnifiedTopology: true, // Opsional, untuk menghindari peringatan
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Keluar dari proses jika koneksi gagal
    }
};

module.exports = connectDB;