// backend/models/Idea.js
const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama wajib diisi'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email wajib diisi'],
        match: [/.+@.+\..+/, 'Harap masukkan email yang valid']
    },
    category: {
        type: String,
        enum: ['proyek_kreatif', 'event', 'konten', 'lainnya'], // Sesuaikan dengan opsi di frontend
        required: [true, 'Kategori ide wajib diisi']
    },
    title: {
        type: String,
        required: [true, 'Judul ide/proyek wajib diisi'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Deskripsi ide wajib diisi']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Idea', IdeaSchema);