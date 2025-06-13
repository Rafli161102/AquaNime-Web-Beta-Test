// backend/utils/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (subject, text, html) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Anda bisa ganti dengan layanan email lain seperti 'Outlook', 'SendGrid', dll.
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER,
            subject: subject,
            text: text,
            html: html
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        // Di sini Anda bisa menambahkan log ke file atau database untuk error pengiriman email
    }
};

module.exports = sendEmail;