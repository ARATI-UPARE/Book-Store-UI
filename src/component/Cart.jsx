import React from 'react'
import BookDataLayer from './BookDataLayer'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

var data = new BookDataLayer();

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            cartBookList: [],
            toggle: false,
            summaryToggle: false,
            name: '',
            pincode: '',
            locality: '',
            address: '',
            city: '',
            landmark: '',
            addressType: '',
            home: false,
            work: false,
            other: false,
            orderId: ''
        }
    }

      async componentDidMount() {
       await  data.fetchAllCartBook(response => {
            console.log(response)
            this.setState({
                cartBookList: response
            })
        })
       await  data.fetchAllCartBook(response => {
            this.props.dispatch({ type: "cartUpdate", payload: response.length })
        })
        await data.fetchAllWishlistBook(response => {
            this.props.dispatch({ type: "wishListUpdate", payload: response.length })
        })
    }

    async handleChangeBookRemove(e) {
        await data.removeFromCart(e, 1)
        await data.fetchAllCartBook(response => {
            console.log("raj", response)
            this.setState({
                cartBookList: response
            })
            this.props.dispatch({ type: "cartUpdate", payload: response.length })
        })
    }

    async handleChangeBookDec(e) {
        let q = e.bookQuantity - 1;
        await  data.updateCart(e.id, q)
        await data.fetchAllCartBook(response => {
            this.setState({
                cartBookList: response
            })
            this.props.dispatch({ type: "cartUpdate", payload: response.length })
        })
    }

    async handleChangeBookInc(e) {
        let q = e.bookQuantity + 1;
        await data.updateCart(e.id, q)
        await data.fetchAllCartBook(response => {
            this.setState({
                cartBookList: response
            })
            this.props.dispatch({ type: "cartUpdate", payload: response.length })
        })
    }

    handleChangeEnableCustomerDetails = async() => {
        await data.isCustomerDetailsExisted(response => {
            console.log("result : ", response)
            if (response === 'true') {
             this.setState({
                toggle: false,
                summaryToggle: true
            })
            console.log("toggle : ", this.state.toggle);
            console.log("summarytoggle : ", this.state.summaryToggle);
        }else {
            this.setState({
                toggle: true,
                summaryToggle: false
            })
            console.log("toggle123 : ", this.state.toggle);
            console.log("summarytoggle : ", this.state.summaryToggle);
        }
        })
    }

    handleChangeEnableOrderSummary = async () => {

        if (this.state.home) {
            await this.setState({
                addressType: 'home'
            })
        }
        if (this.state.work) {
            await this.setState({
                addressType: 'work'
            })
        }
        if (this.state.other) {
            await this.setState({
                addressType: 'other'
            })
        }

        console.log("type", this.state.addressType);

        await data.addCustomerDetails(this.state.name, this.state.pincode, this.state.locality, this.state.address, this.state.city, this.state.landmark, this.state.addressType)
        await this.setState({
            summaryToggle: true,
            toggle: false
        })

    }

    handleSetName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSetPincode = (e) => {
        this.setState({
            pincode: e.target.value
        })
    }

    handleSetLocality = async (e) => {
        await this.setState({
            locality: e.target.value
        })
    }

    handleSetAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    handleSetCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    handleSetLandmark = async (e) => {
        await this.setState({
            landmark: e.target.value,
        })
    }

    handleSelectHome = async () => {
        await this.setState({
            work: false,
            home: true,
            other: false
        })
    }

    handleSelectWork = async () => {
        await this.setState({
            work: true,
            home: false,
            other: false
        })
        console.log("work", this.state.work);
    }

    handleSelectOther = async () => {
        await this.setState({
            work: false,
            home: false,
            other: true
        })
        console.log("other", this.state.other);
    }

    async handleChangePlaceOrder() {
        await data.placeOrder(response => {
            console.log("order id : ", response)
        })
    }


    render() {
        return (
            localStorage.getItem("token") !== null && localStorage.getItem("token") !== "undefined" ?
            <div>
                <div className="cartBar"><br />
                    <h3 style={{ marginLeft: '30px' }}> My cart ({this.state.cartBookList.length})</h3>
                    <div className="cart">
                        {this.state.cartBookList.map(book => (
                            <div className="cartKey" key={book.id}>
                                <img className="bookImg" src={book.picPath} alt="" />
                                <div className="cartPadding">
                                    <text is="x3d" style={{ width: '200px' }}>{book.nameOfBook}</text><br></br><br></br>
                                    <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br>
                                    <h4>Rs. {book.price}</h4>
                                    <button className="cartBotton" onClick={() => this.handleChangeBookDec(book)}>-</button>
                                    <input className="cartInput" readOnly value={book.bookQuantity}></input>
                                    <button className="cartBotton" onClick={() => this.handleChangeBookInc(book)} >+</button>
                                    <button className="removeBotton" onClick={() => this.handleChangeBookRemove(book.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                        <button className="placeOrderBotton" onClick={this.handleChangeEnableCustomerDetails}>Place Order</button>
                    </div>
                </div >
                <div className="userDetails">
                    <h3 style={{ marginLeft: '10px', padding: '20px' }}>Customer Details</h3>
                    {this.state.toggle ?
                        <form>
                            <input className="userInput" placeholder="Name" required onChange={(e) => this.handleSetName(e)}></input> <br />
                            <input className="userInput" maxLength='6' minLength='6' placeholder="Pincode" required onChange={(e) => this.handleSetPincode(e)}></input>
                            <input className="userInput" placeholder="Locality" required onChange={(e) => this.handleSetLocality(e)}></input><br />
                            <textarea className="addressInput" placeholder="Address" required onChange={(e) => this.handleSetAddress(e)}></textarea> <br />
                            <input className="userInput" placeholder="City/Town" required onChange={(e) => this.handleSetCity(e)}></input>
                            <input className="userInput" placeholder="Landmark" required onChange={(e) => this.handleSetLandmark(e)}></input> <br />
                            <div style={{ marginLeft: '30px' }}>
                                <h4>Type</h4>
                                <input type="radio" name="type" style={{ marginBottom: '40px' }} onChange={this.handleSelectHome} /> Home
                                <input type="radio" name="type" style={{ marginLeft: '30px' }} onChange={this.handleSelectWork} /> Work
                                <input type="radio" name="type" style={{ marginLeft: '30px' }} onChange={this.handleSelectOther} /> Other
                        </div>
                            <input className="continueBotton" type="submit" value="CONTINUE" onClick={this.handleChangeEnableOrderSummary} />
                        </form> : null}
                </div>
                <div style={{ marginLeft: '350px', marginRight: '350px', marginBottom: '40px', outlineStyle: 'groove', outlineWidth: 'thin' }}>
                    <h3 style={{ marginLeft: '10px', padding: '20px' }}>Order Summary</h3>
                    {this.state.summaryToggle ?
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>
                            {this.state.cartBookList.map(book => (
                                <div className="cartBooks" key={book.id}>
                                    <img style={{ width: '110px', height: '140px' }} src={book.picPath} alt="" />
                                    <div style={{ marginLeft: '50px', paddingRight: '100px' }}>
                                        <text is="x3d" style={{ width: '200px' }}>{book.nameOfBook}</text><br></br><br></br>
                                        <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br>
                                        <h4>Rs. {book.price * book.bookQuantity}</h4>
                                        <h4 className="qtyTag">Qty. {book.bookQuantity}</h4>
                                    </div>
                                </div>
                            ))}
                            <Link to="/orderplaced" >
                                <button style={{ marginBottom: '9px', marginLeft: '800px', backgroundColor: '#4863A0', color: 'white', width: '140px', height: '37px', fontWeight: 'bold' }} onClick={this.handleChangePlaceOrder}>CHECKOUT</button>
                            </Link>
                        </div> : null}
                </div>
            </div>
            :  <Redirect to='/signin' onClick={sessionStorage.setItem("isFrom", "cart")} />
        );
    }

}

const mapStateToProps = (state) => ({
    cartCount: state.cartCount
});

export default connect(mapStateToProps)(Cart);