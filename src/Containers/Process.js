import React, { useEffect, useState } from 'react';
import img_1 from '../img/process.png';
import VisibilitySensor from 'react-visibility-sensor';
import { animateCSS } from '../helpers';
import { ListGroup, ListGroupItemText as ListGroupItem } from 'reactstrap';
import Icon, { Stack } from '@mdi/react';
import { mdiHandPointingRight, mdiCircle, mdiCircleOutline } from '@mdi/js';
import { processData } from './Home';

const listData = [
  'CFC Slitting',
  'CRT Cutting',

  'CFL Recycling',

  'Dry Shredding and Seperating of PCB and PVC wires',

  'Precious Metal Recovery from Printed Circuit Boards',

  'Carbonisation and Metal Enrichment',
];

const Process = ({ isSmall }) => {
  const [titleVis, setTitleVis] = useState(false);
  const [activeIndexProcess, setActiveIndexProcess] = useState(0);
  const [activeIndexStarted, setActiveIndexStarted] = useState(isSmall);

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
    if (titleVis) {
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
      animateCSS('#swiperProcess', 'fadeInUp').then(() => {
        setActiveIndexProcess(0);
        setActiveIndexStarted(true);
      });
      document.querySelector('#swiperProcess').classList.remove('hidden');
    }
  }, [titleVis]);

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
            <span>Process</span>
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
                Process
              </h5>
            </div>
          </VisibilitySensor>
          <div
            className="col-sm-12 col-lg-5 hidden animate__fast"
            id="contentID"
          >
            <h2 className="text-uppercase font-weight-light widen text-primary font-weight-bold mb-2 mt-3 mt-lg-0 head">
              Our Process
            </h2>
            <p className="text-dark">
              The producers find it difficult to abide by the government’s EPR
              regulations as the rate of e-waste generation is high and the
              infrastructure is lacking to collect and recycle the e-waste.
            </p>
            <p className="text-dark">
              To resolve this problem and help the producers we let them network
              with the recyclers through us and get their e-waste recycled. We
              follow seven simple steps to manage and dispose of your e-waste as
              described in below graph.
            </p>
            <p className="text-dark">
              Once you have scheduled your E-waste pickup through our call
              center, we will commit a timely pick up from your location to our
              R2 certified recycling plant. We ensure a complete end to life
              solution to your e-waste disposal. Our fleet of vehicles and
              channel partners from nationwide locations help us to manage
              reverse logistics.
            </p>
            <p className="text-dark">
              After the collection is done, the e-waste is dismantled and is
              further segregated as either recyclable or reusable. Once the
              segregation is done, the recyclable e-waste is destroyed and the
              most precious material extracted from it is retained.
            </p>
            <p className="text-dark">
              Whereas, reusable e-waste is repaired by fitting their destroyed
              parts with already kept parts in a working position. This reduced
              the cost of replacing the old parts with the new ones and hence is
              cost-effective.
            </p>
            <p className="text-dark">
              Our well-trained staff handles all aspects of the asset retirement
              process: project management, logistics, data destruction,
              recycling, and asset remarketing. We understand that every company
              has unique needs so we try to mold our work according to your
              requirements. No matter whatever be the size of your company, we
              provide you with a cent-percent e-waste solution that is
              customized to suit your business needs.
            </p>
            <p className="text-dark">Some of our main works are:</p>
            <ListGroup flush>
              {listData.map((data) => (
                <ListGroupItem key={data}>
                  <Icon
                    path={mdiHandPointingRight}
                    className="mr-2"
                    color="#37784f"
                    size={1}
                  />
                  {data}
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
          <div
            className="text-center mt-4 mt-lg-0 col-sm-12 col-lg-3 d-lg-flex flex-column align-items-center hidden"
            id="imgBox"
          >
            <img src={img_1} alt="" className="img-fluid w-100" />
          </div>
          <div className="col-9">
            <div className="py-3 py-lg-5 hidden" id="swiperProcess">
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
                              index === activeIndexProcess ? 'white' : '#36794F'
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
