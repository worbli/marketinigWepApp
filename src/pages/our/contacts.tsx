import React from "react";

const Contacts: React.FC = () => {
  return (
    <div className="max-width">
      <span className="body">
        <h2 id="contactus">Contact Us</h2>

        <h3>we look forward to hearing from you.</h3>

        <p>
          <img src="../images/contacts.jpg" alt="page image" />
        </p>

        <p>
          hello@worbli.io <br />
          press@worbli.io <br />
          legal@worbli.io
        </p>
      </span>
    </div>
  );
};
export { Contacts };
