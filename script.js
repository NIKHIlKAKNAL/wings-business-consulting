// script.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".toggle-btn");
    const navMenu = document.querySelector(".nav-center");
  
    toggleBtn?.addEventListener("click", () => {
      navMenu?.classList.toggle("active");
    });
  
})

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector(".stars-bg");
    const ctx = canvas.getContext("2d");
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight; // Full page height
    }
  
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Initial call
  
    const stars = [];
    const numStars = 300;
  
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.3 + 0.2,
      });
    }
  
    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
  
        // Move slightly in random directions
        star.x += star.speed * (Math.random() > 0.5 ? 1 : -1);
        star.y += star.speed * (Math.random() > 0.5 ? 1 : -1);
  
        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      }
  
      requestAnimationFrame(animateStars);
    }
  
    animateStars();
  });
  