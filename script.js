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
let taskInput = document.querySelector(".taskInput"),
    submitButt = document.querySelector(".pushTask"),
    taskForm = document.querySelector(".taskForm");

taskForm.addEventListener("submit", function(e){

    const task = taskInput.value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks))


    e.preventDefault();
})

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

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){}

UI.prototype.addBookToList = function(book){

    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td>
                     <td>${book.author}</td>
                     <td>${book.isbn}</td>
                     <td><a href="#" class="delete">x</a></td>`;

    list.appendChild(row);

    console.log(row)
}

document.getElementById("book-form").addEventListener("submit", function(e){
    // get form vals
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    // instantiating a book
    const book = new Book(title, author, isbn);

    // instantiate UI 
    const ui = new UI();

    // add book to list
    ui.addBookToList(book);

    console.log(ui)

    e.preventDefault();
})