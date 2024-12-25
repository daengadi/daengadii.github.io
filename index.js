document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('show');
});
// jam
window.setTimeout("waktu()",1000);

function waktu() {
  var waktu = new Date();
  setTimeout("waktu()",1000);
  document.getElementById("jam").innerHTML = waktu.getHours();
   document.getElementById("menit").innerHTML = waktu.getMinutes();
    document.getElementById("detik").innerHTML = waktu.getSeconds();
}  
//header
const modeSelect = document.getElementById('mode-select');

// Fungsi untuk menerapkan mode berdasarkan nilai
function applyMode(mode) {
  document.body.className = '';
  document.querySelector('footer').className = '';
  document.getElementById('back-to-top').className = '';

  if (mode === 'light') {
    document.body.classList.add('light-mode');
    document.querySelector('footer').classList.add('light-mode');
  } else if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('footer').classList.add('dark-mode');
  } else if (mode === 'luxury') {
    document.body.classList.add('luxury-mode');
    document.querySelector('footer').classList.add('luxury-mode');
    document.getElementById('back-to-top').classList.add('luxury-mode');
  }
}

// Event listener untuk perubahan mode
modeSelect.addEventListener('change', () => {
  const selectedMode = modeSelect.value;
  
  // Simpan mode ke localStorage
  localStorage.setItem('selectedMode', selectedMode);

  // Terapkan mode
  applyMode(selectedMode);
});

// Saat halaman dimuat ulang, periksa localStorage
const savedMode = localStorage.getItem('selectedMode');
if (savedMode) {
  // Terapkan mode yang disimpan
  modeSelect.value = savedMode; // Atur dropdown ke mode yang disimpan
  applyMode(savedMode);
}
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
//  halaman dalam about
function showTab(tabId) {
  // Hapus kelas 'active' dari semua tombol
  document.querySelectorAll('.skills-tabs button').forEach(button => button.classList.remove('active'));
  // Hapus kelas 'active' dari semua konten
  document.querySelectorAll('.skills-content').forEach(content => content.classList.remove('active'));

  // Tambahkan kelas 'active' ke tombol yang diklik
  document.querySelector(`.skills-tabs button[onclick="showTab('${tabId}')"]`).classList.add('active');
  // Tampilkan konten yang sesuai
  document.getElementById(tabId).classList.add('active');
}
// project img
function openModal(image) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImage.src = image.src;
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}