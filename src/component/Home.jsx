import React from 'react'
import BookDataLayer from './BookDataLayer';
import { connect } from 'react-redux';

var data = new BookDataLayer();

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            toggle: false,
            totalPages: '',
            whichData: 'allBooksData',
            pageNumber: 0,
            searchTextHome: ''
        }
    }

    async componentDidMount() {
        await data.fetchAllBook(0, response => {
            console.log(response)
            this.setState({
                books: response.content,
                totalPages: response.totalPages,
                totalElements: response.totalElements
            })
        })
        console.log("data", this.state.whichData);

        await data.fetchAllCartBook(response => {
            this.props.dispatch({ type: "cartUpdate", payload: response.length })
        })
        await data.fetchAllWishlistBook(response => {
            this.props.dispatch({ type: "wishListUpdate", payload: response.length })
        })
    }

    handleClickAddToCart = async (e) => {
        await data.addToCart(e, 1)
        console.log("raj", e)
        this.setState({
            toggle: true
        })
        await data.fetchAllCartBook(response => {
            this.props.dispatch({ type: "cartUpdate", payload: response.length })
        })
    }

    handleClickAddToWishlist = async (e) => {
        await data.addToWishlist(e)
        console.log("raj", e)
        this.setState({
            toggle: true
        })
        await data.fetchAllWishlistBook(response => {
            this.props.dispatch({ type: "wishListUpdate", payload: response.length })
        })
    }

    handleChangeBookSorting = async (e) => {
        if (e.target.value === "Price : High to Low") {
            console.log("whichHigh :", e.target.value);
            await this.setState({
                whichData: e.target.value,
                pageNumber: 0
            })
        }
        else if (e.target.value === "Price : Low to High") {
            await this.setState({
                whichData: e.target.value,
                pageNumber: 0
            })
        }
        else {
            await this.setState({
                whichData: "allBooksData",
                pageNumber: 0
            })
        }
        console.log("dataaaaaaa", this.state.whichData);

        await this.handleChangePage(this.state.pageNumber)
    }

    handleChangePage = async (e) => {
        if (e !== 0) {
            await this.setState({
                pageNumber: e.target.value
            })
        }
        console.log("pagenumber : ", this.state.pageNumber);

        if (this.state.whichData === "Price : High to Low") {
            await data.fetchAllBookDesc(this.state.pageNumber, response => {
                console.log(response)
                this.setState({
                    books: response.content,
                    totalPages: response.totalPages,
                    totalElements: response.totalElements
                })
            })
        }
        else if (this.state.whichData === "Price : Low to High") {
            await data.fetchAllBookAsc(this.state.pageNumber, response => {
                console.log(response)
                this.setState({
                    books: response.content,
                    totalPages: response.totalPages,
                    totalElements: response.totalElements
                })
            })
        }
        else if (this.state.whichData === "allBooksData") {
            await data.fetchAllBook(this.state.pageNumber, response => {
                console.log(response)
                this.setState({
                    books: response.content,
                    totalPages: response.totalPages,
                    totalElements: response.totalElements
                })
            })
        }
        else if (this.state.whichData === "searchData") {
            await data.fetchAllSearchBook(this.state.searchTextHome, this.state.pageNumber, response => {
                this.props.dispatch({ type: "searchUpdate", payload: '' })
                this.setState({
                    books: response.content,
                    totalPages: response.totalPages,
                    totalElements: response.totalElements
                })
            })

        }
    }

    handleSearchtext = async () => {
        await this.setState({
            whichData: "searchData",
            pageNumber: 0
        })
        await this.handleChangePage(this.state.pageNumber)

    }

    render() {
        if (this.props.searchText !== undefined && this.props.searchText !== '') {
            this.setState({
                searchTextHome: this.props.searchText
            })
            if (this.state.searchTextHome !== undefined && this.state.searchTextHome !== '') {
                this.handleSearchtext()
            }
            this.props.dispatch({ type: "searchUpdate", payload: '' })

        }
        let { books } = this.state
        return (
            <div className="homeBar">
                <text is="x3d" style={{ marginLeft:'220px', fontSize:'21px'}} >Books <text is="x3d" style={{  opacity:'0.5',fontSize:'21px' }}>({this.state.totalElements} items)</text></text>
                <select className="select" onChange={this.handleChangeBookSorting} >
                    <option>Sort by relevance</option>
                    <option >Price : High to Low</option>
                    <option>Price : Low to High</option>
                    <option>Newest Arrivals</option>
                </select>
                <div className="allBooks">
                    {books.map((book, index) => (
                        <div className="info"  key={book.id} >
                            <div className="home2">
                                <img className="homeImg" src={book.picPath} alt="" />
                            </div>
                            <br></br>
                            <div className="ellipsis">
                                <text is="x3d" >{book.nameOfBook}</text><br></br>
                                <text is="x3d" style={{ color: 'grey' }}>by {book.author}</text><br></br><br></br>
                                <text is="x3d">Rs. {book.price}</text>
                            </div>
                            <div>
                                <button className="homeButton"
                                    onClick={() => this.handleClickAddToCart(book.id)} >ADD TO BAG</button>
                                <button className="homeButton2"
                                    onClick={() => this.handleClickAddToWishlist(book.id)}>WISHLIST</button>
                            </div>
                            <div className="bookInfo">
                                <p style={{ padding: '13px' }}>{book.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination" >
                    <button className="page-button-view1" value={0} onClick={this.handleChangePage}>First</button>
                    {this.state.pageNumber < 1 ? null :
                        <button className="page-button-view1" value={parseInt(this.state.pageNumber) - 1} onClick={this.handleChangePage} >Previous</button>}
                    {Array.from({ length: this.state.totalPages }, (v, k) => k + 1).map((index) =>
                        <button className="page-button-view" value={index - 1} onClick={(e) => this.handleChangePage(e)}>{index}</button>
                    )}
                    {this.state.pageNumber < this.state.totalPages - 1 ?
                        <button className="page-button-view1" value={parseInt(this.state.pageNumber) + 1} onClick={this.handleChangePage}>Next</button> : null}
                    <button className="page-button-view1" value={this.state.totalPages - 1} onClick={this.handleChangePage}>Last</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    cartCount: state.cartCount,
    wishListCount: state.wishListCount,
    searchText: state.searchText
});

export default connect(mapStateToProps)(Home);