// Efek animasi masuk halus
document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("AboutMeSection");
  section.style.opacity = "0";
  section.style.transition = "opacity 1s ease";
  setTimeout(() => section.style.opacity = "1", 200);
});
