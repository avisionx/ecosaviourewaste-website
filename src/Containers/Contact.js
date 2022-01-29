import { mdiEmail, mdiMapMarker, mdiPhone } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = ({ isSmall }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: '',
    contact: '',
  });

  const [isSent, setIsSent] = useState('');
  const [isVerified, setIsVerified] = useState(null);
  const [isError, setIsError] = useState(false);

  const submitMessage = (event) => {
    event.preventDefault();
    if (isVerified) {
      let name = state.name;
      let email = state.email;
      let message = state.message;
      let contact = state.contact;
      let inquiry = state.inquiry;
      var formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSf4csz1Ok48mRlhD7mAD7-5DZbUYH1rRdBwaC-6lrYYeOm_UA/formResponse?usp=pp_url&entry.2005620554=${name}&entry.1045781291=${email}&entry.1166974658=${contact}&entry.662864165=${inquiry}&entry.839337160=${message}`;
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', formUrl);
      xmlHttp.send(null);
      setIsSent('Message Sent!');
      setIsError(false);
      setState({
        name: '',
        email: '',
        message: '',
        contact: '',
        inquiry: '',
      });
    } else {
      setIsError(true);
      setIsSent('Verify Captcha!');
    }
  };

  const handleChange = (event) => {
    setIsSent('');

    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
  };

  const contactArray = [
    {
      icon: mdiMapMarker,
      title: 'ECO SAVIOUR E-WASTE',
      subtitle: 'Address',
      text: 'C351,352 ANSAL PIONEER INDUSTRIAL PARK, <br />BILASPUR MANESAR, HARYANA - 122043',
      href: 'https://goo.gl/maps/izSzvHFtLzxMAmf26',
    },
    {
      isPhone: true,
      icon: mdiPhone,
      title: 'Contact No.',
      number: '+91 - 8527833229',
      href: 'tel:+918527833229',
      text: 'Mon to Sun - 9AM to 8PM',
    },
    {
      icon: mdiEmail,
      title: 'siddharth.jain@ecosaviourewaste.com',
      text: 'Send us an email anytime!',
      href: 'mailto:siddharth.jain@ecosaviourewaste.com',
    },
  ];
  return (
    <>
      <div className="container-fluid my-5">
        <h2 className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold">
          <span>Contact</span>
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
        <div className="row d-flex justify-content-center">
          <div className="d-none d-lg-block col-sm-12 col-lg-auto">
            <h5
              className="text-gradient  text-nowrap font-weight-bold mb-3 display-1"
              style={{
                position: 'absolute',
                transform: 'rotate(-90deg)',
                right: '3rem',
                top: '-6rem',
                transformOrigin: 'bottom right',
                opacity: 0.8,
              }}
            >
              Contact Us
            </h5>
          </div>
          <div className="d-flex justify-content-center flex-column order-3 order-lg-2 col-sm-12 col-lg-8 pt-4 pt-lg-0">
            <iframe
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              height="500px"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="Pristine Group"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.7213656364743!2d76.86774541507465!3d28.276464482559575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d38fd248498eb%3A0x49fd5538e78d8479!2sPioneer%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1641719595816!5m2!1sen!2sin"
            ></iframe>
            <h2 className="text-primary font-weight-bold mb-4 mt-5 ">
              Get in Touch With Us
            </h2>
            <div className="row">
              <div className="col-12 col-lg-8">
                <form onSubmit={submitMessage}>
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Full Name"
                      name="name"
                      required
                      value={state.name}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Please enter your full name.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                      value={state.email}
                      required
                      onChange={handleChange}
                      name="email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll get back to you on this email.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact">
                      Contact Number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contact"
                      aria-describedby="contactHelp"
                      placeholder="Contact Number"
                      onChange={handleChange}
                      value={state.contact}
                      name="contact"
                      required
                    />
                    <small id="contactHelp" className="form-text text-muted">
                      We'll get back to you on this number for follow up.
                    </small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiry">
                      Inquiry Type<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      list="inquiry_list"
                      className="form-control"
                      id="inquiry"
                      aria-describedby="inquiryHelp"
                      placeholder="Inquiry Type"
                      name="inquiry"
                      value={state.inquiry}
                      onChange={handleChange}
                      required
                    />
                    <datalist id="inquiry_list">
                      <option value="Franchise Registration" />
                      <option value="General Inquiries" />
                      <option value="Schedule a Pickup" />
                      <option value="Other" />
                    </datalist>
                    <small id="inquiryHelp" className="form-text text-muted">
                      Please choose/enter the type of inquiry you have.
                    </small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Message<span className="text-danger">*</span>
                    </label>

                    <textarea
                      rows="6"
                      className="form-control"
                      id="message"
                      aria-describedby="messageHelp"
                      placeholder="Message"
                      value={state.message}
                      name="message"
                      onChange={handleChange}
                      required
                    />
                    <small id="messageHelp" className="form-text text-muted">
                      Please enter your message or query.
                    </small>
                  </div>

                  <ReCAPTCHA
                    sitekey="6Lc_w0UeAAAAACfP7b7FqaQgAA9M7cnHHYMJFhQH"
                    className="mt-4"
                    onChange={(value) => setIsVerified(value)}
                  />
                  <div className="mt-4">
                    <div className="d-flex">
                      <button
                        type="submit"
                        className="rounded-0 border-0 p-1 btn btn-primary bg-gradient btn-md"
                      >
                        <div className="bg-white px-5 text-dark py-2">Send</div>
                      </button>
                      <div
                        className={`mb-0 ml-auto d-flex align-items-center small border-0 py-0 text-uppercase alert ${
                          isError ? 'alert-danger' : 'alert-success'
                        }  ${isSent ? '' : 'hidden'}`}
                      >
                        {isSent}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                {contactArray.map((data, i) => {
                  return (
                    <div className="media" key={i}>
                      <span>
                        <Icon path={data.icon} color="#37784f" size={1} />
                      </span>
                      <div className="media-body ml-2">
                        {!data.isPhone && (
                          <>
                            <a
                              href={data.href}
                              className="mb-0 h5 text-primary font-weight-light"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {data.title}
                            </a>
                            <p className="mb-0 mt-1 small text-dark text-uppercase font-weight-bold">
                              {data.subtitle}
                            </p>
                            <p
                              className="mb-4 text-secondary pr-5"
                              dangerouslySetInnerHTML={{ __html: data.text }}
                            ></p>
                          </>
                        )}
                        {data.isPhone && (
                          <>
                            <p className="mb-0 h5 text-primary font-weight-light">
                              {data.title}
                            </p>
                            <a
                              href={data.href}
                              className="mb-3 text-secondary"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {data.number}
                            </a>
                            <p
                              className="mb-4 mt-1 text-secondary pr-5"
                              dangerouslySetInnerHTML={{ __html: data.text }}
                            ></p>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
