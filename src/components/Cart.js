import React from 'react'
function Cart(props) {
    console.log("Cart Prop", props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="" />
            </div>
        </div>
    )
}

export default Cart