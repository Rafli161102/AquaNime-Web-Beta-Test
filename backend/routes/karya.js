// backend/routes/karya.js
const express = require('express');
const { getKarya, getKaryaById, addKarya, updateKarya, deleteKarya } = require('../controllers/karyaController');

const router = express.Router();

router
    .route('/')
    .get(getKarya)    // Mendapatkan semua karya
    .post(addKarya);  // Menambahkan karya baru

router
    .route('/:id')
    .get(getKaryaById) // Mendapatkan karya berdasarkan ID
    .put(updateKarya)  // Memperbarui karya berdasarkan ID
    .delete(deleteKarya); // Menghapus karya berdasarkan ID

module.exports = router;