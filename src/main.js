import './style.css'

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Data Dummy untuk 9 RW
const rwData = [
  {
    id: 1,
    nama: "RW 01",
    tag: "Pertanian & Perkebunan",
    deskripsiSingkat: "Dikenal dengan hamparan sawah dan kebun sayur organik yang dikelola secara gotong royong oleh warga.",
    deskripsiLengkap: "RW 01 merupakan wilayah agraris utama di Kelurahan Galung Maloang. Sebagian besar warga berprofesi sebagai petani dengan fokus pada padi organik dan sayur-mayur. Kelompok tani di RW ini sangat aktif dan rutin mengadakan penyuluhan. Selain itu, terdapat program kebun gizi mandiri di setiap pekarangan rumah.",
    keunggulan: ["Beras Organik", "Sayur Hidroponik", "Kelompok Tani Aktif"],
    image: "./rw-placeholder.png"
  },
  {
    id: 2,
    nama: "RW 02",
    tag: "Pusat UMKM Kuliner",
    deskripsiSingkat: "Sentra jajanan tradisional dan makanan ringan inovatif yang diproduksi oleh ibu-ibu PKK.",
    deskripsiLengkap: "Perekonomian di RW 02 digerakkan oleh sektor UMKM kuliner. Berbagai macam olahan makanan ringan, seperti keripik pisang, kue tradisional, hingga minuman herbal diproduksi di sini. Produk-produk ini tidak hanya dipasarkan di dalam desa, tetapi juga telah merambah pasar online.",
    keunggulan: ["Keripik Pisang Aneka Rasa", "Jamu Herbal", "Kue Basah Tradisional"],
    image: "./rw-placeholder.png"
  },
  {
    id: 3,
    nama: "RW 03",
    tag: "Kerajinan Tangan",
    deskripsiSingkat: "Memiliki potensi besar dalam bidang kerajinan anyaman bambu dan limbah plastik daur ulang.",
    deskripsiLengkap: "Kreativitas warga RW 03 sangat menonjol di bidang kerajinan. Warga memanfaatkan bambu lokal dan limbah plastik rumah tangga untuk diubah menjadi produk bernilai jual seperti tas, tempat sampah estetis, dan dekorasi rumah. Hal ini juga mendukung program desa sadar lingkungan.",
    keunggulan: ["Anyaman Bambu", "Tas Daur Ulang", "Dekorasi Estetik"],
    image: "./rw-placeholder.png"
  },
  {
    id: 4,
    nama: "RW 04",
    tag: "Desa Wisata Edukasi",
    deskripsiSingkat: "Mengembangkan konsep wisata edukasi lingkungan dan outbond mini untuk anak-anak sekolah.",
    deskripsiLengkap: "Memiliki kontur tanah yang berbukit ringan dan pepohonan rindang, RW 04 sedang merintis program wisata edukasi. Pengunjung dapat belajar tentang flora lokal, cara berkebun dasar, dan menikmati fasilitas outbond sederhana yang dibangun dari swadaya masyarakat.",
    keunggulan: ["Outbond Mini", "Edukasi Flora", "Taman Desa"],
    image: "./rw-placeholder.png"
  },
  {
    id: 5,
    nama: "RW 05",
    tag: "Peternakan Terpadu",
    deskripsiSingkat: "Fokus pada peternakan kambing etawa dan unggas dengan sistem kandang bersih terpadu.",
    deskripsiLengkap: "Wilayah RW 05 memiliki lahan yang cukup luas untuk peternakan komunal. Warga berinovasi dengan sistem peternakan terpadu di mana kotoran ternak diolah langsung menjadi pupuk kompos untuk digunakan oleh RW 01 (Pertanian). Susu kambing etawa juga menjadi produk unggulan baru.",
    keunggulan: ["Susu Kambing Etawa", "Telur Bebek", "Pupuk Kompos"],
    image: "./rw-placeholder.png"
  },
  {
    id: 6,
    nama: "RW 06",
    tag: "Budidaya Perikanan",
    deskripsiSingkat: "Pusat budidaya ikan air tawar seperti lele dan nila dengan sistem bioflok yang modern.",
    deskripsiLengkap: "Keterbatasan lahan tidak membatasi warga RW 06. Mereka mengadopsi teknologi bioflok untuk budidaya ikan air tawar di pekarangan. Hasil panen ikan disuplai ke pasar tradisional dan juga diolah menjadi abon ikan yang memiliki masa simpan panjang.",
    keunggulan: ["Ikan Nila Segar", "Abon Lele", "Budidaya Bioflok"],
    image: "./rw-placeholder.png"
  },
  {
    id: 7,
    nama: "RW 07",
    tag: "Seni & Kebudayaan",
    deskripsiSingkat: "Melestarikan kesenian tradisional lokal dengan rutin mengadakan latihan sanggar tari dan musik.",
    deskripsiLengkap: "RW 07 adalah jantung budaya Galung Maloang. Sanggar seni di RW ini rutin melatih anak-anak dan remaja untuk menari dan bermain alat musik tradisional. Mereka sering diundang untuk tampil di acara tingkat kecamatan hingga kabupaten.",
    keunggulan: ["Sanggar Tari Tradisional", "Grup Musik Lokal", "Pengrajin Pakaian Adat"],
    image: "./rw-placeholder.png"
  },
  {
    id: 8,
    nama: "RW 08",
    tag: "Bank Sampah Mandiri",
    deskripsiSingkat: "RW percontohan untuk kebersihan lingkungan dengan sistem tata kelola sampah yang sangat baik.",
    deskripsiLengkap: "Kebersihan adalah ciri khas RW 08. Program Bank Sampah Mandiri di sini sangat sukses, di mana warga menabung sampah anorganik yang kemudian dijual. Sampah organik diolah menjadi eco-enzyme. Lingkungan yang asri dipenuhi tanaman hias di sepanjang jalan.",
    keunggulan: ["Bank Sampah Aktif", "Eco-Enzyme", "Lingkungan Asri"],
    image: "./rw-placeholder.png"
  },
  {
    id: 9,
    nama: "RW 09",
    tag: "Pusat Kegiatan Olahraga",
    deskripsiSingkat: "Memiliki fasilitas lapangan serbaguna yang menjadi pusat pembinaan atlet muda kelurahan.",
    deskripsiLengkap: "RW 09 memiliki fasilitas olahraga terbaik di kelurahan, termasuk lapangan voli dan sepak bola mini hasil swadaya masyarakat. Sering diadakan turnamen persahabatan antar RW di sini, yang juga menjadi ajang warga untuk berdagang dan berkumpul.",
    keunggulan: ["Lapangan Serbaguna", "Klub Voli Muda", "Turnamen Rutin"],
    image: "./rw-placeholder.png"
  }
];

