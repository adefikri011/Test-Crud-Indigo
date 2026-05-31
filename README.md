<div align="center">

# Employee Management System

Project tugas pra-interview untuk membangun aplikasi CRUD data karyawan berbasis jQuery, modular, dan berjalan di browser.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![esbuild](https://img.shields.io/badge/esbuild-FFCF00?style=flat-square&logo=esbuild&logoColor=black)](https://esbuild.github.io)

</div>

## Ringkasan

Employee Management System adalah aplikasi CRUD karyawan yang dibuat untuk kebutuhan tes sebelum interview. Project ini menekankan struktur yang rapi, pemisahan tanggung jawab yang jelas, dan pengalaman penggunaan yang responsif di desktop maupun mobile.

Data disimpan di `localStorage`, sehingga aplikasi dapat dijalankan tanpa backend.

## Fitur Utama

- Tampilan tabel desktop dan card mobile
- Tambah, ubah, dan hapus data karyawan
- Pencarian data berdasarkan beberapa field
- Filter departemen
- Ringkasan statistik karyawan
- Modal form, loading state, dan notifikasi
- Penyimpanan data lokal di browser

## Teknologi

- HTML5
- Tailwind CSS
- jQuery
- Vanilla JavaScript
- esbuild

## Struktur Project

```text
.
├── index.html
├── README.md
├── package.json
├── tailwind.config.js
├── partials/
├── SDD/
└── assets/
    ├── css/
    │   ├── style.css
    │   └── tailwind.css
    ├── js/
    │   ├── app.bundle.js
    │   ├── app.entry.js
    │   ├── main.js
    │   ├── components/
    │   ├── config/
    │   ├── handlers/
    │   ├── helpers/
    │   └── services/
    ├── libs/
    │   └── jquery.min.js
    └── sounds/
```

## Cara Menjalankan

1. Install dependency.

```bash
npm install
```

2. Build asset CSS dan JavaScript.

```bash
npm run build:css
npm run build:js
```

3. Jalankan project menggunakan Live Server atau server statis lokal.

> Jangan membuka `index.html` langsung lewat `file://` karena beberapa bagian dimuat menggunakan `fetch`.

## Build Flow

- `assets/css/tailwind.css` adalah source CSS utama
- `assets/css/style.css` adalah hasil build Tailwind
- `assets/js/app.entry.js` adalah entry point JavaScript
- `assets/js/app.bundle.js` adalah hasil bundle esbuild
- `partials/` berisi pemecahan markup halaman utama

## Data Schema

Data karyawan disimpan dengan key `indogo_employees`.

```json
{
  "id": 1717040000000,
  "name": "Ade Fikri",
  "email": "ade@example.com",
  "position": "Developer",
  "department": "IT",
  "salary": "4000000",
  "joinDate": "2026-05-30",
  "createdAt": "2026-05-30T12:00:00.000Z",
  "updatedAt": "2026-05-30T12:30:00.000Z"
}
```

## Catatan Implementasi

- Markup utama dipisah ke beberapa partial agar file lebih mudah dibaca dan dikelola.
- CSS dan JavaScript dibangun dari source file terpisah untuk menjaga struktur project tetap rapi.
- Komponen CRUD dirancang agar logika data dan tampilan tidak saling bercampur.

## Pengembangan Lanjutan

Jika project ini dikembangkan lebih jauh, beberapa fitur yang bisa ditambahkan adalah:

- Login dan autentikasi
- Backend API dan database permanen
- Pagination data
- Export Excel atau PDF
- Import CSV
- Audit log perubahan data

<div align="center">

Project ini dibuat sebagai bagian dari tes keterampilan seleksi magang di [INDOGO.id](https://indogo.id).

</div>
