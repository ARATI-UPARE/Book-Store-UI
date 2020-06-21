import React from 'react'
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            books: [],
            toggle: false
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

    handleClickAddToCart = (e) => {
        data.addToCart(101, e, 1)
        console.log("raj", e)
        this.setState({
            toggle: true
        })
    }

    handleClickAddToWishlist = (e) => {
        data.addToWishlist(101, e)
        console.log("raj", e)
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

    render() {
        let { books } = this.state
        return (
            <div style={{ flexDirection: 'row', marginTop: '30px' }}>
                <text is="x3d" style={{ marginLeft: '187px', fontSize: '31px' }}>Books <text is="x3d" style={{ fontSize: '20px', opacity: '0.5' }}>({books.length} items)</text></text>
                <select onChange={this.handleChangeBookSorting} style={{ marginLeft: '948px', fontSize: '20px' }}>
                    <option>Sort by relevance</option>
                    <option >Price : High to Low</option>
                    <option>Price : Low to High</option>
                    <option>Newest Arrivals</option>
                </select>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '150px', marginRight: '90px' }}>
                    {books.map((book, index) => (
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
                                <div>
                                    <button style={{ backgroundColor: '#A52A2A', color: 'white', width: '110px', height: '37px', marginLeft: '18px', marginBottom: '20px', fontWeight: 'bold', borderWidth: 'thin' }}
                                        onClick={() => this.handleClickAddToCart(book.id)} >ADD TO BAG</button>
                                    <button style={{ marginLeft: '13px', width: '110px', height: '37px', fontWeight: 'bold', borderWidth: 'thin' }}
                                        onClick={() => this.handleClickAddToWishlist(book.id)}>WISHLIST</button>
                                </div>}

                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default Home;