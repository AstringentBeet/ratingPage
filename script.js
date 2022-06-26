let submit = document.getElementById("button");
let survey = document.querySelector(".survey");
let score = document.querySelector("#thanks--outOf");
let thxPage = document.querySelector(".thanks")
let radio = document.querySelectorAll("input[name='rate']");



submit.addEventListener('click', subButton) 

function subButton(evt){
    let userSelection;
    evt.preventDefault();
    radio.forEach(radioButton => {
        if(radioButton.checked){
            userSelection = radioButton.value;
            setTimeout(function () {
                score.innerHTML = userSelection;
                survey.className = "hidden";
                thxPage.classList.remove("hidden");
                thxPage.style.animation = "fadein 1.5s ease-out forwards";
            }, 250);
        } else if(radioButton.checked === false) {
            function error (){
                document.querySelector(".submit").className = "submit";
                window.requestAnimationFrame(function(time){
                    window.requestAnimationFrame(function(time){
                        document.querySelector(".submit").classList.toggle("error")
                    })
                })
            }
            error();
        }
    });
}
