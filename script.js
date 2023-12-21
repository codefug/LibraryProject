const myLibrary = [];
const main = document.querySelector('main');
const card = document.querySelector('.card');
const dialog = document.querySelector('#Dialog');
const select = document.querySelector('select');
const optionlist = document.querySelectorAll('option');
const confirm = document.querySelector('#confirm');

function Book(title, page, read, author) {

    this.title = title;
    this.page = page;
    this.read = read;
    this.author = author;
}

function typeBook(title, page, read, author, type) {

    Book.call(this, title, page, read, author);

    this.type = type;
}
Object.setPrototypeOf(typeBook.prototype, Book.prototype);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

card.addEventListener("click", () => {
    if (typeof dialog.showModal === "function") {
        dialog.showModal();
    } else {
        alert("The <dialog> API is not supported by this browser");
    }
})

select.addEventListener("change", (event) => {
    if (event.target.value != "default") {
        select.style.color = "black";
    } else {
        select.style.color = "rgb(185,185,185)";
    }
})

confirm.addEventListener("click", (event) => {
    event.preventDefault();
    let newBook;
    const formdata = confirm.parentElement.parentElement;
    if (formdata.type.value != "default") {
        newBook = new typeBook(formdata.title.value, formdata.page.value, formdata.author.value, false, formdata.type.value)
        addBookToLibrary(newBook);
    } else {
        newBook = new Book(formdata.title.value, formdata.page.value, formdata.author.value, false);
        addBookToLibrary(newBook);
    }
    const newCard = document.createElement("div");
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = "New book!"
    newCard.appendChild(cardTitle);
    const newTitle = document.createElement("div");
    newTitle.textContent = newBook.title + " by " + newBook.author;
    newCard.appendChild(newTitle);
    let newType;

    if (Object.getPrototypeOf(newBook) == typeBook.prototype) {
        newType = document.createElement("div");
        newType.textContent = newBook.type;
        newCard.appendChild(newType);
    }
    const newPage = document.createElement("div");
    newPage.textContent = newBook.page;
    newCard.appendChild(newPage);

    const newButton = document.createElement("button");
    newButton.textContent = "have to read"
    newButton.setAttribute("class", "invalid");
    newButton.addEventListener("click", () => {
        if (newButton.classList.contains("invalid")) {
            newButton.classList.remove("invalid");
            newButton.setAttribute("class", "valid");
            myLibrary[newButton.parentElement.idx].read = true;
            newButton.textContent = "already read";
        } else {
            newButton.classList.remove("valid");
            newButton.setAttribute("class", "invalid");
            newButton.textContent = "have to read"
            myLibrary[newButton.parentElement.idx].read = false;
        }
    })
    newCard.appendChild(newButton);

    newCard.classList.add("card");
    newCard.classList.add("newcard");
    newCard.idx = myLibrary.indexOf(newBook);
    main.insertBefore(newCard, card);

    const inp = document.querySelectorAll('.inp');
    for (v of inp) {
        v.value = "";
    }
}, false)

