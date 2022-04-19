// a contact form for the contact me page
// takes in email, name, and message
// shows my whatsapp number and email

import React from "react";

export default function ContactForm({ mobile }) {
  // load the contact form

  return (
    <>
      <div
        className="typeform-widget"
        data-tf-widget="nzvKGr9l"
        data-tf-iframe-props="title=Contact Me"
        data-tf-medium="snippet"
      ></div>
      <style jsx>{`
        .typeform-widget {
          top: 0;
          right: 0;
          width: ${mobile ? "100vw" : "40vw"};
          height: 100vh;

          border: none;
        }
      `}</style>
    </>
  );
}
