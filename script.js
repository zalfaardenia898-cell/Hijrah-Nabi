// =========================
// HAMBURGER MENU MOBILE
// =========================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Ketika tombol hamburger diklik
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// =========================
// MENUTUP MENU SAAT LINK DIKLIK
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// =========================
// ANIMASI SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach(element => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    // Jika elemen masuk layar
    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }

  });
}

window.addEventListener("scroll", revealOnScroll);

// Jalankan saat halaman pertama dibuka
revealOnScroll();

// =========================
// FALLBACK GAMBAR ERROR
// =========================

const images = document.querySelectorAll("img");

images.forEach(img => {

  img.addEventListener("error", () => {

    // Jika gambar gagal dimuat
    img.src =
      "https://via.placeholder.com/600x400?text=Gambar+Belum+Ditambahkan";

  });

});
