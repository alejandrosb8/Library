let myLibrary = [];

container = document.querySelector('#card-container')
addButton = document.querySelector('.add-card')

dimDisplay = document.querySelector('.dim')

btnAccept = document.querySelector('#acceptButton')
btnExit = document.querySelector('#exitButton')

inputTitle = document.querySelector('#inputTitle')
inputAuthor = document.querySelector('#inputAuthor')

checkinput = document.querySelector('#alreadyRead')

updateLibrary(myLibrary)

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary(title, author, read) {
  myLibrary.push(new Book(title, author, read))
  updateLibrary(myLibrary)
}

function updateLibrary(mylibrary){
    deleteLibrary()
    mylibrary.forEach(book => {
        newCard = document.createElement('div')
        spanOne = document.createElement('span')
        title = document.createElement('p')
        author = document.createElement('p')
        spanTwo = document.createElement('span')
        label = document.createElement('label')
        labelText = document.createElement('p')
        check = document.createElement('input')
        deletebtn = document.createElement('button')
        deletebtn.classList.add('btnDelete')
        title.classList.add('title')
        author.classList.add('author')
        newCard.classList.add('card');
        newCard.classList.add('info-card');
        check.setAttribute('type', 'checkbox')
        check.setAttribute('name', 'read')
        check.setAttribute('id', 'read')
        title.textContent = '"' + book.title + '"';
        author.textContent = 'By ' + book.author;
        deletebtn.textContent = "Delete"
        labelText.textContent = "Mark As Read";
        if (book.read == true){
            check.checked = true;
        }
        label.appendChild(check);
        label.appendChild(labelText);
        spanOne.appendChild(title)
        spanOne.appendChild(author)
        spanTwo.appendChild(label)
        newCard.appendChild(spanOne)
        newCard.appendChild(spanTwo)
        newCard.appendChild(deletebtn)
        container.appendChild(newCard)
    });
    addLastCard()

    deleteButton = document.querySelectorAll('.btnDelete')
    deleteButton.forEach(button => {
        button.addEventListener('click', (e) => {
            deleteCard(e.target)
        })
    });

    addButton = document.querySelector('.add-card')
    addButton.addEventListener('click', (e) => {
        dimDisplay.style.display = 'flex';
    })
}

function addLastCard(){
    newCard = document.createElement('div')
    title = document.createElement('p')
    symbol = document.createElement('p')
    title.textContent = "Add Book"
    symbol.textContent = "+"
    title.classList.add('add-title')
    symbol.classList.add('plus-symbol')
    newCard.classList.add('card');
    newCard.classList.add('add-card');
    newCard.appendChild(title);
    newCard.appendChild(symbol);
    container.appendChild(newCard);
}

function deleteLibrary(){
    allBooks = document.querySelectorAll('.card')
    allBooks.forEach(book => {
        book.remove()
    });
}

function deleteCard(target){
    let toDelete = target.parentElement.firstChild.firstChild.textContent;
    toDelete = toDelete.replace(/"/g, '')
    let index = myLibrary.map((e) => {
        return e.title;
    }).indexOf(toDelete);
    console.log(toDelete + " " + index)
    if (index !== -1){
        myLibrary.splice(index, 1)
    }

    updateLibrary(myLibrary)
}

btnAccept.addEventListener('click', (e) => {
    addBookToLibrary(inputTitle.value, inputAuthor.value, checkinput.checked)
    inputTitle.value = '';
    inputAuthor.value = '';
    checkinput.checked = false;
    dimDisplay.style.display = 'none';
})
btnExit.addEventListener('click', (e) => {
    dimDisplay.style.display = 'none';
})
