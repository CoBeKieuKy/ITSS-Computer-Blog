import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Page extends Component {
    static displayName = 'ProductShowPage'
    static propTypes = {
        match: PropTypes.object.isRequired,
        product: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: ''
            }
        }
    }

    componentDidMount() {
        // fetch(`/api/v1/products/${id}`)
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((product) => {
        //         this.setState({product})
        //     })
    }

    render() {
        return (
            <div className="container mt-2 mx-auto">
                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            <img src="https://lorempixel.com/640/480/?86757"
                                 className="img-thumbnail" alt="image product"/>
                        </div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    </div>
                    <div className="col-sm-6">
                        <h2>Product Name</h2>
                        <h5>Title description, Dec 7, 2017</h5>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                            sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="float-sm-right">
                            <button className="btn btn-primary btn-lg">New Review</button>
                        </div>
                        <div className="float-sm-left">
                            <h3>Some Links</h3>
                            <p>Lorem ipsum dolor sit ame.</p>
                            <div className="align-center">
                                <ul className="text-decoration-none">
                                    <li>Article 1</li>
                                    <li>Article 1</li>
                                    <li>Article 1</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page