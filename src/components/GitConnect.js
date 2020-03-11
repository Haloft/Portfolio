import React from "react";
import Moment from "react-moment";
import { Grid, Cell } from 'react-mdl';
import Landing from './LandingPage'
import logo from "../assets/github.svg";
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

const GitConnect = ({ card }) => {
    
    return (
        
     
    <Col xs="12" md="6" lg="4" xl="3">
      <CardGroup className="kortti-ryhma">
        <Card className="kortti" body>
          <CardLink target="_blank" href={card.html_url}>
            <CardImg className="card-img-top" src={logo} alt="Card image cap" target="blank" />
            <p></p>
            <h2>{card.name}</h2>
            <CardText className="kortin-teksti">{card.description}</CardText>
            <CardSubtitle className="subtitle">
              <span>Created:</span>
              <Moment format="DD-MM-YYYY">{card.created_at}</Moment>
            </CardSubtitle>
            <CardSubtitle className="subtitle2">
              <span>Updated:</span>
              <Moment format="DD-MM-YYYY">{card.updated_at}</Moment>
            </CardSubtitle>
          </CardLink>
        </Card>
      </CardGroup>
                </Col>
               
  );
};

export default GitConnect;
