import React from 'react'
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            books: []
        }
    }

    async componentDidMount() {
        // fetch('http://localhost:8080/verifyaccount/all')
        //     .then(res => res.json())
        //     .then(booklist => {
                await data.fetchAllBook(response => {
                    console.log('boossss', response)
                    this.setState({
                        books: response
                    })
                })
                // console.log('bookkkk', booklist)
            //     await this.setState({
            //         books: booklist
            //     });
            // })
        console.log(this.state.books)
    // })
}

    render() {
        let { books } = this.state
        console.log('bookkkkss', books)
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap', marginLeft: '150px', marginRight: '90px' }}>
                {books.map(book => ( 
                    <div style={{margin: '40px', padding: '20px'}} key={book.nameOfBook}>
                        <img style={{width: '180px', height: '250px'}} src={book.picPath} alt="" />
                        <h3 style={{width: '200px'}}>{book.nameOfBook}</h3>
                        <h5 style={{opacity: '0.5'}}>{book.author}</h5>
                        <h4>Rs. {book.price}</h4>
                        <button style={{backgroundColor: '#A52A2A', color: 'white', width: '100px', height: '30px'}}>ADD TO BAG</button>
                        <button style={{ marginLeft: '3.5px', width: '100px', height: '30px' }}>WISHLIST</button>
                    </div>
                ))}
            </div>
        );
    }
}
export default Home;