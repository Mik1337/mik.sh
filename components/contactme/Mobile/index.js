// a contact form for the contact me page
// takes in email, name, and message
// shows my whatsapp number and email

import React from "react";

export default function ContactFormMobile() {
  return (
    <>
      <iframe
        className="iFrame"
        src="https://1tjog8nyw7c.typeform.com/to/nzvKGr9l"
      ></iframe>
      <style jsx>{`
        .iFrame {
          top: 0;
          right: 0;
          width: 100vw;
          height: 100vh;

          border: none;
        }
      `}</style>
    </>
  );
}
