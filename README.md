# ToDo List Application

Aplikasi ToDo List sederhana yang memungkinkan pengguna untuk menambahkan, mengedit, dan menghapus tugas (task). Aplikasi ini juga memungkinkan pengguna untuk melihat daftar tugas mereka, dan perubahan akan tetap disimpan meskipun halaman direfresh menggunakan fitur `localStorage`.

## Fitur

### 1. **Menambahkan Tugas**
   - Pengguna dapat menambahkan tugas dengan mengetikkan deskripsi tugas di dalam input dan menekan tombol **Add Task** atau menekan tombol **Enter** pada keyboard.
   - Setelah tugas ditambahkan, akan muncul pemberitahuan "Todo List Added Successfully!" di bagian atas aplikasi sebagai konfirmasi.

### 2. **Mengedit Tugas**
   - Setiap tugas yang ditambahkan memiliki ikon **pencil** yang dapat diklik untuk mengedit deskripsi tugas.
   - Ketika ikon **pencil** diklik, teks tugas akan diberi garis (crossed-out) untuk menunjukkan bahwa tugas tersebut sudah selesai.
   - Jika tugas sudah dicoret, mengklik ikon **pencil** lagi akan menghapus coretan tersebut.

### 3. **Menghapus Tugas**
   - Setiap tugas memiliki ikon **trash** yang dapat diklik untuk menghapus tugas.
   - Ketika tugas dihapus, daftar tugas akan diperbarui dan perubahan akan disimpan ke `localStorage`.

### 4. **Persistensi Data (localStorage)**
   - Daftar tugas disimpan secara otomatis di `localStorage`. Ini berarti bahwa meskipun halaman di-refresh, tugas yang telah ditambahkan sebelumnya akan tetap ada.
   - Saat halaman dimuat, data tugas akan dimuat ulang dari `localStorage` dan ditampilkan.

### 5. **Pemberitahuan Sukses**
   - Setelah menambahkan tugas baru, pemberitahuan **Success!** akan muncul di bagian atas halaman untuk memberi tahu pengguna bahwa tugas telah berhasil ditambahkan.
   - Pemberitahuan ini akan hilang secara otomatis setelah beberapa detik.

## Instalasi

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/username/todolist-app.git
   ```
   
2. **Buka file index.html di browser**:
   - Anda dapat membuka file index.html langsung di browser atau menggunakan server lokal seperti Live Server di Visual Studio Code.

## Struktur Proyek
```bash
/todolist-app
├── dist/
│   ├── img/            # Folder gambar
│   └── js/             # Folder file JavaScript
├── index.html          # File utama HTML
└── src/
    └── input.css      # File CSS (Tailwind CSS)
    └── output.css      # File CSS (Tailwind CSS)
```

## Teknologi yang Digunakan
- HTML: Struktur dasar aplikasi.
- CSS: Desain menggunakan Tailwind CSS untuk tampilan yang responsif.
- JavaScript: Logika untuk menambah, mengedit, menghapus tugas, dan menyimpan data ke localStorage

## Kontribusi
1. Fork repositori ini.
2. Buat branch baru (git checkout -b feature-xyz).
3. Lakukan perubahan.
4. Commit perubahan (git commit -am 'Add feature xyz').
5. Push ke branch baru (git push origin feature-xyz).
6. Buat pull request.

## Lisensi
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.