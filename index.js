class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class UI {
  static displayBooks() {
    

    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');
    row.innerHTML = `
    <div class="books_stores">
     <div class="stores_titles">
      <p>${book.title}</p>
      <p>${book.author}</p>
     </div> 
      <button class="btn btn-delete"> Remove </button> 
    </div>     
    `;

    list.appendChild(row);
  }

  static deleteBook(el){
    if(el.classList.contains('btn-delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields(){

    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';

  }  
}

//Local storage 
class Store{
   static getBooks(){
     let books;
     if(localStorage.getItem('books') === null){
       books = [];
     }
     else{
       books = JSON.parse(localStorage.getItem('books'));
     }
     return books;
  }

  static addBook(book){
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(book){
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if(book.book === book) {
        books.splice(index,1);
      }

    });

    localStorage.setItem('books', JSON.stringify(books));

  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  //validatation 
  if(title === '' || author === '') {
    alert('Missing field');
  }
  else {
    const book = new Book(title, author);

    //Add Book to List
    UI.addBookToList(book);

    //Add book to local storage
    Store.addBook(book);



    //Fields cleared
    UI.clearFields();

  }  
});

//Delete a book 
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});

