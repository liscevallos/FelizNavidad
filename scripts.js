function createSnow() {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.textContent = '*';
    snow.style.left = Math.random() * 100 + '%';
    snow.style.top = '-10px';
    document.body.appendChild(snow);

    let top = 0;
    const speed = Math.random() * 3 + 2;

    const interval = setInterval(() => {
        top += speed;
        snow.style.top = top + 'px';

        if (top > window.innerHeight) {
            clearInterval(interval);
            snow.remove();
        }
    }, 50);
}

setInterval(createSnow, 200);

function createMovingSanta() {
    const santa = document.createElement('img');
    santa.classList.add('santa-movil');
    santa.src = 'https://i.pinimg.com/originals/0f/91/9d/0f919d3ae5d8967ade82c540f5d8cca9.gif';
    santa.alt = 'Santa';
    document.body.appendChild(santa);

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dirX = (Math.random() - 0.5) * 0.5;
    let dirY = (Math.random() - 0.5) * 0.5;

    setInterval(() => {
        x += dirX;
        y += dirY;

        if (x < 0 || x > window.innerWidth - 150) dirX *= -1;
        if (y < 0 || y > window.innerHeight - 150) dirY *= -1;

        santa.style.left = x + 'px';
        santa.style.top = y + 'px';
    }, 50);
}

for (let i = 0; i < 5; i++) {
    createMovingSanta();
}

// Unmute and play audio on button click, handle autoplay policies
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('audio-unmute');
    const audio = document.getElementById('bg-audio');
    if (!btn || !audio) return;

    btn.addEventListener('click', async () => {
        try {
            audio.muted = false;
            audio.loop = true;
            // Ensure playback starts even if autoplay was blocked
            await audio.play();
            btn.textContent = 'Sonando...';
            btn.disabled = true;
        } catch (err) {
            // If play is still blocked, show controls as fallback
            audio.controls = true;
            btn.textContent = 'Toca ▶ en el audio';
        }
    });
});
