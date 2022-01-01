import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import plant from '../img/plant.svg';
const Home = ({ isSmall }) => {
  return (
    <>
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
          <h5 style={{ maxWidth: '700px' }} className="mb-4 pb-2">
            Our simple process of E-Waste disposal can be your next step closer
            to sustainable future.
          </h5>
          <Link to="#">
            <button
              class="d-flex align-items-center px-lg-5 py-3 small bg-gradient-primary border-0 rounded text-uppercase font-weight-light btn btn-dark btn-lg"
              style={{ fontSize: '15px' }}
            >
              Know More <Icon path={mdiArrowRight} className="ml-2" size={1} />
            </button>
          </Link>
        </Container>
      </div>
    </>
  );
};
export default Home;
