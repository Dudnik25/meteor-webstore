import React from 'react';
import {Card, Button} from "antd";
import 'antd/dist/antd.css'


export default class ProductCrad extends React.Component {

  render() {
    return (
      <Card
        title={this.props.product.name}
        bordered={false}
        style={{width: 300}}
        extra = {
          /* Почитай как устроен Router в реакте. Он рендерит текущий компонент
          *  смотря на его props.history.
          *  То что мы делаем - single page application. Здесь нету как таковых переходов по страницам.
          *  Когда нужно показать другую страницу, нужно делать props.history.push(`/products/${this.props.product._id}`)
          *  и тогда router просто изменит своё состояние, и начнет показывать другую страницу, при этом не перезагружая браузер.
          */
          <Button type="link" href={`/products/${this.props.product._id}`}>
            Посмотреть
          </Button>
        }
      >
        <p>{this.props.product.description}</p>
        <p>{this.props.product.price}</p>
      </Card>
    )
  }
}