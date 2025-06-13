// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const karyaRoutes = require('./routes/karya');
const contactRoutes = require('./routes/contact');
const feedbackRoutes = require('./routes/feedback');
const ideaRoutes = require('./routes/idea');

// Load env vars
dotenv.config({ path: './.env' });

// Connect to database
connectDB();

const app = express();

// Body parser (untuk membaca JSON dari request body)
app.use(express.json());

// Mengizinkan CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Ganti '*' dengan domain frontend Anda untuk produksi
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Mount routes
app.use('/api/karya', karyaRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/ideas', ideaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`));