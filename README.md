# Employee Management System

Project ini adalah aplikasi CRUD data karyawan. Bahasa gampangnya, aplikasi ini dipakai buat:

- lihat data karyawan
- tambah data karyawan
- edit data karyawan
- hapus data karyawan
- simpan data di browser lewat `localStorage`

Tampilan utamanya dibangun dengan HTML + Tailwind CSS, lalu logika datanya dipisah ke beberapa file kecil supaya lebih rapi dan gampang dibaca.

## Cara berpikir proyek ini

Kalau dibayangin kayak rumah, maka:

- `index.html` itu pintu masuk rumahnya
- `assets/partials/` itu potongan-potongan tampilan
- `assets/js/` itu otak yang ngurus perilaku aplikasi
- `assets/css/` itu bagian yang ngurus gaya tambahan
- `assets/libs/` itu tempat library pendukung

## Penjelasan file satu per satu

### 1. `index.html`

Ini file paling utama. Saat browser buka proyek ini, `index.html` yang pertama dibaca.

Isi pentingnya:

- memanggil Tailwind CSS dari CDN supaya tampilan cepat jadi rapi
- memanggil file CSS custom dari `assets/css/style.css`
- menyediakan tempat kosong untuk beberapa bagian halaman seperti header, summary, action bar, table, dan modal
- memuat semua file JavaScript yang dipakai aplikasi

Bagian yang paling penting dari file ini adalah bagian loader partial. Di sana, halaman mengambil isi dari file HTML kecil lain lalu memasukkannya ke tempat yang sesuai.

Jadi alurnya begini:

1. halaman dibuka
2. `index.html` menyiapkan wadah kosong
3. file partial dibaca satu per satu
4. isi partial dimasukkan ke halaman
5. file JavaScript lain mulai jalan

Kenapa dipisah seperti ini? Biar halaman tidak penuh di satu file besar. Jadi lebih enak dirawat.

### 2. `assets/css/style.css`

File ini masih kosong.

Fungsinya nanti adalah tempat untuk gaya tambahan yang tidak dibuat oleh Tailwind. Misalnya kalau nanti mau:

- kasih animasi khusus
- atur spacing tambahan
- bikin tampilan yang tidak cukup kalau cuma pakai class Tailwind

Bahasa gampangnya, file ini seperti lemari buat nyimpen baju tambahan. Sekarang belum ada isinya, tapi tempatnya sudah disiapkan.

### 3. `assets/partials/header.html`

Ini bagian atas halaman.

Isinya:

- label kecil bertuliskan `jQuery CRUD Test`
- judul besar `Employee Management System`
- deskripsi singkat tentang sistem
- badge `System Active` di sisi kanan

Fungsi file ini adalah memberi kesan pertama ke user. Jadi saat halaman dibuka, user langsung tahu kalau ini aplikasi manajemen karyawan.

Bagian ini juga sengaja dipisah dari `index.html` supaya kalau mau ubah judul atau teks pembuka, kita tidak perlu bongkar seluruh halaman.

### 4. `assets/partials/summary.html`

File ini masih kosong.

Namanya `summary`, jadi biasanya bagian ini dipakai untuk ringkasan data. Misalnya:

- total karyawan
- total departemen
- rata-rata gaji

Kalau file ini nanti diisi, dia akan jadi tempat kartu-kartu ringkasan kecil di atas tabel.

### 5. `assets/partials/action-bar.html`

File ini masih kosong.

Biasanya bagian action bar dipakai untuk tombol dan kontrol penting. Contohnya:

- tombol `Tambah Karyawan`
- kotak pencarian
- filter data

Bagian ini penting karena di sinilah user biasanya mulai melakukan aksi.

### 6. `assets/partials/table.html`

File ini masih kosong.

Secara nama, file ini mestinya berisi struktur tabel data karyawan. Biasanya isinya:

- header kolom tabel
- body tabel untuk data desktop
- area kartu untuk tampilan mobile
- tempat kosong kalau data belum ada

Di proyek ini, rendering tabelnya ditangani dari JavaScript, jadi file ini kemungkinan hanya menyiapkan kerangka HTML-nya saja.

### 7. `assets/partials/modal.html`

File ini masih kosong.

Modal itu jendela pop-up yang muncul di tengah layar. Biasanya dipakai untuk:

- tambah data baru
- edit data lama

Kalau file ini nanti diisi, biasanya di dalamnya ada:

- judul modal
- form input nama, email, jabatan, departemen, gaji, dan tanggal masuk
- tombol simpan, update, cancel, dan close

Modal ini penting karena semua proses tambah dan edit data biasanya lewat sini.

### 8. `assets/libs/jquery.min.js`

File ini disiapkan untuk library jQuery.

Kenapa penting? Karena banyak file JavaScript di proyek ini masih memakai pola jQuery seperti:

- `$(document).on(...)`
- `$(...).val()`
- `$(...).text()`
- `$(...).append()`

Jadi file ini ibarat alat bantu utama supaya semua script yang pakai `$` bisa jalan.

Kalau file ini kosong, maka script yang mengandalkan jQuery bisa gagal jalan. Jadi file ini harus benar-benar berisi library yang valid.

### 9. `assets/js/config/app.config.js`

File ini berisi pengaturan dasar aplikasi.

Di dalamnya ada:

- nama aplikasi
- versi
- nama author
- key untuk `localStorage`
- daftar departemen
- format mata uang

Fungsinya supaya nilai-nilai penting tidak ditulis berulang di banyak file.

Contoh gampangnya:

- kalau key storage mau diganti, cukup ubah di satu tempat
- kalau daftar departemen mau ditambah, cukup ubah di satu file ini

