import React from 'react'

function Home(props) {
    console.log("Home props", props.data);
    return (
        <div>

            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://media.wired.com/photos/6500ad57fe61eb702d721b58/master/w_1920,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ price: 1000, name: 'i phone 11' }) }
                        }> Add To Cart
                    </button>
                    <button className='delete-btn'
                        onClick={
                            () => { props.removeFromCartHandler() }
                        }> Remove From Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home