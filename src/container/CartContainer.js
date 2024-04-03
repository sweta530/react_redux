import Cart from '../components/Cart';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    data: state.cartItem
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)