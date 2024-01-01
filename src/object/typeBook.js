import Book from "./book";

export default class typeBook extends Book {
  constructor(title, page, isRead, author, type) {
    super(title, page, isRead, author);
    this.type = type;
  }
}
export { typeBook };
