/**
 * Translation dictionary mapping English and Indonesian locales.
 * Contains strings for all copy throughout the portfolio website sections.
 */
export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Skills",
      work: "Work",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      status: "Available for Opportunities",
      greeting: "Irfan Thalib Alfarid",
      description: "Building scalable, pixel-perfect applications. Focused on the React & Laravel ecosystem.",
      ctaWork: "View My Work",
      ctaResume: "Download CV",
      stats: {
        experience: "Years Exp.",
        projects: "Projects Built",
        lines: "Lines of Code",
      },
      roles: [
        "Full Stack Developer",
        "Software Engineer",
      ],
    },
    about: {
      num: "01.",
      sectionTitle: "About Me",
      heading: "Engineering precision into every interaction.",
      p1: "High-performing Software Engineer with solid experience in Web Development and internal Enterprise Resource Planning (ERP) system development. Deep domain expertise in corporate procurement workflows and financial modules.",
      p2: "Proven leadership as an Internship Program Assistant Lead, managing human resource development. Cisco CCNA certified with strong interest in Web Development, Network Engineering, Data Science, Automation, and IT Infrastructure.",
      p3: "Based in Malang, East Java. When I'm not shipping features, you'll find me tinkering with self-hosted Linux servers, configuring Nextcloud deployments, or playing badminton.",
      cta: "Let's work together",
      stats: {
        exp: "Years Experience",
        projects: "Projects Shipped",
        clients: "Happy Clients",
        coffee: "Cups of Coffee",
      },
      stackTitle: "The Stack",
      availability: {
        title: "Available for Work",
        desc: "Open to freelance & full-time roles",
        cta: "Contact",
      },
    },
    services: {
      num: "02.",
      sectionTitle: "What I Do",
      heading: "Skills & Expertise",
      subtitle: "From idea to deployment — I cover the full product lifecycle with a focus on quality and developer experience.",
      items: [
        {
          title: "Web Application Development",
          description: "End-to-end web apps built with React & Next.js on the front, Laravel or Node on the back.",
        },
        {
          title: "API Design & Integration",
          description: "RESTful and GraphQL APIs engineered to scale. Third-party integrations, auth flows, and webhooks.",
        },
        {
          title: "UI/UX Engineering",
          description: "Pixel-perfect interfaces that feel alive. Smooth animations, accessible components, and responsive layouts.",
        },
        {
          title: "Performance Optimization",
          description: "Pushing Lighthouse scores to 100. Core Web Vitals tuning, code-splitting, caching, and image optimization.",
        },
        {
          title: "Mobile-First Development",
          description: "Progressive Web Apps and React Native builds that work seamlessly. Offline-first architectures.",
        },
        {
          title: "Code Review & Consulting",
          description: "Architecture reviews, legacy refactoring, and technical consulting to help your team ship faster.",
        },
      ],
    },
    experience: {
      num: "03.",
      sectionTitle: "Journey",
      heading: "Experience & Education",
      subtitle: "A timeline of roles, projects, and learning milestones that shaped who I am as a developer.",
      items: [
        {
          period: "Dec 2024 — Apr 2026",
          role: "Staff Programmer & Internship Program Assistant Lead",
          company: "PT Inti Daya Energitama",
          description: "Designed, developed, and maintained an internal ERP system. Subject-matter expert for Procurement & Finance modules. Led intern mentoring, task distribution, and full administrative cycle management.",
        },
        {
          period: "Jun 2022 — Dec 2022",
          role: "Software & System Developer Intern",
          company: "PT Inti Daya Energitama",
          description: "Implemented SDLC methodologies, modernized the company profile website, converted Figma designs to responsive React components, and built a mobile POS app with Flutter.",
        },
        {
          period: "Sep 2019 — Aug 2023",
          role: "Bachelor of Information Technology",
          company: "Politeknik Negeri Malang",
          description: "GPA 3.80/4.00. PKM-GFT funding recipient (2022). 3rd place in national KMIPN III E-Government competition (2021). 3rd place in Intercomp Application Innovation (2022).",
        },
        {
          period: "2024",
          role: "Cisco CCNA Network Engineer",
          company: "DTS PROA Pusbang Proserti Kominfo",
          description: "Completed professional certification training in network engineering fundamentals, routing, switching, and network security through the Cisco Networking Academy program.",
        },
      ],
    },
    projects: {
      num: "04.",
      sectionTitle: "Portfolio",
      heading: "Selected Works",
      subtitle: "A collection of projects that showcase my passion for building clean, robust applications.",
      placeholderText: "Add Image → image field",
      comingSoon: "Links coming soon",
      items: {
        nebula: {
          title: "IdeasX",
          description: "High-frequency trading analytics platform.",
          longDesc: "A robust financial analytics platform designed for high-frequency trading. Real-time data pipelines, custom charting engine, and sub-100ms query latency.",
          category: "2025",
        },
        velox: {
          title: "SIPROPER PUSAKA",
          description: "Headless e-commerce with perfect Lighthouse scores.",
          longDesc: "Headless storefront built on Shopify's Storefront API. Achieves 100 Lighthouse on all metrics through aggressive caching, image optimisation, and edge rendering.",
          category: "2025",
        },
        sync: {
          title: "Cluster LIB",
          description: "Offline-first productivity PWA.",
          longDesc: "Local-first architecture using CRDTs for conflict-free sync. Works fully offline and syncs instantly when reconnected. Built with React Native & Supabase.",
          category: "2023",
        },
      },
    },
    contact: {
      num: "05.",
      sectionTitle: "Contact",
      heading: "Let's build something legendary.",
      subtitle: "I'm open to freelance projects and full-time positions. Have an idea? Let's talk.",
      availability: "Currently Available",
      responseTime: "Typical response time: within 24 hours. Based in Indonesia — comfortable working across any timezone.",
      form: {
        nameLabel: "Your Name",
        namePlaceholder: "John Doe",
        emailLabel: "Your Email",
        emailPlaceholder: "john@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project...",
        submitBtn: "Send Message",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Keahlian",
      work: "Portofolio",
      contact: "Kontak",
      resume: "Resume",
    },
    hero: {
      status: "Tersedia untuk Kesempatan Kerja",
      greeting: "Irfan Thalib",
      description: "Membangun aplikasi yang skalabel dan pixel-perfect. Fokus pada ekosistem React & Laravel.",
      ctaWork: "Lihat Karya Saya",
      ctaResume: "Unduh CV",
      stats: {
        experience: "Tahun Pengalaman",
        projects: "Proyek Selesai",
        lines: "Baris Kode",
      },
      roles: [
        "Developer Full Stack",
        "Insinyur React",
        "Developer Laravel",
        "Peminat UI/UX",
      ],
    },
    about: {
      num: "01.",
      sectionTitle: "Tentang Saya",
      heading: "Merekayasa presisi ke dalam setiap interaksi.",
      p1: "Software Engineer berkinerja tinggi dengan pengalaman solid dalam Web Development dan pengembangan sistem Enterprise Resource Planning (ERP) internal. Memiliki keahlian mendalam pada alur kerja procurement dan modul keuangan korporat.",
      p2: "Terbukti memiliki kemampuan kepemimpinan sebagai Internship Program Assistant Lead dalam mengelola manajemen sumber daya manusia. Memiliki sertifikasi Cisco CCNA dengan ketertarikan kuat untuk terus berkembang di bidang Web Development, Network Engineering, Data Science, Automation, dan IT Infrastructure.",
      p3: "Berbasis di Kota Malang, Jawa Timur. Ketika tidak sedang merilis fitur, saya mengelola server Linux self-hosted, mengonfigurasi deployment Nextcloud, atau bermain bulu tangkis.",
      cta: "Mari bekerja sama",
      stats: {
        exp: "Tahun Pengalaman",
        projects: "Proyek Selesai",
        clients: "Klien Puas",
        coffee: "Cangkir Kopi",
      },
      stackTitle: "Teknologi",
      availability: {
        title: "Tersedia untuk Bekerja",
        desc: "Terbuka untuk peran freelance & purna waktu",
        cta: "Kontak",
      },
    },
    services: {
      num: "02.",
      sectionTitle: "Keahlian Saya",
      heading: "Keahlian & Kemampuan",
      subtitle: "Dari ide hingga penerapan — saya mencakup seluruh siklus hidup produk dengan fokus pada kualitas dan pengalaman developer.",
      items: [
        {
          title: "Pengembangan Aplikasi Web",
          description: "Aplikasi web end-to-end yang dibangun dengan React & Next.js di frontend, Laravel atau Node di backend.",
        },
        {
          title: "Desain & Integrasi API",
          description: "RESTful dan GraphQL API yang dirancang untuk skala besar. Integrasi pihak ketiga, alur autentikasi, dan sistem webhook.",
        },
        {
          title: "Rekayasa UI/UX",
          description: "Antarmuka pixel-perfect yang terasa hidup. Animasi halus, komponen aksesibel, dan tata letak responsif di semua perangkat.",
        },
        {
          title: "Optimasi Performa",
          description: "Skor Lighthouse mendekati 100. Penyetelan Core Web Vitals, pemisahan kode, strategi caching, dan optimasi gambar.",
        },
        {
          title: "Pengembangan Mobile-First",
          description: "Progressive Web Apps dan pembuatan React Native yang bekerja secara offline. Arsitektur lokal-first dengan sinkronisasi instan.",
        },
        {
          title: "Code Review & Konsultasi",
          description: "Tinjauan arsitektur, refaktorisasi kode warisan, dan konsultasi teknis untuk membantu tim Anda merilis lebih cepat.",
        },
      ],
    },
    experience: {
      num: "03.",
      sectionTitle: "Perjalanan",
      heading: "Pengalaman & Edukasi",
      subtitle: "Linimasa peran, proyek, dan tonggak pembelajaran yang membentuk siapa saya sebagai developer.",
      items: [
        {
          period: "Des 2024 — Apr 2026",
          role: "Staff Programmer & Internship Program Assistant Lead",
          company: "PT Inti Daya Energitama",
          description: "Merancang, mengembangkan, dan memelihara aplikasi ERP internal perusahaan. Subject-matter expert modul Procurement & Keuangan. Memimpin mentoring magang, distribusi kerja, dan pengelolaan siklus administratif program magang secara menyeluruh.",
        },
        {
          period: "Jun 2022 — Des 2022",
          role: "PKL Software & System Developer",
          company: "PT Inti Daya Energitama",
          description: "Mengimplementasikan metode SDLC, memperbarui website company profile, mengonversi desain Figma ke komponen React responsif, dan membangun aplikasi mobile POS dengan Flutter.",
        },
        {
          period: "Sep 2019 — Agu 2023",
          role: "Sarjana Teknologi Informasi",
          company: "Politeknik Negeri Malang",
          description: "IPK 3.80/4.00. Peraih pendanaan PKM-GFT (2022). Juara 3 KMIPN III tingkat Nasional bidang E-Government (2021). Juara 3 Intercomp bidang Inovasi Aplikasi (2022).",
        },
        {
          period: "2024",
          role: "Cisco CCNA Network Engineer",
          company: "DTS PROA Pusbang Proserti Kominfo",
          description: "Menyelesaikan pelatihan sertifikasi profesional dalam dasar-dasar network engineering, routing, switching, dan keamanan jaringan melalui program Cisco Networking Academy.",
        },
      ],
    },
    projects: {
      num: "04.",
      sectionTitle: "Portofolio",
      heading: "Karya Pilihan",
      subtitle: "Kumpulan proyek yang menunjukkan gairah saya untuk membangun aplikasi yang bersih dan kokoh.",
      placeholderText: "Tambahkan Gambar → kolom gambar",
      comingSoon: "Tautan segera hadir",
      items: {
        nebula: {
          title: "IdeasX",
          description: "Platform analisis perdagangan frekuensi tinggi.",
          longDesc: "Platform analisis keuangan kokoh yang dirancang untuk perdagangan frekuensi tinggi. Saluran data waktu nyata, mesin pembuat bagan khusus, dan latensi kueri sub-100ms.",
          category: "2025",
        },
        velox: {
          title: "SIPROPER PUSAKA",
          description: "E-commerce headless dengan skor Lighthouse sempurna.",
          longDesc: "Etalase toko headless yang dibangun di atas Shopify Storefront API. Mencapai skor Lighthouse 100 di semua metrik melalui caching agresif, optimasi gambar, dan rendering edge.",
          category: "2025",
        },
        sync: {
          title: "Cluster LIB",
          description: "PWA produktivitas offline-first.",
          longDesc: "Arsitektur lokal-first menggunakan CRDT untuk sinkronisasi bebas konflik. Bekerja sepenuhnya offline dan sinkronisasi instan saat terhubung kembali. Dibangun dengan React Native & Supabase.",
          category: "2023",
        },
      },
    },
    contact: {
      num: "05.",
      sectionTitle: "Kontak",
      heading: "Mari membangun sesuatu yang legendaris.",
      subtitle: "Saya terbuka untuk proyek freelance dan posisi penuh waktu. Punya ide? Mari berdiskusi.",
      availability: "Saat Ini Tersedia",
      responseTime: "Waktu tanggapan biasa: dalam 24 jam. Berbasis di Indonesia — nyaman bekerja di zona waktu mana pun.",
      form: {
        nameLabel: "Nama Anda",
        namePlaceholder: "John Doe",
        emailLabel: "Email Anda",
        emailPlaceholder: "john@example.com",
        messageLabel: "Pesan",
        messagePlaceholder: "Ceritakan tentang proyek Anda...",
        submitBtn: "Kirim Pesan",
      },
    },
    footer: {
      rights: "Hak cipta dilindungi.",
    },
  },
};
