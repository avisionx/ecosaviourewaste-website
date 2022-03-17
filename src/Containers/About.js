import React, { useEffect, useState } from 'react';
import about_img_3 from '../img/slider/21.jpg';
import about_img_2 from '../img/slider/8.jpg';
import about_img_1 from '../img/logo.png';
import VisibilitySensor from 'react-visibility-sensor';
import { animateCSS } from '../helpers';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Icon from '@mdi/react';
import { mdiHandPointingRight } from '@mdi/js';

const About = ({ isSmall }) => {
  const [aboutTitleVis, setAboutTitleVis] = useState(false);

  useEffect(() => {
    if (aboutTitleVis) {
      animateCSS('#aboutTitle', 'fadeInUp').then(() => {
        animateCSS('#aboutContent', 'fadeInLeft');
        document.querySelector('#aboutContent').classList.remove('hidden');
        animateCSS('#aboutImg', 'fadeIn');
        document.querySelector('#aboutImg').classList.remove('hidden');
      });
      document.querySelector('#aboutTitle').classList.remove('hidden');
      animateCSS('#aboutTitle2', 'fadeInLeft').then(() => {
        animateCSS('#aboutContent', 'fadeInDown');
        document.querySelector('#aboutContent').classList.remove('hidden');
        animateCSS('#aboutImg', 'fadeIn');
        document.querySelector('#aboutImg').classList.remove('hidden');
      });
      document.querySelector('#aboutTitle2').classList.remove('hidden');
    }
  }, [aboutTitleVis]);

  return (
    <>
      <div className="container-fluid my-5">
        <VisibilitySensor
          partialVisibility
          delayedCall
          onChange={(isVisible) => {
            if (isVisible && !aboutTitleVis) {
              setAboutTitleVis(true);
            }
          }}
        >
          <h2
            className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold hidden"
            id="aboutTitle"
          >
            <span>About Us</span>
            <div>
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
          </h2>
        </VisibilitySensor>
        <div className="row d-flex justify-content-center">
          <VisibilitySensor
            partialVisibility
            delayedCall
            onChange={(isVisible) => {
              if (isVisible && !aboutTitleVis) {
                setAboutTitleVis(true);
              }
            }}
          >
            <div
              className="d-none d-lg-block col-sm-12 col-lg-auto hidden"
              id="aboutTitle2"
            >
              <h5
                className="text-gradient text-nowrap font-weight-bold mb-3 display-1 "
                style={{
                  position: 'absolute',
                  transform: 'rotate(-90deg)',
                  right: '3rem',
                  top: '-6rem',
                  transformOrigin: 'bottom right',
                  opacity: 0.8,
                }}
              >
                About Us
              </h5>
            </div>
          </VisibilitySensor>
          <div
            className="col-sm-12 col-lg-5 hidden animate__fast"
            id="aboutContent"
          >
            <h2 className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-3 mt-lg-0 head">
              Eco Saviour E-Waste
            </h2>
            <p className="text-dark">
              Eco Saviour is a progressive company that is committed to manage
              the E-waste produced in the country in an eco-friendly and
              sustainable manner. It is run by three directors and a dedicated
              and well-trained staff.
            </p>
            <p className="text-dark">
              We are located in Manesar, Haryana, and work throughout the
              country. Some of our valuable clients are Samsung, Maruti Suzuki,
              Bajaj, Honda, Mitsubishi, etc.
            </p>
            <p className="text-dark">
              The present tech-driven world has surely made our lives simpler
              and easier, but the carbon footprints they leave behind are much
              costlier than our imagination. From computers and mobiles to bar
              code scanners and printers have been continuously depreciating.
              The dire situation calls for a dynamic solution that helps us find
              a sustainable way to dispose of and recover value from the
              decomposing equipment.
            </p>
            <p className="text-dark">
              With the thought of simplifying your e-waste disposal and
              promoting sustainable growth in the country, we have laid the
              foundation of Eco Saviour.
            </p>

            <h2 className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-5 head">
              Know Our Team
            </h2>
            <p className="text-dark">
              <b className="lead font-weight-bold">Mr. Siddharth Jain </b>
              <br />
              An enthusiast of e-waste recycling since his childhood, Siddharth
              is the brain and force behind the company. In his school days, he
              became a student activist and was elected as the youngest Chief
              Executive Councilor of Delhi University in his college days. At an
              early age of 19, he started his journey in the business of
              Aluminium recycling. Later, his interest shifted from aluminum
              recycling to electronics recycling.
            </p>
            <p className="text-dark">
              <b className="lead font-weight-bold">Mr. Anurag Maheshwari </b>
              <br />
              He has vast experience of more than 23 years in the finance
              department. He gained this experience while working for multiple
              MNCs throughout his lifetime. Being one amongst the Board of
              Directors, he is the one behind major financial management and
              plans in the company.
            </p>
            <p className="text-dark">
              <b className="lead font-weight-bold">Mr. Kapil Jain </b>
              <br />
              The metal specialist of the company, has earned vast experience in
              dealing with ferrous and non-ferrous metals during his 20 years of
              work experience. His deep knowledge of metals has helped the
              company and its staff learn and implement the most efficient and
              cost-effective methods of recycling waste.
            </p>
            <h2 className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-5 head">
              Our Mission
            </h2>
            <p className="text-dark">
              <ListGroup flush>
                <ListGroupItem className="px-0 py-1 border-0">
                  <Icon
                    path={mdiHandPointingRight}
                    className="mr-2"
                    color="#37784f"
                    size={1}
                  />
                  To recycle end-to-end E-waste and promote sustainable growth
                  in the country.
                </ListGroupItem>
                <ListGroupItem className="px-0 py-1 border-0">
                  <Icon
                    path={mdiHandPointingRight}
                    className="mr-2"
                    color="#37784f"
                    size={1}
                  />
                  To improve the country’s global image by adhering to the
                  National Action Plan On Climate Change and the UN’s SDGs.
                </ListGroupItem>
              </ListGroup>
            </p>
            <h2 className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-5 head">
              Our Vision
            </h2>
            <p className="text-dark">
              <ListGroup flush>
                <ListGroupItem className="px-0 py-1 border-0">
                  <Icon
                    path={mdiHandPointingRight}
                    className="mr-2"
                    color="#37784f"
                    size={1}
                  />
                  We look forward to preventing harm caused to nature by
                  unsustainable e-waste disposal and fulfilling the commitment
                  towards the SDGs.
                </ListGroupItem>
                <ListGroupItem className="px-0 py-1 border-0">
                  <Icon
                    path={mdiHandPointingRight}
                    className="mr-2"
                    color="#37784f"
                    size={1}
                  />
                  The company aspires to promote the efficient collection,
                  transportation, reuse, and recycling of e-waste.
                </ListGroupItem>
                <ListGroupItem className="px-0 py-1 border-0">
                  <Icon
                    path={mdiHandPointingRight}
                    className="mr-2"
                    color="#37784f"
                    size={1}
                  />
                  We strive to lead the way for informal sectors to find
                  sustainable solutions and become a part of a transparent and
                  open economy.
                </ListGroupItem>
                <ListGroupItem className="px-0 py-1 border-0">
                  <Icon
                    path={mdiHandPointingRight}
                    className="mr-2"
                    color="#37784f"
                    size={1}
                  />
                  The company believes in promoting community awareness towards
                  sustainable waste management and helping them bring behavioral
                  changes.
                </ListGroupItem>
              </ListGroup>
            </p>
          </div>
          <div
            className="text-center mt-4 mt-lg-0 col-sm-12 col-lg-3 d-lg-flex flex-column align-items-center hidden"
            id="aboutImg"
          >
            <img src={about_img_1} alt="" className="img-fluid w-100" />
            <img src={about_img_2} alt="" className="img-fluid w-100 mt-4" />
            <img src={about_img_3} alt="" className="img-fluid w-100 mt-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
