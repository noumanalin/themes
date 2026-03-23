import React from 'react'
import ShowCart from '../Components/Cart/ShowCart'
import PageBanner from '../Components/PageBanner'
import CartSummary from '../Components/Cart/CartSummary'
const Cart = () => {
    return (
        <div>
            <PageBanner title="Cart" breadcrumb="Your Bag of Timeless Picks" />
            <ShowCart />
            <CartSummary />
        </div>
    )
}

export default Cart
