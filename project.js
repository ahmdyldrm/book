const filmForm = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const filmUrlElement = document.getElementById("film-url");
const bookNameElement = document.getElementById("book-name");
const writerElement = document.getElementById("writer");
const bookUrlElement = document.getElementById("book-url");
const bookForm = document.getElementById("book-form");
const clearBook = document.querySelector("#delete-book");
const clearFilm = document.querySelector("#delete-film");
const clearBooks = document.querySelector("#clear-books");
const clearFilms = document.querySelector("#clear-films");

eventListeners();

function eventListeners(){
    filmForm.addEventListener("submit",addFilm);
    bookForm.addEventListener("submit",addBook);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);

        let books = Storage.getBookFromStorage();
        UI.loadAllBooks(books);
    });
    clearFilm.addEventListener("click",deleteFilm);
    clearBook.addEventListener("click",deleteBook);
    clearBooks.addEventListener("click",clearAllBooks);
    clearFilms.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const filmUrl = filmUrlElement.value;

    if(title === "" || director === "" || filmUrl === ""){
        // Hata mesajı
        UI.displayMessages("danger","Lütfen tüm alanları doldurunuz!..");
    }
    else{
        const newFilm = new Films(title,director,filmUrl);

        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("info","İşlem Başarılı");
    }

    UI.clearInputs(titleElement,directorElement,filmUrlElement);

    e.preventDefault();
}

function addBook(e){
    const bookName = bookNameElement.value;
    const writer = writerElement.value;
    const bookUrl = bookUrlElement.value;

    if(bookName === "" || writer === "" || bookUrl === ""){
        // Hata mesajı
        UI.displayMessages("danger","Lütfen tüm alanları doldurunuz!..");
        console.log("hata");
    }
    else{
        const newBook = new Book(bookName,writer,bookUrl);

        UI.addBookToUI(newBook);
        Storage.addBookToStorage(newBook);
        UI.displayMessages("info","İşlem Başarılı");
    }

    UI.clearInputs(bookNameElement,writerElement,bookUrlElement);

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("info","Silme Başarıyla Gerçekleşti");
    }
}


function deleteBook(e){
    if(e.target.id === "delete-book"){
        UI.deleteBookFromUI(e.target);
        Storage.deleteBookFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("info","Silme Başarıyla Gerçekleşti");
    }
}

function clearAllBooks(){
    if(confirm("Emin misiniz?")){
        UI.clearAllBooksFromUI();
        Storage.clearAllBooksFromStorage();
    }
    
}

function clearAllFilms(){
    if(confirm("Emin misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
    
}