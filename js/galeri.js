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

// Pop-up Informasi
document.querySelectorAll('.js-popup').forEach(btn => {
    btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-img');
        document.getElementById('modalImage').src = imgSrc;
        document.getElementById('infoModal').style.display = 'flex';
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

// SCRIPT PEMBAYARAN QRIS (Single Payment Method)
const qrisModal = document.getElementById('qrisModal');

const forceDownload = async (linkElement, imageUrl, fileName) => {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        linkElement.href = url;
        linkElement.download = fileName;
    } catch (error) {
        console.error('Gagal membuat link download:', error);
        linkElement.href = imageUrl;
        linkElement.download = fileName;
    }
};

document.querySelectorAll('.btn-payment').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.dataset.name;
        const itemPrice = parseInt(button.dataset.price).toLocaleString('id-ID');
        const qrisImage = button.dataset.qris;

        const downloadIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px; height:16px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;

        qrisModal.innerHTML = `
            <div class="modal-content">
                <h3>${itemName}</h3>
                <p class="total-price">Total: Rp ${itemPrice}</p>
                <p class="payment-prompt">Scan QR Code di bawah untuk pembayaran</p>
                <div class="qris-display-area" style="display: flex;">
                    <img src="${qrisImage}" alt="QR Code Pembayaran" class="qris-image">
                    <a href="#" class="download-link">
                        ${downloadIcon}
                        Download QR Code
                    </a>
                </div>
                <button class="close-modal">Tutup</button>
            </div>
        `;

        qrisModal.style.display = 'flex';

        const downloadLink = qrisModal.querySelector('.download-link');
        forceDownload(downloadLink, qrisImage, 'QR_Payment.png');

        qrisModal.querySelector('.close-modal').addEventListener('click', () => {
            qrisModal.style.display = 'none';
        });
    });
});
