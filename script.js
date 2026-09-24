const form = document.querySelector('#kontakForm');
const tombolPesan = document.querySelector('.btnAksi');

tombolPesan.addEventListener('click', () => {
  document.querySelector('#kontak').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('#namaKontak').focus({ preventScroll: true });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nama = document.querySelector('#namaKontak').value.trim();
  const kontak = document.querySelector('#emailKontak').value.trim();
  const pesan = document.querySelector('#pesanKontak').value.trim();
  const subjek = `Pesanan minuman dari ${nama}`;
  const isi = `Nama: ${nama}\nEmail / WhatsApp: ${kontak}\n\nPesan / Detail Pesanan:\n${pesan}`;

  alert('Aplikasi email akan dibuka. Silakan kirim emailnya untuk menyelesaikan pesanan.');
  window.location.href = `mailto:edel354313@gmail.com?subject=${encodeURIComponent(subjek)}&body=${encodeURIComponent(isi)}`;
});
