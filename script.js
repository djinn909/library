let myLibrary = [];



function Book(title, author, pages, isRead) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
    this.index = uuidv4();

    this.info = function() {
        return (title + " by " + author + ", " + pages +" pages, " + isRead + ".")
    }
}

// Book.prototype.readStatus = (isRead) => (this.isRead = isRead);



function addBookToLibrary(newBook) {
  event.preventDefault()
  myLibrary.push(newBook);
}

//let book = new Book("LOTR", "J. R. R. Tolkien", 500, false); 
//myLibrary[0]=book;
// function displayLibrary(myLibrary = [], table) {
//   table.innerHTML = myLibrary.map((book) => {
//     return `
//   <tr>
//     <td>${book.title}</td> 
//     <td>${book.author}</td>
//     <td>${book.pages}</td>
//     <td>${book.isRead}</td>
//   </tr>
//     `;
//   })
// }

const cont = document.querySelector("#container");
const formcont=document.querySelector('#formcont');

/* function display() {
  myLibrary.forEach(function(item) {
const bookDiv = document.createElement("div");
const title = document.createElement('h3');
const pages = document.createElement('h4');
      title.textContent = item.title;
      pages.textContent = item.pages;
bookDiv.appendChild(title);
bookDiv.appendChild(pages);

cont.appendChild(bookDiv);
})
} */

 

//function bookDisplay() {
let bookDisplay = () => {
  cont.innerHTML='';
  myLibrary.forEach(function(book) {
const bookDiv = document.createElement('table');
//bookDiv.setAttribute("index", index );
bookDiv.style.border= '1px solid black';
const title = document.createElement('td'); 
const author = document.createElement('td');
const pages = document.createElement('td');
const isRead= document.createElement('td');


      title.textContent = book.title;
      pages.textContent = book.pages;
      author.textContent = book.author;
      isRead.textContent = book.isRead;
bookDiv.appendChild(title);
bookDiv.appendChild(author);
bookDiv.appendChild(pages);
bookDiv.appendChild(isRead);

cont.appendChild(bookDiv);

let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('index', 'deleteBtn')
        deleteBtn.innerHTML = 'DELETE'
        bookDiv.appendChild(deleteBtn)
        deleteBtn.addEventListener('click', () => {
            const idToDelete = book.index;
            myLibrary = myLibrary.filter(book => book.index !== idToDelete);
            bookDisplay();

})
readButton = document.createElement('button');
  readButton.textContent='Change read status';
  readButton.setAttribute('index' , 'readButton')
  bookDiv.appendChild(readButton);
  readButton.addEventListener("click" , () => {
    if (isRead.innerHTML == "read") {
      isRead.innerHTML = "not read yet"
    } else if (isRead.innerHTML == "not read yet") {
      isRead.innerHTML = "read";
    }
  
})})}





const button = document.querySelector('#button');



const invisible= document.querySelector('#invisible');
invisible.style.display= "none";

button.addEventListener('click', displayForm);

function displayForm() {
  if (invisible.style.display=='none') {
    invisible.style.display="block";
  } else if (invisible.style.display=='block') {
    invisible.style.display='none';
  }
} 

invisible.onsubmit = function() {
  title= document.getElementById('title').value;
  author=document.getElementById('author').value;
  pages=document.getElementById('pages').value;

  if (document.getElementById('isRead').checked) {
    isRead= "read";
  } else {
    isRead="not read yet";
  }
  // isRead=document.getElementById('isRead').value;

  let book= new Book(title, author, pages, isRead);
  addBookToLibrary(book);
  bookDisplay(myLibrary);
  invisible.style.display='none';
  invisible.reset();
}




function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

