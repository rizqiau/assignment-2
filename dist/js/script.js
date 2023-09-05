const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", function () {
  menuNav.classList.toggle("menu-active");
});

const submit = document.querySelector(".submit");

submit.addEventListener("click", function () {
  const masuk = confirm("Login Dulu");
if (masuk) {
  const name = prompt("Siapa nama anda?");
  alert(`Hello manchunian ${name}`);
} else {
  alert("Bye Bye");
}
})
