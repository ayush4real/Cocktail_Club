window.addEventListener("scroll", function(){
    let header = document.querySelector("nav");
    let main = document.querySelector("body");
    let inputBox = document.getElementsByClassName("input-box")
    header.classList.toggle("stick", window.scrollY > 0)
    main.classList.toggle("bg-color", window.scrollY > 0)
    for(var i = 0; i < inputBox.length; i++){
        inputBox[i].classList.toggle("input-clr", window.scrollY > 0)
    }
})