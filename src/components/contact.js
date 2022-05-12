import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { message } from "antd";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);
  const [messages, setMessages] = useState("");
  const formTest = useRef();
  const emailinput = useRef();

  const handlsubmit = async (e) => {
    message.info("This is a normal message");
    e.preventDefault();
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      if (name !== "" && email !== "" && phone !== "" && message !== "") {
        emailjs
          .sendForm(
            "service_ltefhx9",
            "template_qfxw0n5",
            e.target,
            "user_8k2ZrKByuMTlu5hzpbc3t"
          )
          .then(
            (result) => {
              console.log(result.text);
              setSucess(true);
              setTimeout(() => {
                setSucess(false);
              }, 3000);
            },
            (error) => {
              setError(true);
              setTimeout(() => {
                setError(false);
              }, 3000);
            }
          );
      }
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    setName("");
    setEmail("");
    setMessages("");
    setPhone("");
    // e.target.reset();
    document.getElementById("contactForm").reset();
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        {/* Contact Section Heading*/}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        {/* Icon Divider*/}
        <div className="divider-custom">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <i className="fas fa-star" />
          </div>
          <div className="divider-custom-line" />
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form
              ref={formTest}
              autoComplete="off"
              onSubmit={handlsubmit}
              id="contactForm"
              name="sentMessage"
              noValidate="novalidate"
            >
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>
                    Name <span className="red">*</span>{" "}
                  </label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="name"
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email Address</label>
                  <input
                    ref={emailinput}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    name="email"
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Phone Number</label>
                  <input
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      console.log(phone);
                    }}
                    name="phone"
                    className="form-control"
                    id="phone"
                    type="number"
                    placeholder="Phone Number"
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Message</label>
                  <textarea
                    value={messages}
                    onChange={(e) => {
                      setMessages(e.target.value);
                    }}
                    name="message"
                    className="form-control"
                    id="message"
                    rows={5}
                    placeholder="Message"
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <br />
              <div id="success" />

              {sucess ? (
                <div className="alert alert-success">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                  <strong>Your message has been sent. </strong>
                </div>
              ) : null}

              {error ? (
                <div className="alert alert-danger">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                  <strong>
                    {" "}
                    Sorry {name} it seems that your email is wrong. Please try
                    again later!"
                  </strong>
                </div>
              ) : null}

              <div className="form-group">
                <button
                  disabled={
                    name === "" ||
                    email === "" ||
                    phone === "" ||
                    message === ""
                      ? true
                      : false
                  }
                  className="btn btn-primary btn-xl"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
