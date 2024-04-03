import Home from "../components/Home";
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from "../service/action/Action";

const mapStateToProps = state => ({
    // data: state.cartItem
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeFromCartHandler: data => dispatch(removeFromCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)