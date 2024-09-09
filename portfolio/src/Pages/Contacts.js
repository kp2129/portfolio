import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Contact Me</h1>
        <div className="myinfo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"></img>
          <a href="https://www.linkedin.com/in/kristaps-polis-10064a299/">Kristaps Polis</a>
        </div>
        <div className="myinfo">
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"></img>
          <a href="mailto:Kristapspolis0@gmail.com">Kristapspolis0@gmail.com</a>
        </div>
    </div>
  );
};

export default Contacts;
