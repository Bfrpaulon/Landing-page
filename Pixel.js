const canvas = new Pixel.Canvas('fireworks', {
    width: 50,
    height: 50,
    background: 'black'
});

function createFirework() {
    const firework = [];
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];

    // Crie aleatoriamente a posição inicial e a cor dos pixels
    for (let i = 0; i < 100; i++) {
        firework.push({
            x: Math.random() * canvas.width,
            y: canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            velocity: {
                x: (Math.random() - 0.5) * 5,
                y: -(Math.random() * 10 + 10)
            }
        });
    }

    // Anime os pixels
    canvas.animate(() => {
        for (const particle of firework) {
            canvas.drawPixel(particle.x, particle.y, particle.color, 1);
            particle.x += particle.velocity.x;
            particle.y += particle.velocity.y;
        }
    });
}

createFirework();
