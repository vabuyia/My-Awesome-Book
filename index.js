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
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><button class="btn btn-remove"> Remove </button></td>    
    `;

    list.appendChild(row);
  }

  static removeFromStore(target) {
    const removeBook = target.previousElementSibling.firstElementChild.textContent;

    this.books.filter((number, index) => {
      if(number.title === removeBook) {
        this.books.splice(index, 1)
      }
      return this.books
    })
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
});


// Remove a book

function removeBook(e) {
  if (e.target.className === 'btn-remove') {
    UI.removeBookFromStore(e.target);

  }
}

const bookList = document.querySelector('.book-list')
bookList.addEventListener('click', removeBook)