const menubtn = document.querySelector(".hamburger");
const closebtn = document.querySelector(".close");
const nav = document.querySelector("nav");

menubtn.addEventListener("click", () => {
	nav.style.transform = "translateX(0)";
});

closebtn.addEventListener("click", () => {
	nav.style.transform = "translateX(100%)";
});
