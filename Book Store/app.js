const form = document.querySelector("#bookstore");

const bookName = document.querySelector("#bookName");
const authorName = document.querySelector("#authorName");
const bookPrice = document.querySelector("#bookPrice");

const books = document.querySelector(".books");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const bookNameValue = bookName.value;

    const authorNameValue = authorName.value;

    const bookPriceValue = bookPrice.value;

    if(!bookNameValue){
        alert("Please enter book name");
        bookName.focus();
        return ;
    }
    if(!isNaN(bookNameValue)){
        alert("Please enter valid book name");
        bookName.focus();
        return ;
    }
    if(!authorNameValue){
        alert("Please enter author name");
        authorName.focus();
        return ;
    }
    if(!isNaN(authorNameValue)){
        alert("Please enter valid autor name");
        authorName.focus();
        return ;
    }
    if(!bookPriceValue){
        alert("Please enter book price");
        bookPrice.focus();
        return ;
    }
    if(isNaN(bookPriceValue)){
        alert("Please enter valid book price");
        bookPrice.focus();
        return ;
    }
    

    const book = document.createElement('div');
    book.classList.add("book");
    book.classList.add("mt-3");
    books.appendChild(book);

    const content = document.createElement('div');
    content.classList.add("content");
    book.appendChild(content);

    const text_input = document.createElement("input");
    text_input.classList.add("text_input");
    text_input.classList.add("form-control");
    text_input.type = "text";
    text_input.setAttribute('readonly','readonly');
    text_input.value = `Book Name : ${bookNameValue}, Author Name : ${authorNameValue}, Book Price : ${bookPriceValue}`;
    content.appendChild(text_input);

    const action = document.createElement('div');
    action.classList.add("action");
    action.classList.add("mt-2");
    book.appendChild(action);

    const text_edit = document.createElement("button");
    text_edit.classList.add("text_edit");
    text_edit.classList.add("btn");
    text_edit.classList.add("btn-success");
    text_edit.innerHTML ="Edit";
    action.appendChild(text_edit);


    const text_delete = document.createElement("button");
    text_delete.classList.add("text_delete");
    text_delete.classList.add("btn");
    text_delete.classList.add("btn-danger");
    text_delete.classList.add("mx-2");
    text_delete.innerHTML ="Delete";
    action.appendChild(text_delete);

    bookName.value ="";
    authorName.value ="";
    bookPrice.value ="";


    text_edit.addEventListener('click',()=>{
        if(text_edit.innerHTML == "Edit"){
            text_edit.innerHTML = "Save";
            text_input.removeAttribute('readonly');
            text_input.focus();
        }else{
            text_edit.innerHTML = "Edit";
            text_input.setAttribute('readonly','readonly');
        }
    });

    text_delete.addEventListener('click', ()=>{
        books.removeChild(book);
    })
    





});