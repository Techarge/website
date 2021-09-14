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