let buttons = document.querySelectorAll(".btn-tag");
let bars =document.querySelector(".sidd");
let bars2 =document.querySelector("#bars");
let sidebar = document.querySelector(".hero");
let topcorner = document.querySelector(".side-bar");
let xLogo = document.querySelector(".fa-x");


buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.classList.toggle("bg-white");
    });
});


bars.addEventListener("click",function(){
    sidebar.classList.add("leftzero");
    
    console.log("clicked");
})
bars2.addEventListener("click",function(){
    sidebar.classList.add("leftzero");
    topcorner.classList.add("displayYes");
    console.log("clicked");
})

xLogo.addEventListener("click",function(){
    sidebar.classList.remove("leftzero");
    topcorner.classList.remove("displsyYes");
    console.log("unclicked");
})

let form = document.getElementsByClassName(".form");
if(form){
    form.addEventListener("submit",function(evt){
        evt.preventDefault();
        alert("this is just a clone");
    })
}