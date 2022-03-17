import React, { useEffect, useState } from 'react';
import img_1 from '../img/services/1.jpg';
import img_2 from '../img/services/2.jpg';
import img_3 from '../img/services/3.jpg';
import VisibilitySensor from 'react-visibility-sensor';
import { animateCSS } from '../helpers';
import { useLocation } from 'react-router-dom';

const Services = ({ isSmall }) => {
  const [titleVis, setTitleVis] = useState(false);

  useEffect(() => {
    animateCSS('#titleID', 'fadeInUp').then(() => {
      animateCSS('#contentID', 'fadeInLeft');
      document.querySelector('#contentID').classList.remove('hidden');
      animateCSS('#imgBox', 'fadeIn');
      document.querySelector('#imgBox').classList.remove('hidden');
    });
    document.querySelector('#titleID').classList.remove('hidden');
    animateCSS('#titleID2', 'fadeInLeft').then(() => {
      animateCSS('#contentID', 'fadeInDown');
      document.querySelector('#contentID').classList.remove('hidden');
      animateCSS('#imgBox', 'fadeIn');
      document.querySelector('#imgBox').classList.remove('hidden');
    });
    document.querySelector('#titleID2').classList.remove('hidden');
  }, []);

  const location = useLocation();

  useEffect(() => {
    var id = location.hash.split('#')[1];
    if (id) {
      var gotoEle = document.getElementById(id);
      if (gotoEle) {
        gotoEle.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [location]);

  return (
    <>
      <div className="container-fluid my-5">
        <VisibilitySensor
          partialVisibility
          delayedCall
          onChange={(isVisible) => {
            if (isVisible && !titleVis) {
              setTitleVis(true);
            }
          }}
        >
          <h2
            className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold hidden"
            id="titleID"
          >
            <span>Services</span>
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
              if (isVisible && !titleVis) {
                setTitleVis(true);
              }
            }}
          >
            <div
              className="d-none d-lg-block col-sm-12 col-lg-auto hidden"
              id="titleID2"
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
                Services
              </h5>
            </div>
          </VisibilitySensor>
          <div
            className="col-sm-12 col-lg-5 hidden animate__fast"
            id="contentID"
          >
            <h2
              className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-3 mt-lg-0 head"
              id="1"
            >
              EPR - Extended Product Recycler
            </h2>
            <p className="text-dark">
              EPR was introduced by the Government of India in the E-waste
              management rules, 2016. Under EPR, the producer of goods and
              services is made responsible and is given a significant
              responsibility of treating the waste both financially and
              physically produced by their goods and services. Assigning EPR
              provides incentives to prevent waste at the source, promote
              product design for the environment and support the achievement of
              public recycling and material management goals.
            </p>
            <p className="text-dark">
              The organization of (OECD), promotes EPR trend towards new
              products, product groups, and waste streams such as electrical
              appliances and electronics.
            </p>
            <p className="text-dark">
              We work to take this responsibility to our shoulders and treat
              their waste in a convenient and environment-friendly manner.
            </p>
            <h2
              className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-5 head"
              id="2"
            >
              Reverse Logistics
            </h2>
            <p className="text-dark">
              The e-waste is moved from its typical final destination to fulfill
              the purpose of capturing value. Understanding the complexity of
              transporting your end-of-life technology, we offer an array of
              options to help reduce the burden.
            </p>
            <p className="text-dark">
              We provide LTL ( less than truckload) transportation and
              full-service on-site packing and palletizing of the electronics.
            </p>
            <p className="text-dark">
              Our “e-crate” system intends to simplify your electronic equipment
              placement into the e-crate container, which we ship to your
              doorstep. We will take it from there and then the rest is on us.
            </p>
            <p className="text-dark">
              We pay extreme attention to faulty goods and merchandise to
              improve customer satisfaction. We also ensure safe transportation
              and freight management even when the faulty goods are redirected
              to the manufacturers.
            </p>
            <p className="text-dark">
              With our proprietary transportation management system with pan
              -India establishment, our prime focus is not only to pick up the
              consignment at the desired time but also a timely returned
              delivery.
            </p>
            <h2
              className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-5 head"
              id="3"
            >
              Data Destruction
            </h2>
            <p className="text-dark">
              A one-stop destination for protecting personal information as well
              as handling the e-recycling needs.
            </p>
            <p className="text-dark">
              Data has become one of the greatest assets for corporations. Data
              destruction of private and confidential information is very
              crucial to the business sector.
            </p>
            <p className="text-dark">
              While recycling the hardware, there is a major risk of
              confidential data falling into wrong hands.
            </p>
            <p className="text-dark">
              Our R2 has 14001 and 45001 certification, this ensures our process
              and mission to dispose of your obsolete equipment safely and
              securely.
            </p>
            <p className="text-dark">
              We have fully trained employees who go through a regular
              background check to ensure that they handle security procedures
              for classified data and information destruction. We have both
              on-site as well as off-site hard drive shredding services.
            </p>
          </div>
          <div
            className="text-center mt-4 mt-lg-0 col-sm-12 col-lg-3 d-lg-flex flex-column align-items-center hidden"
            id="imgBox"
          >
            <img src={img_1} alt="" className="img-fluid w-100" />
            <img src={img_2} alt="" className="img-fluid w-100 mt-4" />
            <img src={img_3} alt="" className="img-fluid w-100 mt-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
