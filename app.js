let buttons = document.querySelectorAll(".btn-tag");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.classList.toggle("bg-white");
    });
});
