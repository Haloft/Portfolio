import React, { useState, useEffect } from "react";
import "./App.css";
import priceService from "./services/prices";

import Landing from "./components/LandingPage";
import gitService from "./services/gitcards";
import GitConnect from "./components/GitConnect";
import Prices from "./components/Prices";
import { Row, Container, InputGroup, FormControl, Button } from "react-bootstrap";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import prices from "./services/prices";

const App = props => {
  const [cards, setgitCards] = useState([]);
  const [products, setProducts] = useState([]);
  const [urls, setUrl] = useState("");

  console.log(urls);
  const handlePageChange = event => {
    setUrl(event.target.value);
    console.log(event.target.value);
  };

  const addUrl = event => {
    event.preventDefault();
    const urlObj = {
      url: urls
    };
    priceService.create(urlObj).then(res => {
      setProducts(products.concat(res));
      console.log(res);
    });
  };

  const prods = () =>
    products.map(prod => <Prices key={prod.id} prod={prod} />);

  useEffect(() => {
    gitService.getAll().then(response => {
      console.log(response.data);
      setgitCards(response.data);
    });
  }, []);
  useEffect(() => {
    priceService.getAll().then(response => {
      console.log(response);
      setProducts(response);
    });
  }, []);
  console.log(cards);
  console.log(products);
  const gitCon = () =>
    cards.map(card => <GitConnect key={card.id} card={card} />);

  return (
    <>
      
     
        
          <Landing />
          
         
     
      <Container fluid>
        <Row>
          <div className="banner-text2">
            <h2>GitHub</h2>

            <p>
              Here you can find my GitHub repositories. They are fetched through
              GitHubs Rest API.
            </p>
          </div>
        </Row>
        <div>
          <Row className="rivit">{gitCon()}</Row>
        </div>
      </Container>
      <Container fluid>
        <Row>
          <div className="banner-text2">
            <h2>My Experimental corner</h2>

            <p>
              Here i plan to update all the new stuff i will experiment with.
            </p>
            <p>
              {" "}
              Currently i'm testing a Pricewatch/scraper that i built.&nbsp;
              First you input the url to the items listing at verkkokauppa.com.
              Then axios sends a POST request to my API.&nbsp; First thing in
              the API:s POST route , is an asynchronous call to the scraper.
              Scraper gets the url as a parameter, and returns the name, price
              and the image of the item. This data is then saved to my MongoDB
              database, from there it is fetched with an GET-request made by
              Reacts useEffect hook via axios. Scheduler updates the prices of
              the items in the database every day at 09.00
            </p>
            <p>
              The API was built with Node.js, and it uses Express.js server
              framework and its body-parser- and cors- middlewares. It uses
              MongooseJS for object data modeling and it is hosted at Google
              Cloud Platform.{" "}
            </p>

            <p>The Scraper uses Puppeteer library</p>
            <p></p>
          </div>
        </Row>
        <div className="presentText">
          <h4>PRICEWATCHER</h4>
          <div className="inputt">
          <InputGroup width="50%" className="mb-3">
            <FormControl onChange={handlePageChange}
              placeholder="Verkkokauppa.com URL"
           
            />
            <InputGroup.Append>
              <Button onClick={addUrl} type="submit" variant="dark">GET</Button>
            </InputGroup.Append>
          </InputGroup>
          </div>
            
           

        </div>
        <Row className="rivit2">{prods()}</Row>
      </Container>
    </>
  );
};

export default App;
