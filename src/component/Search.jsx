import React from 'react';
import { Component } from 'react';
import BookDataLayer from './BookDataLayer'

var data = new BookDataLayer();

class Search extends Component {
    constructor() {
        super()
        this.state = {
            books: [],
            searchText: ''
        }
    }

    componentDidMount() {
        data.fetchAllBook(response => {
            console.log(response)
            this.setState({
                books: response
            })
        })
    }

    handleChangeSearchText = async(e) => {
       await this.setState({
            searchText: e.target.value
        })
        if (this.state.searchText !== '') {
            data.fetchAllSearchBook(this.state.searchText, response => {
                console.log(this.state.searchText)
                this.setState({
                    books: response
                })
            })
        }
    }

    render() {
        return (
            <div style={{ marginTop: '35px' }}>
                <input style={{ marginLeft: '500px', height: '30px', width: '550px', fontFamily: 'fontawesome' }} type='text' placeholder=' &#xf002; Search here...' onChange={(e) => this.handleChangeSearchText(e)} ></input>


                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '150px', marginRight: '90px' }}>
                    {this.state.books.map((book) =>
                        <div style={{ margin: '40px', height: '380px', width: '270px', outlineStyle: 'groove', outlineColor: '#F8F8F8', outlineWidth: 'thin' }} key={book.id}>
                            <div style={{ height: '220px', width: '270px', outlineStyle: 'groove', outlineColor: '#F5F5F5', outlineWidth: '0.1px', backgroundColor: '#F5F5F5' }}>
                                <img style={{ width: '145px', height: '180px', marginLeft: '60px', marginTop: '20px', marginBottom: '25px' }} src={book.picPath} alt="" />
                            </div>
                            <br></br>
                            <div style={{ marginLeft: '18px' }}>
                                <text is="x3d" style={{ width: '200px' }}>{book.nameOfBook}</text><br></br>
                                <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br><br></br>
                                <text is="x3d">Rs. {book.price}</text><br></br><br></br>
                            </div>
                            {this.state.toggle ? <button style={{
                                backgroundColor: 'blue', color: 'white', width: '240px', height: '37px', marginLeft: '18px',
                                marginBottom: '20px', fontWeight: 'bold', borderWidth: 'thin'
                            }} >ADDED TO BAG</button>
                                :
                                // <div>
                                //     <button style={{ backgroundColor: '#A52A2A', color: 'white', width: '110px', height: '37px', marginLeft: '18px', marginBottom: '20px', fontWeight: 'bold', borderWidth: 'thin' }}
                                //         onClick={() => this.handleClickAddToCart(book.id)} >ADD TO BAG</button>
                                //     <button style={{ marginLeft: '13px', width: '110px', height: '37px', fontWeight: 'bold', borderWidth: 'thin' }}
                                //         onClick={() => this.handleClickAddToWishlist(book.id)}>WISHLIST</button>
                                // </div>
                                null}

                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Search