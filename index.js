class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Book 1',
        author: 'vincent abuya',
      },
      {
        title: 'Book 2',
        author: 'vincent arnord',
      },
    ];

    const books = StoredBooks;

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

document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  //Add Book to List
  UI.addBookToList(book);

  //Fields cleared 
  UI.clearFields();
});

//Delete a book 
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});

