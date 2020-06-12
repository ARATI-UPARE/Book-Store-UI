import React, { Component } from 'react';
import BookDataLayer from './BookDataLayer'

var data = new BookDataLayer();

class Wishlist extends Component {
    constructor() {
        super()
        this.state = {
            wishlistBooks: []
        }
    }

    async componentDidMount() {
        await data.fetchAllWishlistBook(response => {
            console.log(response)
            this.setState({
                wishlistBooks: response
            })
        })
    }

    render() {
        return (
            <div style={{ marginLeft: '350px', marginRight: '350px', marginTop: '60px', marginBottom: '40px', outlineStyle: 'groove', outlineWidth: 'thin', width: '65%' }}>
                <h3 style={{ marginLeft: '30px' }}> My wishlist ({this.state.wishlistBooks.length})</h3>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>,
                    {this.state.wishlistBooks.map(book => (
                    <div style={{ marginLeft: '30px', marginTop: '20px', height: '160px', marginBottom: '30px', width: '95%', outlineColor: '#F8F8F8', outlineWidth: 'thin', borderBottom: 'groove', display: 'flex', flexDirection: 'row' }} key={book.id}>
                        <img style={{ width: '110px', height: '140px' }} src={book.picPath} alt="" />
                        <div style={{ marginLeft: '50px' }}>
                            <text is="x3d" style={{ width: '200px' }}>{book.nameOfBook}</text><br></br><br></br>
                            <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br>
                            <h4>Rs. {book.price}</h4>
                            <button style={{ marginLeft: '500px', backgroundColor: '#4863A0', color: 'white', width: '100px', height: '37px', fontWeight: 'bold' }}>Remove</button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        );
    }

}

export default Wishlist;