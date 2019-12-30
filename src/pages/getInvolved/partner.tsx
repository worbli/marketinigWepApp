import React, { useContext, useState } from "react";
import { Context } from "../../components/context";
import loadingImg from "../../images/loading.svg";

const Partner: React.FC = () => {
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
          <h2 id="partnerwithus">Partner with us</h2>

          <h3>
            as we strive through collaboration with integrity to deliver the
            best in all we do.
          </h3>
        </span>
      </div>

      <div className="image image--partner"> </div>

      <div className="max-width">
        <span className="body">
          <p>
            We are always on a mission to find good partners who share our
            WORBLI values. We actively seek out the best applications, technical
            teams, infrastructure, and technology.
          </p>

          <p>
            Collaboration is a requirement of success. It's really not optional.
            Focus on what you do best and attract the best minds in the space to
            grow and prosper.
          </p>

          <p>
            While all of our partners are vetted and checked for compliance, we
            want to work with organizations that share our desire to create a
            diverse and accessible ecosystem.
          </p>

          <p>
            If you have an innovative idea or project that you think fits our
            ethos, we want to work with you. We have a vast array of partners
            from all industries and are always scouting out the next wave. We
            are pioneering the future of innovation one day at a time and we
            invite you to join us.
          </p>

          <p>
            Ethics, versatility, and service. No project too big or small. We
            welcome everyone to reach out and initiate a conversation. Together
            we can shape a fast, resilient infrastructure, that will bring
            digital assets to the masses, allowing businesses to innovate the
            future of DeFi technology.
          </p>

          <p>
            For more information please complete and submit the form below and
            someone from our team will be in touch.
          </p>

          {sent && (
            <h4 className="form--title">
              Your enquiry has been sent! We will be in contact soon.
            </h4>
          )}
          {!sent && (
            <form onSubmit={onSubmit} className="card form">
              <h4 className="form--title">Parnership request</h4>
              <div className="form--body">
                <div>Application</div>
                <div className="form--relative">
                  <label className="form--label">Type</label>
                  <select
                    autoFocus
                    name="department"
                    onChange={onChange}
                    value={department}
                  >
                    <option value="">Select...</option>
                    <option value="defi">DeFi App</option>
                    <option value="sto">Security Token</option>
                    <option value="other">Other</option>
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
                      "Submit"
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

export { Partner };
