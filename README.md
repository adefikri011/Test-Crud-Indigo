<div align="center">

# 🧑‍💼 Employee Management System

**Aplikasi CRUD data karyawan berbasis jQuery yang berjalan sepenuhnya di browser.**
Modular · Responsif · Tanpa Backend · Siap Demo

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![esbuild](https://img.shields.io/badge/esbuild-FFCF00?style=flat-square&logo=esbuild&logoColor=black)](https://esbuild.github.io)

</div>

---

## 📖 Tentang Project

**Employee Management System** adalah aplikasi web CRUD untuk mengelola data karyawan. Dibangun dengan pendekatan modular agar mudah dipahami, dikembangkan, dan dipresentasikan — cocok untuk demo teknis, portofolio, maupun keperluan interview.

Seluruh data disimpan langsung di browser menggunakan `localStorage`, sehingga tidak membutuhkan server atau koneksi internet.

---

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/adefikri011/Test-Crud-Indigo.git
cd crud-jquery-indogo
```

### 2. Install & Build

```bash
npm install
npm run build:css
npm run build:js
```

### 3. Jalankan Aplikasi

Buka `index.html` menggunakan **Live Server** atau server statis lainnya agar seluruh asset dapat dimuat dengan benar.

> ⚠️ Jangan membuka `index.html` langsung via `file://` — gunakan Live Server atau server lokal.

---

## ✅ Fitur Utama

| Fitur | Keterangan |
|---|---|
| 📋 **Tampilan Data** | Tabel untuk desktop, kartu untuk mobile |
| ➕ **Tambah Karyawan** | Form modal dengan validasi input |
| ✏️ **Edit Karyawan** | Update data karyawan yang sudah tersimpan |
| 🗑️ **Hapus Karyawan** | Dialog konfirmasi sebelum menghapus |
| 🔍 **Pencarian** | Cari karyawan berdasarkan kata kunci |
| 🏷️ **Filter Departemen** | Filter data berdasarkan departemen |
| 📊 **Statistik Real-time** | Ringkasan jumlah karyawan secara langsung |
| 💾 **Penyimpanan Lokal** | Data tersimpan di browser via `localStorage` |
| 🔔 **Notifikasi & Loading** | Toast notification, loading state, dan validasi form |

### ⛔ Di Luar Scope

Fitur-fitur berikut sengaja tidak disertakan untuk menjaga project tetap fokus dan ringan:

- Login & autentikasi pengguna
- Database server-side
- Multi-role user
- Export data ke PDF/Excel
- Sinkronisasi antar perangkat

---

## 🛠️ Tech Stack

| Teknologi | Peran |
|---|---|
| **HTML5** | Struktur halaman |
| **Tailwind CSS** | Styling utama |
| **Vanilla JavaScript** | Logika utama aplikasi |
| **jQuery** | Manipulasi DOM & event handling |
| **localStorage** | Penyimpanan data di browser |
| **esbuild** | Bundling JavaScript |
| **Tailwind CLI** | Build CSS |

---

## 📁 Struktur Project

```
📦 assets
 ┣ 📂 css
 ┃ ┣ 📜 style.css
 ┃ ┗ 📜 tailwind.css
 ┣ 📂 js
 ┃ ┣ 📂 components          # Komponen UI (modal, tabel, alert, dll.)
 ┃ ┃ ┣ 📜 alert.components.js
 ┃ ┃ ┣ 📜 confirm.components.js
 ┃ ┃ ┣ 📜 icon.components.js
 ┃ ┃ ┣ 📜 loading.components.js
 ┃ ┃ ┣ 📜 modal.components.js
 ┃ ┃ ┣ 📜 sound.components.js
 ┃ ┃ ┗ 📜 table.components.js
 ┃ ┣ 📂 config               # Konfigurasi global aplikasi
 ┃ ┃ ┗ 📜 app.config.js
 ┃ ┣ 📂 handlers              # Penghubung aksi user ↔ service ↔ tampilan
 ┃ ┃ ┣ 📜 create.handler.js
 ┃ ┃ ┣ 📜 delete.handler.js
 ┃ ┃ ┣ 📜 read.handler.js
 ┃ ┃ ┗ 📜 update.handler.js
 ┃ ┣ 📂 helpers               # Fungsi utilitas (storage, validasi)
 ┃ ┃ ┣ 📜 storage.helper.js
 ┃ ┃ ┗ 📜 validation.helper.js
 ┃ ┣ 📂 services              # Logika bisnis & operasi CRUD
 ┃ ┃ ┗ 📜 data.services.js
 ┃ ┣ 📜 app.bundle.js
 ┃ ┣ 📜 app.entry.js
 ┃ ┗ 📜 main.js
 ┣ 📂 libs
 ┃ ┗ 📜 jquery.min.js
 ┗ 📂 sounds
 ┃ ┗ 📜 success.mp3

📦 SDD
 ┣ 📜 actifityDiagram.drawio
 ┣ 📜 sequenceDiagram.drawio
 ┗ 📜 usecase.drawio

📜 index.html
```

### Peran Tiap Lapisan

| Layer | Tanggung Jawab |
|---|---|
| `index.html` | Entry point & markup utama |
| `config/` | Konfigurasi global (identitas app, storage key) |
| `helpers/` | Fungsi utilitas: storage, validasi, proses pendukung |
| `components/` | Komponen visual: modal, tabel, alert, loading, confirm, ikon |
| `services/` | Logika bisnis utama & operasi CRUD |
| `handlers/` | Jembatan antara aksi user, service, dan pembaruan UI |
| `css/` | Stylesheet hasil build & sumber pengembangan |
| `libs/` | Library pihak ketiga |

---

## 🗃️ Data Schema

Data karyawan disimpan di `localStorage` dengan key utama: **`indogo_employees`**

### Contoh Objek Karyawan

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

### Definisi Field

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | `number` | Identifier unik (timestamp) |
| `name` | `string` | Nama karyawan |
| `email` | `string` | Alamat email |
| `position` | `string` | Jabatan atau posisi kerja |
| `department` | `string` | Departemen tempat bekerja |
| `salary` | `string` | Nominal gaji |
| `joinDate` | `string` | Tanggal masuk kerja (YYYY-MM-DD) |
| `createdAt` | `string` | Waktu data dibuat (ISO 8601) |
| `updatedAt` | `string` | Waktu data terakhir diperbarui (ISO 8601) |

---

## 🔄 Application Workflow

```
Browser buka index.html
        ↓
CSS & JavaScript dimuat
        ↓
Data awal diambil dari localStorage
        ↓
Tabel & summary ditampilkan ke halaman
        ↓
User melakukan aksi (cari / filter / tambah / edit / hapus)
        ↓
Perubahan disimpan ke localStorage
        ↓
UI diperbarui tanpa reload halaman
```

---

## 💡 Keunggulan Desain

Project ini dirancang dengan prinsip yang solid, sehingga layak dipresentasikan secara teknis:

- **Modular** — setiap file memiliki satu tanggung jawab yang jelas
- **Alur CRUD yang bersih** — create, read, update, delete tidak saling bercampur
- **Tanpa backend** — mudah dijalankan di mana saja tanpa konfigurasi tambahan
- **Ringan dan cepat** — ideal untuk demo lokal atau presentasi
- **Responsif** — tampilan optimal di desktop maupun mobile
- **UX lengkap** — validasi form, loading state, dan toast notification sudah tersedia
- **Mudah dijelaskan** — alur dan teknologi yang digunakan umum dan mudah dipahami
- **Scalable** — struktur ini siap dikembangkan ke REST API atau database permanen

---

## 🏗️ Build Notes

Setelah melakukan perubahan pada source file, jalankan perintah berikut untuk rebuild:

```bash
npm install
npm run build:css
npm run build:js
```

Project ini sudah dioptimasi dengan:
- CSS hasil build dari Tailwind CLI
- JavaScript dibundle menjadi satu file via esbuild
- Markup utama langsung di halaman untuk performa dan SEO yang lebih baik

---

## 🔮 Future Enhancement

Pengembangan yang bisa ditambahkan ke depannya:

- [ ] Login admin & autentikasi
- [ ] Role-based access control (RBAC)
- [ ] Pagination data karyawan
- [ ] Export ke Excel atau PDF
- [ ] Import data dari file CSV
- [ ] Backend API & database permanen
- [ ] Audit log perubahan data
- [ ] Pencarian yang lebih advanced (fuzzy search)

---

## 📝 Development Notes

> Data disimpan secara lokal di browser — aman untuk demo dan tidak membutuhkan server backend.

> Komponen UI dibuat terpisah agar update tampilan tidak mengganggu logika CRUD.

> Struktur ini cocok untuk pengembangan lanjutan ke arah REST API atau database permanen.

---

<div align="center">

**Project ini dibuat sebagai bagian dari tes keterampilan seleksi magang di [INDOGO.id](https://indogo.id).**

*Fokus pada kesederhanaan, kejelasan alur data, dan pengalaman user yang nyaman.*

</div>