# Rencana Pengujian (Test Plan) - Alur Pembelian E-Commerce (menggunakan SauceDemo.com)

## 1. Test Login (Autentikasi)
Prasyarat: Pengguna belum login dan berada di halaman utama.

Langkah-langkah:
1. Buka halaman login.
2. Periksa ketersediaan elemen halaman (form username, form password, dan tombol Login).
3. Input username dan password yang valid.
4. Klik tombol Login.

Hasil yang Diharapkan:
- Halaman login berhasil dimuat dan menampilkan form serta tombol dengan benar.
- Setelah tombol login diklik, pengguna berhasil masuk dan URL berubah/diarahkan ke inventory.html.

## 2. Test Add to Cart (Tambah ke Keranjang)
Prasyarat: Pengguna sudah login dan berada di halaman inventory.html.

Langkah-langkah:
1. Periksa heading halaman.
2. Periksa ketersediaan produk (khususnya Produk A dan Produk B).
3. Klik tombol "Add to Cart" pada Produk A.
4. Klik tombol "Add to Cart" pada Produk B.

Hasil yang Diharapkan:
- Heading dan daftar produk tampil dengan benar.
- Setelah diklik, teks pada tombol "Add to Cart" berubah menjadi "Remove" untuk masing-masing produk yang dipilih.

## 3. Verify Jumlah Barang (Verifikasi Keranjang)
Langkah-langkah:
1. Perhatikan ikon/tombol Shopping Cart di bagian atas halaman.

Hasil yang Diharapkan:
- Tombol Shopping Cart menampilkan teks/badge jumlah barang yang akurat (misal: "2 item") atau sesuai dengan jumlah produk yang baru saja ditambahkan.

## 4. Checkout (Proses Pembayaran)
Langkah-langkah:
1. Klik tombol Shopping Cart.
2. Klik tombol Checkout.
3. Verifikasi halaman Step One, lalu klik tombol Continue.
4. Verifikasi halaman Step Two, lalu isi form pengiriman:
   - First Name
   - Last Name
   - Zip Code
5. Klik tombol Finish.

Hasil yang Diharapkan:
- Setelah klik Checkout, URL berubah menjadi step-one.html.
- Setelah klik Continue, URL berubah menjadi step-two.html.
- Setelah klik Finish, muncul halaman konfirmasi dengan kriteria berikut:
  a. Menampilkan teks: "Thank you for your order".
  b. Menampilkan tombol Back Home.
  c. Menampilkan tombol PDF.
