Booktitle = document.getElementById("bookTitle");
Author = document.getElementById("author");
Genre = document.getElementById("genre");
Year = document.getElementById("year");
Quantity = document.getElementById("quantity");
ClearBtn = document.getElementById("clearBtn");
Addbtn = document.getElementById("addBtn");
EditForm = document.getElementById("editForm");
EditBookId = document.getElementById("editBookId");
EditBookId = document.getElementById("editBookId");
let books = [];
console.log(books);
function addBook(book){
    let table = $("#bookTable tbody");
    table.append(`
                  <tr id="${book.id}">
                  <td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.genre}</td>
                  <td>${book.year}</td>
                  <td>${book.quantity}</td>
                  <td>
                    <button class="btn btn-primary editBtn mb-1" data-id="${book.id}">Edit</button>
                    <button class="btn btn-primary deleteBtn mb-1" data-id="${book.id}">Delete</button>
                  </td>
                `);
}

function clearForm(){
    document.getElementById("bookTitle").value = '';
    document.getElementById("author").value = '';
    document.getElementById("genre").value = '';
    document.getElementById("year").value = '';
    document.getElementById("quantity").value = '';
}

function generateId(){
    return Math.floor(Math.random() * 1000000);
}


ClearBtn.addEventListener('click', ()=>{
    clearForm();
})



Addbtn.addEventListener('click',function(){
      let book = {
        id:generateId(),
        title:Booktitle.value,
        author:Author.value,
        genre:Genre.value,
        year:Year.value,
        quantity:Quantity.value
    };

    books.push(book);
    addBook(book);
    clearForm();
});


// EditForm.addEventListener('click',function(){
//   let bookId = EditBookId.value;
//   let bookIndex = books.findIndex((book)=>book.id == bookId);
//   let book = books[bookIndex];

//   book.title = 
// });




