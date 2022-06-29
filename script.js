const toggleButton = document.getElementsByClassName("toggle-button")[0]
const toggle= document.getElementsByClassName("toggle")[0];
const monthPrice = document.querySelectorAll(".m-price");
const annualPrice = document.querySelectorAll(".a-price");

toggleButton.addEventListener("click", ()=>{
    toggle.classList.toggle("active");
    for(i=0; i < monthPrice.length; i++){
    monthPrice[i].classList.toggle("active");
    annualPrice[i].classList.toggle("active");
    }
});
document.addEventListener("keydown", (event)=>{
    event.preventDefault();
    var name = event.key;
    if(name === 'Tab'){
        toggle.classList.toggle("active");
    for(i=0; i < monthPrice.length; i++){
    monthPrice[i].classList.toggle("active");
    annualPrice[i].classList.toggle("active");
    };
    } else if(name === 'ArrowLeft'){
        toggle.className = "toggle";
    for(i=0; i < monthPrice.length; i++){
    monthPrice[i].className = "m-price";
    annualPrice[i].className = "a-price";
    };
    } else if(name === 'ArrowRight'){
        toggle.className = "toggle active";
    for(i=0; i < monthPrice.length; i++){
    monthPrice[i].className = "m-price active";
    annualPrice[i].className = "a-price active";
    };
    } else {
        return false
    }
});
