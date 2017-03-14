import React, {Component} from 'react';
import './Products.css';
import { connect } from 'react-redux';
import {Link} from 'react-router';
export class Products extends Component{

    render(){
        const {product} = this.props;
        console.log(this.props);
        return (
            <div className="Products">
                <div className="Products-list">
                    {product.map((item) => {
                        return (<div className="Products-item" key={item.product_id}>
                                    <h2>{item.display_name}</h2>
                                    <h3>{item.estimate}</h3>
                                </div>)
                    })}
                </div>
                <Link to="/">Go Back To Home</Link>
            </div>
        )
    }
}

export default connect(({product}) => ({product}))(Products);
