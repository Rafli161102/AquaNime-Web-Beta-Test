// backend/models/Karya.js
const mongoose = require('mongoose');

const KaryaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Judul karya wajib diisi'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Deskripsi karya wajib diisi']
    },
    authorName: {
        type: String,
        required: [true, 'Nama pengarang wajib diisi']
    },
    authorEmail: {
        type: String,
        required: [true, 'Email pengarang wajib diisi'],
        match: [/.+@.+\..+/, 'Harap masukkan email yang valid']
    },
    category: {
        type: String,
        enum: ['ilustrasi', 'tulisan', 'musik', 'video', 'lainnya'], // Sesuaikan kategori
        required: [true, 'Kategori wajib diisi']
    },
    mediaLink: { // Untuk link video/musik atau gambar eksternal (jika tidak upload langsung)
        type: String,
        match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, 'Harap masukkan URL yang valid'],
        default: ''
    },
    imageUrl: { // Jika ada gambar langsung diupload ke storage, ini path-nya
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Karya', KaryaSchema);