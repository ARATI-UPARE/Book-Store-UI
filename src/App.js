import React, { Component } from 'react'
import './App.css';
import NavBar from './component/NavBar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BookDataLayer from './component/BookDataLayer';

const initialState = {
  cartCount: 0,
  wishListCount: 0,
  searchText: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "methodCalled":
      return {
        cartCount: action.payload,
        wishListCount: state.wishListCount
      }
    case "wishListUpdate":
      console.log("wishupdate", action.payload)
      return {
        cartCount: state.cartCount,
        wishListCount: action.payload
      }
    case "searchUpdate":
      console.log("searchUpdateReducer", action.payload)
      return {
        cartCount: state.cartCount,
        wishListCount: state.wishListCount,
        searchText: action.payload
      }
    default:
      return {
        cartCount: state.cartCount,
        wishListCount: state.wishListCount
      };
  }
};

const store = createStore(reducer);
var bookData = new BookDataLayer();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartBookCount: "",
      wishBookCount: ""
    }
  }

  async componentDidMount() {
    await bookData.fetchAllCartBook(response => {
      this.setState({
        cartBookCount: response.length
      })
    });
    await bookData.fetchAllWishlistBook(response => {
      this.setState({
        wishBookCount: response.length
      })
    });
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '85px', marginRight: '85px', outlineStyle: 'groove', outlineColor: '#F5F5F5', outlineWidth: 'thin', height: '100%' }}>
            <NavBar cartBookCount={this.state.cartBookCount} wishBookCount={this.state.wishBookCount} />
          </div>
          <footer style={{ marginLeft: '85px', marginRight: '85px', backgroundColor: '#660000', color: 'white', height: '60px', bottom: '0', position: 'fixed', width: '90.83%' }}>
            <br />
            <text style={{ display: 'flex', justifyContent: 'center' }}>Copyright &#169; 2020, Bookstore Private Limited. All Rights Reserved</text>
          </footer>
        </div>
      </Provider>
    );
  }
}


export default App;
