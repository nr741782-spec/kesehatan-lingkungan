// Navigasi Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pesan Edukasi Dinamis berdasarkan waktu
window.onload = () => {
    const hours = new Date().getHours();
    let message = "";
    
    if (hours < 12) message = "Mari mulai pagi ini dengan udara segar dan tanpa sampah plastik!";
    else if (hours < 18) message = "Pastikan sanitasi di sekitar Anda terjaga siang ini.";
    else message = "Malam yang tenang dimulai dari lingkungan yang bersih.";
    
    console.log("EcoHealthy Insight: " + message);
};
