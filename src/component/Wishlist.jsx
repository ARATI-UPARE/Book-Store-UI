import React, { Component } from 'react';
import BookDataLayer from './BookDataLayer'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

var data = new BookDataLayer();

class Wishlist extends Component {
    constructor() {
        super()
        this.state = {
            wishlistBooks: [],
            // cartBookCount: 0
        }
    }

    async componentDidMount() {
        await data.fetchAllWishlistBook(response => {
            console.log(response)
            this.setState({
                wishlistBooks: response
            })
        })
        await data.fetchAllCartBook(response => {
            this.props.dispatch({ type: "cartUpdate", payload: response.length })
        })
        await data.fetchAllWishlistBook(response => {
            this.props.dispatch({ type: "wishListUpdate", payload: response.length })
        })
        
    }

    async handleChangeBookRemove(e) {
        await data.removeFromWishList(e)
        await data.fetchAllWishlistBook(response => {
            console.log(response)
            this.setState({
                wishlistBooks: response
            })
            this.props.dispatch({ type: "wishListUpdate", payload: response.length })
        })
    }

    render() {
        return (
            localStorage.getItem("token") != null && localStorage.getItem("token") !== "undefined" ?
            <div>
                <div style={{ marginLeft: '350px', marginRight: '350px', marginTop: '60px', marginBottom: '40px', outlineStyle: 'groove', outlineWidth: 'thin', width: '970px' }}><br/>
                    <h3 style={{ marginLeft: '30px' }}> My wishlist ({this.state.wishlistBooks.length})</h3>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>,
                    {this.state.wishlistBooks.map(book => (
                        <div style={{ marginLeft: '30px', marginTop: '20px', height: '160px', marginBottom: '30px', outlineColor: '#F8F8F8', outlineWidth: 'thin', borderBottom: 'groove', display: 'flex', flexDirection: 'row' }} key={book.id}>
                            <img style={{ width: '110px', height: '140px' }} src={book.picPath} alt="" />
                            <div style={{ marginLeft: '50px' }}>
                                <text is="x3d" style={{ width: '200px' }}>{book.nameOfBook}</text><br></br><br></br>
                                <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br>
                                <h4>Rs. {book.price}</h4>
                                <button style={{ marginLeft: '650px', backgroundColor: '#4863A0', color: 'white', width: '100px', height: '37px', fontWeight: 'bold' }} onClick={() => this.handleChangeBookRemove(book.id)} >Remove</button>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            :  <Redirect to='/signin' onClick={sessionStorage.setItem("isFrom", "wishlist")} />
        );
    }

}

const mapStateToProps = (state) => ({
    wishListCount: state.wishListCount
});

export default connect(mapStateToProps) (Wishlist);