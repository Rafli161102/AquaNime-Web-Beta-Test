// frontend/js/script.js

document.addEventListener('DOMContentLoaded', () => {

    // ========================================= //
    // TRANSLATION DATA                          //
    // ========================================= //
    // Semua terjemahan sekarang hanya dalam Bahasa Indonesia
    const translations = {
        'id': {
            // Navbar
            'beranda': 'BERANDA',
            'tentang': 'TENTANG',
            'proyek': 'PROYEK',
            'portal': 'PORTAL',
            'kontak': 'KONTAK',
            'dark_mode': 'Dark Mode',
            'light_mode': 'Light Mode',

            // Homepage Sections
            'start_creative_journey': 'MULAI PETUALANGAN KREATIFMU',
            'join_now': 'GABUNG SEKARANG',
            'community_description_h2': 'KOMUNITAS KREATIF JEJEPANGAN<br>BERDOMISILI JABODETABEK & JAWA BARAT',
            'community_description_p': 'Kami bikin proyek bareng, belajar bareng, dan berkembang bareng. Kalau kamu suka Budaya Jepang dan kreatif, ya cocok!',
            'ideas_come_alive_h2_hp': 'TEMPAT IDE LIAR JADI NYATA', // Specific for homepage
            'project_maskot_h3_hp': 'PROYEK MASKOT',
            'project_maskot_p_hp': 'Mengembangkan maskot komunitas "Aria Ayumi" sebagai wajah komunitas, melalui ilustrasi, cosplay, dan media sosial.',
            'listen_audio': 'Dengar Audio',
            'now_playing': 'Sedang Diputar',
            'project_band_h3_hp': 'PROYEK BAND',
            'project_band_p_hp': 'Membangun grup band komunitas bergenre J-Pop Rock di region Jawa Barat. Terdiri dari 5 personel.',
            'project_light_novel_h3_hp': 'PROYEK LIGHT NOVEL',
            'project_light_novel_p_hp': 'Menulis cerita original berbasis maskot "Aria" dan komunitas, menggabungkan proyek visual dan musik.',
            'project_journalism_h3_hp': 'PROYEK JURNALISTIK',
            'project_journalism_p_hp': 'Mengemas riset dan berita seputar anime & budaya Jejepangan dalam format video dan artikel.',
            'view_all_projects_hp_btn': 'LIHAT SEMUA PROYEK',
            'from_ordinary_h2_hp': 'DARI KOMUNITAS BIASA,<br>JADI TEMPAT BERKEMBANGN LUAR BIASA',
            'from_ordinary_p_hp': 'Komunitas ini lebih dari sekadar kumpul-kumpul ini tentang perjalanan dan transformasi bareng teman-teman yang sepemikiran.',
            'media_partner_h2_hp': 'MEDIA & PARTNER<br>YANG SUDAH BERKOLABORASI DENGAN AQUANIME',
            'want_to_be_partner_hp': 'Mau jadi partner kami juga?',
            'contact_now_hp_btn': 'HUBUNGI SEKARANG',
            'dare_to_show_imagination_h2_hp': 'BERANI TUNJUKKAN İMAJINASI KAMU?',
            'dare_to_show_imagination_p_hp': 'Di AquaNime, kreativitas kamu nggak akan dianggap aneh. Bikin, kolaborasi, dan wujudkan passion bareng komunitas yang ngertiin kamu.',
            'start_creating_hp_btn': 'MULAI BERKARYA',
            'join_community_hp_btn': 'GABUNG KOMUNITAS',
            'see_social_media_h2_hp': 'LIHAT AKTIVITAS KAMI<br>LEBIH DEKAT DI SOSIAL MEDIA',

            // Footer (common across pages)
            'explore_footer': 'EKSPLORASI',
            'community_footer': 'KOMUNITAS',
            'help_relations_footer': 'BANTUAN DAN RELASI',
            'legal_tech_info_footer': 'LEGAL & INFO TEKNIS',
            'arias_corner_footer': 'ARIA\'S CORNER',
            'home_footer': 'Beranda',
            'about_us_footer': 'Tentang kami',
            'vision_mission_footer': 'Visi & Misi',
            'about_mascot_footer': 'Tentang Maskot',
            'info_portal_footer': 'Portal Informasi',
            'community_projects_footer': 'Proyek Komunitas',
            'events_gathering_footer': 'Event dan Gathering',
            'join_community_footer': 'Join Komunitas',
            'divisions_regions_footer': 'Divisi & Regional',
            'member_works_footer': 'Karya Member',
            'discussion_forum_footer': 'Forum Diskusi',
            'read_aria_novel_footer': 'Baca Light Novel Aria',
            'fanmade_footer': 'Fanmade',
            'contact_us_footer': 'Kontak Kami',
            'contact_founder_footer': 'Hubungi Founder',
            'partnership_collaboration_footer': 'Partnership / Kolaborasi',
            'media_pr_footer': 'Media & Public Relation',
            'donation_footer': 'Donasi',
            'faq_footer': 'FAQ / Pertanyaan Umum',
            'privacy_policy_footer': 'Kebijakan Privasi',
            'terms_conditions_footer': 'Syarat & Ketentuan',
            'community_code_of_conduct_footer': 'Kode Etik Komunitas',
            'website_version_log_footer': 'Versi Website / Update Log',
            'bug_report_feedback_footer': 'Laporan Bug / Masukan',
            'quote_of_day_footer': 'Quote of the Day by Aria',
            'aria_mini_diary_footer': 'Aria\'s Mini Diary',
            'aria_photocard_collection_footer': 'Aria Photocard Collection',
            'aria_cosplayer_tribute_footer': 'Aria Cosplayer\'s',
            'aquanime_community_text': 'Komunitas AquaNime',
            'region_text': 'Wilayah: Jabodetabek, Jawa Barat',
            'email_text': 'Email: aquanime.ow@gmail.com',
            'copyright_text': '©2017-2025 AquaNime. All rights reserved. Didukung oleh komunitas untuk komunitas.',

            // Pages/Tentang.html specific
            'about_us_title': 'Tentang AquaNime',
            'about_us_subtitle': 'Komunitas Kreatif Jejepangan',
            'about_us_desc': 'AquaNime adalah rumah bagi individu yang bersemangat tentang budaya Jepang, kreativitas, seni, musik, anime, dan segala hal terkait. Kami percaya bahwa setiap imajinasi berhak untuk diwujudkan!',
            'short_history_h3': 'Sejarah Singkat Perjalanan Kami',
            'short_history_p1': 'Berawal dari kelompok kecil bernama "L-Army Ordinary Weebs" pada tahun 2017, komunitas kami berevolusi dan melakukan *rebranding* menjadi "AquaNime Ordinary Weebs" pada 29 Mei 2022. Sejak itu, kami tumbuh menjadi komunitas yang beragam, kaya akan pengetahuan, kreativitas, dan pengalaman anggota.',
            'short_history_p2': 'Nama "AquaNime" sendiri adalah plesetan dari "Gue Anime" yang populer di media sosial, lalu disempurnakan menjadi identitas dinamis kami.',
            'vision_mission_h3': 'Visi & Misi',
            'vision_h4': 'Visi:',
            'vision_li': 'Menjadi komunitas terdepan yang menginspirasi dan mendorong kreativitas dari segi lisan maupun visual dalam lingkup budaya Jepang, serta memperkuat hubungan antar anggota melalui kolaborasi dan inovasi.',
            'mission_h4': 'Misi:',
            'mission_li1': 'Memperluas pengetahuan tentang budaya Jepang dan anime.',
            'mission_li2': 'Mendorong kreativitas melalui seni lisan dan visual yang positif.',
            'mission_li3': 'Membangun komunitas yang inklusif dan ramah bagi semua anggota, di mana setiap orang merasa dihargai dan diterima.',
            'mission_li4': 'Menyediakan ruang bagi anggota untuk berkreasi dengan ide-ide baru dan inovatif.',
            'mission_li5': 'Mengadakan kompetisi dan tantangan kreatif untuk mendorong eksplorasi kemampuan.',
            'org_structure_h3': 'Struktur & Divisi Organisasi',
            'org_structure_p': 'AquaNime terorganisir dalam beberapa divisi fungsional untuk mendukung berbagai proyek dan aktivitas. Setiap divisi memiliki peran unik dalam mencapai visi dan misi kami.',
            'org_structure_li': '(Detail divisi dan peran mereka akan dijelaskan di sini.)',
            'regional_reach_h3': 'Jangkauan Regional Komunitas',
            'regional_reach_p': 'Meskipun berbasis di Indonesia, fokus kegiatan *offline* dan *gathering* kami berdomisili di wilayah Jabodetabek dan Jawa Barat. Kami senantiasa berupaya menjangkau lebih banyak wilayah.',
            'regional_reach_li': '(Informasi lebih lanjut tentang regional dan koordinator akan ditambahkan.)',
            'member_testimonials_h3': 'Apa Kata Mereka? Testimoni Member!',
            'member_testimonials_p': 'Dengar langsung dari anggota kami tentang pengalaman mereka di AquaNime. Kami bangga menjadi bagian dari perjalanan kreatif mereka!',
            'member_testimonials_li': '(Detail testimoni anggota akan dimuat di sini, bisa berupa link ke halaman `testimonial_member.html` atau ringkasan)',
            'faq_h3': 'FAQ: Pertanyaan yang Sering Diajukan',
            'faq_p': 'Temukan jawaban cepat untuk pertanyaan-pertanyaan umum seputar AquaNime dan cara bergabung dengan kami.',
            'faq_li': '(Daftar pertanyaan dan jawaban singkat akan disajikan di sini atau link ke halaman FAQ detail)',
            'mascot_aria_h2': 'Maskot AquaNime: Aria Ayumi',
            'who_is_aria_h3': 'Siapa Itu Aria?',
            'aria_name_label': 'Nama:',
            'aria_age_label': 'Usia:',
            'aria_dob_label': 'Tanggal Lahir:',
            'aria_pob_label': 'Tempat Lahir:',
            'aria_bio_p': 'Aria adalah gadis muda yang dibesarkan oleh Ibu Dian, seorang pemilik warung pecel lele sederhana di Jakarta. Kehidupan Aria yang sederhana dan lingkungan yang keras membentuk kepribadiannya menjadi pekerja keras dan penuh empati. Dia seorang introvert, namun ramah, mudah bergaul, gigih, dan selalu berani mencoba hal baru demi impiannya.',
            'aria_lore_h3': 'Lore & Perjalanan Aria',
            'aria_lore_p': 'Aria adalah representasi semangat member AquaNime. Perjalanannya mencerminkan bagaimana seseorang dengan impian dapat menemukan dukungan dan berkembang di tengah komunitas. Dari menemukan kecintaannya pada musik hingga menjadi inspirasi, lore Aria akan terus berkembang bersama cerita komunitas.',
            'aria_lore_li': '(Detail lebih lanjut tentang latar belakang dan perjalanan Aria akan ditambahkan di sini)',
            'aria_projects_h3': 'Proyek yang Terkait dengan Aria',
            'aria_projects_p': 'Aria bukan hanya maskot, dia adalah pusat dari beberapa proyek kreatif kami!',
            'aria_project_li1': '<strong data-lang-key="aria_project_mascot_strong">Proyek Maskot:</strong> Mengembangkan visual branding Aria (ilustrasi, model 3D, dll.).',
            'aria_project_mascot_strong': 'Proyek Maskot:', // Kunci terpisah untuk strong tag di dalam li
            'aria_project_li2': '<strong data-lang-key="aria_project_novel_strong">Proyek Light Novel:</strong> Menulis cerita orisinal di mana Aria menjadi karakter utama.',
            'aria_project_novel_strong': 'Proyek Light Novel:', // Kunci terpisah untuk strong tag di dalam li
            'character_sheet_h3': 'Karakter Sheet',
            'character_sheet_desc': '(Lihat detail desain Aria dalam berbagai pose dan ekspresi)',
            'aria_gallery_h3': 'Galeri Aria',
            'aria_gallery_p': 'Lihat berbagai ilustrasi dan ekspresi Aria Ayumi yang menawan!',
            'aria_gallery_cap1': 'Aria: Semangat Pagi!',
            'aria_gallery_cap2': 'Aria: Waktunya Bermusik!',
            'aria_gallery_cap3': 'Aria: Sedang Berpikir',
            'aria_gallery_cap4': 'Aria: Senyuman Manis',
            'fanmade_contrib_h3': 'Kontribusi Fanmade: Karya untuk Aria',
            'fanmade_contrib_p': 'Kami sangat suka melihat bagaimana para penggemar berkreasi dengan Aria! Bagian ini menampilkan karya fanmade yang didedikasikan untuk Aria.',
            'fanmade_contrib_li': '(Karya fanmade yang dibuat oleh anggota tentang Aria akan ditampilkan di sini)',
            'community_culture_h2': 'Budaya Komunitas AquaNime',
            'community_culture_p': 'AquaNime dibangun di atas fondasi nilai-nilai yang kuat untuk memastikan lingkungan yang positif dan produktif bagi semua.',
            'code_of_conduct_h3': 'Kode Etik Komunitas',
            'code_of_conduct_p': 'Aturan dan etika yang kami junjung tinggi untuk menjaga keharmonisan dan rasa hormat antar anggota.',
            'code_of_conduct_li': '(Ringkasan Kode Etik atau link ke halaman <a href="../legal/kode_etik_komunitas.html" data-lang-key="code_of_conduct_link_text">Kode Etik Komunitas</a>)',
            'code_of_conduct_link_text': 'Kode Etik Komunitas',
            'internal_values_h3': 'Nilai & Budaya Internal Kami',
            'internal_values_p': 'Pelajari nilai-nilai inti yang mendorong kolaborasi, kreativitas, dan pertumbuhan dalam komunitas kami.',
            'internal_values_li': '(Detail nilai-nilai dan budaya internal akan ditambahkan di sini)',
            'partners_collabs_h2': 'Partner & Kolaborasi',
            'partners_collabs_p': 'AquaNime bangga dapat berkolaborasi dengan berbagai organisasi dan brand untuk memperluas jangkauan dan memperkaya komunitas.',
            'our_partners_h3': 'Partner Kami',
            'media_coverage_h3': 'Media & Liputan',
            'media_coverage_p': 'Informasi dan berita tentang AquaNime yang telah diliput oleh media.',
            'media_coverage_li': '(Daftar liputan media akan ditambahkan di sini)',
            'collaboration_invite_h3': 'Ajakan Kerja Sama',
            'collaboration_invite_p': 'Tertarik untuk menjadi bagian dari perjalanan kami? Kami selalu terbuka untuk peluang kolaborasi yang menarik!',
            'contact_now_btn': 'HUBUNGI SEKARANG', // Used on pages/proyek.html and pages/tentang.html

            // Pages/Proyek.html specific
            'projects_intro_p': 'Di AquaNime, ide-ide kreatifmu akan menemukan jalannya! Kami berkolaborasi di berbagai proyek yang menginspirasi.',
            'project_maskot_p_long': 'Mengembangkan maskot komunitas "Aria Ayumi" sebagai wajah komunitas, melalui ilustrasi, cosplay, dan media sosial. Proyek ini terbuka untuk kreator yang ingin berkontribusi dalam visual branding dan storytelling Aria.',
            'project_band_p_long': 'Membangun grup band komunitas bergenre J-Pop Rock di region Jawa Barat. Terdiri dari 5 personel: Gitaris, Drummer, Vokalis Gitar, Vokalis Belakang, dan Bassist. Terbuka untuk kolaborasi, latihan, dan perform bareng di event komunitas.',
            'project_light_novel_p_long': 'Menulis cerita original berbasis maskot "Aria" dan komunitas, menggabungkan proyek visual dan musik ke dalam satu universe. Genre utama: Slice of Life, Drama, dan Musik. Bisa jadi IP komunitas yang berkembang bersama.',
            'project_journalism_p_long': 'Mengemas riset dan berita seputar anime & budaya Jejepangan dalam format video dan artikel. Diedarkan lewat media sosial AquaNime. Terbuka bagi penulis, editor, dan video creator yang ingin berbagi insight.',
            'collaboration_h2': 'Kolaborasi Kami',
            'our_partners_h2': 'Partner Kami',
            'want_to_be_partner_p': 'Mau jadi partner kami juga?',

            // Pages/Kontak.html specific
            'contact_us_h2': 'Kontak Kami',
            'contact_us_p': 'Kami senang mendengar dari Anda! Silakan hubungi kami melalui formulir atau informasi di bawah ini.',
            'email_label': 'Email:',
            'region_label': 'Wilayah:',
            'contact_founder_h3': 'Hubungi Founder',
            'contact_founder_p': 'Untuk pertanyaan, kolaborasi, atau isu penting lainnya yang ingin disampaikan langsung kepada founder kami, silakan gunakan informasi berikut atau kirimkan pesan melalui formulir.',
            'founder_email_label': 'Email Founder:',
            'partnership_h3': 'Partnership / Kolaborasi',
            'partnership_p': 'AquaNime terbuka untuk peluang kerjasama dengan organisasi, brand, atau individu yang memiliki visi serupa. Mari berkreasi bersama!',
            'partnership_email_label': 'Email Kemitraan:',
            'media_pr_h3': 'Media & Public Relation',
            'media_pr_p': 'Bagi rekan-rekan media yang membutuhkan informasi, wawancara, atau liputan tentang AquaNime, silakan hubungi tim PR kami.',
            'pr_email_label': 'Email PR:',
            'donation_h3': 'Donasi',
            'donation_p': 'Dukung aktivitas komunitas AquaNime agar terus berkembang dan menghasilkan karya kreatif. Setiap donasi sangat berarti bagi kami.',
            'donation_info_li': '(Informasi rekening bank atau tautan platform donasi Anda akan ditambahkan di sini)',
            'faq_h3_contact': 'FAQ / Pertanyaan Umum',
            'faq_p_contact': 'Temukan jawaban atas pertanyaan yang sering diajukan seputar komunitas, keanggotaan, atau kegiatan kami.',
            'view_all_faq_link': 'Lihat semua FAQ di Portal Informasi',
            'legal_tech_h3': 'Legal & Info Teknis',
            'send_message_h2': 'Kirim Pesan',
            'full_name_label': 'Nama Lengkap:',
            'your_email_label': 'Email Anda:',
            'subject_label': 'Subjek:',
            'your_message_label': 'Pesan Anda:',
            'send_message_btn': 'Kirim Pesan',

            // Pages/Portal.html specific
            'portal_title': 'Portal Informasi Komunitas',
            'portal_news_info_h3': 'Berita & Info',
            'portal_announcements': 'Pengumuman Terbaru Komunitas',
            'portal_upcoming_events': 'Jadwal Event & Gathering Mendatang',
            'portal_monthly_agenda': 'Agenda Komunitas Bulanan',
            'portal_member_works_h3': 'Karya Member',
            'portal_illustrations_fanart': 'Ilustrasi & Fanart dari Anggota',
            'portal_writings_stories': 'Kumpulan Cerita & Tulisan',
            'portal_music_audio': 'Karya Musik & Audio',
            'portal_video_shortfilm': 'Video & Short Film',
            'portal_member_collaborations': 'Proyek Kolaborasi Anggota',
            'portal_insights_articles_h3': 'Insight & Artikel',
            'portal_jp_pop_culture_articles': 'Artikel Budaya Pop Jepang',
            'portal_reviews_recommendations': 'Review & Rekomendasi Anime/Manga/Game',
            'portal_jp_research_facts': 'Riset & Fakta Seputar Jejepangan',
            'portal_latest_jp_news': 'Berita Jejepangan Terkini',
            'portal_documentation_h3': 'Dokumentasi',
            'portal_event_gallery': 'Galeri Foto Event Komunitas',
            'portal_aftermovie_videos': 'Aftermovie / Video Event',
            'portal_community_project_archive': 'Arsip Proyek Komunitas',
            'portal_old_articles': 'Artikel Lama',
            'portal_community_h3': 'Komunitas',
            'portal_member_highlights': 'Highlight Member (Anggota Berprestasi/Menarik)',
            'testimoni_anggota': 'Testimoni Anggota', // Used by portal.html as well
            'portal_weekly_showcase': 'Weekly Showcase (Karya Terbaik Mingguan)',
            'portal_behind_the_scenes': 'Behind the Scenes (Di Balik Layar Kegiatan)',
            'portal_submit_works_h3': 'Submit Karya',
            'portal_send_writing_fanart': 'Kirim Tulisan / Fanart',
            'portal_upload_video_music': 'Upload Video / Musik',
            'portal_propose_project_idea': 'Ajukan Proyek / Ide',
            'portal_search_placeholder': 'Cari di portal...',
            'portal_search_results_found': 'Ditemukan {count} hasil untuk "{term}"',
            'portal_search_no_results': 'Tidak ditemukan hasil untuk "{term}"',
            'portal_search_empty_input': 'Masukkan kata kunci untuk mencari.',

            // portal_details/agenda_bulanan.html
            'agenda_monthly_h2': 'Agenda Bulanan AquaNime',
            'agenda_monthly_p': 'Berikut adalah agenda bulanan kami untuk berbagai aktivitas dan pertemuan komunitas.',
            'agenda_july_2025_h3': 'Juli 2025',
            'agenda_july_li1': '<strong data-lang-key="agenda_july_strong1">Minggu 1 (1-7 Juli):</strong> Sesi Diskusi Anime "Musim Panas Terbaik" (Online - Discord)',
            'agenda_july_strong1': 'Minggu 1 (1-7 Juli):',
            'agenda_july_li2': '<strong data-lang-key="agenda_july_strong2">Minggu 2 (8-14 Juli):</strong> Challenge Ilustrasi & Fanart Tema "Fantasy Jepang"',
            'agenda_july_strong2': 'Minggu 2 (8-14 Juli):',
            'agenda_july_li3': '<strong data-lang-key="agenda_july_strong3">Minggu 3 (15-21 Juli):</strong> Latihan Gabungan Proyek Band (Offline - Jakarta)',
            'agenda_july_strong3': 'Minggu 3 (15-21 Juli):',
            'agenda_july_li4': '<strong data-lang-key="agenda_july_strong4">Minggu 4 (22-28 Juli):</strong> Pengiriman Artikel untuk Blog Portal (Jurnalistik)',
            'agenda_july_strong4': 'Minggu 4 (22-28 Juli):',
            'agenda_august_2025_h3': 'Agustus 2025',
            'agenda_august_li1': '<strong data-lang-key="agenda_august_strong1">Minggu 1 (1-7 Agustus):</strong> Workshop Menulis Cerita Pendek (Online)',
            'agenda_august_strong1': 'Minggu 1 (1-7 Agustus):',
            'agenda_august_li2': '<strong data-lang-key="agenda_august_strong2">Minggu 2 (8-14 Agustus):</strong> Penayangan Perdana Lagu Baru Proyek Band (YouTube AquaNime)',
            'agenda_august_strong2': 'Minggu 2 (8-14 Agustus):',
            'agenda_august_li3': '<strong data-lang-key="agenda_august_strong3">Minggu 3 (15-21 Agustus):</strong> Diskusi Novel "Kimetsu no Yaiba" (Online - Discord)',
            'agenda_august_strong3': 'Minggu 3 (15-21 Agustus):',
            'agenda_august_li4': '<strong data-lang-key="agenda_august_strong4">Minggu 4 (22-28 Agustus):</strong> Meet-up Regional Bandung',
            'agenda_august_strong4': 'Minggu 4 (22-28 Agustus):',
            'agenda_disclaimer_p': 'Agenda dapat berubah sewaktu-waktu. Selalu periksa halaman ini atau kanal Discord kami untuk pembaruan terbaru.',

            // portal_details/ajukan_proyek_ide.html
            'propose_project_h2': 'Ajukan Proyek / Ide Baru',
            'propose_project_p': 'Punya ide brilian untuk proyek komunitas selanjutnya? Atau ingin memulai inisiatif baru? Bagikan pemikiran Anda di sini!',
            'your_name_label': 'Nama Anda:',
            'idea_category_label': 'Kategori Ide:',
            'select_category_option': '-- Pilih Kategori --',
            'creative_project_option': 'Proyek Kreatif (Visual/Musik/Tulisan)',
            'event_option': 'Event / Gathering',
            'content_option': 'Konten Website / Artikel',
            'other_option': 'Lainnya',
            'idea_title_label': 'Judul Ide / Proyek:',
            'idea_description_label': 'Deskripsi Lengkap Ide Anda:',
            'idea_description_placeholder': 'Jelaskan ide Anda secara detail, tujuan, dan bagaimana Anda membayangkan implementasinya.',
            'send_idea_btn': 'Kirim Ide',
            'idea_review_info': 'Tim kami akan meninjau ide Anda dan menghubungi Anda jika diperlukan untuk diskusi lebih lanjut!',

            // portal_details/artikel_budaya_pop_jepang.html
            'article_jp_pop_culture_h2': 'Artikel: Mengenal Lebih Dekat Budaya Pop Jepang',
            'article_jp_pop_culture_p1': 'Budaya pop Jepang telah menyebar ke seluruh dunia, memikat jutaan orang dengan anime, manga, musik J-Pop, dan fashion yang unik. Mari kita selami lebih dalam beberapa aspek paling menarik dari fenomena global ini.',
            'anime_manga_phenomenon_h3': 'Fenomena Anime & Manga',
            'anime_manga_phenomenon_p1': 'Anime dan manga bukan lagi sekadar hiburan anak-anak. Dari kisah fantasi epik hingga drama kehidupan sehari-hari yang menyentuh, industri ini menawarkan keragaman genre yang luar biasa. Popularitas platform streaming dan penerbitan manga digital telah membuat akses ke karya-karya ini semakin mudah bagi penggemar di seluruh dunia.',
            'anime_manga_li1': '<strong data-lang-key="famous_studios_strong">Studio Terkenal:</strong> Studio Ghibli, Kyoto Animation, MAPPA.',
            'famous_studios_strong': 'Studio Terkenal:',
            'anime_manga_li2': '<strong data-lang-key="popular_genres_strong">Genre Populer:</strong> Shonen, Shoujo, Isekai, Slice of Life, Mecha.',
            'popular_genres_strong': 'Genre Populer:',
            'jpop_jrock_h3': 'J-Pop & J-Rock: Soundtrack Kehidupan',
            'jpop_jrock_p1': 'Musik Jepang, terutama J-Pop (Japanese Pop) dan J-Rock (Japanese Rock), memiliki basis penggemar yang kuat. Dengan melodi yang catchy dan lirik yang bervariasi, musik ini sering menjadi bagian tak terpisahkan dari anime dan drama.',
            'jpop_jrock_li1': '<strong data-lang-key="pop_idols_strong">Idola Pop:</strong> AKB48, Arashi, Perfume.',
            'pop_idols_strong': 'Idola Pop:',
            'jpop_jrock_li2': '<strong data-lang-key="rock_bands_strong">Band Rock:</strong> ONE OK ROCK, BABYMETAL, L\'Arc~en~Ciel.',
            'rock_bands_strong': 'Band Rock:',
            'fashion_subculture_h3': 'Fashion & Subkultur Jalanan',
            'fashion_subculture_p1': 'Jepang dikenal dengan fashion jalanan yang berani dan subkultur unik seperti Harajuku, Lolita, dan Gyaru. Gaya-gaya ini seringkali menjadi inspirasi bagi desainer fesyen global dan ekspresi diri bagi kaum muda.',
            'fashion_subculture_li1': '<strong data-lang-key="typical_styles_strong">Gaya Khas:</strong> Gothic Lolita, Decora, Visual Kei.',
            'typical_styles_strong': 'Gaya Khas:',
            'fashion_subculture_li2': '<strong data-lang-key="fashion_centers_strong">Pusat Mode:</strong> Shibuya, Harajuku.',
            'fashion_centers_strong': 'Pusat Mode:',
            'article_jp_pop_culture_p2': 'Budaya pop Jepang terus berkembang dan berinovasi, menawarkan sesuatu untuk semua orang. Di AquaNime, kami senang berbagi dan merayakan keberagaman budaya ini bersama Anda!',

            // portal_details/berita_terbaru.html
            'latest_news_h2': 'Berita Terbaru Komunitas',
            'news_item1_h3': '[Tanggal: 10 Juni 2025] AquaNime Sukses Gelar Workshop Ilustrasi Online!',
            'news_item1_p1': 'AquaNime kembali menghadirkan Workshop Ilustrasi Online yang sukses besar pada akhir pekan lalu. Acara ini dihadiri oleh puluhan member dari berbagai regional dan menampilkan ilustrator profesional sebagai pembicara tamu. Peserta mendapatkan tips dan trik dalam menggambar karakter anime dan desain latar belakang.',
            'news_item1_p2': 'Terima kasih kepada semua peserta dan pembicara! Sampai jumpa di event selanjutnya! 脂',
            'news_item2_h3': '[Tanggal: 1 Juni 2025] Audisi Proyek Band Selesai, Formasi Lengkap!',
            'news_item2_p1': 'Setelah melalui serangkaian audisi ketat, Proyek Band AquaNime kini telah memiliki formasi lengkap! Lima personel berbakat telah terpilih untuk mengisi posisi gitaris, drummer, vokalis, bassist, dan backing vocal. Nantikan karya pertama mereka!',
            'news_item2_p2': 'Selamat kepada para personel terpilih! 失･Å沁､',
            'news_more_info_p': '(Tambahkan berita-berita terbaru lainnya di sini)',

            // portal_details/event_mendatang.html
            'upcoming_events_h2': 'Jadwal Event & Gathering Mendatang',
            'upcoming_events_p': 'Tetap terhubung dengan AquaNime! Berikut adalah daftar event dan *gathering* kami yang akan datang. Jangan lewatkan kesempatan untuk berinteraksi, belajar, dan berkreasi bersama!',
            'summer_festival_h3': '[Tanggal: 25 Juli 2025] AquaNime Summer Festival: Cosplay & Fanart Competition!',
            'summer_festival_location_p': '<strong data-lang-key="location_label">Lokasi:</strong> Taman Kota [Nama Kota Anda]',
            'location_label': 'Lokasi:',
            'summer_festival_desc_p': 'Bersiaplah untuk festival musim panas yang penuh warna! Ada kompetisi cosplay, pameran fanart, *mini games*, dan banyak lagi. Daftarkan diri Anda sekarang!',
            'summer_festival_details_p': '<strong data-lang-key="details_reg_label">Detail lebih lanjut & Pendaftaran:</strong> [Link Pendaftaran Event]',
            'details_reg_label': 'Detail lebih lanjut & Pendaftaran:',
            'writing_workshop_h3': '[Tanggal: 10 Agustus 2025] Workshop Menulis Cerita Pendek bersama Penulis Proyek Light Novel',
            'writing_workshop_location_p': '<strong data-lang-key="location_label">Lokasi:</strong> Online (Zoom)',
            'writing_workshop_desc_p': 'Ingin mengasah kemampuan menulismu? Bergabunglah dalam workshop eksklusif ini bersama penulis Light Novel Aria, [Nama Penulis]. Pelajari tips dan trik menciptakan cerita yang menarik.',
            'writing_workshop_details_p': '<strong data-lang-key="details_reg_label">Detail & Pendaftaran:</strong> [Link Pendaftaran Workshop]',
            'meet_greet_band_h3': '[Tanggal: 20 September 2025] Meet & Greet Online dengan Tim Proyek Band!',
            'meet_greet_band_location_p': '<strong data-lang-key="location_label">Lokasi:</strong> Discord AquaNime (Voice Channel)',
            'meet_greet_band_desc_p': 'Kesempatan untuk bertanya langsung dan berinteraksi dengan personel Proyek Band. Dapatkan *sneak peek* lagu-lagu baru mereka!',
            'meet_greet_band_details_p': '<strong data-lang-key="details_discord_label">Detail & Link Discord:</strong> [Link Discord Channel]',
            'details_discord_label': 'Detail & Link Discord:',
            'events_more_info_p': '(Tambahkan lebih banyak jadwal event di sini)',
            
            // portal_details/galeri_event_komunitas.html
            'event_gallery_h2': 'Galeri Foto Event Komunitas',
            'event_gallery_p': 'Jelajahi momen-momen seru dan kebersamaan di berbagai event dan gathering AquaNime!',
            'event_gallery_cap1': 'Gathering Akbar 2024',
            'event_gallery_cap2': 'Workshop Cosplay',
            'event_gallery_cap3': 'Sesi Diskusi Anime',
            'event_gallery_cap4': 'Meet & Greet Aria Ayumi',

            // portal_details/highlight_member.html
            'member_highlight_h2': 'Highlight Member Komunitas',
            'member_highlight_p': 'Kami bangga memperkenalkan beberapa anggota paling berprestasi dan menginspirasi di AquaNime!',
            'member1_title': '[Nama Anggota 1] - Sang Ilustrator Ajaib!',
            'member1_desc': 'Sejak bergabung, [Nama Anggota 1] telah memberikan kontribusi luar biasa pada Proyek Maskot dengan ilustrasinya yang memukau. Karyanya telah menghidupkan Aria Ayumi dan menginspirasi banyak anggota lain untuk berkreasi.',
            'member2_title': '[Nama Anggota 2] - Vokalis Bintang Proyek Band!',
            'member2_desc': 'Suara emas [Nama Anggota 2] telah menjadi kekuatan pendorong di balik Proyek Band. Dengan dedikasi dan semangatnya, ia telah membawa energi baru ke dalam setiap latihan dan penampilan.',
            'member3_title': '[Nama Anggota 3] - Penulis Cerita yang Mendalam!',
            'member3_desc': 'Kisah-kisah yang ditulis oleh [Nama Anggota 3] untuk Light Novel Aria selalu berhasil menyentuh hati pembaca. Kemampuannya merangkai kata telah membuka dimensi baru bagi dunia AquaNime.',

            // portal_details/karya_ilustrasi.html
            'illustration_fanart_gallery_h2': 'Galeri Ilustrasi & Fanart',
            'illustration_fanart_gallery_p': 'Jelajahi kreativitas tanpa batas para anggota AquaNime melalui ilustrasi dan fanart mereka yang menakjubkan!',
            'illustration_fanart_cap1': '"Aria di Taman Sakura" oleh [Nama Anggota]',
            'illustration_fanart_cap2': 'Fanart Aria Kostum Musim Panas oleh [Nama Anggota]',
            'illustration_fanart_cap3': 'Ilustrasi Event AquaNime 2024 oleh [Nama Anggota]',
            'have_illustration_p': 'Punya ilustrasi atau fanart keren?',
            'send_your_work_link': 'Kirimkan karyamu ke kami!',

            // portal_details/kirim_tulisan_fanart.html
            'send_writing_fanart_h2': 'Kirim Tulisan / Fanart Anda',
            'send_writing_fanart_p': 'Kami sangat antusias untuk melihat karya-karya Anda! Gunakan formulir di bawah ini untuk mengirimkan tulisan atau fanart yang ingin Anda bagikan dengan komunitas AquaNime.',
            'your_name_stage_name_label': 'Nama Anda / Nama Panggung:',
            'work_type_label': 'Jenis Karya:',
            'select_work_type_option': '-- Pilih Jenis Karya --',
            'illustration_fanart_option': 'Ilustrasi / Fanart',
            'writing_short_story_option': 'Tulisan / Cerita Pendek',
            'work_title_label': 'Judul Karya:',
            'upload_file_label': 'Unggah File Karya (Gambar/Dokumen):',
            'supported_formats_small': 'Format yang didukung: JPG, PNG, DOC, DOCX, PDF (Ukuran maks: 5MB)',
            'work_desc_label': 'Deskripsi Singkat Karya Anda:',
            'work_desc_placeholder': 'Ceritakan sedikit tentang karya Anda atau inspirasinya.',
            'send_work_btn': 'Kirim Karya',
            'other_work_types_p_upload_video': 'Untuk jenis karya lain seperti Musik/Audio atau Video, silakan gunakan formulir khusus <a href="upload_video_musik.html" data-lang-key="upload_video_music_link">Upload Video / Musik</a>.',
            'upload_video_music_link': 'Upload Video / Musik',

            // portal_details/upload_video_musik.html
            'upload_video_music_h2': 'Unggah Video / Musik Anda',
            'upload_video_music_p': 'Punya video musik keren, cover lagu Jepang, atau komposisi original? Bagikan bakat musik dan visual Anda di sini!',
            'uploader_name_label': 'Nama Anda / Nama Band:',
            'media_type_label': 'Jenis Media:',
            'select_media_type_option': '-- Pilih Jenis Media --',
            'video_option': 'Video',
            'music_option': 'Musik / Audio',
            'media_title_label': 'Judul Video / Musik:',
            'media_link_label': 'Link ke Media (YouTube/SoundCloud/Google Drive):',
            'media_link_placeholder': 'Contoh: http://youtube.com/...',
            'media_link_small': 'Mohon unggah file Anda ke platform seperti YouTube, SoundCloud, atau Google Drive terlebih dahulu, lalu berikan link-nya.',
            'media_desc_label': 'Deskripsi Singkat Karya Anda:',
            'media_desc_placeholder': 'Ceritakan sedikit tentang video/musik Anda.',
            'send_media_btn': 'Kirim Media',
            'other_work_types_p_send_writing': 'Untuk ilustrasi atau tulisan, silakan gunakan formulir khusus <a href="kirim_tulisan_fanart.html" data-lang-key="send_writing_fanart_link">Kirim Tulisan / Fanart</a>.',
            'send_writing_fanart_link': 'Kirim Tulisan / Fanart',

            // legal/kebijakan_privasi.html
            'privacy_policy_h2': 'Kebijakan Privasi AquaNime',
            'privacy_policy_last_updated': 'Terakhir diperbarui: 11 Juni 2025',
            'privacy_policy_intro': 'Kebijakan Privasi ini menjelaskan bagaimana AquaNime mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan website kami dan layanan yang terkait.',
            'info_we_collect_h3': '1. Informasi yang Kami Kumpulkan',
            'info_we_collect_p': 'Kami dapat mengumpulkan berbagai jenis informasi sehubungan dengan penggunaan Anda atas layanan kami, termasuk:',
            'personal_info_li': '<strong data-lang-key="personal_info_strong">Informasi Pribadi:</strong> Nama, alamat email, atau informasi kontak lainnya yang Anda berikan secara sukarela saat mendaftar, mengisi formulir, atau berinteraksi dengan fitur chat.',
            'personal_info_strong': 'Informasi Pribadi:',
            'usage_data_li': '<strong data-lang-key="usage_data_strong">Data Penggunaan:</strong> Informasi tentang bagaimana Anda mengakses dan menggunakan website kami, seperti alamat IP Anda, jenis browser, halaman yang Anda kunjungi, waktu yang dihababiskan di halaman tersebut, dan data diagnostik lainnya.',
            'usage_data_strong': 'Data Penggunaan:',
            'ai_interaction_data_li': '<strong data-lang-key="ai_interaction_data_strong">Data Interaksi AI:</strong> Pesan yang Anda kirim ke chat bot Aria dan respons dari bot tersebut. Data ini digunakan untuk meningkatkan kualitas layanan chat bot.',
            'ai_interaction_data_strong': 'Data Interaksi AI:',
            'how_we_use_info_h3': '2. Bagaimana Kami Menggunakan Informasi Anda',
            'how_we_use_info_p': 'Informasi yang kami kumpulkan digunakan untuk berbagai tujuan, termasuk:',
            'purpose_li1': 'Untuk menyediakan dan memelihara layanan kami.',
            'purpose_li2': 'Untuk mengelola akun Anda dan mempersonalisasi pengalaman Anda.',
            'purpose_li3': 'Untuk meningkatkan, mempersonalisasi, dan memperluas layanan kami.',
            'purpose_li4': 'Untuk berkomunikasi dengan Anda, baik secara langsung maupun melalui mitra kami, termasuk untuk layanan pelanggan dan pembaruan.',
            'purpose_li5': 'Untuk tujuan analitik dan riset, untuk memahami bagaimana pengguna kami berinteraksi dengan website.',
            'purpose_li6': 'Untuk mendeteksi, mencegah, dan mengatasi masalah teknis atau penipuan.',
            'sharing_info_h3': '3. Pembagian Informasi Anda',
            'sharing_info_p': 'Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami dapat membagikan informasi Anda dalam keadaan tertentu, seperti:',
            'sharing_li1': 'Dengan penyedia layanan pihak ketiga yang membantu kami mengoperasikan website atau layanan kami (misalnya, penyedia hosting, alat analitik).',
            'sharing_li2': 'Untuk tujuan kepatutan hukum atau menanggapi permintaan pemerintah yang sah.',
            'sharing_li3': 'Untuk melindungi hak, properti, atau keamanan AquaNime atau orang lain.',
            'data_security_h3': '4. Keamanan Data',
            'data_security_p1': 'Keamanan informasi pribadi Anda sangat penting bagi kami. Kami berusaha menggunakan cara-cara yang diterima secara komersial untuk melindungi informasi pribadi Anda, tetapi tidak ada metode transmisi melalui Internet, atau metode penyimpanan elektronik yang 100% aman.',
            'ai_api_note_p': '<strong data-lang-key="ai_api_note_strong">Catatan tentang API AI:</strong> Untuk fitur chat bot Aria, kami menggunakan API AI eksternal. Kami tidak mengirimkan informasi pribadi yang sensitif ke API AI tersebut. Interaksi chat hanya untuk tujuan komunikasi dan informasi terkait komunitas.',
            'ai_api_note_strong': 'Catatan tentang API AI:',
            'your_data_rights_h3': '5. Hak Anda atas Data Anda',
            'your_data_rights_p': 'Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi pribadi Anda yang kami miliki. Untuk melakukan ini, silakan hubungi kami melalui detail kontak yang tersedia.',
            'privacy_policy_changes_h3': '6. Perubahan pada Kebijakan Privasi Ini',
            'privacy_policy_changes_p': 'Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberitahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi yang baru di halaman ini.',
            'contact_us_privacy_h3': '7. Hubungi Kami',
            'contact_us_privacy_p': 'Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami:',
            'contact_email_privacy_li': '<strong data-lang-key="email_label">Email:</strong> aquanime.ow@gmail.com',

            // legal/kode_etik_komunitas.html
            'code_of_conduct_title': 'Kode Etik Komunitas AquaNime',
            'code_of_conduct_intro': 'Kode Etik ini adalah panduan perilaku bagi seluruh anggota komunitas AquaNime. Dengan bergabung, Anda setuju untuk mematuhi aturan-aturan ini demi terciptanya lingkungan yang positif, suportif, dan kreatif.',
            'respect_inclusion_h3': '1. Rasa Hormat dan Inklusi',
            'respect_inclusion_li1': 'Hormati semua anggota tanpa memandang latar belakang, ras, agama, gender, orientasi seksual, atau kemampuan.',
            'respect_inclusion_li2': 'Toleransi terhadap perbedaan pendapat dan pandangan.',
            'respect_inclusion_li3': 'Tidak ada toleransi terhadap diskriminasi, ujaran kebencian, atau perundungan dalam bentuk apa pun.',
            'positive_supportive_h3': '2. Lingkungan yang Positif dan Suportif',
            'positive_supportive_li1': 'Berikan kritik yang membangun, bukan menjatuhkan.',
            'positive_supportive_li2': 'Saling mendukung dalam proses kreatif dan pembelajaran.',
            'positive_supportive_li3': 'Jaga komunikasi yang sopan dan ramah di semua platform komunitas.',
            'responsible_content_h3': '3. Konten dan Kreasi yang Bertanggung Jawab',
            'responsible_content_li1': 'Pastikan konten yang dibagikan sesuai dengan norma kesopanan dan tidak melanggar hak cipta.',
            'responsible_content_li2': 'Hindari berbagi konten yang eksplisit, ilegal, atau tidak pantas.',
            'responsible_content_li3': 'Berikan kredit yang layak kepada pencipta asli jika berbagi karya orang lain.',
            'privacy_security_h3': '4. Privasi dan Keamanan',
            'privacy_security_li1': 'Hormati privasi anggota lain. Jangan menyebarkan informasi pribadi tanpa izin.',
            'privacy_security_li2': 'Laporkan aktivitas mencurigakan atau pelanggaran keamanan kepada admin.',
            'rule_compliance_h3': '5. Kepatuhan terhadap Aturan',
            'rule_compliance_li1': 'Patuhi semua aturan yang ditetapkan oleh moderator dan admin komunitas.',
            'rule_compliance_li2': 'Pelanggaran kode etik dapat mengakibatkan peringatan, penangguhan, atau penghapusan dari komunitas.',
            'code_of_conduct_conclusion_p': 'Kami percaya bahwa dengan mematuhi Kode Etik ini, kita dapat menciptakan komunitas AquaNime yang aman, menyenangkan, dan produktif untuk semua.',

            // legal/laporan_bug_masukan.html
            'bug_report_feedback_h2': 'Laporan Bug & Berikan Masukan',
            'bug_report_feedback_p': 'Bantu kami meningkatkan website AquaNime! Jika Anda menemukan bug, memiliki saran, atau ingin memberikan masukan, silakan gunakan formulir di bawah ini.',
            'report_bug_h3': 'Laporkan Bug:',
            'report_bug_p': 'Mohon berikan detail sebanyak mungkin agar kami dapat mereplikasi dan memperbaiki masalah dengan cepat.',
            'your_name_label': 'Nama Anda:',
            'bug_location_label': 'Lokasi Bug (Halaman/Fitur):',
            'bug_location_placeholder': 'Contoh: Halaman Beranda, Slider Testimoni',
            'bug_description_label': 'Deskripsi Bug (Langkah-langkah untuk mereplikasi):',
            'bug_description_placeholder': 'Contoh: Saat mengklik tombol \'X\' di halaman Y, tidak terjadi apa-apa.',
            'send_bug_report_btn': 'Kirim Laporan Bug',
            'give_feedback_h3': 'Berikan Masukan & Saran:',
            'give_feedback_p': 'Masukan Anda sangat berharga bagi kami untuk mengembangkan website ini.',
            'feedback_type_label': 'Jenis Masukan:',
            'feedback_type_general': 'Umum',
            'feedback_type_new_feature': 'Saran Fitur Baru',
            'feedback_type_design': 'Masukan Desain',
            'feedback_type_content': 'Masukan Konten',
            'feedback_type_other': 'Lainnya',
            'feedback_message_label': 'Pesan Masukan/Saran Anda:',
            'send_feedback_btn': 'Kirim Masukan',

            // legal/syarat_ketentuan.html
            'terms_conditions_h2': 'Syarat & Ketentuan Penggunaan AquaNime',
            'terms_conditions_last_updated': 'Terakhir diperbarui: 11 Juni 2025',
            'terms_conditions_intro': 'Selamat datang di website AquaNime. Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh Syarat & Ketentuan ini.',
            'website_usage_h3': '1. Penggunaan Website',
            'website_usage_li1': 'Website ini disediakan untuk tujuan informasi dan interaksi komunitas.',
            'website_usage_li2': 'Anda setuju untuk menggunakan website ini hanya untuk tujuan yang sah dan sesuai dengan semua hukum dan peraturan yang berlaku.',
            'user_content_h3': '2. Konten Pengguna',
            'user_content_li1': 'Anda bertanggung jawab penuh atas konten yang Anda unggah atau bagikan di website ini.',
            'user_content_li2': 'Konten pengguna harus sesuai dengan Kode Etik Komunitas kami.',
            'user_content_li3': 'AquaNime berhak menghapus konten yang melanggar Syarat & Ketentuan ini atau dianggap tidak pantas.',
            'intellectual_property_h3': '3. Kekayaan Intelektual',
            'intellectual_property_li1': 'Semua konten di website ini, termasuk teks, grafis, logo, ikon, gambar, dan perangkat lunak, adalah milik AquaNime atau pemberi lisensinya.',
            'intellectual_property_li2': 'Anda tidak diizinkan untuk mereproduksi, mendistribusikan, memodifikasi, atau membuat karya turunan dari konten website tanpa izin tertulis.',
            'warranty_disclaimer_h3': '4. Penolakan Jaminan',
            'warranty_disclaimer_p': 'Website ini disediakan "sebagaimana adanya" tanpa jaminan apa pun, baik tersurat maupun tersirat. Kami tidak menjamin bahwa website akan selalu tersedia, bebas dari kesalahan, atau aman.',
            'liability_limitation_h3': '5. Batasan Tanggung Jawab',
            'liability_limitation_p': 'Dalam batas yang diizinkan oleh hukum, AquaNime tidak akan bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, konsekuensial, atau ganti rugi, termasuk namun tidak terbatas pada kerugian atas hilangnya keuntungan, goodwill, penggunaan, data, atau kerugian tidak berwujud lainnya, yang diakibatkan oleh penggunaan atau ketidakmampuan untuk menggunakan website ini.',
            'terms_changes_h3': '6. Perubahan Syarat & Ketentuan',
            'terms_changes_p': 'Kami dapat mengubah Syarat & Ketentuan ini dari waktu ke waktu. Perubahan akan berlaku segera setelah diposting di website ini.',
            'governing_law_h3': '7. Hukum yang Mengatur',
            'governing_law_p': 'Syarat & Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Indonesia.',
            'contact_us_terms_h3': '8. Hubungi Kami',
            'contact_us_terms_p': 'Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:',
            'contact_email_terms_li': '<strong data-lang-key="email_label">Email:</strong> aquanime.ow@gmail.com',

            // legal/versi_website_log.html
            'website_version_log_h2': 'Versi Website & Log Pembaruan',
            'website_version_log_p': 'Halaman ini berisi informasi tentang versi website AquaNime saat ini dan riwayat pembaruan yang telah dilakukan.',
            'loading_update_history_p': 'Memuat riwayat pembaruan...',
            
            // aria_corner/aria_cosplayer_tribute.html
            'cosplayer_tribute_h2': 'Tribute Cosplayer Aria',
            'cosplayer_tribute_p1': 'Lihatlah bagaimana para *cosplayer* berbakat menghidupkan Aria Ayumi di dunia nyata! Kami sangat menghargai dedikasi mereka dalam menciptakan *cosplay* yang luar biasa.',
            'aria_cosplay_caption1': 'Aria Cosplay oleh [Nama Cosplayer]',
            'aria_cosplay_caption2': 'Aria Cosplay Versi Pesta oleh [Nama Cosplayer]',
            'cosplayer_cta_p': 'Anda *cosplayer* Aria? Ingin *cosplay* Anda ditampilkan di sini? <a href="../portal_details/upload_video_musik.html" data-lang-key="send_photo_link">Kirimkan foto Anda kepada kami!</a>',
            'send_photo_link': 'Kirimkan foto Anda kepada kami!',

            // aria_corner/aria_mini_diary.html
            'aria_mini_diary_h2': 'Aria\'s Mini Diary',
            'aria_mini_diary_p1': 'Selamat datang di buku harian mini Aria! Di sini, Aria akan berbagi cerita-cerita kecil, pemikiran, dan hal-hal menarik yang terjadi dalam perjalanan bersama AquaNime.',
            'diary_entry1_h3': '[Tanggal: 10 Juni 2025] Petualangan Mencoba Resep Baru! 🍜',
            'diary_entry1_p': 'Hari ini Aria mencoba resep kue baru! Rasanya manis seperti semangat member AquaNime yang selalu berkarya. Tapi agak gosong sedikit sih, hehe. Maaf ya! 😅 Untung masih bisa dimakan kok! ✨',
            'diary_entry2_h3': '[Tanggal: 5 Juni 2025] Semangat Proyek Band! 🎸',
            'diary_entry2_p': 'Senang sekali melihat Proyek Band mulai latihan rutin lagi! Energi musik mereka benar-benar menular. Aria jadi ingin ikut menyanyi! 🎶 Semoga Aria bisa segera tampil di event selanjutnya ya! Ayo semangat! 💪',
            'diary_entry3_h3': '[Tanggal: 28 Mei 2025] Nostalgia Rebranding! 💖',
            'diary_entry3_p': 'Ternyata sudah setahun lebih sejak AquaNime resmi rebranding! Rasanya baru kemarin lho. Banyak banget momen seru dan member baru yang bergabung. Aria bangga banget jadi bagian dari keluarga ini! Terima kasih semua! 🤗',
            'diary_more_entries_p': '(Tambahkan entri buku harian Aria lainnya di sini)',

            // aria_corner/aria_photocard_collection.html
            'aria_photocard_collection_h2': 'Koleksi Photocard Aria',
            'aria_photocard_collection_p1': 'Kumpulkan semua *photocard* eksklusif Aria Ayumi! Setiap *photocard* menampilkan Aria dalam pose dan *outfit* yang berbeda, mencerminkan berbagai aspek dari komunitas AquaNime.',
            'aria_photocard_collection_p2': 'Dapatkan *photocard* ini di event-event khusus atau sebagai hadiah dalam kegiatan tertentu!',
            'photocard_cap1': 'Photocard Aria #001: Semangat Pagi!',
            'photocard_cap2': 'Photocard Aria #002: Waktunya Bermusik!',
            'photocard_cap3': 'Photocard Aria #003: Aria Sedang Berpikir',
            'photocard_cap4': 'Photocard Aria #004: Senyuman Manis',
            'photocard_updates_p': '(Ikuti terus media sosial kami untuk informasi tentang rilis photocard terbaru!)',

            // aria_corner/aria_quote_of_the_day.html
            'quote_of_day_title': 'Quote of the Day by Aria',
            'quote_of_day_desc': 'Setiap hari, Aria memiliki pesan spesial untukmu. Semoga kutipan hari ini memberimu semangat dan inspirasi untuk berkarya!',
            'aria_quote_text': '"Langit mungkin luas, tapi imajinasimu jauh lebih tak terbatas! Terbanglah tinggi dengan setiap kreasimu!"',
            'aria_quote_author': '- Aria Ayumi',
            'aria_quote_date': '[Tanggal: 11 Juni 2025]',
            'quote_update_info': '(Kutipan akan diperbarui setiap hari atau sesuai frekuensi yang ditentukan)',

            // community/komunitas_divisi_regional.html
            'divisions_regions_h2': 'Divisi & Regional AquaNime',
            'divisions_regions_p': 'AquaNime terbagi menjadi beberapa divisi dan regional untuk memudahkan koordinasi dan fokus pada minat tertentu.',
            'community_divisions_h3': 'Divisi Komunitas:',
            'creative_division_li': '<strong data-lang-key="creative_division_strong">Divisi Kreatif:</strong> Fokus pada pengembangan proyek seperti Proyek Maskot, Light Novel, dan karya visual/audio lainnya.',
            'creative_division_strong': 'Divisi Kreatif:',
            'event_division_li': '<strong data-lang-key="event_division_strong">Divisi Event:</strong> Bertanggung jawab merencanakan dan melaksanakan event gathering, workshop, dan kompetisi.',
            'event_division_strong': 'Divisi Event:',
            'content_journalism_division_li': '<strong data-lang-key="content_journalism_division_strong">Divisi Konten & Jurnalistik:</strong> Mengelola riset, penulisan artikel, berita, dan konten media sosial.',
            'content_journalism_division_strong': 'Divisi Konten & Jurnalistik:',
            'music_division_li': '<strong data-lang-key="music_division_strong">Divisi Musik:</strong> Khusus untuk pengembangan Proyek Band dan aktivitas musik lainnya.',
            'music_division_strong': 'Divisi Musik:',
            'other_divisions_li': '(Tambahkan divisi lain jika ada)',
            'community_regions_h3': 'Regional Komunitas:',
            'community_regions_p': 'AquaNime aktif di wilayah Jabodetabek dan Jawa Barat. Kami memiliki koordinator dan event rutin di beberapa kota:',
            'jakarta_region_li': '<strong data-lang-key="jakarta_region_strong">Jakarta:</strong> Pusat koordinasi utama dan event besar.',
            'jakarta_region_strong': 'Jakarta:',
            'bogor_region_li': '<strong data-lang-key="bogor_region_strong">Bogor:</strong> Event gathering dan workshop reguler.',
            'bogor_region_strong': 'Bogor:',
            'depok_region_li': '<strong data-lang-key="depok_region_strong">Depok:</strong> Komunitas aktif dengan fokus pada diskusi dan kolaborasi kecil.',
            'depok_region_strong': 'Depok:',
            'bandung_region_li': '<strong data-lang-key="bandung_region_strong">Bandung:</strong> Basis komunitas Jawa Barat dengan anggota yang sangat aktif.',
            'bandung_region_strong': 'Bandung:',
            'other_regions_li': '(Tambahkan regional lain jika ada)',

            // community/komunitas_fanmade.html
            'fanmade_works_h2': 'Karya Fanmade AquaNime',
            'fanmade_works_p1': 'Area ini didedikasikan untuk semua karya fanmade yang dibuat oleh para penggemar dan anggota setia AquaNime!',
            'what_is_fanmade_h3': 'Apa itu Fanmade?',
            'what_is_fanmade_p1': 'Karya fanmade adalah kreasi yang dibuat oleh penggemar berdasarkan properti intelektual yang sudah ada (dalam hal ini, AquaNime, maskot Aria, dan proyek-proyek kami). Ini bisa berupa fanart, fanfiction, video edit, cosplay, atau apa pun yang terinspirasi oleh komunitas kami.',
            'fanmade_gallery_h3': 'Galeri Fanmade:',
            'fanart_aria_caption': 'Fanart Aria oleh [Nama Fan]',
            'cosplay_aria_caption': 'Cosplay Aria oleh [Nama Cosplayer]',
            'video_edit_caption': 'Video Edit Komunitas',
            'share_fanmade_p': 'Punya karya fanmade untuk dibagi? <a href="../portal_details/kirim_tulisan_fanart.html" data-lang-key="send_your_work_to_us_link">Kirimkan karyamu ke kami!</a>',
            'send_your_work_to_us_link': 'Kirimkan karyamu ke kami!',

            // community/komunitas_forum_diskusi.html
            'discussion_forum_h2': 'Forum Diskusi Komunitas',
            'discussion_forum_p': 'Bergabunglah dengan forum diskusi kami untuk berbagi ide, bertanya, dan berinteraksi dengan sesama penggemar budaya Jepang!',
            'forum_access_h3': 'Akses Forum:',
            'forum_access_p': 'Kami menggunakan platform Discord sebagai forum utama kami. Di sana Anda bisa menemukan berbagai channel untuk topik-topik spesifik.',
            'general_discussion_channel_li': '<strong data-lang-key="general_discussion_channel_strong">Channel Diskusi Umum:</strong> Ngobrol santai tentang anime terbaru, manga favorit, atau topik jejepangan lainnya.',
            'general_discussion_channel_strong': 'Channel Diskusi Umum:',
            'project_channel_li': '<strong data-lang-key="project_channel_strong">Channel Proyek:</strong> Diskusi dan koordinasi untuk proyek-proyek komunitas seperti Light Novel atau Band.',
            'project_channel_strong': 'Channel Proyek:',
            'event_channel_li': '<strong data-lang-key="event_channel_strong">Channel Event:</strong> Informasi dan obrolan seputar event yang akan datang.',
            'event_channel_strong': 'Channel Event:',
            'help_channel_li': '<strong data-lang-key="help_channel_strong">Channel Bantuan:</strong> Tempat bertanya jika ada kendala atau pertanyaan seputar komunitas.',
            'help_channel_strong': 'Channel Bantuan:',
            'join_discord_btn': 'GABUNG DISCORD KAMI',

            // community/komunitas_join.html
            'join_community_h2': 'Gabung Komunitas AquaNime',
            'join_community_p1': 'Selamat datang di AquaNime! Kami sangat senang Anda tertarik untuk bergabung dengan keluarga kreatif kami.',
            'join_community_p2': 'Untuk menjadi bagian dari komunitas kami, Anda bisa mengikuti langkah-langkah mudah di bawah ini:',
            'how_to_join_h3': 'Cara Bergabung:',
            'read_rules_li': '<strong data-lang-key="read_rules_strong">Baca Aturan Komunitas:</strong> Pastikan Anda memahami dan setuju dengan <a href="../legal/kode_etik_komunitas.html" data-lang-key="community_code_of_conduct_link_text">Kode Etik Komunitas</a> kami.',
            'read_rules_strong': 'Baca Aturan Komunitas:',
            'choose_platform_li': '<strong data-lang-key="choose_platform_strong">Pilih Platform Anda:</strong> Kami memiliki grup aktif di Discord dan WhatsApp. Pilih yang paling nyaman untuk Anda.',
            'choose_platform_strong': 'Pilih Platform Anda:',
            'fill_form_li': '<strong data-lang-key="fill_form_strong">Isi Formulir Pendaftaran:</strong> <a href="#" data-lang-key="click_to_fill_form_link">Klik di sini untuk mengisi formulir pendaftaran singkat</a>.',
            'fill_form_strong': 'Isi Formulir Pendaftaran:',
            'click_to_fill_form_link': 'Klik di sini untuk mengisi formulir pendaftaran singkat',
            'verification_li': '<strong data-lang-key="verification_strong">Verifikasi:</strong> Setelah mengisi formulir, tim kami akan memverifikasi pendaftaran Anda.',
            'verification_strong': 'Verifikasi:',
            'start_interacting_li': '<strong data-lang-key="start_interacting_strong">Mulai Berinteraksi:</strong> Setelah terverifikasi, Anda bisa langsung bergabung dalam diskusi, proyek, dan event kami!',
            'start_interacting_strong': 'Mulai Berinteraksi:',
            'further_questions_p': 'Jika ada pertanyaan lebih lanjut, jangan ragu untuk <a href="../pages/kontak.html" data-lang-key="contact_us_link">menghubungi kami</a>.',
            'contact_us_link': 'menghubungi kami',
            'register_now_btn': 'DAFTAR SEKARANG',

            // community/komunitas_karya_member.html
            'member_works_h2_community': 'Karya Member Komunitas',
            'member_works_p_community': 'Lihat berbagai macam karya kreatif dari para anggota AquaNime! Kami bangga dengan talenta dan passion mereka.',
            'work_categories_h3': 'Kategori Karya:',
            'illustration_fanart_caption_comm': 'Ilustrasi & Fanart',
            'writings_stories_caption_comm': 'Cerita & Tulisan',
            'music_audio_caption_comm': 'Musik & Audio',
            'video_short_film_caption_comm': 'Video & Short Film',
            'want_your_work_displayed_p': 'Ingin karyamu dipamerkan di sini? <a href="../portal_details/kirim_tulisan_fanart.html" data-lang-key="send_your_work_now_link">Kirim karyamu sekarang!</a>',
            'send_your_work_now_link': 'Kirim karyamu sekarang!',

            // community/komunitas_light_novel_aria.html
            'read_aria_novel_h2': 'Baca Light Novel Aria',
            'read_aria_novel_p': 'Selami dunia Aria Ayumi melalui kisah-kisah Light Novel orisinal kami. Ikuti perjalanan dan petualangannya dalam berbagai genre!',
            'novel_list_h3': 'Daftar Judul Light Novel:',
            'arias_melodies_h3': 'Aria\'s Melodies: Kisah Awal',
            'arias_melodies_p': 'Menceritakan masa lalu Aria yang penuh tantangan dan bagaimana ia menemukan passion-nya dalam musik.',
            'read_chapter1_btn': 'Baca Bab 1',
            'aquanime_chronicles_h3': 'AquaNime Chronicles: Persahabatan Tak Terbatas',
            'aquanime_chronicles_p': 'Petualangan Aria bersama teman-teman komunitas AquaNime dalam menghadapi tantangan dan menciptakan karya bersama.',
            'add_more_novels_li': '(Tambahkan judul Light Novel lainnya)',
            'author_contributions_h3': 'Kontribusi Penulis:',
            'author_contributions_p': 'Proyek Light Novel ini adalah hasil kolaborasi para penulis berbakat dari komunitas. Jika Anda memiliki ide cerita atau ingin bergabung, silakan <a href="../portal_details/kirim_tulisan_fanart.html" data-lang-key="submit_your_work_link">kirimkan karya Anda</a>!',
            'submit_your_work_link': 'kirimkan karya Anda',

        }
    };

    // Helper function to get translated text
    function getTranslation(key) {
        const lang = 'id'; // Bahasa selalu ID
        if (translations[lang] && translations[lang][key]) {
            return translations[lang][key];
        }
        console.error(`Translation key '${key}' not found in '${lang}'.`);
        return `[MISSING_TRANSLATION: ${key}]`;
    }

    // Smooth scrolling for anchor links (e.g., Visi & Misi in Tentang page)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hamburger menu for mobile navigation
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const header = document.querySelector('header');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Simple form submission (for contact form) - Example only, needs backend
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            alert('Pesan Anda telah terkirim! (Fungsionalitas ini adalah contoh dan tidak mengirim data ke server.)');

            contactForm.reset();
        });
    }

    // Jika di file js/script.js, pastikan file ini sudah di-include di HTML
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('contact-form');
      if(form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          emailjs.sendForm('service_gc1bb7h', 'AquaNime', this)
            .then(function() {
              alert('Pesan berhasil dikirim ke aquanime.ow@gmail.com!');
              form.reset();
            }, function(error) {
              alert('Gagal mengirim pesan: ' + JSON.stringify(error));
            });
        });
      }
    });

    // ========================================= //
    // HEADER SCROLL EFFECT                      //
    // ========================================= //
    if (header) {
         window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        }
    }


    // ========================================= //
    // SCROLL ANIMATION (Fade In / Fade Out)     //
    // ========================================= //

    const elementsToAnimate = document.querySelectorAll(
        '.homepage-section .animate-target, ' +
        'main:not(.homepage-main-content) .content-section, ' +
        'main:not(.homepage-main-content) .partners-section, ' +
        'main:not(.homepage-main-content) .contact-section'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-active');
            } else {
                entry.target.classList.remove('fade-in-active');
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // ========================================= //
    // TESTIMONIAL SLIDER LOGIC                  //
    // ========================================= //
    const slider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentIndex = 0;
    let itemsPerView = 3;

    function updateItemsPerView() {
        if (window.innerWidth <= 767) {
            itemsPerView = 1;
        } else if (window.innerWidth <= 992) {
            itemsPerView = 2;
        } else {
            itemsPerView = 3;
        }
    }

    function createDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        const totalItems = document.querySelectorAll('.testimonial-item').length;
        const totalSlides = Math.ceil(totalItems / itemsPerView);
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = i;
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateSlider() {
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        if (testimonialItems.length === 0 || !slider) return;

        const itemStyle = getComputedStyle(testimonialItems[0]);
        const itemMarginLeft = parseFloat(itemStyle.marginLeft);
        const itemMarginRight = parseFloat(itemStyle.marginRight);
        const itemWidthWithMargin = testimonialItems[0].offsetWidth + itemMarginLeft + itemMarginRight;
        
        let offset = -currentIndex * itemWidthWithMargin;

        slider.style.transform = `translateX(${offset}px)`;

        if (dotsContainer) {
            document.querySelectorAll('.dot').forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        testimonialItems.forEach((item, index) => {
            item.classList.remove('active-slide');
            if (itemsPerView === 1) {
                if (index === currentIndex) {
                    item.classList.add('active-slide');
                }
            } else if (itemsPerView === 2) {
                if (index === currentIndex || index === currentIndex + 1) {
                    item.classList.add('active-slide');
                }
            } else {
                if (index === currentIndex || index === currentIndex + 1 || index === currentIndex + 2) {
                    item.classList.add('active-slide');
                }
            }
        });
    }


    if (slider && prevBtn && nextBtn) {
        updateItemsPerView();
        createDots();
        updateSlider();

        prevBtn.addEventListener('click', () => {
            const totalItems = document.querySelectorAll('.testimonial-item').length;
            const totalSlides = Math.ceil(totalItems / itemsPerView);
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            const totalItems = document.querySelectorAll('.testimonial-item').length;
            const totalSlides = Math.ceil(totalItems / itemsPerView);
            currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
            updateSlider();
        });

        window.addEventListener('resize', () => {
            updateItemsPerView();
            createDots();
            updateSlider();
        });
    }

    // ========================================= //
    // BACKGROUND MUSIC ON PROJECT CLICK         //
    // ========================================= //
    const projectCards = document.querySelectorAll('.project-card');
    let currentAudio = null;

    projectCards.forEach(card => {
        const audioSrc = card.dataset.audio;
        const playBtn = card.querySelector('.play-audio-btn');

        if (audioSrc && playBtn) {
            playBtn.addEventListener('click', (event) => {
                event.stopPropagation();

                // Path audio disesuaikan
                const fullAudioSrc = audioSrc.replace('../audio/', '../assets/audio/').replace('audio/', 'assets/audio/');


                if (currentAudio && currentAudio.src === new URL(fullAudioSrc, window.location.href).href) {
                    currentAudio.pause();
                    currentAudio = null;
                    playBtn.innerHTML = `<i class="fas fa-play"></i> ${getTranslation('listen_audio')}`;
                    playBtn.classList.remove('playing');
                } else {
                    if (currentAudio) {
                        currentAudio.pause();
                        document.querySelectorAll('.play-audio-btn').forEach(btn => {
                            if (btn !== playBtn) {
                                btn.innerHTML = `<i class="fas fa-play"></i> ${getTranslation('listen_audio')}`;
                                btn.classList.remove('playing');
                            }
                        });
                    }

                    currentAudio = new Audio(fullAudioSrc);
                    currentAudio.play().then(() => {
                        playBtn.innerHTML = `<i class="fas fa-pause"></i> ${getTranslation('now_playing')}`;
                        playBtn.classList.add('playing');
                    }).catch(error => {
                        console.error('Error playing audio:', error);
                        alert('Tidak dapat memutar audio. Pastikan file tersedia dan format didukung. Browser mungkin memblokir autoplay.');
                    });

                    currentAudio.onended = () => {
                        playBtn.innerHTML = `<i class="fas fa-play"></i> ${getTranslation('listen_audio')}`;
                        playBtn.classList.remove('playing');
                        currentAudio = null;
                    };
                }
            });
        }
    });

    // ========================================= //
    // WEBSITE UPDATE LOG DATA & RENDER FUNCTION //
    // ========================================= //
    const websiteUpdateLog = [
        {
            version: "1.0.7",
            codename: "Refinement & Integrasi EmailJS",
            date: "13 Juni 2025 (21:00 WIB)", // Waktu saat ini
            features: [
                "Integrasi EmailJS untuk mengirim pesan dari formulir kontak.",
                "Penyempurnaan lebih lanjut pada tampilan dan responsivitas header, termasuk penyesuaian ukuran ikon sosial media di header untuk tampilan mobile.",
                "Penambahan fitur pencarian yang lebih canggih di halaman portal, memungkinkan pengguna untuk mencari berdasarkan kategori atau tag tertentu.",
                "Perbaikan minor pada beberapa elemen UI untuk meningkatkan konsistensi desain di seluruh website.",
                "Perbaikan bug pada testimonial slider untuk memastikan transisi yang lebih halus dan responsif.",
                "Peningkatan performa halaman portal dengan optimasi gambar dan skrip.",
                "Penambahan ikon sosial media di footer untuk semua halaman kecuali beranda.",
                "Penyempurnaan struktur folder website untuk memudahkan pengelolaan aset.",
                "Perbaikan minor pada beberapa elemen UI untuk meningkatkan konsistensi desain di seluruh website."
            ]
        },
        {            version: "1.0.6",
            codename: "Refinement Plus",
            date: "13 Juni 2025 (15:30 WIB)", // Waktu saat ini
            features: [
                "Penyempurnaan lebih lanjut pada tampilan dan responsivitas header, termasuk penyesuaian ukuran ikon sosial media di header untuk tampilan mobile.",
                "Penambahan fitur pencarian yang lebih canggih di halaman portal, memungkinkan pengguna untuk mencari berdasarkan kategori atau tag tertentu.",
                "Perbaikan minor pada beberapa elemen UI untuk meningkatkan konsistensi desain di seluruh website."
            ]
        },
        {
            version: "1.0.5",
            codename: "Refinement",
            date: "12 Juni 2025 (13:55 WIB)", // Waktu saat ini
            features: [
                "Penyempurnaan Header dan Navigasi: Merapikan tampilan header dan navigasi agar tidak terlalu besar, serta meningkatkan responsivitas dari desktop hingga mobile ukuran terkecil. Penyesuaian meliputi: Mengurangi padding vertikal header, Menyesuaikan ukuran logo dan teks logo, Mengurangi margin dan ukuran font menu navigasi utama, Menyesuaikan ukuran ikon sosial media, Mengurangi ukuran hamburger menu, Mengoptimalkan penempatan dan ukuran toggle bahasa dan dark mode, serta mengatur urutan elemen di header untuk responsivitas yang lebih baik, Menyembunyikan ikon sosial media di header untuk tampilan mobile terkecil.",
                "Penambahan Search Engine pada Halaman Portal: Menambahkan fungsionalitas mesin pencari lokal hanya di halaman `pages/portal.html` untuk memudahkan pengguna mencari konten portal. Fitur ini meliputi: Input dan tombol pencarian baru di halaman portal, Fungsionalitas untuk menampilkan atau menyembunyikan item daftar berdasarkan kata kunci pencarian, Penyesuaian gaya untuk search bar di mode terang dan gelap, serta responsivitas di berbagai ukuran layar."
            ]
        },
        {
            version: "1.0.4",
            codename: "Pathfinder",
            date: "11 Juni 2025 (22:00 WIB)", // Waktu perkiraan
            features: [
                "Perbaikan bug *path* relatif (`../../` menjadi `../`) di seluruh file HTML dalam folder `pages/`, `community/`, `legal/`, `aria_corner/`, dan `portal_details/`.",
                "Memastikan integrasi CSS, JS, dan aset gambar/audio bekerja dengan benar di semua sub-halaman."
            ]
        },
        {
            version: "1.0.3",
            codename: "Pixel Perfect Enhanced",
            date: "11 Juni 2025 (21:20 WIB)", // Waktu berdasarkan interaksi terakhir
            features: [
                "Pembaruan *background* header di seluruh website: selalu *dark blue* dengan *opacity* saat awal halaman (kecuali beranda yang transparan di awal).",
                "Penyesuaian ukuran *font* di *navbar*, *hero content*, dan *content-section* agar lebih proporsional.",
                "Pengoptimalan ukuran dan posisi *shapes* serta ikon di seluruh website untuk kerapian di *desktop* dan *mobile*.",
                "Perbaikan masalah *z-index* dan *pointer-events* untuk memastikan semua tombol dan *slider* dapat diklik.",
                "Penambahan ikon sosial media di *footer* untuk semua halaman kecuali beranda."
            ]
        },
        {
            version: "1.0.2",
            codename: "Folder Streamline",
            date: "11 Juni 2025 (19:00 WIB)", // Waktu perkiraan
            features: [
                "Struktur folder website dirapikan dan diorganisir ulang (menambahkan `pages/`, `community/`, `legal/`, `aria_corner/`, `portal_details/`).",
                "Semua *path* relatif di file HTML disesuaikan (`../` untuk naik satu level) agar sesuai dengan struktur folder baru."
            ]
        },
        {
            version: "1.0.1",
            codename: "Chat Fix & Mobile Polish",
            date: "11 Juni 2025 (17:30 WIB)", // Waktu perkiraan
            features: [
                "Perbaikan bug *live chat* Aria AI (kesalahan API 404 pada Gemini) dengan memastikan model dan URL API yang benar.",
                "Optimalisasi tampilan *mobile* untuk berbagai elemen seperti *header*, *content-section*, *testimonial slider*, dan *shapes*.",
                "Memastikan elemen interaktif (tombol, *slider*) dapat diklik di atas *overlay*."
            ]
        },
        {
            version: "1.0.0",
            codename: "Aurora",
            date: "11 Juni 2025 (15:00 WIB)", // Waktu perkiraan
            features: [
                "Peluncuran resmi website AquaNime.",
                "Desain dan tata letak responsif penuh untuk Desktop, Tablet, dan Mobile.",
                "Implementasi background gambar tunggal dengan efek parallax di semua halaman.",
                "Header dinamis (transparan di atas, solid saat discroll).",
                "Fitur Live Chat AI Aria Chibi (integrasi Google Gemini AI untuk demo).",
                "Testimonial Slider interaktif di halaman beranda.",
                "Fungsionalitas Audio pada kartu proyek.",
                "Struktur folder website yang lebih rapi untuk kemudahan navigasi dan pengelolaan.",
                "Penambahan halaman Legal & Info Teknis, Aria's Corner, dan detail Portal."
            ]
        },
        {
            version: "0.9.0",
            codename: "Pratinjau Alpha",
            date: "20 Mei 2025",
            features: [
                "Pengembangan fitur dasar website dan halaman utama.",
                "Implementasi responsivitas awal.",
                "Konfigurasi palet warna dan tipografi."
            ]
        }
    ];

    function renderUpdateLog() {
        const updateLogContainer = document.getElementById('update-log-content');
        if (!updateLogContainer) return;

        updateLogContainer.innerHTML = ''; // Bersihkan konten lama

        websiteUpdateLog.forEach(log => {
            const versionSection = document.createElement('div');
            versionSection.classList.add('version-section');

            const versionTitle = document.createElement('h3');
            versionTitle.textContent = `Versi ${log.version} - "${log.codename}" (${log.date})`;
            versionSection.appendChild(versionTitle);

            const featureList = document.createElement('ul');
            log.features.forEach(feature => {
                const listItem = document.createElement('li');
                listItem.textContent = feature;
                featureList.appendChild(listItem);
            });
            versionSection.appendChild(featureList);

            updateLogContainer.appendChild(versionSection);
        });
    }

    if (document.getElementById('update-log-content')) {
        renderUpdateLog();
    }


    // ========================================= //
    // LANGUAGE AND DARK MODE TOGGLES            //
    // ========================================= //

    const body = document.body;
    // languageToggle tidak lagi relevan karena tidak ada tombol ganti bahasa
    // const languageToggle = document.getElementById('language-toggle'); 
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    // currentLanguage akan selalu 'id' karena hanya itu yang didukung
    let currentLanguage = 'id';

    // Fungsi utama untuk mengatur dan menerapkan bahasa (hanya ID)
    function setLanguage(lang) {
        // Memaksa bahasa menjadi 'id'
        currentLanguage = 'id';
        localStorage.setItem('aquanimeLanguage', 'id');

        // Tombol toggle bahasa tidak ada lagi, jadi tidak perlu update innerHTML
        // if (languageToggle) {
        //     languageToggle.innerHTML = `<i class="fas fa-globe"></i> <span data-lang-key="language_id">${getTranslation('language_id')}</span>`;
        // }

        // Apply translations to all elements with data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            let translatedText = getTranslation(key); // Tidak perlu lang parameter lagi di sini

            // Handle specific cases like input placeholders
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translatedText);
            }
            // MODIFIED: Use innerHTML for elements that might contain <br> or other HTML
            else if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'P' || element.tagName === 'SPAN' || element.tagName === 'BUTTON' || element.tagName === 'A' || element.tagName === 'LI' || element.tagName === 'STRONG') {
                element.innerHTML = translatedText;
            }
            else {
                // Fallback for other elements, might not be suitable for all
                element.textContent = translatedText;
            }
        });

        // Specific handling for dynamic elements or complex content
        // Example for project play buttons (already handled above, but as a reminder)
        document.querySelectorAll('.project-card .play-audio-btn').forEach(btn => {
            if (btn.classList.contains('playing')) {
                btn.innerHTML = `<i class="fas fa-pause"></i> ${getTranslation('now_playing')}`;
            } else {
                btn.innerHTML = `<i class="fas fa-play"></i> ${getTranslation('listen_audio')}`;
            }
        });

        // Update portal search placeholder if it exists on the page
        const portalSearchInput = document.getElementById('portal-search-input');
        if (portalSearchInput) {
            portalSearchInput.setAttribute('placeholder', getTranslation('portal_search_placeholder'));
        }

        // Re-run search in portal if active, to update result info
        if (typeof performSearch === 'function' && document.getElementById('portal-search-input')) {
            performSearch();
        }
    }

    // Panggil setLanguage di awal untuk memastikan semua teks diterjemahkan pada saat DOMContentLoaded
    setLanguage('id'); // Selalu inisialisasi dengan Bahasa Indonesia


    // Inisialisasi Dark Mode
    function initializeDarkMode() {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let darkModeEnabled = localStorage.getItem('aquanimeDarkMode');

    if (darkModeEnabled === null) {
        darkModeEnabled = prefersDarkMode ? 'true' : 'false';
        localStorage.setItem('aquanimeDarkMode', darkModeEnabled);
    }

    if (darkModeEnabled === 'true') {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode-preload');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = `<i class="fas fa-sun"></i> ${getTranslation('light_mode')}`;
        }
    } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark-mode-preload');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = `<i class="fas fa-moon"></i> ${getTranslation('dark_mode')}`;
        }
    }
}

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('aquanimeDarkMode', isDarkMode ? 'true' : 'false');

            if (isDarkMode) {
                darkModeToggle.innerHTML = `<i class="fas fa-sun"></i> ${getTranslation('light_mode')}`;
            } else {
                darkModeToggle.innerHTML = `<i class="fas fa-moon"></i> ${getTranslation('dark_mode')}`;
            }
        });
        initializeDarkMode(); // Inisialisasi dark mode saat halaman dimuat
    }

    // ========================================= //
    // PORTAL SEARCH ENGINE (Specific to portal.html) //
    // This part is wrapped inside DOMContentLoaded and assumed to be in script.js
    // but the search logic itself is conditionally available.
    // To make it truly isolated for portal.html, it would be a <script> tag within portal.html itself.
    // However, as per previous instructions, it was handled this way.
    // For translation of search results, the getTranslation function is used.

    // Check if on portal.html before trying to access search elements
    if (window.location.pathname.includes('portal.html')) {
        const searchInput = document.getElementById('portal-search-input');
        const searchButton = document.getElementById('portal-search-button');
        const portalContentList = document.getElementById('portal-content-list');
        const searchResultInfo = document.getElementById('search-result-info');

        // Collect all searchable items
        let searchableItems = []; // Use let so it can be re-assigned

        function populateSearchableItems() {
             searchableItems = []; // Clear and re-populate
             if (portalContentList) {
                portalContentList.querySelectorAll('a').forEach(link => {
                    const textContent = link.textContent.toLowerCase();
                    const searchTermAttribute = link.dataset.searchTerm ? link.dataset.searchTerm.toLowerCase() : '';
                    // Find the immediate parent <h3> that acts as a category header
                    let categoryHeader = link.closest('ul')?.previousElementSibling;
                    if (!categoryHeader || categoryHeader.tagName !== 'H3') {
                        categoryHeader = link.closest('.portal-gallery-grid')?.previousElementSibling;
                        if (categoryHeader?.tagName !== 'H3') {
                            categoryHeader = null; // No direct H3 parent found
                        }
                    }
                    const categoryText = categoryHeader ? categoryHeader.textContent.toLowerCase() : '';

                    searchableItems.push({
                        element: link.closest('li') || link.closest('.portal-gallery-item') || link,
                        originalDisplay: (link.closest('li') || link.closest('.portal-gallery-item') || link).style.display,
                        text: textContent,
                        searchTerm: searchTermAttribute,
                        category: categoryText
                    });
                });
            }
        }
        
        // Populate initially
        populateSearchableItems();


        window.performSearch = function() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            let resultsFound = 0;

            // Re-populate searchable items to get latest translated text
            populateSearchableItems();

            searchableItems.forEach(item => {
                const displayElement = item.element; // This is the <li> or .portal-gallery-item

                // Check against the current textContent, data-search-term, and category
                const match = item.text.includes(searchTerm) || item.searchTerm.includes(searchTerm) || item.category.includes(searchTerm);

                if (searchTerm === '') {
                    displayElement.style.display = displayElement.tagName === 'LI' || displayElement.classList.contains('portal-gallery-item') ? '' : 'block'; // Ensure li/gallery items are shown
                    resultsFound++;
                } else if (match) {
                    displayElement.style.display = displayElement.tagName === 'LI' || displayElement.classList.contains('portal-gallery-item') ? '' : 'block';
                    resultsFound++;
                } else {
                    displayElement.style.display = 'none';
                }
            });

            // Handle categories (h3 tags) - hide if all their children are hidden
            if (portalContentList) {
                portalContentList.querySelectorAll('h3').forEach(h3 => {
                    let allChildrenHidden = true;
                    let nextElement = h3.nextElementSibling;
                    while (nextElement && (nextElement.tagName === 'UL' || nextElement.classList.contains('portal-gallery-grid'))) {
                        let visibleChildrenCount = 0;
                        if (nextElement.tagName === 'UL') {
                            visibleChildrenCount = Array.from(nextElement.children).filter(child => child.style.display !== 'none').length;
                        } else if (nextElement.classList.contains('portal-gallery-grid')) {
                            visibleChildrenCount = Array.from(nextElement.children).filter(child => child.style.display !== 'none').length;
                        }

                        if (visibleChildrenCount > 0) {
                            allChildrenHidden = false;
                            break;
                        }
                        nextElement = nextElement.nextElementSibling;
                    }

                    if (searchTerm === '') {
                        h3.style.display = '';
                    } else if (allChildrenHidden) {
                        h3.style.display = 'none';
                    } else {
                        h3.style.display = '';
                    }
                });
            }

            // Update search result info with translation
            if (searchResultInfo) {
                if (searchTerm === '') {
                    searchResultInfo.style.display = 'none';
                } else {
                    if (resultsFound > 0) {
                        // getTranslation will use the current language for the template string
                        searchResultInfo.textContent = getTranslation('portal_search_results_found')
                            .replace('{count}', resultsFound)
                            .replace('{term}', searchTerm);
                    } else {
                        searchResultInfo.textContent = getTranslation('portal_search_no_results').replace('{term}', searchTerm);
                    }
                    searchResultInfo.style.display = 'block';
                }
            }
        }


        if (searchInput && searchButton) {
            searchInput.addEventListener('input', performSearch); // Live search on input
            searchButton.addEventListener('click', performSearch);
            searchInput.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    performSearch();
                }
            });

            // Initial search call to populate result info and show all categories on load
            // This is important because setLanguage also calls performSearch.
            if (searchInput.value === '') {
                performSearch();
            }
        }
    }
}); // Akhir DOMContentLoaded