/**
 * 💖 Heart Click Effect
 * Creates a floating heart emoji wherever a link button is clicked.
 */
document.querySelectorAll('.link-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        const heart = document.createElement('div');
        heart.className = 'hearts';
        heart.textContent = '💖';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    });
});

/**
 * ✅ Photocard Slider Logic
 * Handles the infinite scroll and simultaneous image flipping effect.
 */
(function initSimultaneousSwitcher() {
    const track = document.querySelector('.photocard-track');
    if (!track) return;

    // 1. Duplicate items for a seamless infinite scroll effect
    track.innerHTML += track.innerHTML;

    const allItems = track.querySelectorAll('.photocard-item');

    const flipImages = () => {
        // Flip all cards to the back
        allItems.forEach(item => item.classList.add('is-flipped'));
        
        // After 2.5 seconds, flip them back to the front
        setTimeout(() => {
            allItems.forEach(item => item.classList.remove('is-flipped'));
        }, 2500);
    };

    // 2. Initial delay before the first flip
    setTimeout(() => {
        flipImages(); // First flip
        
        // 3. Set up a recurring interval for subsequent flips
        setInterval(flipImages, 5000);
    }, 2000);
})();