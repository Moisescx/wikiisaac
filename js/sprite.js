function spawnSprite() {
    const sprite = document.createElement("img");
    sprite.src = "pixel-art/Sprite01.png"; 
    sprite.classList.add("sprite");

    const side = Math.random() < 0.5 ? "left" : "right";

    let offset = Math.floor(Math.random() * 150) + 20; // entre 20px y 170px desde el borde
    sprite.style[side] = offset + "px";
    sprite.style.top = "-50px";

    document.body.appendChild(sprite);

    let y = -50;
    const speed = Math.random() * 0.8 + 0.4; // velocidad entre 0.4 y 1.2 px/frame
    const fallInterval = setInterval(() => {
        y += speed;
        sprite.style.top = y + "px";

        if (y > window.innerHeight) {
            sprite.remove();
            clearInterval(fallInterval);
        }
    }, 16); // ~60 FPS
}

function randomSpawnLoop() {
    const delay = Math.random() * 4000 + 4000; 
    setTimeout(() => {
        spawnSprite();
        randomSpawnLoop(); 
    }, delay);
}

randomSpawnLoop();
