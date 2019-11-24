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
import { CartContext } from '../contexts/Cart';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: "11913863-5fe6-4c52-abb0-099f0d42cd61",
          name: "Wine - Red, Cabernet Merlot",
          description:
            "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
          imgUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: "232dddf8-c9b4-43bb-9f85-077891487b81",
          name: "Crackers - Melba Toast",
          description:
            "id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo",
          imgUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "55770165-e4e9-4fb7-bc36-aa59b604e217",
          name: "Cheese - Pied De Vents",
          description:
            "nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit",
          imgUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: "5393e56c-eb02-4414-ad3d-26a912c034ed",
          name: "Trueblue - Blueberry",
          description:
            "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
          imgUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "a676ef8a-f08a-4d59-90ea-b466e4290772",
          name: "Bagelers - Cinn / Brown Sugar",
          description:
            "adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue",
          imgUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "c6654f07-e7de-49a5-aa50-f7340bf2c087",
          name: "Longos - Assorted Sandwich",
          description:
            "dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet",
          imgUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: "a4972870-95b5-4889-ba5f-a4a6d55165c7",
          name: "Bread - Sour Batard",
          description:
            "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis",
          imgUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "a64b04c1-9fca-4d4b-8221-7b6ca28e3690",
          name: "Sauce - Chili",
          description:
            "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan",
          imgUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "e95a4a37-8589-4cf3-b196-52f3308087d6",
          name: "Coffee - Beans, Whole",
          description:
            "iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
          imgUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "057944ea-f6ae-4d47-a8cd-8aa11334b417",
          name: "Mix - Cappucino Cocktail",
          description:
            "enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis",
          imgUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "c25560b0-0f02-404b-b5c8-4e922b81db43",
          name: "Asparagus - Green, Fresh",
          description:
            "lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a",
          imgUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: "e1315f16-eafd-43f8-9efa-b7307716bfeb",
          name: "Lettuce - Escarole",
          description:
            "turpis enim blandit mi in porttitor pede justo eu massa",
          imgUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "68440a6d-2dac-4c1e-ab1e-f1a127aa1b56",
          name: "Sauce Bbq Smokey",
          description:
            "tellus nulla ut erat id mauris vulputate elementum nullam varius nulla",
          imgUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "f54c94eb-b69e-461e-85fc-420abfd5510a",
          name: "Beer - Tetleys",
          description:
            "lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in",
          imgUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: "837d8b33-bf9b-4ca6-b93f-7e3e0f07bce6",
          name: "Squid - Breaded",
          description:
            "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus",
          imgUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "afcc06bc-2c85-4af5-b684-dd167db52b21",
          name: "Plasticforkblack",
          description:
            "eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus",
          imgUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "74c5c735-9dfe-4c1d-bdd4-e8619514cbe1",
          name: "Syrup - Monin, Amaretta",
          description:
            "ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar",
          imgUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: "0de17fb6-8e5f-4ca3-8c6a-6616c8e4bd7b",
          name: "Loquat",
          description:
            "suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue",
          imgUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: "c2990d12-d897-4afe-b44a-537a11c689c6",
          name: "Oxtail - Cut",
          description:
            "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin",
          imgUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "ee1695b6-772d-4c79-9fd3-9ef28541daad",
          name: "Lotus Root",
          description:
            "lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer",
          imgUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        }
      ]
    };
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
                  <CardText>{product.description}</CardText>
                  <CartContext.Consumer>
                    {({ addToCart }) => <Button onClick={() => addToCart(product)}>Add to cart</Button>}
                    
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
