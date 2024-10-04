import React from "react";

function ContactForm() {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="form-label">
          Full Name <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Your name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="form-label">
          Email <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="youremail@example.com"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="form-label">
          Phone (optional)
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          placeholder="(123) 456-7890"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="form-label">
          Subject <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="subject"
          placeholder="Your subject"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="form-label">
          Message <span className="text-danger">*</span>
        </label>
        <textarea
          className="form-control"
          id="message"
          rows="5"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-dark btn-lg">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
