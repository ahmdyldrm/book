class UI{
    static addFilmToUI(newFilm){
        
        const filmList = document.querySelector("#films");
        filmList.innerHTML += `
            <tr>
                
                <td class="text-center"><img src="${newFilm.url}" style="height: 100px;"></img></td>
                <td class="text-center">${newFilm.title}</td>
                <td class="text-center">${newFilm.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Sil</a></td>
            </tr>
        `;
    }

    static addBookToUI(newBook){

        const bookList = document.getElementById("books");
        bookList.innerHTML += `
            <tr>
                <td class="text-center"><img src="${newBook.url}" style="height: 100px;"></td>
                <td class="text-center">${newBook.bookName}</td>
                <td class="text-center">${newBook.writer}</td>
                <td><a href="#" id = "delete-book" class = "btn btn-danger">Sil</a></td>
            </tr>
        `;
    }

    static clearInputs(e1,e2,e3){
        e1.value = "";
        e2.value = "";
        e3.value = "";
    }

    static displayMessages(type,message){
        const showAlert = document.getElementById("show-alert");

        const div = document.createElement("div");
        div.className = `alert alert-${type} m-3`;
        div.textContent = message;
        showAlert.appendChild(div);

        setTimeout(()=>{
            div.remove();
        },2000);
    }

    static loadAllFilms(films){
        const filmList = document.querySelector("#films");
        films.forEach(film => {
            filmList.innerHTML += `
                <tr>
                    <td class="text-center"><img src="${film.url}" style="height: 100px;"></img></td>
                    <td class="text-center">${film.title}</td>
                    <td class="text-center">${film.director}</td>
                    <td><a href="#" id = "delete-film" class = "btn btn-danger">Sil</a></td>
                </tr>
            `;
        });
    }

    static loadAllBooks(books){
        const bookList = document.getElementById("books");
        books.forEach(book => {
            bookList.innerHTML += `
                <tr>
                    <td class="text-center"><img src="${book.url}" style="height: 100px;"></td>
                    <td class="text-center">${book.bookName}</td>
                    <td class="text-center">${book.writer}</td>
                    <td><a href="#" id = "delete-book" class = "btn btn-danger">Sil</a></td>
                </tr>
            `;
        });
    }

    static deleteFilmFromUI(e){
        e.parentElement.parentElement.remove();
    }

    static deleteBookFromUI(e){
        e.parentElement.parentElement.remove();
    }

    static clearAllBooksFromUI(){
        const bookList = document.getElementById("books");
        while(bookList.firstElementChild !== null){
            bookList.firstElementChild.remove();
        }
    }

    static clearAllFilmsFromUI(){
        const filmList = document.querySelector("#films");
        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }
    }
}