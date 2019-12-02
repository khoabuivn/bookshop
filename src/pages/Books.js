import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Container
} from "reactstrap";
import { CartContext } from "../contexts/Cart";
const axios = require('axios');

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8090/api/products")
      .then(response => {
        console.log(response.data);
        this.setState({ products: response.data.sort((a, b) => b.views - a.views) });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Books</h2>
        <Row>
          {products.map(product => (
            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={product.imgUrl}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardSubtitle>{product.views} views</CardSubtitle>
                  <CardText>{product.description}</CardText>
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(product)}>
                        Add to cart
                      </Button>
                    )}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
