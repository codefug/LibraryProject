export default function clearscreen() {
  const books = document.querySelectorAll(".book");
    Array.from(books).forEach((element)=>{
        element.remove();
    })
}
