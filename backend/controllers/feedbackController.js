// backend/controllers/feedbackController.js
const Feedback = require('../models/Feedback');
const sendEmail = require('../utils/sendEmail'); // Impor fungsi sendEmail

// @desc    Add new feedback/bug report
// @route   POST /api/feedback
// @access  Public
exports.addFeedback = async (req, res) => {
    try {
        const newFeedback = await Feedback.create(req.body);

        // Kirim notifikasi email
        const subject = `[AquaNime] Masukan Baru: ${newFeedback.type.toUpperCase()}`;
        const text = `
            Masukan baru telah diterima:
            Jenis: ${newFeedback.type}
            Nama: ${newFeedback.name || 'Anonim'}
            Email: ${newFeedback.email || 'Tidak ada'}
            Lokasi (jika bug): ${newFeedback.location || 'Tidak ada'}
            Deskripsi/Pesan: ${newFeedback.description}
            Dikirim pada: ${newFeedback.createdAt}
        `;
        const html = `
            <h3>Masukan Baru Diterima!</h3>
            <p><strong>Jenis:</strong> ${newFeedback.type}</p>
            <p><strong>Nama:</strong> ${newFeedback.name || 'Anonim'}</p>
            <p><strong>Email:</strong> ${newFeedback.email || 'Tidak ada'}</p>
            <p><strong>Lokasi (jika bug):</strong> ${newFeedback.location || 'Tidak ada'}</p>
            <p><strong>Deskripsi/Pesan:</strong> ${newFeedback.description}</p>
            <p><strong>Dikirim pada:</strong> ${newFeedback.createdAt}</p>
        `;
        
        await sendEmail(subject, text, html);

        res.status(201).json({ success: true, data: newFeedback });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages });
        } else {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

// Opsional: exports.getFeedback untuk melihat laporan (admin only)