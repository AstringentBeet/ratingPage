let numbers = document.querySelector(".rate--number");
let submit = document.getElementById("button");
let survey = document.querySelector(".survey");
let userRating = 0;
let score = document.querySelector(".thanks--outOf");
let thxPage = document.querySelector(".thanks")



submit.addEventListener('click', e => {
    setTimeout(function () {
        survey.className = "hidden";
        thxPage.classList.remove("hidden");
        thxPage.style.animation = "fadein 1.5s ease-out forwards";
    }, 250)
});