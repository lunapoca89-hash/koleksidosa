// SCRIPT UNTUK POP UP PERINGATAN
document.addEventListener('DOMContentLoaded', function() {
    const warningModal = document.getElementById('ageWarningModal');
    const proceedButton = document.getElementById('btnProceed');
    const goBackButton = document.getElementById('btnGoBack');

    warningModal.style.display = 'flex';

    proceedButton.addEventListener('click', function() {
        warningModal.style.display = 'none';
    });

    goBackButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

// Pop-up Informasi (Lihat Preview)
document.querySelectorAll('.js-popup').forEach(btn => {
    btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-img');
        document.getElementById('modalImage').src = imgSrc;
        document.getElementById('infoModal').style.display = 'flex';
    });
});

// NEW: Pop-up Testimoni (Tetap menggunakan class js-testimonial-popup)
document.querySelectorAll('.js-testimonial-popup').forEach(btn => {
    btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-img');
        document.getElementById('testimonialImage').src = imgSrc;
        document.getElementById('testimonialModal').style.display = 'flex';
    });
});


// Tombol Tutup untuk semua modal
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('close-modal')) {
            modal.style.display = 'none';
        }
    });
});

// SCRIPT PEMBAYARAN QRIS (SINGLE PAYMENT METHOD) DIHAPUS KARENA SUDAH DIGANTI ALUR DM
