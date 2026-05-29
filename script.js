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
