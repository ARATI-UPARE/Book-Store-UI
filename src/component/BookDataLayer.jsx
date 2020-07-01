
class BookDataLayer {
    async fetchAllBook(pageNumber, callback) {
        await fetch(`http://localhost:8080/verifyaccount/all?page=${pageNumber}&size=8`)
            .then(res => res.json())
            .then(values => callback(values))
    }

    addToCart(bookId, quantity) {
        fetch("http://localhost:8080/home/user/cart/add-update", {
            method: 'PUT',
            headers: {
                "content-type": "Application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({ "bookId": bookId, "bookQuantity": quantity })
        })
            .then(res => res.text())
            .then(res => console.log(res))
    }

    async fetchAllCartBook(callback) {
        await fetch("http://localhost:8080/home/user/cart/getall", {
            method: 'GET',
            headers: {
                "content-type": "Application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(values => callback(values))
    }

    async addToWishlist(bookId) {
        await fetch("http://localhost:8080/home/user/wishlist/add", {
            method: 'PUT',
            headers: {
                "content-type": "Application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({ "bookId": bookId })
        })
            .then(res => res.text())
            .then(res => console.log(res))
    }

    async fetchAllWishlistBook(callback) {
        await fetch("http://localhost:8080/home/user/wishlist/getall", {
            method: 'GET',
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(values => callback(values))
    }

    async fetchAllBookAsc(pageNumber, callback) {
        await fetch(`http://localhost:8080/verifyaccount/sort-asc/price?page=${pageNumber}&size=8`)
            .then(res => res.json())
            .then(values => callback(values))
    }

    async fetchAllBookDesc(pageNumber, callback) {
        await fetch(`http://localhost:8080/verifyaccount/sort-desc/price?page=${pageNumber}&size=8`)
            .then(res => res.json())
            .then(values => callback(values))
    }

    async updateCart(bookId, quantity) {
        await fetch("http://localhost:8080/home/user/cart/add-update", {
            method: 'PUT',
            headers: {
                "content-type": "Application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({ "bookId": bookId, "bookQuantity": quantity })
        })
            .then(res => res.text())
            .then(res => console.log(res))
    }

    async removeFromCart(bookId, quantity) {
        await fetch("http://localhost:8080/home/user/cart/remove", {
            method: 'PUT',
            headers: {
                "content-type": "Application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({ "bookId": bookId, "bookQuantity": quantity })
        })
            .then(res => res.text())
            .then(res => console.log(res))
    }

    async removeFromWishList(bookId) {
        await fetch("http://localhost:8080/home/user/wishlist/remove", {
            method: 'PUT',
            headers: {
                "content-type": "Application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({ "bookId": bookId })
        })
            .then(res => res.text())
            .then(res => console.log(res))
    }

    async fetchAllSearchBook(searchText, pageNumber, callback) {
        console.log("text", searchText)
        await fetch(`http://localhost:8080/verifyaccount/searchbooks/${searchText}?page=${pageNumber}&size=8`)
            .then(res => res.json())
            .then(values => callback(values))
    }

    async signUpData(username, password, email, phoneNo, role) {
        await fetch("http://localhost:8080/api/auth/signup", {
            method: 'POST',
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "phoneNumber": phoneNo,
                "role": role,
                "username": username
            })
        })
            .then(res => res.text())
            .then(res => console.log(res))
    }

    async signInData(username, password) {
        await fetch("http://localhost:8080/api/auth/signin", {
            method: 'POST',
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
            .then(res => res.json())
            .then(response => localStorage.setItem("token", response.accessToken))
    }

    async addCustomerDetails(name, pincode, locality, address, city, landmark, addressType) {
        await fetch("http://localhost:8080/home/customer/adddetails", {
            method: 'POST',
            headers: {
                "content-type": "Application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({
                "name": name,
                "pincode": pincode,
                "locality": locality,
                "address": address,
                "city": city,
                "landmark": landmark,
                "addressType": addressType
            })
        })
            .then(res => res.text())
            .then(res => console.log(res))
    }

    isCustomerDetailsExisted(callback) {
        fetch("http://localhost:8080/home/customer/isexisted", {
            method: 'GET',
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.text())
            .then(res => callback(res)
            )
    }

    placeOrder(callback) {
        fetch('http://localhost:8080/home/user/cart/orderplaced/orderid', {
            method: 'GET',
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.text())
            .then(values => callback(values))
    }

    getOrderId(callback) {
        fetch('http://localhost:8080/home/user/cart/getorderid', {
            method: 'GET',
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.text())
            .then(values => callback(values))
    }

    forgotPassword(email) {
        fetch("http://localhost:8080/api/auth/forgotpassword", {
            method: 'POST',
            body: (email)
        })
            .then(res => res.text()
                .then(res => console.log("message", res)
                ))
    }

    resetPassword(password) {
        fetch("http://localhost:8080/api/auth/resetpassword", {
            method: 'PUT',
            headers: {
                "token": localStorage.getItem("token")
            },
            body: (password)
        })
            .then(res => res.text()
                .then(res => console.log("message", res)
                ))
    }

}

export default BookDataLayer;