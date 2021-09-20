var cookieContainer = document.querySelector(".cookie-container");
var cookieButton = document.querySelector(".cookie-btn");

if (window.localStorage.getItem('accept_cookies')) {
    cookieContainer.classList.remove("active");
}

cookieButton.addEventListener("click", function () {
    window.localStorage.setItem('accept_cookies', 'true');
    cookieContainer.classList.remove("active");
});
