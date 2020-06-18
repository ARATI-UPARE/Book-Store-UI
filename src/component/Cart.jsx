import React from 'react'
import BookDataLayer from './BookDataLayer'
import { Link } from 'react-router-dom';

var data = new BookDataLayer();

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            cartBookList: [],
            toggle: false,
            summaryToggle: false
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

    async handleChangeBookRemove(e) {
        await data.removeFromCart(101, e, 1)
        await data.fetchAllCartBook(response => {
            console.log("raj", response)
            this.setState({
                cartBookList: response
            })
        })
        window.location.reload(true)
    }

    handleChangeBookDec(e) {
        let q = e.bookQuantity - 1;
        console.log("value of q ", q)
        data.updateCart(101, e.id, q)
        window.location.reload(true)
        data.fetchAllCartBook(response => {
            console.log(response)
            this.setState({
                cartBookList: response
            })
        })
        window.location.reload(true)
    }

    handleChangeBookInc(e) {
        let q = e.bookQuantity + 1;
        console.log("value of q ", q)
        data.updateCart(101, e.id, q)
        window.location.reload(true)
        data.fetchAllCartBook(response => {
            console.log(response)
            this.setState({
                cartBookList: response
            })
        })
        window.location.reload(true)
    }

    handleChangeEnableCustomerDetails = () => {
        this.setState({
            toggle: true
        })
    }

    handleChangeEnableOrderSummary = () => {
        this.setState({
            summaryToggle: true
        })
    }


    render() {
        return (
            <div>
                <div style={{ marginLeft: '350px', marginRight: '350px', marginTop: '60px', marginBottom: '40px', outlineStyle: 'groove', outlineWidth: 'thin' }}><br />
                    <h3 style={{ marginLeft: '30px' }}> My cart ({this.state.cartBookList.length})</h3>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>
                        {this.state.cartBookList.map(book => (
                            <div style={{ marginLeft: '30px', marginTop: '20px', height: '160px', marginBottom: '30px', width: '95%', outlineColor: '#F8F8F8', outlineWidth: 'thin', borderBottom: 'groove', display: 'flex', flexDirection: 'row' }} key={book.id}>
                                <img style={{ width: '110px', height: '140px' }} src={book.picPath} alt="" />
                                <div style={{ marginLeft: '50px', paddingRight: '100px' }}>
                                    <text is="x3d" style={{ width: '200px' }}>{book.nameOfBook}</text><br></br><br></br>
                                    <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br>
                                    <h4>Rs. {book.price}</h4>
                                    <button style={{ width: '25px', marginLeft: '4px', borderRadius: '25px' }} onClick={() => this.handleChangeBookDec(book)}>-</button>
                                    <input style={{ width: '22px', textAlign: 'center', fontWeight: 'bold', marginLeft: '4px' }} readOnly value={book.bookQuantity}></input>
                                    <button style={{ width: '25px', marginLeft: '4px', borderRadius: '25px' }} onClick={() => this.handleChangeBookInc(book)} >+</button>
                                    <button style={{ marginLeft: '450px', backgroundColor: '#4863A0', color: 'white', width: '100px', height: '37px', fontWeight: 'bold' }} onClick={() => this.handleChangeBookRemove(book.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                        <button style={{ marginBottom: '9px', marginLeft: '800px', backgroundColor: '#4863A0', color: 'white', width: '140px', height: '37px', fontWeight: 'bold' }} onClick={this.handleChangeEnableCustomerDetails}>Place Order</button>
                    </div>
                </div >
                <div style={{ marginLeft: '350px', marginRight: '350px', marginBottom: '40px', outlineStyle: 'groove', outlineWidth: 'thin' }}>
                    <h3 style={{ marginLeft: '10px', padding: '20px' }}>Customer Details</h3>
                    {this.state.toggle ?
                        <form>
                            <input style={{ marginLeft: '30px', height: '30px', marginBottom: '10px', width: '225px' }} placeholder="Name" required></input>
                            <input style={{ marginLeft: '30px', height: '30px', marginBottom: '10px', width: '225px' }} size='10' type='number' placeholder="Phone Number" required></input> <br />
                            <input style={{ marginLeft: '30px', height: '30px', marginBottom: '10px', width: '225px' }} maxLength='6' type='number' pattern="^[1-9][0-9]{5}$" placeholder="Pincode" required></input>
                            <input style={{ marginLeft: '30px', height: '30px', marginBottom: '10px', width: '225px' }} placeholder="Locality" required></input><br />
                            <textarea style={{ marginLeft: '30px', height: '50px', marginBottom: '10px', width: '488.7px' }} placeholder="Address" required></textarea><br />
                            <input style={{ marginLeft: '30px', height: '30px', marginBottom: '10px', width: '225px' }} placeholder="City/Town" required></input>
                            <input style={{ marginLeft: '30px', height: '30px', marginBottom: '10px', width: '225px' }} placeholder="Landmark" required></input><br />
                            <div style={{ marginLeft: '30px' }}>
                                <h4>Type</h4>
                                <input type="radio" name="type" style={{ marginBottom: '40px' }} /> Home
                            <input type="radio" name="type" style={{ marginLeft: '30px' }} /> Work
                            <input type="radio" name="type" style={{ marginLeft: '30px' }} /> Other
                        </div>
                            <input style={{ marginLeft: '800px', marginBottom: '20px', backgroundColor: '#4863A0', color: 'white', width: '140px', height: '37px', fontWeight: 'bold' }} type="submit" value="CONTINUE" onClick={this.handleChangeEnableOrderSummary} />
                        </form> : null}
                </div>
                <div style={{ marginLeft: '350px', marginRight: '350px', marginBottom: '40px', outlineStyle: 'groove', outlineWidth: 'thin' }}>
                    <h3 style={{ marginLeft: '10px', padding: '20px' }}>Order Summary</h3>
                    {this.state.summaryToggle ?
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>
                            {this.state.cartBookList.map(book => (
                                <div style={{ marginLeft: '30px', marginTop: '20px', height: '160px', marginBottom: '30px', width: '95%', outlineColor: '#F8F8F8', outlineWidth: 'thin', display: 'flex', flexDirection: 'row' }} key={book.id}>
                                    <img style={{ width: '110px', height: '140px' }} src={book.picPath} alt="" />
                                    <div style={{ marginLeft: '50px', paddingRight: '100px' }}>
                                        <text is="x3d" style={{ width: '200px' }}>{book.nameOfBook}</text><br></br><br></br>
                                        <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br>
                                        <h4>Rs. {book.price * book.bookQuantity}</h4>
                                        <h4 style={{ width: '70px', textAlign: 'center', fontWeight: 'bold' }}>Qty. {book.bookQuantity}</h4>
                                    </div>
                                </div>
                            ))}
                            <Link to="/orderplaced" >
                                <button style={{ marginBottom: '9px', marginLeft: '800px', backgroundColor: '#4863A0', color: 'white', width: '140px', height: '37px', fontWeight: 'bold' }}>CHECKOUT</button>
                            </Link>
                        </div> : null}
                </div>
            </div>
        );
    }

}

export default Cart;