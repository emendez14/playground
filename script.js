let target = document.querySelector(".mover"),
    texts = document.querySelectorAll("li"),
    horizon = document.querySelector("hr"),
    items = document.querySelector("ul"),
    dispAgeButt = document.querySelector(".dispAge"),
    remAgeButt = document.querySelector(".remAge"),
    namesList = document.querySelectorAll(".text"),
    spike = document.querySelector("#spike"),
    ein = document.querySelector("#ein"),
    julia = document.querySelector("#julia"),
    unclicked = true,
    mouseLocationX = document.querySelector(".x-axis"),
    mouseLocationY = document.querySelector(".y-axis");

target.addEventListener("click", ()=> {
    texts.forEach((i) => {
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


namesList.forEach((name)=>{
    spike.age = 26;
    ein.age = 13;
    julia.age = 27;

    name.addEventListener("click", function(){
        this.classList.toggle("clicked");
        let eachAge = document.createElement("a");
        this.appendChild(eachAge);
        eachAge.classList = "age";
        eachAge.innerHTML = this.age;
        console.log(this.age);

        document.body.addEventListener("click", deleteItem)

        function deleteItem(e){
            if(e.target.className === "remAge"){
                if(name.classList.contains("clicked")){
                    name.firstElementChild.remove();
                    name.classList.remove("clicked");
                }
            }
        }
    })
})


dispAgeButt.addEventListener("click", ()=>{

    function Hunter (type, weapon) {
        this.type = type;
        this.weapon = weapon;
    }

    function Demon (name, age) { 
        this.name = name;
        this.age = age;
    }
    const nanashi = new Hunter("messiah", "dagdas luck");
    const dietyThoth = new Demon("diety thoth", 9000);

    Hunter.prototype.birthday = function (dateOfBirth){
        const currentYear = 2020;
        return currentYear - dateOfBirth;
    }

    Demon.prototype.birthday = function (dateOfBirth){
        const currentYear = 2020;
        return currentYear - dateOfBirth;
    }

    console.log(nanashi.birthday(2000))
    console.log(dietyThoth.birthday(1990));
    console.log(nanashi)

});



document.addEventListener("mousemove", (e)=> {
    let posX = e.clientX;
    let posY = e.clientY;
    mouseLocationX.textContent = posX;
    mouseLocationY.textContent = posY;
})

