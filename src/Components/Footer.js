import React from 'react';
import logo from '../img/logo.png';
import wave from '../img/wave.svg';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import {
  mdiEmailOutline,
  mdiFacebook,
  mdiInstagram,
  mdiLinkedin,
  mdiMapMarkerOutline,
  mdiPhoneOutline,
  mdiTelegram,
  mdiTwitter,
  mdiWhatsapp,
} from '@mdi/js';
import Icon from '@mdi/react';

const Footer = ({ isSmall }) => {
  return (
    <>
      <img src={wave} alt="" width="100%" />
      <Container fluid className="small bg-primary text-light">
        <Row className="text-light pt-2 pb-4 d-flex justify-content-center">
          <Col sm="12" lg="3">
            <Link to="/" className="py-3" replace>
              <div className="row no-gutter d-flex align-items-center mt-4 mt-lg-0">
                <Col xs="5">
                  <img width="100%" src={logo} alt="" className="img-fluid" />
                </Col>
              </div>
            </Link>
            <p className="mb-0 mt-2 font-weight-bold h5 head">
              Ecosaviour Ewaste Management Pvt Ltd
            </p>
          </Col>
          <Col sm="12" lg="3">
            <h5 className="font-weight-bold text-uppercase head mb-3 mt-4 mt-lg-0">
              Contact
            </h5>
            <ListGroup className="no-list mt-2 d-flex">
              <Row className="mb-2">
                <Col xs="auto">
                  <Icon path={mdiMapMarkerOutline} size={1} />{' '}
                </Col>
                <Col className="pl-0">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://goo.gl/maps/izSzvHFtLzxMAmf26"
                    className=" text-light"
                  >
                    C351,352 ANSAL PIONEER INDUSTRIAL PARK, <br />
                    BILASPUR MANESAR, HARYANA - 122043
                  </a>
                </Col>
              </Row>

              <Row className="mb-2">
                <Col xs="auto">
                  <Icon path={mdiPhoneOutline} size={1} />{' '}
                </Col>
                <Col className="pl-0">
                  <a href="tel:+918527833229" className=" text-light">
                    +91 - 8527833229
                  </a>
                  <br />
                  <span className="text-white" style={{ opacity: '0.7' }}>
                    Mon to Sun - 9AM to 8PM
                  </span>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs="auto">
                  <Icon path={mdiEmailOutline} size={1} />{' '}
                </Col>
                <Col className="pl-0">
                  <a
                    href="mailto:siddharth.jain@ecosaviourewaste.com"
                    className=" text-light"
                  >
                    siddharth.jain@ecosaviourewaste.com
                  </a>
                </Col>
              </Row>
            </ListGroup>
          </Col>
          <Col sm="12" lg="2">
            <h5 className="font-weight-bold text-uppercase head mb-3 mt-4 mt-lg-0">
              Quick Links
            </h5>
            <ListGroup className="no-list mt-2">
              <Link to="/" className="text-light pb-1 pr-1" replace>
                Home
              </Link>
              <Link to="/about" className="text-light py-1 pr-1" replace>
                About Us
              </Link>
              <Link to="/services" className="text-light py-1 pr-1" replace>
                Services
              </Link>
              <Link to="/process" className="text-light py-1 pr-1" replace>
                Process
              </Link>
              <Link to="/contact" className="text-light py-1 pr-1" replace>
                Contact Us
              </Link>
            </ListGroup>
          </Col>
          <Col sm="12" lg="2">
            <h5 className="font-weight-bold text-uppercase head mb-3 mt-4 mt-lg-0">
              Social Links
            </h5>
            <div className="no-list mt-2">
              <a href="/" className="text-light mr-2">
                <Icon path={mdiFacebook} size={1} />
              </a>
              <a href="/" className="text-light mr-1">
                <Icon path={mdiLinkedin} size={1} />
              </a>
              <a href="/" className="text-light mr-1">
                <Icon path={mdiTwitter} size={1} />
              </a>
              <a href="/" className="text-light mr-1">
                <Icon path={mdiInstagram} size={1} />
              </a>
              <a href="/" className="text-light mr-1">
                <Icon path={mdiWhatsapp} size={1} />
              </a>
              <a href="/" className="text-light mr-1">
                <Icon path={mdiTelegram} size={1} />
              </a>
            </div>
          </Col>
          <Col
            xs={{
              size: '12',
              offset: '0',
            }}
            lg={{
              size: '11',
              offset: '1',
            }}
          >
            <p className="mt-4 mb-0">
              © Ecosaviour Ewaste Management Pvt Ltd {new Date().getFullYear()}.
              All rights reserved. Developed by{' '}
              <a
                className="text-light"
                href="https://avisionx.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>Avi Garg</u>.
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
