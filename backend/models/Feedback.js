// backend/models/Feedback.js
const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        default: 'Anonim'
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, 'Harap masukkan email yang valid'],
        default: ''
    },
    type: { // Jenis: bug atau saran
        type: String,
        enum: ['bug', 'saran', 'umum', 'fitur_baru', 'desain', 'konten', 'lainnya'], // Sesuaikan dengan opsi di frontend
        required: [true, 'Jenis masukan wajib diisi']
    },
    location: { // Lokasi bug/masukan
        type: String,
        trim: true,
        default: ''
    },
    description: {
        type: String,
        required: [true, 'Deskripsi/Pesan wajib diisi']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);