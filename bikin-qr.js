import QRCode from 'qrcode';

// Link website yang ingin dimasukkan ke QR Code
const linkWebsite = "https://dutgit.github.io/Media-Informasi-Galung-Maloang/";

QRCode.toFile('qr-plakat.png', linkWebsite, {
    width: 1000,          // Ukuran gambar 1000x1000 (Resolusi HD untuk dicetak)
    margin: 2,            // Jarak border (putih)
    color: {
        dark: '#000000',    // Warna QR code (Hitam)
        light: '#ffffff'    // Warna background (Putih)
    }
}, function (err) {
    if (err) throw err;
    console.log('Mantap! File qr-plakat.png berhasil dibuat di folder ini.');
});


