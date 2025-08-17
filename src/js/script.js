$(function () {
    $("#piker-1").datepicker();
    $("#piker-2").datepicker();
});

const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.getElementById("navbarMenu");

menuToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("show");
});