// Efek animasi fade-in saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const about = document.getElementById("AboutMeSection");
  setTimeout(() => {
    about.classList.add("visible");
  }, 200);
});
