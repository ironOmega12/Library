const myLibrary = [];

class Book{
    constructor(
        title = '-',
        author = '-',
        pages = '0',
        isRead = false
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

Book.prototype.toggleRead = function () {
    this.isRead = !this.isRead;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

function render() {
    const content = document.querySelector('.container');
    content.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookCard = document.createElement('div');
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
                <div class="card-header">
                    <h3>Titlu: ${book.title}</h3>
                </div>
                <div class="card-body">
                    <p>Author: ${book.author}</p>
                    <p>Pages: ${book.pages}</p>
                    <p class= "read-status">${book.isRead ? "Read" : "Not Read Yet"}</p>
                    <button class ="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
                    <button class ="remove-btn" onclick="removeBook(${i})">Remove</button> 
                </div>`;
        content.appendChild(bookCard);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}


const addButton = document.getElementById('add-btn');
const newBookForm = document.querySelector('#new-book-form');

addButton.addEventListener('click', () => {
    newBookForm.style.display = "flex";
    newBookForm.classList.add('stilat');
});

newBookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
    newBookForm.style.display = "none";
});