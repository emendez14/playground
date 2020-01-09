let target = document.querySelector("button"),
    texts = document.querySelectorAll("li"),
    horizon = document.querySelector("hr"),
    items = document.querySelector("ul"),
    unclicked = true;

target.addEventListener("click", ()=> {
    texts.forEach((i)=> {
        if(unclicked === true){
            i.style.transform = "translateY(150px)";
            i.style.transition = "all .5s ease-in"
            i.addEventListener("transitionend", ()=> {
                i.classList.add("clicked");
                unclicked = false;
            });
        } 
        if(i.classList.contains("clicked")){
            i.style.transform = "translateY(0px)";
            i.style.transition = "all .5s ease-in"
            i.addEventListener("transitionend", ()=> {
                i.classList.remove("clicked");
                unclicked = true;
            });
        }

        });
    });