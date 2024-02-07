var tagglebtn = document.querySelector(".tagglebtn");
    var nav = document.querySelector(".navlinks");
    var links = document.querySelector(".navlinks li");
    tagglebtn.addEventListener("click", function(){
        this.classList.toggle("click");
        nav.classList.toggle("open")
    });
    var typed = new Typed(".input",{
        strings: [ "Desenvolvedor Web FullStack", "Desenvolvedor Mobile"],
        typedSpeed: 70,
        backSpeed: 100,
        loop: true,
    })