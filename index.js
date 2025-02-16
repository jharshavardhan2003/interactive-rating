const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("Submit");
const rateAgain = document.getElementById("rate-again");
const rating=document.getElementById("rating");
const rates=document.querySelectorAll(".btn");

 submitButton.addEventListener("click", () => {
    thanksContainer.style.display = "block";
    mainContainer.style.display = "none";
})

rateAgain.addEventListener("click", () => {
    thanksContainer.style.display = "none";
    mainContainer.style.display = "block";
})

rates.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerHTML  = rate.innerHTML
    })
})
    
