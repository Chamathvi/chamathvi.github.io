var tabLink = document.getElementsByClassName("tab-link");
var tabContent = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (link of tabLink) {
    link.classList.remove("active-link");
  }

  for (content of tabContent) {
    content.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

var sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-300px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbynAPPDeAKDfnK_GZAvdgIUXlHSWnvWQ-aa_KMzJQbmq9Sv9jjaUyGj9bdqjs8qrZo7gQ/exec";
const form = document.forms["submit-to-google-sheet"];
const response = document.getElementById("form-response");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  response.style.display = "block";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      response.style.color = "green";
      response.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        response.innerHTML = "";
        response.style.display = "hidden";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      response.style.color = "red";
      response.innerHTML = error.message;
    });
});
