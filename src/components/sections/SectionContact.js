import React from "react";
import ContactForm from "../general/ContactForm";

const ContactInfo = () => (
  <div className="col-12 col-lg-6">
    <div className="row">
      <div className="col-12 col-xl-11 d-xl-flex flex-column justify-content-xl-center">
        <h2 className="h1 mb-3">Get in touch</h2>
        <p className="mb-5">
          We are always ready to help you take the next step. Send us a message
          here.
        </p>
        <ContactDetails />
        <div class="row mb-3" style={{ "min-height": "unset;" }}>
          <PhoneDetail />
          <EmailDetail />
        </div>
      </div>
    </div>
  </div>
);

const ContactDetails = () => (
  <div className="d-flex mb-3">
    <div className="me-4">
      <LocationIcon />
    </div>
    <div>
      <h4 className="mb-2">Address</h4>
      <address className="mb-3">
        8014 Edith Blvd NE, Albuquerque, New York, United States
      </address>
    </div>
  </div>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    className="bi bi-geo"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
    />
  </svg>
);

const PhoneDetail = () => (
  <div className="col-12 col-sm-6">
    <div className="d-flex mb-2 mb-sm-0">
      <div className="me-4">
        <PhoneIcon />
      </div>
      <div>
        <h4 className="mb-2">Phone</h4>
        <p className="mb-3">
          <a
            className="link-light text-decoration-none"
            href="tel:+15057922430"
          >
            (505) 792-2430
          </a>
        </p>
      </div>
    </div>
  </div>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    className="bi bi-telephone-outbound"
    viewBox="0 0 16 16"
  >
    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
  </svg>
);

const EmailDetail = () => (
  <div className="col-12 col-sm-6">
    <div className="d-flex mb-0">
      <div className="me-4">
        <EmailIcon />
      </div>
      <div>
        <h4 className="mb-2">E-Mail</h4>
        <p className="mb-3">
          <a
            className="link-light text-decoration-none"
            href="mailto:demo@yourdomain.com"
          >
            demo@yourdomain.com
          </a>
        </p>
      </div>
    </div>
  </div>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    className="bi bi-envelope-at"
    viewBox="0 0 16 16"
  >
    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
    <path d="M11.5 9.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zM11 12a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5z" />
  </svg>
);

function SectionContact() {
  return (
    <section className="container py-5">
      <div className="row">
        <ContactInfo />
        <div className="col-12 col-lg-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
