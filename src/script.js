import "./style.css";
import Book from "./object/book";
import TypeBook from "./object/typeBook";
import { addItemToStorage, getItemFromStorage } from "./function/storage";
import showScreen from "./function/showscreen";
import { isRequired, isoutofrange } from "./function/validation";

(function start() {
  const card = document.querySelector(".card");
  const dialog = document.querySelector("#Dialog");
  const select = document.querySelector("select");
  const confirm = document.querySelector("#confirm");
  const books = getItemFromStorage("bookList");
  const inputs = document.querySelectorAll("input");
  const numberInput = document.querySelector(".numberInput");
  Array.from(inputs).forEach((element) => {
    element.addEventListener("input", () => {
      isRequired(element);
    });
  });
  numberInput.addEventListener("input", () => {
    isoutofrange(numberInput);
  });
  books.forEach((value) => showScreen(value));
  card.addEventListener("click", () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      alert("The <dialog> API is not supported by this browser");
    }
  });

  select.addEventListener("change", (event) => {
    if (event.target.value !== "default") {
      select.style.color = "black";
    } else {
      select.style.color = "rgb(185,185,185)";
    }
  });

  confirm.addEventListener("click", (event) => {
    const form = document.querySelector("form");
    event.preventDefault();
    if (!form.reportValidity()) {
      return;
    }
    let newBook;
    const formdata = confirm.parentElement.parentElement;
    if (formdata.type.value !== "default") {
      newBook = new TypeBook(
        formdata.title.value,
        formdata.page.value,
        false,
        formdata.author.value,
        formdata.type.value
      );
    } else {
      newBook = new Book(
        formdata.title.value,
        formdata.page.value,
        false,
        formdata.author.value
      );
    }
    addItemToStorage("bookList", newBook);
    showScreen(newBook);
    dialog.close();
  });
})();
