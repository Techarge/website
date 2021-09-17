var cookieContainer = document.querySelector(".cookie-container");
var cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", function() {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);
  localStorage.setItem("cookieBannerDisplayed", "true");
