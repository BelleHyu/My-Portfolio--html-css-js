function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const span= menu.classList.toggleMenu("open");
  const classes=icon.classList.toggleMenu("open");
}