let books = [
    {
        title : 'b',
        autohor : 'John',
        rating : 4.5
    },
    {
        title : 'd',
        autohor : 'Jolly',
        rating : 3
    },
    {
        title : 'a',
        autohor : 'Rehman',
        rating : 4.2
    },
    {
        title : 'c',
        autohor : 'Marry',
        rating : 2
    }
];

console.log(books);

let ratinggreatethan4 = books
.filter( (book) =>{
    return book.rating >= 4;
})
.sort((a, b) =>{
    return a.title.localeCompare(b.title);
});

console.log(ratinggreatethan4);