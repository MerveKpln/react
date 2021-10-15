import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../data/products.json";
import Product from "./Product";
const ProductList = () => {
  return (
    <Container className="my-5">
      <Row className="g-5">
        {data.map((product, index) => {
          const { image, title, desc, price } = product;

          return (
            <Col md={3} key={index}>
              <Product title={title} image={image} desc={desc} price={price} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
