
class BookDataLayer {
    fetchAllBook(callback) {
       fetch('http://localhost:8080/verifyaccount/all')
       .then(res => res.json())
       .then(values => callback(values))
    }
}

export default BookDataLayer;