import {
  mdiArrowRight,
  mdiCircle,
  mdiCircleOutline,
  mdiClockOutline,
  mdiDatabaseLockOutline,
  mdiDeleteVariant,
  mdiDolly,
  mdiHammer,
  mdiHomeAssistant,
  mdiLaptop,
  mdiNotebookEditOutline,
  mdiNuke,
  mdiPackageVariant,
  mdiRecycle,
  mdiRecycleVariant,
  mdiTabletCellphone,
  mdiTruckFastOutline,
} from '@mdi/js';
import Icon, { Stack } from '@mdi/react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import ImageSlider from '../Components/ImageSlider';
import plant from '../img/plant.svg';
import blob1 from '../img/blob1.svg';
import blob2 from '../img/blob2.svg';
import blob3 from '../img/blob3.svg';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { animateCSS } from '../helpers';
import { useHistory } from 'react-router-dom';

const stats = [
  {
    icon: mdiLaptop,
    title: 'Laptops Recycled',
    count: 144690,

    color: '#3e87c5',
  },
  {
    icon: mdiTabletCellphone,
    title: 'Mobiles Recycled',
    count: 88550,

    color: '#d00203',
  },
  {
    icon: mdiHomeAssistant,
    title: 'Home Appliances',
    count: 220580,

    color: '#feba05',
  },
  {
    icon: mdiRecycle,
    title: 'E-Waste Recycled',
    count: 92819,

    color: '#36794f',
  },
];
const services = [
  {
    icon: mdiRecycleVariant,
    title: 'Extended Product Responsibility',
    text: 'EPR was introduced by the Government of India in the E-waste management rules, 2016...',
  },
  {
    icon: mdiNotebookEditOutline,
    title: 'Reverse Logistics',
    text: 'The e-waste is moved from its typical final destination to fulfill the purpose of capturing value...',
  },
  {
    icon: mdiDatabaseLockOutline,
    title: 'Data Destruction',
    text: 'A one-stop destination for protecting personal information as well as handling the e-recycling needs... ',
  },
];

export const processData = [
  {
    icon: mdiClockOutline,
    title: 'Schedule Pickup',
  },
  {
    icon: mdiHammer,
    title: 'Onsite Data Destruction',
  },
  {
    icon: mdiPackageVariant,
    title: 'Material Collection',
  },
  {
    icon: mdiTruckFastOutline,
    title: 'Secure Transport',
  },
  {
    icon: mdiDolly,
    title: 'Receipt Of Material',
  },
  {
    icon: mdiDeleteVariant,
    title: 'Dismantling',
  },
  {
    icon: mdiNuke,
    title: 'Shredding & Segregation',
  },
];

