# Kedai Minuman Segar - Landing Page

Landing page modern dan responsif untuk bisnis minuman "Kedai Minuman Segar". Dibuat sebagai tugas Pemrograman Web Semester 3.

![Preview](https://img.shields.io/badge/Status-Completed-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Deskripsi

Website landing page sederhana namun elegan untuk mempromosikan dan menerima pemesanan minuman. Dirancang dengan estetika modern menggunakan CSS custom properties, gradient background, glassmorphism effects, dan animasi halus.

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| **Hero Section** | Headline menarik dengan CTA button yang smooth-scroll ke form pesan |
| **Layanan Unggulan** | 3 kartu fitur: Penyajian Cepat, Rasa Luar Biasa, Harga Terjangkau |
| **Form Pemesanan** | Form kontak terintegrasi dengan `mailto:` untuk kirim pesanan via email |
| **Sticky Header** | Navigasi tetap di atas dengan efek glassmorphism (backdrop-filter) |
| **Fully Responsive** | Mobile-first, breakpoints di 700px |
| **Smooth Animations** | Hover effects, transitions, dan scroll behavior |

## 🛠️ Teknologi

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Media queries
- **Vanilla JavaScript** - Form handling & smooth scroll
- **No dependencies** - Zero framework, zero build step

## 📁 Struktur Project

```
Slicing/
├── index.html      # Main HTML structure
├── style.css       # All styling (275 lines)
├── script.js       # Interactions (21 lines)
└── README.md       # This file
```

## 🚀 Cara Menjalankan

**Opsi 1: Buka langsung**
```bash
# Double-click index.html atau
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

**Opsi 2: Live Server (VS Code)**
1. Install extension "Live Server"
2. Right-click `index.html` → "Open with Live Server"

**Opsi 3: Python HTTP Server**
```bash
python -m http.server 8000
# Buka http://localhost:8000
```

## 🎨 Design System

### Warna (CSS Custom Properties)
```css
:root {
  --ink: #19231c;        /* Teks utama */
  --muted: #617065;      /* Teks sekunder */
  --cream: #fffdf5;      /* Background utama */
  --leaf: #1f6b48;       /* Primary brand (hijau) */
  --leaf-dark: #12442e;  /* Primary dark */
  --lime: #d8f27c;       /* Accent (kuning-hijau) */
  --peach: #ffd2a7;      /* Accent (oranye) */
  --line: #dfe8d9;       /* Border */
  --shadow: 0 18px 50px rgba(19, 61, 37, 0.12);
}
```

### Tipografi
- **Display**: Georgia, "Times New Roman", serif
- **Body**: Arial, Helvetica, sans-serif

## 📱 Responsive Breakpoints

| Device | Width | Layout Changes |
|--------|-------|----------------|
| Mobile | ≤ 700px | Stack grid & form, padding reduced, nav gap smaller |
| Tablet | 701-1024px | Grid 3 kolom, form 2 kolom |
| Desktop | > 1024px | Full padding, max-width containers |

## 📧 Integrasi Email

Form pemesanan menggunakan `mailto:` link:
- **Tujuan**: `edel354313@gmail.com`
- **Subject**: `Pesanan minuman dari [Nama]`
- **Body**: Detail nama, kontak, dan pesanan

> ⚠️ Memerlukan email client default terkonfigurasi di browser/user.

## 👨‍💻 Author

**Muhammad Edel Prasetyo**  
NIM: 252410103038  
Universitas Negeri Jember - Semester 3

## 📄 License

Project ini dibuat untuk keperluan pembelajaran/academic. Bebas digunakan dan dimodifikasi.

---

⭐ **Jika project ini membantu, beri star di repo GitHub-nya ya!**
