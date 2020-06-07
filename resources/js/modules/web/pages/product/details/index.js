import { connect } from 'react-redux'
import Product from '../../../../product/Product'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
    const { params } = router.match
    const product = state.products.data.find(product => product.id == params.id)
    return {
        product: product ? new Product(product) : new Product({})
    }
}

export default connect(mapStateToProps)(Page)