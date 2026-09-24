const form = document.querySelector('#kontakForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nama = document.querySelector('#namaKontak').value.trim();
  const kontak = document.querySelector('#emailKontak').value.trim();
  const pesan = document.querySelector('#pesanKontak').value.trim();
  const subjek = `Pesanan minuman dari ${nama}`;
  const isi = `Nama: ${nama}\nEmail / WhatsApp: ${kontak}\n\nPesan / Detail Pesanan:\n${pesan}`;

  window.location.href = `mailto:edel354313@gmail.com?subject=${encodeURIComponent(subjek)}&body=${encodeURIComponent(isi)}`;
});
