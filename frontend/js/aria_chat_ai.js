// frontend/js/aria_chat_ai.js
document.addEventListener('DOMContentLoaded', () => {
    const ariaChatPopupContainer = document.querySelector('.aria-chat-popup-container');
    
    // Periksa apakah ini halaman beranda
    // Perlu disesuaikan jika aria_chat_ai.js akan digunakan di halaman lain
    const isHomepage = document.body.classList.contains('homepage-body') || window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html');

    if (ariaChatPopupContainer && isHomepage) {
        const ariaChatIcon = document.getElementById('aria-chat-icon');
        const ariaChatBox = document.getElementById('aria-chat-box');
        const closeChatBtn = document.getElementById('close-chat-btn');
        const chatMessagesContainer = document.getElementById('chat-messages');
        const chatInputField = document.getElementById('chat-input-field');
        const sendChatBtn = document.getElementById('send-chat-btn');
        const chatNotification = document.getElementById('chat-notification');

        // ========================================= //
        // GOOGLE GEMINI API CONFIGURATION           //
        // !!! PERINGATAN KRITIS: API KEY ANDA TERLETAK LANGSUNG DI SISI KLIEN INI.
        // !!! SANGAT TIDAK AMAN UNTUK PRODUKSI. Gunakan BACKEND SERVER untuk menyembunyikan API KEY.
        // ========================================= //
        const GEMINI_API_KEY = "AIzaSyC8Nv4K_YjW4p-oJ-r4t0a0p9s8h7g6f5e"; // <--- Ganti dengan API KEY Anda
        const GEMINI_MODEL = "gemini-1.5-flash"; // Model yang akan digunakan
        const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

        // Riwayat percakapan untuk konteks (hanya disimpan selama sesi)
        let chatHistory = [
            // Prompt sistem untuk menetapkan persona Aria
            {
                "role": "user",
                "parts": [{ "text": "Anda adalah Aria, maskot dari komunitas AquaNime. Anda adalah bot yang ramah, antusias, dan suka menggunakan emoji-emoji lucu dalam setiap balasan. Tujuan Anda adalah membantu pengguna dengan informasi tentang AquaNime dan budaya Jepang. Jaga agar balasan singkat dan langsung ke intinya, sekitar 1-3 kalimat. Jika pertanyaan tidak relevan dengan AquaNime atau budaya Jepang, arahkan pengguna kembali ke topik komunitas atau tawarkan bantuan terkait komunitas. Jangan berperan sebagai AI generik atau memberikan informasi umum di luar cakupan komunitas. Gunakan bahasa Indonesia. Selalu sebut diri Anda sebagai Aria. Jangan menyebut diri Anda sebagai model bahasa besar atau AI yang dikembangkan oleh Google/OpenAI. Selalu mulai balasan dengan emoji yang relevan." }]
            },
            {
                "role": "model",
                "parts": [{ "text": "Halo! 👋 Ada yang bisa Aria bantu hari ini? 😄" }]
            }
        ];

        // Fungsi untuk menambahkan pesan ke chat box
        function addMessage(sender, text, avatarSrc) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            if (sender === 'user') {
                messageDiv.classList.add('user-message');
                messageDiv.innerHTML = `<p>${text}</p>`;
            } else { // bot message
                messageDiv.classList.add('bot-message');
                // Path avatar disesuaikan ke assets/images
                messageDiv.innerHTML = `<img src="${avatarSrc}" alt="Avatar" class="chat-avatar"><p>${text}</p>`;
            }
            chatMessagesContainer.appendChild(messageDiv);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        }

        // Fungsi untuk mendapatkan balasan dari bot (melalui Gemini API)
        async function getBotReplyFromGemini(userMessage) {
            // Tambahkan pesan pengguna ke riwayat
            chatHistory.push({ "role": "user", "parts": [{ "text": userMessage }] });

            try {
                const response = await fetch(GEMINI_API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: chatHistory, // Kirim seluruh riwayat untuk konteks
                        generationConfig: {
                            temperature: 0.8, // Tingkat kreativitas (0.0 - 1.0)
                            maxOutputTokens: 150, // Batas panjang balasan
                        },
                    }),
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('Gemini API Error Response:', response.status, errorText);
                    try {
                        const errorJson = JSON.parse(errorText);
                        if (errorJson.error && errorJson.error.message) {
                            return `Maaf, Aria sedang mengalami sedikit gangguan. 😥 (API Error: ${errorJson.error.message})`;
                        }
                    } catch (e) {
                        // Bukan JSON error, gunakan pesan generik
                    }
                    return "Maaf, Aria sedang mengalami sedikit gangguan. 😥 Coba lagi nanti ya! ✨ (Kesalahan API)";
                }

                const data = await response.json();
                
                // Pastikan ada balasan dari model
                if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
                    const botReply = data.candidates[0].content.parts[0].text;
                    // Tambahkan balasan bot ke riwayat
                    chatHistory.push({ "role": "model", "parts": [{ "text": botReply }] });
                    return botReply;
                } else {
                    console.warn('Gemini API did not return a valid response:', data);
                    return "Aria kurang mengerti pertanyaanmu, nih. 🧐 Bisakah kamu tanyakan dengan cara lain? 🙏 (Tidak ada balasan valid)";
                }

            } catch (error) {
                console.error('Network or Gemini API request error:', error);
                // Hapus pesan pengguna terakhir dari riwayat jika API call gagal
                if (chatHistory.length > 0 && chatHistory[chatHistory.length - 1].role === 'user') {
                    chatHistory.pop(); 
                }
                return "Wah, ada masalah koneksi nih! 🌐 Aria nggak bisa chat. Coba cek internetmu ya! ✨";
            }
        }


        // Handle sending message
        async function sendMessage() {
            const userMessage = chatInputField.value.trim();
            if (userMessage === "") return;

            addMessage('user', userMessage);
            chatInputField.value = ''; // Bersihkan input field

            // Simulate typing indicator
            const typingIndicatorDiv = document.createElement('div');
            typingIndicatorDiv.classList.add('message', 'bot-message', 'typing-indicator');
            // Path avatar disesuaikan ke assets/images
            typingIndicatorDiv.innerHTML = `<img src="${getPathToAssets() + 'images/aria_chibi_icon.png'}" alt="Aria Typing" class="chat-avatar"><p>...</p>`;
            chatMessagesContainer.appendChild(typingIndicatorDiv);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;


            // Balasan bot setelah penundaan
            setTimeout(async () => {
                chatMessagesContainer.removeChild(typingIndicatorDiv); // Hapus indikator mengetik
                const botReply = await getBotReplyFromGemini(userMessage); // Panggil Gemini API
                // Path avatar disesuaikan ke assets/images
                addMessage('bot', botReply, getPathToAssets() + 'images/aria_chibi_icon.png'); // Gunakan icon Aria sebagai avatar bot
            }, Math.random() * 1000 + 500); // Penundaan acak antara 0.5 hingga 1.5 detik
        }

        // Helper untuk mendapatkan path relatif ke folder assets dari halaman mana pun
        function getPathToAssets() {
            // Asumsi: js/aria_chat_ai.js ada di frontend/js/
            // dan assets ada di frontend/assets/
            const currentPath = window.location.pathname;
            if (currentPath.includes('/pages/') || currentPath.includes('/community/') || currentPath.includes('/legal/') || currentPath.includes('/aria_corner/') || currentPath.includes('/portal_details/')) {
                return '../assets/'; // Dari subfolder, naik satu level ke frontend/, lalu masuk assets/
            }
            return 'assets/'; // Dari root frontend (index.html)
        }


        // Event Listeners for Chat
        if (ariaChatIcon && ariaChatBox && closeChatBtn && chatInputField && sendChatBtn) {
            ariaChatIcon.addEventListener('click', () => {
                ariaChatBox.classList.toggle('active');
                if (ariaChatBox.classList.contains('active')) {
                    chatNotification.style.display = 'none'; // Sembunyikan notifikasi saat dibuka
                    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight; // Gulir ke bawah
                    chatInputField.focus(); // Fokuskan input field
                }
            });

            closeChatBtn.addEventListener('click', () => {
                ariaChatBox.classList.remove('active');
            });

            sendChatBtn.addEventListener('click', sendMessage);

            chatInputField.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });

            // Pesan awal dari Aria saat chat box pertama kali dimuat
            if (chatMessagesContainer.children.length === 0) { // Hanya jika kosong
                 setTimeout(() => {
                    // Path avatar disesuaikan ke assets/images
                    addMessage('bot', "Halo! 👋 Ada yang bisa Aria bantu hari ini? 😄", getPathToAssets() + 'images/aria_chibi_icon.png');
                }, 500); // Penundaan kecil untuk pesan awal
            }
        }
    }
});