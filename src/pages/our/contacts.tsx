import React, { useContext, useState } from "react";
import { Context } from "../../components/context";
import loadingImg from "../../images/loading.svg";

const Contacts: React.FC = () => {
  const { global } = useContext(Context) as { global: any };

  const [state, setState] = useState({
    department: "",
    email: "",
    enquiry: "",
    loading: false,
    sent: false,
    name: ""
  });

  const { department, email, enquiry, loading, name, sent } = state;
  const { db } = global;

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState(prev => ({ ...prev, loading: true }));
    console.log(email);
    db.collection("contact-us")
      .add({ department, email, enquiry, name })
      .then(function() {
        setState(prev => ({ ...prev, loading: false, sent: true }));
      })
      .catch(function(error: any) {
        setState(prev => ({ ...prev, loading: false, sent: false }));
      });
  };

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    event.persist();
    const { name, value } = event.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <React.Fragment>
      <div className="max-width">
        <span className="body">
          <h2 id="contactus">Contact Us</h2>
          <h3>we look forward to hearing from you.</h3>
        </span>
      </div>

      <div className="image image--contacts"> </div>

      <div className="max-width">
        <span className="body">
          {sent && (
            <h4 className="form--title">
              Your enquiry has been sent! We will be in contact soon.
            </h4>
          )}
          {!sent && (
            <form onSubmit={onSubmit} className="card form">
              <h4 className="form--title">Make first contact</h4>
              <div className="form--body">
                <div>Enquiry</div>
                <div className="form--relative">
                  <label className="form--label">Department</label>
                  <select
                    autoFocus
                    name="department"
                    onChange={onChange}
                    value={department}
                  >
                    <option value="">Select...</option>
                    <option value="press">Press</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="tech">Tech Team</option>
                    <option value="hr">Human Resources</option>
                  </select>
                  <label className="form--label">Your full name</label>
                  <input
                    name="name"
                    onChange={onChange}
                    placeholder="Your name"
                    type="text"
                    value={name}
                  />
                  <label className="form--label">Email</label>
                  <input
                    name="email"
                    onChange={onChange}
                    placeholder="Email address"
                    type="text"
                    value={email}
                  />
                  <label className="form--label">Enquiry</label>
                  <input
                    name="enquiry"
                    onChange={onChange}
                    placeholder="How can we help you.."
                    type="text"
                    value={enquiry}
                  />
                </div>
              </div>
              <div className="form--footer">
                <small></small>
                <div>
                  <button className="form--button">
                    {!loading ? (
                      "Send"
                    ) : (
                      <img
                        src={loadingImg}
                        alt="loading"
                        className="form--loading"
                      />
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </span>
      </div>
    </React.Fragment>
  );
};
export { Contacts };