// Render RW Cards
const rwGrid = document.getElementById('rw-grid');

function renderCards() {
  rwGrid.innerHTML = '';
  rwData.forEach(rw => {
    const card = document.createElement('div');
    card.className = 'rw-card';
    card.innerHTML = `
      <div class="img-container">
        <img src="${rw.image}" alt="${rw.nama}" class="card-img">
      </div>
      <div class="card-content">
        <span class="card-tag">${rw.tag}</span>
        <h3>${rw.nama}</h3>
        <p>${rw.deskripsiSingkat}</p>
        <div class="card-footer">
          Lihat Detail <i style="margin-left: 5px;">→</i>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => openModal(rw));
    rwGrid.appendChild(card);
  });
}

// Modal Logic
const modal = document.getElementById('rw-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

function openModal(rw) {
  const tagsHtml = rw.keunggulan.map(k => `<span>${k}</span>`).join('');
  
  modalBody.innerHTML = `
    <img src="${rw.image}" alt="${rw.nama}" class="modal-header-img">
    <div class="modal-text">
      <h2>${rw.nama}</h2>
      <div class="modal-tags">
        ${tagsHtml}
      </div>
      <p><strong>Fokus:</strong> ${rw.tag}</p>
      <p>${rw.deskripsiLengkap}</p>
    </div>
  `;
  
  modal.style.display = 'block';
  // Small timeout to allow display:block to apply before adding class for opacity transition
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
  
  document.body.style.overflow = 'hidden'; // Prevent scrolling background
}

function closeModal() {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300); // match transition duration
  document.body.style.overflow = 'auto';
}

if (closeBtn) {
  closeBtn.addEventListener('click', closeModal);
}

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', renderCards);
