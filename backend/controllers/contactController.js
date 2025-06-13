// backend/controllers/contactController.js
const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail'); // Impor fungsi sendEmail

// @desc    Add new contact message
// @route   POST /api/contacts
// @access  Public
exports.addContact = async (req, res) => {
    try {
        const newContact = await Contact.create(req.body);

        // Kirim notifikasi email
        const subject = `[AquaNime] Pesan Kontak Baru dari ${newContact.fullName}`;
        const text = `
            Pesan kontak baru telah diterima:
            Nama: ${newContact.fullName}
            Email: ${newContact.email}
            Subjek: ${newContact.subject}
            Pesan: ${newContact.message}
            Dikirim pada: ${newContact.createdAt}
        `;
        const html = `
            <h3>Pesan Kontak Baru!</h3>
            <p><strong>Dari:</strong> ${newContact.fullName} (${newContact.email})</p>
            <p><strong>Subjek:</strong> ${newContact.subject}</p>
            <p><strong>Pesan:</strong> ${newContact.message}</p>
            <p><strong>Dikirim pada:</strong> ${newContact.createdAt}</p>
        `;
        
        await sendEmail(subject, text, html);

        res.status(201).json({ success: true, data: newContact });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages });
        } else {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

// Opsional: exports.getContacts untuk melihat pesan kontak (biasanya hanya untuk admin)
// exports.getContacts = async (req, res) => { /* ... */ };