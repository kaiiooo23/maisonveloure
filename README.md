# 🏛️ Maison Velouré — Parisian Haute Couture & Boutique E-Commerce (v2.0 React)

Maison Velouré adalah platform web butik digital premium yang mengusung konsep keanggunan busana modern dengan sentuhan estetika klasik khas Prancis (*French-Chic & Parisian Aesthetic*). Proyek ini telah dirombak total menggunakan arsitektur modern berbasis **Vite + React 18 + Tailwind CSS** dengan performa tinggi, modularitas komponen, dan *state management* reaktif.

---

## ✨ Fitur Utama (New Features & Architecture)

1. **Slide-Over Shopping Bag Drawer:** Keranjang belanja interaktif yang muncul dari sisi layar dengan animasi halus, indikator gratis ongkir dinamis, dan kalkulasi otomatis.
2. **Persistent Cart & Wishlist State:** Data keranjang belanja dan produk favorit otomatis tersimpan di `localStorage`, sehingga tidak hilang saat halaman di-refresh.
3. **Interactive Quick View Modal:** Pratinjau detail busana mencakup komposisi kain, pemilihan warna/ukuran, rating ulasan, dan garansi butik.
4. **Live Search & Dynamic Filter System:** Pencarian *real-time* berdasarkan nama dan deskripsi busana, filter kategori tab, rentang harga, ukuran (S, M, L, XL), serta opsi pengurutan (*sorting*).
5. **Modern Checkout Experience:** Alur checkout elegan terintegrasi dengan validasi formulir dan berbagai metode pembayaran (Virtual Account, QRIS / E-Wallet, Kurir COD).
6. **Toast Feedback Notifications:** Menggantikan `alert()` bawaan browser dengan notifikasi mengambang (*floating toast*) yang elegan dan responsif.
7. **Editorial & Muses Lookbook:** Portofolio kurasi model busana dengan tipografi editorial *Playfair Display* & *Plus Jakarta Sans*.

---

## 🛠️ Tech Stack Modern

- **Core Framework:** React 18
- **Build Engine:** Vite 6 (HMR super cepat & build optimal)
- **Styling:** Tailwind CSS 3.4 (Tailwind JIT & PostCSS)
- **Icons:** Lucide React
- **Typography:** Google Fonts (*Playfair Display* & *Plus Jakarta Sans*)
- **Deployment:** Vercel / Netlify Ready

---

## 🚀 Panduan Instalasi & Menjalankan Proyek

### 1. Kloning & Masuk ke Folder Proyek
```bash
git clone https://github.com
cd maisonveloure-main
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Lokal (Development)
```bash
npm run dev
```
Buka browser pada alamat yang tertera di terminal (biasanya `http://localhost:3000` atau `http://localhost:5173`).

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build produksi siap di-deploy akan berada di dalam folder `dist/`.

---

## 📁 Struktur Direktori

```
maisonveloure-main/
├── dist/                     # Hasil build produksi siap rilis
├── public/
│   └── assets/images/        # Aset gambar lokal statis (hero, models, products, about)
├── src/
│   ├── components/           # Komponen UI modular
│   │   ├── AboutSection.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── Catalog.jsx
│   │   ├── CheckoutModal.jsx
│   │   ├── EditorialSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Newsletter.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetailModal.jsx
│   │   └── Toast.jsx
│   ├── context/
│   │   └── CartContext.jsx   # State management keranjang & wishlist
│   ├── data/
│   │   └── products.js       # Data katalog busana & muse editorial
│   ├── App.jsx               # Komponen root aplikasi
│   ├── index.css             # Entry point Tailwind CSS & styling kustom
│   └── main.jsx              # Mount root React
├── index.html                # Entry point HTML Vite
├── index.legacy.html         # Backup versi HTML monolitik lama
├── package.json              # Dependensi & script proyek
├── postcss.config.js
├── tailwind.config.js        # Konfigurasi palet warna & tipografi luxury
└── vite.config.js            # Konfigurasi bundler Vite
```
