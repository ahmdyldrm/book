class Storage{

    static addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
    }

    static getFilmsFromStorage(){
        let films;
        if(localStorage.getItem("films") === null){
            films = [];
        }
        else{
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }

    static addBookToStorage(newBook){
        let books = this.getBookFromStorage();
        books.push(newBook);
        localStorage.setItem("books",JSON.stringify(books));
    }

    static getBookFromStorage(){
        let books;
        if(localStorage.getItem("books") === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }

    static deleteFilmFromStorage(filmTitle){
        let films = this.getFilmsFromStorage();
        films.forEach((film,index) => {
            if(film.title === filmTitle){
                films.splice(index,1);
            }
        });
        localStorage.setItem("films",JSON.stringify(films));
    }

    static deleteBookFromStorage(name){
        let books = this.getBookFromStorage();
        books.forEach((book,index) => {
            if(book.bookName === name){
                books.splice(index,1);
            }
        });
        localStorage.setItem("books",JSON.stringify(books));
    }

    static clearAllBooksFromStorage(){
        localStorage.removeItem("books");
    }

    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
    }
}