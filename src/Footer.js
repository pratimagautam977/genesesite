import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "./Homepage/logo.svg";
import offer from "./Homepage/offer.png";
import AwsWhite from "./Homepage/partner-logos/aws-white.png";
import AzureWhite from "./Homepage/partner-logos/azure-white.png";
import GoogleCloudWhite from "./Homepage/partner-logos/google-cloud-white.png";
import AtlassianWhite from "./Homepage/partner-logos/atlassian-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
// import { Link } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';



function Footer() {
  return (
    <div>
      <div className="footer">
        <Container fluid>
          <Row>
            <Col lg={3}>
              <h5>Contact</h5>
              <img src={logo} id="logo" className="App-logo" alt="logo" />
              <p>London, UK (+44) 020 38437303</p>
              <p>Kathmandu, Nepal +9779801837374</p>
              <p>sales@genesesolution.com</p>
              <p>support@genesesolution.com</p>
              <p>info@genesesolution.com</p>
            </Col>
            <Col lg={4}>
              <Row>
                <Col lg={6}>
                  <h5>Quick Links</h5>
                  <ul>
                    <li>
                      <Link to="/#service">About Us</Link>
                    </li>
                    <li>
                      <Link to="/#product">How we Work</Link>

                    </li>
                  </ul>
                  {/* how to put this in for example homepage now?? just a demo show please /service and /how-we-work doesn't exist for now how to give id?? */}
                </Col>
                <Col lg={6}>
                  <h5>Follow us</h5>
                  <ul className="social-icons">
                    <li class="facebook">
                      <a href="https://www.facebook.com/genesesofts/" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    </li>
                    <li class="linkedin">
                      <a href="https://www.linkedin.com/company/genese-software-solution/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li class="twitter">
                      <a href="https://www.twitter.com/genesesofts/" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    </li>
                    <li class="instagram">
                      <a href="https://www.instagram.com/genesesoftsol/" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                    </li>
                  </ul>
                </Col>
              </Row>
              <h5 className="">Our Partners</h5>
              <div className="d-flex flex-wrap">
                <div>
                  <img src={AwsWhite} alt="partner_amazon"></img>
                </div>
                <div>
                  <img src={AzureWhite} alt="partner_azure"></img>
                </div>
                <div>
                  <img src={GoogleCloudWhite} alt="partner_google"></img>
                </div>
                <div>
                  <img src={AtlassianWhite} alt="partner_atlassian"></img>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <h5>Services</h5>
              <ul>
                <li>
                  <a href="/#">Digital Transformation</a>
                </li>
                <li>
                  <a href="/#">Cloud Development</a>
                </li>
                <li>
                  <a href="/#">Expert Advice & Support</a>
                </li>
                <li>
                  <a href="/#">Dedicated Teams </a>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <a href="offer/welcome">
                <img src={offer} alt="offer" width="80%"></img>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom-bar text-left">
        <Container fluid>
          <a href="/#" className="float-right">
            Privacy Policy
          </a>
          <p className="text-white m-0">&copy; Copyright 2020 Genese</p>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
