import React from 'react'
import BookDataLayer from './BookDataLayer';
import Pagination from '../component/Pagination';
import { connect } from 'react-redux';

var data = new BookDataLayer();

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            toggle: false,
            activePage: 6,
            pageOfItems: [],
            cartCount: 0,
            wishCount: 0
        }

        this.onChangePage = this.onChangePage.bind(this);
    }

    async componentDidMount() {
        await data.fetchAllBook(response => {
            console.log(response)
            this.setState({
                books: response
            })
        })
        await data.fetchAllCartBook(response => {
            this.props.dispatch({ type: "methodCalled", payload: response.length })
        })
        await data.fetchAllWishlistBook(response => {
            this.props.dispatch({ type: "wishListUpdate", payload: response.length })
        })
        
    }

    handleClickAddToCart = async(e) => {
        data.addToCart(e, 1)
        console.log("raj", e)
        this.setState({
            toggle: true
        })
        await data.fetchAllCartBook(response => {
            this.props.dispatch({ type: "methodCalled", payload: response.length })
        })
        window.location.reload(true)
    }

    handleClickAddToWishlist = async(e) => {
        data.addToWishlist(101, e)
        console.log("raj", e)
        await data.fetchAllWishlistBook(response => {
            this.props.dispatch({ type: "wishListUpdate", payload: response.length })
        })
        window.location.reload(true)
    }

    handleChangeBookSorting = (e) => {
        if (e.target.value === "Price : High to Low")
            data.fetchAllBookDesc(response => {
                console.log(response)
                this.setState({
                    books: response.content
                })
            })
        else if (e.target.value === "Price : Low to High")
            data.fetchAllBookAsc(response => {
                console.log(response)
                this.setState({
                    books: response.content
                })
            })
        else
            data.fetchAllBook(response => {
                console.log(response)
                this.setState({
                    books: response
                })
            })
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        let { books, pageOfItems } = this.state
        return (
            <div style={{ flexDirection: 'row', marginTop: '30px' }}>
                <text is="x3d" style={{ marginLeft: '187px', fontSize: '31px' }}>Books <text is="x3d" style={{ fontSize: '20px', opacity: '0.5' }}>({books.length} items)</text></text>
                <select onChange={this.handleChangeBookSorting} style={{ marginLeft: '948px', fontSize: '20px' }}>
                    <option>Sort by relevance</option>
                    <option >Price : High to Low</option>
                    <option>Price : Low to High</option>
                    <option>Newest Arrivals</option>
                </select>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '150px', marginRight: '90px', marginBottom: '50px' }}>
                    {this.state.pageOfItems.map((book, index) => (
                        <div className="info" style={{ margin: '40px', height: '380px', width: '270px', outlineStyle: 'groove', outlineColor: '#F8F8F8', outlineWidth: 'thin' }} key={book.id} >

                            <div style={{ height: '220px', width: '270px', outlineStyle: 'groove', outlineColor: '#F5F5F5', outlineWidth: '0.1px', backgroundColor: '#F5F5F5' }}>
                                <img style={{ width: '145px', height: '180px', marginLeft: '60px', marginTop: '20px', marginBottom: '25px' }} src={book.picPath} alt="" />
                            </div>
                            <br></br>
                            <div className="ellipsis">
                                <text is="x3d" >{book.nameOfBook}</text><br></br>
                                <text is="x3d" style={{ color: 'grey' }}>by {book.author}</text><br></br><br></br>
                                <text is="x3d">Rs. {book.price}</text><br></br><br></br>
                            </div>
                            {this.state.toggle ? <button style={{
                                backgroundColor: 'blue', color: 'white', width: '240px', height: '37px', marginLeft: '18px',
                                marginBottom: '20px', fontWeight: 'bold', borderWidth: 'thin'
                            }} >ADDED TO BAG</button>
                                :
                                <div>
                                    <button style={{ backgroundColor: '#A52A2A', color: 'white', width: '110px', height: '37px', marginLeft: '18px', marginBottom: '20px', fontWeight: 'bold', borderWidth: 'thin', borderRadius: '5px' }}
                                        onClick={() => this.handleClickAddToCart(book.id)} >ADD TO BAG</button>
                                    <button style={{ marginLeft: '13px', width: '110px', height: '37px', fontWeight: 'bold', borderWidth: 'thin', borderRadius: '5px' }}
                                        onClick={() => this.handleClickAddToWishlist(book.id)}>WISHLIST</button>
                                </div>}
                            <div className="bookInfo">
                                <p style={{padding: '13px'}}>{book.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ marginBottom: '30px'}}>
                <Pagination items={this.state.books} onChangePage={this.onChangePage} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cartCount: state.cartCount,
    wishListCount: state.wishListCount
});

export default connect(mapStateToProps)(Home);