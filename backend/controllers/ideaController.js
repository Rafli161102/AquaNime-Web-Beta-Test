// backend/controllers/ideaController.js
const Idea = require('../models/Idea');
const sendEmail = require('../utils/sendEmail'); // Impor fungsi sendEmail

// @desc    Add new project idea
// @route   POST /api/ideas
// @access  Public
exports.addIdea = async (req, res) => {
    try {
        const newIdea = await Idea.create(req.body);

        // Kirim notifikasi email
        const subject = `[AquaNime] Ide Proyek Baru: ${newIdea.title}`;
        const text = `
            Ide proyek baru telah diterima:
            Judul: ${newIdea.title}
            Kategori: ${newIdea.category}
            Pengaju: ${newIdea.name} (${newIdea.email})
            Deskripsi: ${newIdea.description}
            Dikirim pada: ${newIdea.createdAt}
        `;
        const html = `
            <h3>Ide Proyek Baru Telah Diterima!</h3>
            <p><strong>Judul:</strong> ${newIdea.title}</p>
            <p><strong>Kategori:</strong> ${newIdea.category}</p>
            <p><strong>Pengaju:</strong> ${newIdea.name} (${newIdea.email})</p>
            <p><strong>Deskripsi:</strong> ${newIdea.description}</p>
            <p><strong>Dikirim pada:</strong> ${newIdea.createdAt}</p>
        `;
        
        await sendEmail(subject, text, html);

        res.status(201).json({ success: true, data: newIdea });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages });
        } else {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

// Opsional: exports.getIdeas untuk melihat ide (admin only)