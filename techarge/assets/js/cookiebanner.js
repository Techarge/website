var cookieContainer = document.querySelector(".cookie-container");
var cookieButton = document.querySelector(".cookie-btn");
var disableCookieButton = document.querySelector(".disable-cookies-btn");

if (window.localStorage.getItem('accept_cookies') || window.localStorage.getItem('disable_cookies') ) {
    cookieContainer.classList.remove("active");
}

disableCookieButton.addEventListener("click", function () {
    window.localStorage.setItem('disable_cookies', 'true');
    cookieContainer.classList.remove("active");
    disableCookies();
});

cookieButton.addEventListener("click", function () {
    window.localStorage.setItem('accept_cookies', 'true');
    cookieContainer.classList.remove("active");
});

function disableCookies() {
    cookieStore.getAll().then(cookies => cookies.forEach(cookie => {
    cookieStore.delete(cookie.name);
}));
}