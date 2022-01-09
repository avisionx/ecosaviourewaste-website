import React, { useEffect, useState } from 'react';
import img_1 from '../img/slider/8.jpg';
import img_2 from '../img/slider/5.jpg';
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
              Epr schemes place responsibility for the environmental impact of a
              product on the producer. Currently, they are mainly used to ensure
              there are responsible disposal options for products at the end of
              their useful lives. Producers may take responsibility for doing
              this themselves or pay another organisation to do it.Faced with
              increasing amounts of waste, many governments have reviewed
              available policy options and concluded that placing the
              responsibility for the post-consumer phase of certain goods on
              producers could be an option.
            </p>
            <p className="text-dark">
              Extended producer responsibility (epr) is a policy approach under
              which producers are given a significant responsibility – financial
              and/or physical – for the treatment or disposal of post-consumer
              products. Assigning such responsibility could in principle provide
              incentives to prevent wastes at the source, promote product design
              for the environment and support the achievement of public
              recycling and materials management goals. Within the oecd the
              trend is towards the extension of epr to new products, product
              groups and waste streams such as electrical appliances and
              electronics.
            </p>
            <h2
              className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-5 head"
              id="2"
            >
              Reverse Logistics
            </h2>
            <p className="text-dark">
              We understand the complexity of transporting your end-of-life
              technology; that’s why we offer an array of options to help ease
              the burden. Do you need ltl (less than truckload) transportation?
              No problem. Looking for full-service onsite packing and
              palletizing of your electronics? We’ve got you covered. With our
              innovative “e-crate” system, simply place your electronic
              equipment into the e-crate container we ship to your door. We’ll
              take it from there
            </p>
            <p className="text-dark">
              We strive to improve customer satisfaction and loyalty by paying
              extreme attention to faulty goods and merchandise. We look after
              the safe transportation and freight management even when the
              faulty goods are redirected to the manufacturers. With our
              proprietary transportation management system, we work with a prime
              focus not only to pick up the consignment on desired time and
              location, but also on timely returned delivery.Ï
            </p>
            <h2
              className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-5 head"
              id="3"
            >
              Data Destruction
            </h2>
            <p className="text-dark">
              Data destruction of private and confidential information is
              crucial to corporations and small business alike .. Your data
              represents your greatest asset. When recycling it hardware
              equipment, there is a significant risk that data may fall into the
              wrong hands. Our r2, iso 14001 and iso 45001 certification ensures
              that our process and mission is to dispose your obsolete it
              equipment safely and securely.
            </p>
            <p className="text-dark">
              Our employees are fully trained and go through regular background
              checks to make certain they can handle security procedures for the
              classified data and information destruction. We provide both
              on-site and off-site hard drive shredding services.
            </p>
            <h2
              className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-5 head"
              id="4"
            >
              One more as Discussed
            </h2>
            <p className="text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
              dolor sit amet, consectetur
            </p>
            <p className="text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
              dolor sit amet, consectetur
            </p>
          </div>
          <div
            className="text-center mt-4 mt-lg-0 col-sm-12 col-lg-3 d-lg-flex flex-column align-items-center hidden"
            id="imgBox"
          >
            <img src={img_1} alt="" className="img-fluid w-100" />
            <img src={img_2} alt="" className="img-fluid w-100 mt-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
