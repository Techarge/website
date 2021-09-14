const callback = function (entries) {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideInFromRight");
            entry.target.classList.add("opacity-1");

        }
    });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-right");
targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
});


const callback2 = function (entries2) {
    entries2.forEach((entry2) => {

        if (entry2.isIntersecting) {
            entry2.target.classList.remove("opacity-0");
            entry2.target.classList.add("animate-slideInFromLeft");
            entry2.target.classList.add("opacity-1");

        }
    });
};

const observer2 = new IntersectionObserver(callback2);

const targets2 = document.querySelectorAll(".js-show-left");
targets2.forEach(function (target2) {
    target2.classList.add("opacity-0");
    observer2.observe(target2);
});

const signupButton = document.querySelector("#signup-button");
if (signupButton) {
    signupButton.addEventListener('click', function () {
        //validate
        const emailValue = document.querySelector('#signup-email').value;
        var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        if(!mail_format.test(emailValue)) {
            document.getElementById("email-status").innerHTML = 'Please enter a valid email address.';
            document.getElementById("signup-email").css('color', '#8A1111');
            document.getElementById("signup-email").css('background', '#FFD1D1');
        }
        else {
            document.getElementById("email-status").innerHTML = 'Looks great. We are adding you.';
            document.getElementById("signup-email").css('color', '#30781C');
            document.getElementById("signup-email").css('background', '#CFFFC2');
            var request = new XMLHttpRequest();
            request.open("GET", "", true);
            request.onload = function () {
                if (this.status >= 200 && this.status < 400) {
                    var result = this.response;
                    console.log("thank you for signing up!");
                    window.location.replace("/thanks.html");
                }
            }
            request.onerror = function (xhr, resp, text) {
                console.log("response:" + resp + " text:" + text);
            };
            request.send();
        }
    });
}
