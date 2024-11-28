 // Pemilihan Elemen
 const loginBtn = document.getElementById('login-btn');
 const popup = document.getElementById('popup');
 const closeBtn = document.querySelector('.close-btn');

 // Menampilkan Pop-up saat Tombol "Login" Diklik
 loginBtn.addEventListener('click', () => {
 popup.style.display = 'flex';
 });

 // Ketika tombol "Login" diklik, event listener mendeteksi kejadian click dan menjalankan fungsi.
 closeBtn.addEventListener('click', () => {
 popup.style.display = 'none';
 });

 // Menutup Pop-up saat Mengklik di Luar Area Konten
 window.addEventListener('click', (e) => {
 if (e.target === popup) {
     popup.style.display = 'none';
 }
 });