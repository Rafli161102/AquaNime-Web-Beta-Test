// backend/models/Contact.js
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Nama Lengkap wajib diisi'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email wajib diisi'],
        match: [/.+@.+\..+/, 'Harap masukkan email yang valid']
    },
    subject: {
        type: String,
        trim: true,
        default: 'Tanpa Subjek'
    },
    message: {
        type: String,
        required: [true, 'Pesan wajib diisi']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', ContactSchema);