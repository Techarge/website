var cookieContainer = document.querySelector(".cookie-container");
var cookieButton = document.querySelector(".cookie-btn");
var storage = window.localStorage.getItem("cookieBannerDisplayed");

if (storage) {
    cookieContainer.classList.add("active");
    window.localStorage.setItem('cookieBannerDisplayed','true');
  }
if (storage == 'false') {
    cookieContainer.classList.remove("active");
  }

cookieButton.addEventListener("click", function() {
  cookieContainer.classList.remove("active");
  window.localStorage.setItem('cookieBannerDisplayed','false');
});