const Home = ({ isSmall }) => {
  useEffect(() => {
    animateCSS('#homeText', 'fadeInUp');
    animateCSS('#plant', 'fadeInRight').then(() => {
      animateCSS('#imageSlider', 'fadeIn');
      document.querySelector('#imageSlider').classList.remove('hidden');
    });
  }, []);

  const [aboutBoxVis, setAboutBoxVix] = useState(false);
  const [serviceBoxVis, setServiceBoxVis] = useState(false);
  const [processBoxVis, setProcessBoxVis] = useState(false);
  const [clientBoxVis, setClientBoxVis] = useState(false);
  const [activeIndexProcess, setActiveIndexProcess] = useState(0);
  const [activeIndexStarted, setActiveIndexStarted] = useState(isSmall);
  const history = useHistory();
  const aboutRef = useRef(null);
  const goToAbout = () => {
    aboutRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    setAboutBoxVix(true);
  };

  useEffect(() => {
    if (aboutBoxVis) {
      animateCSS('#aboutbox', 'fadeInLeft');
      animateCSS('#statbox', 'fadeInRight');
      document.querySelector('#aboutbox').classList.remove('hidden');
      document.querySelector('#statbox').classList.remove('hidden');
    }
  }, [aboutBoxVis]);

  useEffect(() => {
    if (serviceBoxVis) {
      animateCSS('#servicehead', 'fadeInUp').then(() => {
        animateCSS('#servicedata', 'fadeInDown');
        document.querySelector('#servicedata').classList.remove('hidden');
      });
      document.querySelector('#servicehead').classList.remove('hidden');
    }
  }, [serviceBoxVis]);

  useEffect(() => {
    if (activeIndexStarted) {
      const interval = setInterval(() => {
        if (activeIndexProcess + 1 < 7)
          setActiveIndexProcess(activeIndexProcess + 1);
        else setActiveIndexProcess(0);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [activeIndexProcess, activeIndexStarted]);

  useEffect(() => {
    if (processBoxVis) {
      animateCSS('#processhead', 'fadeInLeft').then(() => {
        animateCSS('#swiperProcess', 'fadeInUp').then(() => {
          setActiveIndexProcess(0);
          setActiveIndexStarted(true);
        });
        animateCSS('#knowMoreProcess', 'fadeIn');
        document.querySelector('#swiperProcess').classList.remove('hidden');
        document.querySelector('#knowMoreProcess').classList.remove('hidden');
      });
      animateCSS('#processsidetext', 'fadeIn');
      document.querySelector('#processsidetext').classList.remove('hidden');
      document.querySelector('#processhead').classList.remove('hidden');
    }
  }, [processBoxVis]);

  useEffect(() => {
    if (clientBoxVis) {
      animateCSS('#clienthead', 'fadeInLeft').then(() => {
        animateCSS('#clients', 'fadeInDown');
        document.querySelector('#clients').classList.remove('hidden');
      });

      document.querySelector('#clienthead').classList.remove('hidden');
    }
  }, [clientBoxVis]);

  return (
    <>
      <div className="home-bg ">
        <div style={{ position: 'relative', overflowX: 'hidden' }}>
          <div id="plant" className="animate__delay-1s">
            <img
              alt=""
              src={plant}
              className="d-none d-lg-block"
              style={{
                width: isSmall ? '45vw' : '400px',
                transform: 'scaleX(-1)',
                position: 'absolute',
                right: 0,
                top: '4rem',
              }}
            />
          </div>

          <Container
            fluid
            className="px-lg-5 pt-lg-5 mt-5 animate__delay-1s"
            id="homeText"
          >
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
              Take a Step Ahead in Your Journey to a Clean and Sustainable
              Future.
            </h5>
            <Link
              className="d-inline-block"
              to="#"
              onClick={(event) => {
                event.preventDefault();
                goToAbout();
              }}
            >
              <button
                className="d-flex align-items-center px-lg-5 py-3 small bg-gradient-primary border-0 rounded text-uppercase font-weight-light btn btn-dark btn-lg"
                style={{ fontSize: '15px' }}
              >
                Know More{' '}
                <Icon path={mdiArrowRight} className="ml-2" size={1} />
              </button>
            </Link>
          </Container>
        </div>
        <ImageSlider
          id="imageSlider"
          className="mt-4 mt-lg-5 animate__animated hidden animate__slow"
        />
        <VisibilitySensor
          partialVisibility
          delayedCall
          onChange={(isVisible) => {
            if (isVisible && !aboutBoxVis) {
              setAboutBoxVix(true);
            }
          }}
        >
          <Container fluid className="py-4 py-lg-5 px-lg-5">
            <Row style={{ overflowX: 'hidden' }}>
              <Col lg="5" id="aboutbox" className="hidden  animate__faster">
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
                <p className="text-left lead" ref={aboutRef}>
                  Eco Saviour is a progressive company that is committed to
                  manage the E-waste produced in the country in an eco-friendly
                  and sustainable manner. It is run by three directors and a
                  dedicated and well-trained staff. <br />
                  <br />
                  We are located in Manesar, Haryana, and work throughout the
                  country. Some of our valuable clients are Samsung, Maruti
                  Suzuki, Bajaj, Honda, Mitsubishi, etc.
                  <br />
                  <br />
                  The present tech-driven world has surely made our lives
                  simpler and easier, but the carbon footprints they leave
                  behind are much costlier than our imagination. From computers
                  and mobiles to bar code scanners and printers have been
                  continuously depreciating. The dire situation calls for a
                  dynamic solution that helps us find a sustainable way to
                  dispose of and recover value from the decomposing equipment.
                </p>
                <Link className="mt-5 d-inline-block" to="about">
                  <button
                    className="d-flex align-items-center px-lg-5 py-3 bg-gradient-primary border-0 text-uppercase font-weight-light btn btn-dark btn-lg"
                    style={{ fontSize: '15px' }}
                  >
                    Keep Reading{' '}
                    <Icon path={mdiArrowRight} className="ml-2" size={1} />
                  </button>
                </Link>
              </Col>
              <Col
                lg={{
                  size: 6,
                  offset: 1,
                }}
                id="statbox"
                className={`mt-5 mt-lg-0 hidden animate__faster`}
                style={{ overflow: 'hidden' }}
              >
                <Row>
                  {stats.map(({ icon, title, count, color }) => (
                    <Col key={title} xs="6" className="mb-5 text-center">
                      <Stack size={6}>
                        <Icon path={mdiCircle} size={6} color={color} />
                        <Icon path={icon} size={3} color="#fffffa" />
                      </Stack>
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
                            <VisibilitySensor
                              onChange={start}
                              delayedCall
                              partialVisibility
                            >
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
        </VisibilitySensor>
      </div>
      <div className="services-bg">
        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => {
            if (isVisible && !serviceBoxVis) {
              setServiceBoxVis(true);
            }
          }}
        >
          <Container fluid className="px-lg-5" style={{ overflow: 'hidden' }}>
            <div className="py-4 py-lg-5 mt-4 mb-5">
              <div id="servicehead" className={` hidden animate__faster`}>
                <h1 className="font-weight-bold display-4 text-center">
                  Our Services
                </h1>
                <div className="d-flex align-items-center justify-content-center">
                  <hr
                    style={{
                      margin: '0',
                      width: isSmall ? '50%' : '5rem',
                      background: '#36794F',
                    }}
                  />
                  <hr
                    style={{
                      margin: '0',
                      width: isSmall ? '50%' : '5rem',
                      background: '#FCBDBD',
                    }}
                  />
                </div>
              </div>
              <Row
                id="servicedata"
                className={`d-flex justify-content-center px-0 px-lg-5 hidden  animate__faster`}
              >
                {services.map(({ icon, title, text }, index) => (
                  <div key={title} className="col-12 col-lg-3 text-center mt-5">
                    <div
                      onClick={() => history.push(`/services#${index + 1}`)}
                      className="rounded-lg shadow py-5 h-100"
                      style={{
                        background: 'rgba(63, 61, 86, 0.2)',
                        cursor: 'pointer',
                      }}
                    >
                      <div className="px-4 text-dark">
                        <Icon path={icon} size={4} color="#36794F" />
                        <p className="text-uppercase font-weight-bold widen head mb-3 mt-1">
                          {title}
                        </p>
                        <p className="font-weight-light mb-0">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Row>
            </div>
          </Container>
        </VisibilitySensor>
      </div>
      <div style={{ position: 'relative' }}>
        <img
          alt=""
          src={blob1}
          width="250px"
          className="d-none d-lg-block"
          style={{
            position: 'absolute',
            right: '10px',
            top: '-70px',
            opacity: 0.1,
          }}
        />
      </div>
      <div>
        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => {
            if (isVisible && !processBoxVis) {
              setProcessBoxVis(true);
            }
          }}
        >
          <Container
            fluid
            className="px-lg-5"
            style={{ overflow: 'hidden', position: 'relative' }}
          >
            <div
              id="processsidetext"
              className={`widen small head text-uppercase d-flex align-items-center justify-content-center ${
                isSmall ? 'd-none' : ''
              } hidden  animate__faster`}
              style={{
                position: 'absolute',
                transform: 'rotate(90deg) translate(0, -50%)',
                right: '-8rem',
                top: '50%',
              }}
            >
              <hr
                style={{
                  margin: '0 10px',
                  width: isSmall ? '50%' : '5rem',
                  float: 'left',
                  background: '#36794F',
                }}
              />
              Trust The Process
              <hr
                style={{
                  margin: '0 10px',
                  width: isSmall ? '50%' : '5rem',
                  float: 'right',
                  background: '#36794F',
                }}
              />
            </div>
            <div className="pt-4 pt-lg-5 mt-4 mb-4">
              <div id="processhead" className={` hidden animate__faster`}>
                <h1 className="font-weight-bold display-4 text-left">
                  Process
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
                <p className="text-left lead mt-4 pr-0 pr-lg-5">
                  The producers find it difficult to abide by the government’s
                  EPR regulations as the rate of e-waste generation is high and
                  the infrastructure is lacking to collect and recycle the
                  e-waste. 
                  To resolve this problem and help the producers we let them
                  network with the recyclers through us and get their e-waste
                  recycled.
                </p>
                <p className="text-left lead mt-4 pr-0 pr-lg-5">
                  We follow seven simple steps to manage and dispose of your
                  e-waste:
                </p>
              </div>
              <div className="mt-5 py-0 py-lg-5 hidden" id="swiperProcess">
                <div className="swiper-container">
                  <div className="swiper-wrapper timeline">
                    {processData.map(({ icon, title }, index) => (
                      <div
                        key={index}
                        className={`swiper-slide ${
                          index === activeIndexProcess ? 'active' : ''
                        }`}
                      >
                        <div className="timestamp text-primary ">
                          <Stack
                            size={3}
                            className={`${
                              index === activeIndexProcess
                                ? 'animate__animated animate__pulse animate__pulse animate__fast'
                                : ''
                            }`}
                          >
                            <Icon
                              size={3}
                              path={
                                index === activeIndexProcess
                                  ? mdiCircle
                                  : mdiCircleOutline
                              }
                            />
                            <Icon
                              size={1.6}
                              path={icon}
                              color={
                                index === activeIndexProcess
                                  ? 'white'
                                  : '#36794F'
                              }
                            />
                          </Stack>
                          <p className="small head font-weight-bold text-dark mb-1">
                            {title}
                          </p>
                        </div>
                        <div
                          className={`status  ${
                            index + 1 === processData.length
                              ? 'mb-0'
                              : 'mb-4 mb-lg-0'
                          }`}
                        >
                          <span>Step {index + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="mt-0 d-flex justify-content-center mb-5 pb-5 w-100 hidden"
                id="knowMoreProcess"
              >
                <Link className="d-inline-block" to="process">
                  <button
                    className="d-flex align-items-center px-lg-5 py-3 bg-gradient-primary border-0 text-uppercase font-weight-light btn btn-dark btn-lg"
                    style={{ fontSize: '15px' }}
                  >
                    Know More{' '}
                    <Icon path={mdiArrowRight} className="ml-2" size={1} />
                  </button>
                </Link>
              </div>
            </div>
            <img
              alt=""
              src={blob2}
              width="200px"
              className="d-none d-lg-block"
              style={{
                position: 'absolute',
                left: '-50px',
                bottom: '30px',
                opacity: 0.1,
              }}
            />
          </Container>
        </VisibilitySensor>
      </div>
      <div>
        <VisibilitySensor
          partialVisibility
          delayedCall
          onChange={(isVisible) => {
            if (isVisible && !clientBoxVis) {
              setClientBoxVis(true);
            }
          }}
        >
          <Container
            fluid
            className="px-lg-5"
            style={{ overflowX: 'hidden', position: 'relative' }}
          >
            <div>
              <div id="clienthead" className={`hidden  animate__faster`}>
                <h1 className="font-weight-bold display-4 text-center">
                  Our Clients
                </h1>
                <div className="d-flex align-items-center justify-content-center">
                  <hr
                    style={{
                      margin: '0',
                      width: isSmall ? '50%' : '5rem',
                      background: '#36794F',
                    }}
                  />
                  <hr
                    style={{
                      margin: '0',
                      width: isSmall ? '50%' : '5rem',
                      background: '#FCBDBD',
                    }}
                  />
                </div>
              </div>
              <Row
                id="clients"
                className={`py-0 py-lg-0 hidden animate__faster`}
              >
                <Col xs={{ offset: 1, size: 10 }}>
                  <Row>
                    {[...Array(17)].map((x, i) => (
                      <Col xs="4" md="2" key={i}>
                        <img
                          alt=""
                          src={process.env.PUBLIC_URL + `/img/${i}.png`}
                          width="100%"
                          className="img-fluid"
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
            <img
              alt=""
              src={blob3}
              width="220px"
              className="d-none d-lg-block"
              style={{
                position: 'absolute',
                right: '150px',
                top: '-20px',
                opacity: 0.1,
              }}
            />
          </Container>
        </VisibilitySensor>
      </div>
    </>
  );
};
export default Home;
