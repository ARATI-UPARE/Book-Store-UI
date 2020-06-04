
class BookDataLayer {
    getAllBook() {
        return(
            {
                name: "The Girl in Room 105",
                author: "Chetan Bhagat",
                url: 'https://books.google.com/books/content?id=GHt_uwEACAAJ&printsec=frontcover&img=1&zoom=5',
                price: 199
            }
        );
    }
    fetchAllBook() {
        var books = []
       fetch('http://localhost:8080/verifyaccount/all')
       .then(res => res.json())
       .then(values => books.push(values))
       console.log(books)
       return books;
    }
}

export default BookDataLayer;