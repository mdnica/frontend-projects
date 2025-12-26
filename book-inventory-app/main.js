const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const bookList = document.getElementById("book-list");
const submitBtn = document.getElementById("submit-btn");

let books = [];
let editId = null;

/* ADD or UPDATE BOOK */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (!title || !author) return;

  if (editId) {
    // UPDATE
    const book = books.find((b) => b.id === editId);
    book.title = title;
    book.author = author;
    editId = null;
    submitBtn.textContent = "Add Book";
  } else {
    // ADD
    books.push({
      id: Date.now(),
      title,
      author,
    });
  }

  form.reset();
  renderBooks();
});

/* EDIT BOOK */
function editBook(id) {
  const book = books.find((b) => b.id === id);
  titleInput.value = book.title;
  authorInput.value = book.author;
  editId = id;
  submitBtn.textContent = "Update Book";
}

/* DELETE BOOK */
function deleteBook(id) {
  books = books.filter((book) => book.id !== id);
  renderBooks();
}

/* RENDER */
function renderBooks() {
  bookList.innerHTML = "";

  books.forEach((book) => {
    const li = document.createElement("li");
    li.className = "book";

    li.innerHTML = `
      <span><strong>${book.title}</strong><br>${book.author}</span>
      <div class="actions">
        <button class="edit" onclick="editBook(${book.id})">Edit</button>
        <button class="delete" onclick="deleteBook(${book.id})">X</button>
      </div>
    `;

    bookList.appendChild(li);
  });
}
