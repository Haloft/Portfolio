import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap"
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
  CardHeader
} from "reactstrap";

const Prices = (props) => {
    const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
     
        <Col xs="12" md="6" lg="4" xl="4">
          <CardGroup className="kortti-ryhma">
        <Card className="kortti" body>
          <CardTitle  className="poistaKortti" ><FaTrashAlt onClick={handleShow} size={28}  /></CardTitle>
              <CardLink target="_blank" href={props.prod.url}>
                <CardImg top 
                  className="card-img-top2"
                  src={props.prod.img}
                  alt="Card image cap"
                  target="blank"
                />
                <h2>{props.prod.name}</h2>
                <CardText className="kortin-teksti">{props.prod.price}€</CardText>
              </CardLink>
            </Card>
          </CardGroup>
    </Col>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Delete</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to delete product from listing?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="danger" onClick={props.delProduct}>
        Delete product
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  );
};

export default Prices;
