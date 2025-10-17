// SCRIPT UNTUK POP UP PERINGATAN
document.addEventListener('DOMContentLoaded', function() {
    const warningModal = document.getElementById('ageWarningModal');
    const proceedButton = document.getElementById('btnProceed');
    const goBackButton = document.getElementById('btnGoBack'); //

    warningModal.style.display = 'flex'; //

    proceedButton.addEventListener('click', function() { //
        warningModal.style.display = 'none'; //
    });

    goBackButton.addEventListener('click', function() {
        // Menerapkan perubahan: Coba keluar dari web
        window.location.replace("about:blank"); // Mengganti 'index.html' dengan 'about:blank'
    });
});

// Pop-up Informasi (Lihat Preview - Default untuk JKT48, Esport, Korean)
document.querySelectorAll('.js-popup').forEach(btn => {
    btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-img');
        document.getElementById('modalImage').src = imgSrc;
        document.getElementById('infoModal').style.display = 'flex';
    });
});

// NEW: Pop-up Informasi Khusus (Lihat Preview - Michie Batch dan Wasa Batch)
document.querySelectorAll('.js-michi-popup').forEach(btn => {
    btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-img');
        document.getElementById('michiModalImage').src = imgSrc;
        document.getElementById('michiInfoModal').style.display = 'flex';
    });
});

// NEW: Pop-up Informasi Khusus (Lihat Preview - Nadine Max Batch)
document.querySelectorAll('.js-nadine-max-popup').forEach(btn => {
    btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-img');
        document.getElementById('nadineMaxModalImage').src = imgSrc;
        document.getElementById('nadineMaxInfoModal').style.display = 'flex';
    });
});

// NEW: Pop-up Informasi Khusus (Lihat Preview - Nadine Medium Batch)
document.querySelectorAll('.js-nadine-medium-popup').forEach(btn => {
    btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-img');
        document.getElementById('nadineMediumModalImage').src = imgSrc;
        document.getElementById('nadineMediumInfoModal').style.display = 'flex';
    });
});

// NEW: Pop-up Informasi Khusus (Lihat Preview - Nadine Mini Batch)
document.querySelectorAll('.js-nadine-mini-popup').forEach(btn => {
    btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-img');
        document.getElementById('nadineMiniModalImage').src = imgSrc;
        document.getElementById('nadineMiniInfoModal').style.display = 'flex';
    });
});

// NEW: Pop-up Informasi Khusus (Lihat Preview - Custom Foto)
document.querySelectorAll('.js-custom-popup').forEach(btn => {
    btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-img');
        document.getElementById('customModalImage').src = imgSrc;
        document.getElementById('customInfoModal').style.display = 'flex';
    });
});

// NEW: Pop-up Informasi Khusus (Lihat Preview - Custom Foto Ketek)
document.querySelectorAll('.js-ketek-popup').forEach(btn => {
    btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-img');
        document.getElementById('customKetekModalImage').src = imgSrc;
        document.getElementById('customKetekInfoModal').style.display = 'flex';
    });
});


// Pop-up Testimoni
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
