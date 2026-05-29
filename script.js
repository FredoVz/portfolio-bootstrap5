//Function handle contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbw40Q7I35RYZcZ5s1iwDFyPwjJVa1xMsqx-LIHb9dYo8ZGHkIxlxafAw7Li3EzPYpeGeQ/exec"; //YOUR_SCRIPT_URL
const form = document.forms["fredo-contact-form"]; //YOUR_FORM_NAME
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //Ketika tombol submit diklik
  //tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => response.json())
    .then((response) => {
      //tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //tampilkan alert
      myAlert.classList.toggle("d-none");
      //reset formnya
      form.reset();
      //console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

const galleryImage = document.querySelectorAll(".gallery-img");

//Mengatur animasi gambar gallery
galleryImage.forEach((img, i) => {
  img.dataset.aos = "fade-down";
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 1000;
});

//AOS INIT
AOS.init({
  once: true,
  duration: 2000,
});

//GSAP
gsap.registerPlugin(TextPlugin);
gsap.to(".lead", { duration: 2, delay: 1.5, text: "Programmer | Designer" });
gsap.from(".jumbotron img", { duration: 1, rotateY: 360, opacity: 0 });
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0, ease: "bounce" });
gsap.from(".display-4", { duration: 1, x: -50, opacity: 0, delay: 0.5, ease: "back" });
