// backend/controllers/karyaController.js
const Karya = require('../models/Karya');
const sendEmail = require('../utils/sendEmail'); // Impor fungsi sendEmail

// @desc    Get all karya
// @route   GET /api/karya
// @access  Public
exports.getKarya = async (req, res) => {
    try {
        const karya = await Karya.find().sort({ createdAt: -1 }); // Urutkan dari terbaru
        res.status(200).json({ success: true, count: karya.length, data: karya });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Get single karya
// @route   GET /api/karya/:id
// @access  Public
exports.getKaryaById = async (req, res) => {
    try {
        const karya = await Karya.findById(req.params.id);
        if (!karya) {
            return res.status(404).json({ success: false, error: 'Karya tidak ditemukan' });
        }
        res.status(200).json({ success: true, data: karya });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Add new karya
// @route   POST /api/karya
// @access  Public
exports.addKarya = async (req, res) => {
    try {
        const newKarya = await Karya.create(req.body);

        // Kirim notifikasi email
        const subject = `[AquaNime] Karya Baru Diterima: ${newKarya.title}`;
        const text = `
            Karya baru telah diterima:
            Judul: ${newKarya.title}
            Deskripsi: ${newKarya.description}
            Pengarang: ${newKarya.authorName} (${newKarya.authorEmail})
            Kategori: ${newKarya.category}
            Link Media: ${newKarya.mediaLink || 'Tidak ada'}
            URL Gambar: ${newKarya.imageUrl || 'Tidak ada'}
            Dikirim pada: ${newKarya.createdAt}
        `;
        const html = `
            <h3>Karya Baru Telah Diterima!</h3>
            <p><strong>Judul:</strong> ${newKarya.title}</p>
            <p><strong>Deskripsi:</strong> ${newKarya.description}</p>
            <p><strong>Pengarang:</strong> ${newKarya.authorName} (${newKarya.authorEmail})</p>
            <p><strong>Kategori:</strong> ${newKarya.category}</p>
            <p><strong>Link Media:</strong> ${newKarya.mediaLink ? `<a href="${newKarya.mediaLink}">${newKarya.mediaLink}</a>` : 'Tidak ada'}</p>
            <p><strong>URL Gambar:</strong> ${newKarya.imageUrl ? `<a href="${newKarya.imageUrl}">${newKarya.imageUrl}</a>` : 'Tidak ada'}</p>
            <p><strong>Dikirim pada:</strong> ${newKarya.createdAt}</p>
        `;
        
        await sendEmail(subject, text, html);

        res.status(201).json({ success: true, data: newKarya });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages });
        } else {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

// @desc    Update karya
// @route   PUT /api/karya/:id
// @access  Public
exports.updateKarya = async (req, res) => {
    try {
        let karya = await Karya.findById(req.params.id);
        if (!karya) {
            return res.status(404).json({ success: false, error: 'Karya tidak ditemukan' });
        }

        karya = await Karya.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({ success: true, data: karya });
    } catch (error) {
         if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages });
        } else {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

// @desc    Delete karya
// @route   DELETE /api/karya/:id
// @access  Public
exports.deleteKarya = async (req, res) => {
    try {
        const karya = await Karya.findById(req.params.id);
        if (!karya) {
            return res.status(404).json({ success: false, error: 'Karya tidak ditemukan' });
        }

        await karya.deleteOne();
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};