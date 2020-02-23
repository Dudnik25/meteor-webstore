import React, {Component} from 'react';
import {Input, Card, Button} from "antd";
import 'antd/dist/antd.css'
import {withTracker} from "meteor/react-meteor-data";
import Product from "../../models/Product";


class MainPage extends Component {

    state = {
        text: '',
    };

    handleAddProduct = () => {
        Meteor.call('addProduct', this.state.text);
    };

    render() {
        console.log(this);
        return (
            <>
                <div style={{margin: 10}}>
                    <Input
                        style={{width: 200}}
                        onChange={(e) => this.setState({text: e.target.value})}
                        onPressEnter={this.handleAddProduct}
                    />
                    <Button type="primary" onClick={this.handleAddProduct}>add product</Button>
                </div>
                <div style={{marginTop: 10}}>
                    {this.props.product&&this.props.product.map((product, id)=>(
                        <div key={id}>
                            <Card title={product.name} bordered={false} style={{ width: 300 }}>
                                <p>Card content</p>
                            </Card>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default withTracker(() => {
    return {
        product: Product.find().fetch()
    }
})(MainPage);