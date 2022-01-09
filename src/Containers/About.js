import React, { useEffect, useState } from 'react';
import about_img_1 from '../img/slider/8.jpg';
import about_img_2 from '../img/slider/5.jpg';
import VisibilitySensor from 'react-visibility-sensor';
import { animateCSS } from '../helpers';

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
            <h2 className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-5 head">
              Founder Of Eco Saviour E-Waste
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
            <h2 className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-5 head">
              Our Mission
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
            <h2 className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-5 head">
              Our Vision
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
            id="aboutImg"
          >
            <img src={about_img_1} alt="" className="img-fluid w-100" />
            <img src={about_img_2} alt="" className="img-fluid w-100 mt-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