Ini file seperti papan catatan pusat.

### 10. `assets/js/helpers/storage.helper.js`

File ini adalah helper untuk urusan simpan dan ambil data dari `localStorage`.

Isi fungsinya:

- `set` untuk menyimpan data
- `get` untuk mengambil data
- `remove` untuk menghapus data tertentu
- `clearAll` untuk membersihkan semua data

Kenapa perlu helper seperti ini? Biar akses ke `localStorage` lebih rapi dan tidak berantakan di banyak file.

Bahasa gampangnya, file ini seperti tangan kecil yang bantu simpan barang ke laci browser.

### 11. `assets/js/helpers/validation.helper.js`

File ini tugasnya mengecek data sebelum disimpan.

Yang dicek antara lain:

- nama harus ada
- email harus format yang benar
- jabatan harus ada
- departemen harus ada
- gaji harus lebih dari 0
- tanggal masuk harus ada

File ini juga punya fungsi untuk:

- ambil data dari form
- reset form
- tampilkan atau sembunyikan pesan error

Jadi sebelum data masuk ke storage, file ini memastikan data tidak kosong atau rusak.

### 12. `assets/js/components/table.components.js`

File ini bertugas menampilkan data karyawan ke layar.

Fungsi pentingnya:

- render tabel desktop
- render kartu mobile
- menampilkan kondisi kosong kalau data belum ada
- memformat angka gaji menjadi Rupiah
- update kartu ringkasan statistik

Bahasa bayi-nya: file ini seperti tukang pajang. Data yang sudah ada di storage diambil lalu dipamerkan ke halaman.

### 13. `assets/js/components/modal.components.js`

File ini mengurus modal tambah dan edit.

Yang dilakukan file ini:

- buka modal mode tambah
- buka modal mode edit
- isi form dengan data yang mau diedit
- tutup modal
- pasang event untuk tombol close, cancel, dan klik area luar modal

Jadi kalau user klik `Tambah Karyawan` atau tombol `Edit`, file ini yang bantu menyalakan modalnya.

### 14. `assets/js/components/alert.components.js`

File ini untuk pesan kecil muncul di pojok layar, biasanya disebut toast.

Fungsinya:

- kasih pesan sukses
- kasih pesan error
- kasih pesan info

Kalau ada aksi berhasil atau gagal, file ini yang menampilkan notifikasi supaya user tahu hasilnya.

### 15. `assets/js/services/data.services.js`

File ini adalah pusat olah data karyawan.

Fungsi-fungsinya:

- ambil semua karyawan
- simpan semua karyawan
- tambah karyawan baru
- cari karyawan by ID
- update data karyawan
- hapus karyawan
- cari data berdasarkan keyword
- hitung statistik

Kalau diibaratkan, file ini seperti dapur utama. Semua proses data masuk sini dulu.

### 16. `assets/js/handlers/create.handler.js`

File ini menangani proses tambah karyawan.

Tugasnya:

- pas tombol tambah diklik, modal dibuka
- saat form disubmit, data dicek dulu
- kalau valid, data disimpan
- modal ditutup
- tabel di-refresh
- toast sukses ditampilkan

Jadi file ini fokus ke alur create saja, supaya logic tambah data tidak bercampur dengan logic lain.

### 17. `assets/js/handlers/read.handler.js`

File ini menangani pembacaan dan penampilan data.

Tugasnya:

- ambil semua data dari service
- render tabel
- update ringkasan statistik
- pasang fitur pencarian

Kalau diibaratkan, file ini adalah mata yang melihat isi storage lalu menampilkannya ke layar.

### 18. `assets/js/handlers/update.handler.js`

File ini menangani proses edit data.

Tugasnya:

- pas tombol edit diklik, data karyawan diambil dulu
- modal dibuka dalam mode edit
- form diisi otomatis dengan data lama
- saat form disubmit, data divalidasi lagi
- data di-update
- modal ditutup
- tabel di-refresh

Jadi file ini khusus untuk jalan edit, bukan tambah.

### 19. `assets/js/handlers/delete.handler.js`

File ini menangani hapus data.

Tugasnya:

- pas tombol delete diklik, muncul konfirmasi
- kalau user setuju, data dihapus dari storage
- tabel di-refresh
- toast sukses ditampilkan

File ini dibuat terpisah supaya proses hapus lebih aman dan mudah dibaca.

### 20. `assets/js/main.js`

File ini adalah titik mulai JavaScript aplikasi.

Tugasnya:

- load partial tampilan
- jalankan inisialisasi `ReadHandler`
- jalankan inisialisasi `ModalComponent`
- jalankan inisialisasi `CreateHandler`
- jalankan inisialisasi `UpdateHandler`
- jalankan inisialisasi `DeleteHandler`

Bahasa gampangnya, file ini seperti tombol starter mobil. Dia tidak mengerjakan semua hal sendiri, tapi dia memanggil semua bagian lain supaya hidup bareng.

## Ringkasan alur kerja

Alur aplikasi ini sederhana:

1. browser buka `index.html`
2. layout dasar muncul
3. partial HTML dimuat ke dalam halaman
4. script helper dan component diaktifkan
5. data diambil dari `localStorage`
6. tabel dan summary ditampilkan
7. user bisa tambah, edit, hapus, dan cari data

## Catatan kecil

Beberapa file di proyek ini masih kosong. Itu bukan salah, tapi artinya file-file itu masih jadi tempat yang disiapkan untuk diisi nanti.

Kalau mau, kamu bisa lanjut isi file kosong itu pelan-pelan supaya project ini jadi lebih lengkap.
