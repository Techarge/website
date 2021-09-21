var cookieContainer = document.querySelector(".cookie-container");
var cookieButton = document.querySelector(".cookie-btn");
var disableCookieButton = document.querySelector(".disable-cookies-btn");

if (window.localStorage.getItem('accept_cookies') || window.localStorage.getItem('disable_cookies')) {
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


function setCookie(key, value, expireDays, expireHours, expireMinutes, expireSeconds) {
    var expireDate = new Date();
    if (expireDays) {
        expireDate.setDate(expireDate.getDate() + expireDays);
    }
    if (expireHours) {
        expireDate.setHours(expireDate.getHours() + expireHours);
    }
    if (expireMinutes) {
        expireDate.setMinutes(expireDate.getMinutes() + expireMinutes);
    }
    if (expireSeconds) {
        expireDate.setSeconds(expireDate.getSeconds() + expireSeconds);
    }
    document.cookie = key + "=" + escape(value) +
        ";domain=" + window.location.hostname +
        ";path=/" +
        ";expires=" + expireDate.toUTCString();
}

function deleteCookie(name) {
    setCookie(name, "", null, null, null, 1);
}

function disableCookies() {
    /*method depends on browser*/
    if (navigator.userAgent.includes('Chrome')) {
                cookieStore.getAll().then(cookies => cookies.forEach(cookie => {
            cookieStore.delete(cookie.name);
        }));

    } else {
deleteCookie("_ga");
        deleteCookie("ph_cQo4wipp5ipWWXhTN8kTacBItgqo457yDRtzCMOr-Tw_posthog");
        deleteCookie("_ga_V2CWDTHL7P");
        deleteCookie("csrftoken");
    }
}

function enableCookies() {
    alert("enabled");
}
