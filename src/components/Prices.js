import React, { useState, useEffect } from "react";
import priceService from "./../services/prices";
import {
  Card,
  Col,
  Row,
  CardText,
  CardGroup,
  CardLink,
  CardImg,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Prices = ({ prod }) => {
  return (
     
        <Col xs="12" md="6" lg="4" xl="4">
          <CardGroup className="kortti-ryhma">
            <Card className="kortti" body>
              <CardLink target="_blank" href={prod.url}>
                <CardImg top 
                  className="card-img-top2"
                  src={prod.img}
                  alt="Card image cap"
                  target="blank"
                />
                <h2>{prod.name}</h2>
                <CardText className="kortin-teksti">{prod.price}€</CardText>
              </CardLink>
            </Card>
          </CardGroup>
        </Col>
  
  );
};

export default Prices;
