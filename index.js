const addBookButton = document.querySelector('.addBookBtn')

const dialog = document.querySelector('dialog')
const closeButton = document.querySelector('dialog > form > button')
const dialogForm = document.querySelector('dialog > form')
const titleField = document.querySelector('#title')
const authorField = document.querySelector('#author')
const isReadCheckBox = document.querySelector('#read')
const container = document.querySelector('.container')

let books = [new Book("Example Title", "Example Author", true), new Book("Example Title", "Example Author", true)]

function Book(title, author, isRead){
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}


closeButton.addEventListener("click", ()=>{
    let title = titleField.value 
    let author = authorField.value 
    let isRead = isReadCheckBox.checked

    let newBook = new Book(title, author, isRead)
    dialogForm.reset() 
    books.push(newBook)
    
    displayBooks()
})


addBookButton.addEventListener("click", ()=>{
    dialog.showModal()
})


function displayBooks(){
    container.innerHTML = ""

    for (const book of books) {
        const bookDisplayDiv = document.createElement("div")
        const titleDiv = document.createElement("div")
        const authorDiv = document.createElement("div")
        const readDiv = document.createElement("div")
        const isReadCheckBox = document.createElement("input")
        isReadCheckBox.type = "checkbox"

        bookDisplayDiv.className = "displayBook"
        bookDisplayDiv.appendChild(titleDiv)
        bookDisplayDiv.appendChild(authorDiv)
        bookDisplayDiv.appendChild(readDiv)
        readDiv.appendChild(isReadCheckBox)

        titleDiv.textContent = `Title: ${book.title}`
        authorDiv.textContent = `Author: ${book.author}`
        readDiv.innerHTML = "Did Read: " + readDiv.innerHTML
        isReadCheckBox.checked = book.isRead ? true : false

        container.appendChild(bookDisplayDiv)
    }
}

displayBooks()