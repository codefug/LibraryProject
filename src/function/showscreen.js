import clearscreen from "./clearscreen";
import {
  editPropertyFromStorage,
  getItemFromStorage,
  removeItemFromStorage,
} from "./storage";

export default function showScreen(newBook) {
  const newCard = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const main = document.querySelector("main");
  const addcard = document.querySelector(".addcard");
  newCard.classList.add("book");
  cardTitle.textContent = "New book!";
  newCard.appendChild(cardTitle);
  const newTitle = document.createElement("div");
  newTitle.textContent = `${newBook.title} by ${newBook.author}`;
  newCard.appendChild(newTitle);
  let newType;
  if (newBook.type!==null) {
    newType = document.createElement("div");
    newType.textContent = newBook.type;
    newCard.appendChild(newType);
  }
  const newPage = document.createElement("div");
  newPage.textContent = newBook.page;
  newCard.appendChild(newPage);

  const newButton = document.createElement("button");
  newButton.textContent = "have to read";
  newButton.setAttribute("class", "invalid");
  newButton.addEventListener("click", () => {
    if (newButton.classList.contains("invalid")) {
      newButton.classList.remove("invalid");
      newButton.setAttribute("class", "valid");
      newButton.textContent = "already read";
      editPropertyFromStorage("bookList", newBook, "isRead");
    } else {
      newButton.classList.remove("valid");
      newButton.setAttribute("class", "invalid");
      newButton.textContent = "have to read";
      editPropertyFromStorage("bookList", newBook, "isRead");
    }
  });
  const removeButton = document.createElement("button");
  removeButton.classList.add("removeButton");
  removeButton.textContent = "remove";
  removeButton.addEventListener("click", () => {
    removeItemFromStorage("bookList", newBook);
    clearscreen();
    getItemFromStorage("bookList").forEach((element) => showScreen(element));
  });
  newCard.appendChild(newButton);
  newCard.appendChild(removeButton);

  newCard.classList.add("card");
  newCard.classList.add("newcard");
  main.insertBefore(newCard, addcard);
}
