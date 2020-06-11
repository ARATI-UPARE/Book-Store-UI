import React from 'react'
import BookDataLayer from './BookDataLayer'

var data = new BookDataLayer();

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            cartBookList: []
        }
    }

    componentDidMount() {
        data.fetchAllCartBook(response => {
            console.log(response)
            this.setState({
                cartBookList: response
            })
        })
    }

    render() {
        return (
            <div style={{ marginLeft: '350px', marginRight: '350px', marginTop: '60px', marginBottom: '40px', outlineStyle: 'groove', outlineWidth: 'thin' }}>
                <h3 style={{ marginLeft: '30px' }}> My cart ({this.state.cartBookList.length})</h3>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>,
                    {this.state.cartBookList.map(book => (
                    <div style={{ marginLeft: '30px', marginTop: '20px', height: '160px', marginBottom: '30px', width: '95%', outlineColor: '#F8F8F8', outlineWidth: 'thin', borderBottom: 'groove', display: 'flex', flexDirection: 'row' }} key={book.id}>
                        <img style={{ width: '110px', height: '140px' }} src={book.picPath} alt="" />
                        <div style={{ marginLeft: '50px', paddingRight: '100px' }}>
                            <text is="x3d" style={{ width: '200px' }}>{book.nameOfBook}</text><br></br><br></br>
                            <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br>
                            <h4>Rs. {book.price}</h4>
                            <button style={{ width: '25px', marginLeft: '4px', borderRadius: '25px' }}>-</button>
                            <input style={{ width: '22px', textAlign: 'center', fontWeight: 'bold', marginLeft: '4px' }} placeholder='1'></input>
                            <button style={{ width: '25px', marginLeft: '4px', borderRadius: '25px' }}>+</button>
                            <button style={{ marginLeft: '450px', backgroundColor: '#4863A0', color: 'white', width: '100px', height: '37px', fontWeight: 'bold' }}>Remove</button>
                        </div>
                    </div>
                ))}
                    <button style={{ marginBottom: '9px', marginLeft: '800px', backgroundColor: '#4863A0', color: 'white', width: '140px', height: '37px', fontWeight: 'bold' }}>Place Order</button>
                </div>
            </div>
        );
    }

}

export default Cart;