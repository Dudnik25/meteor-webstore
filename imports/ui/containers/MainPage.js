import React, {Component} from 'react';
import { Button } from 'antd';

export default class MainPage extends Component {

  render() {
    return (
      <>
        <h1 style={{textAlign: 'center'}}>Главная</h1>
        <Button type="link" href="/products" block>
          Products
        </Button>
        <Button type="link" href="/cms" block>
          Cms
        </Button>
      </>
    );
  }
}

