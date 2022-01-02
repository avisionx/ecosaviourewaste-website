import {
  mdiArrowRight,
  mdiHomeAssistant,
  mdiLaptop,
  mdiRecycle,
  mdiTabletCellphone,
} from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import ImageSlider from '../Components/ImageSlider';
import plant from '../img/plant.svg';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import stat_bg_1 from '../img/stat_bg_1.svg';
import stat_bg_2 from '../img/stat_bg_2.svg';
import stat_bg_3 from '../img/stat_bg_3.svg';
import stat_bg_4 from '../img/stat_bg_4.svg';

const stats = [
  {
    icon: mdiLaptop,
    title: 'Laptops Recycled',
    count: 144690,
    iconbg: stat_bg_1,
    color: '#3e87c5',
  },
  {
    icon: mdiTabletCellphone,
    title: 'Mobiles Recycled',
    count: 88550,
    iconbg: stat_bg_2,
    color: '#d00203',
  },
  {
    icon: mdiHomeAssistant,
    title: 'Home Appliances',
    count: 220580,
    iconbg: stat_bg_3,
    color: '#feba05',
  },
  {
    icon: mdiRecycle,
    title: 'E-Waste Recycled',
    count: 92819,
    iconbg: stat_bg_4,
    color: '#36794f',
  },
];

const Home = ({ isSmall }) => {
  return (
    <div className="home-bg">
      <div style={{ position: 'relative' }}>
        <img
          alt=""
          src={plant}
          style={{
            width: isSmall ? '45vw' : '400px',
            transform: 'scaleX(-1)',
            position: 'absolute',
            right: 0,
            top: isSmall ? '290px' : '10px',
          }}
        />
        <Container fluid className="px-lg-5 pt-lg-5">
          <h2 className="font-weight-light mb-0 display-4">
            E-Waste Recycling
          </h2>
          <h3
            className={`font-weight-bold mt-0  ${
              isSmall ? 'display-4' : 'display-3 widen'
            }`}
          >
            SOLUTIONS
          </h3>
          <h5
            style={{ maxWidth: '700px', fontSize: '1.5rem' }}
            className="mb-4 pb-2"
          >
            Our simple process of E-Waste disposal can be your next step closer
            to sustainable future.
          </h5>
          <Link to="#">
            <button
              className="d-flex align-items-center px-lg-5 py-3 small bg-gradient-primary border-0 rounded text-uppercase font-weight-light btn btn-dark btn-lg"
              style={{ fontSize: '15px' }}
            >
              Know More <Icon path={mdiArrowRight} className="ml-2" size={1} />
            </button>
          </Link>
        </Container>
      </div>
      <ImageSlider />
      <Container fluid className="py-4 py-lg-5 px-lg-5">
        <Row>
          <Col lg="5">
            <div className="mb-4">
              <h1 className="font-weight-bold display-4 text-center text-lg-left">
                About Us
              </h1>
              <div>
                <hr
                  style={{
                    margin: '0',
                    width: isSmall ? '50%' : '5rem',
                    float: 'left',
                    background: '#36794F',
                  }}
                />
                <hr
                  style={{
                    margin: '0',
                    width: isSmall ? '50%' : '5rem',
                    float: 'left',
                    background: '#FCBDBD',
                  }}
                />
              </div>
            </div>
            <p className="text-left lead">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. <br />
              <br />
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32.
            </p>
          </Col>
          <Col
            lg={{
              size: 6,
              offset: 1,
            }}
            className="mt-5 mt-lg-0"
            style={{ overflow: 'hidden' }}
          >
            <Row>
              {stats.map(({ iconbg, icon, title, count, color }) => (
                <Col key={title} xs="6" className="mb-5 text-center">
                  <div style={{ position: 'relative' }}>
                    <img
                      src={iconbg}
                      className="stat-rotate"
                      alt=""
                      width="180px"
                    />
                    <Icon
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      path={icon}
                      size={3}
                      color="#fffffa"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <CountUp
                      end={count}
                      start={0}
                      startOnMount={false}
                      duration={2}
                      delay={0.1}
                      redraw={true}
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span
                            className="h1 font-weight-bold mb-0 d-block"
                            style={{ color: color }}
                            ref={countUpRef}
                          />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <sup
                      className="h3 font-weight-bold"
                      style={{ color: color }}
                    >
                      +
                    </sup>
                  </div>

                  <p className="text-uppercase font-weight-light h5 mt-1">
                    {title}
                  </p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
