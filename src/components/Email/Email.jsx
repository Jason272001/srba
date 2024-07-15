import React, { useState } from "react";
import { client } from "../../data/client"; // Import your Sanity client

const Email = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newuser = {
      _type: "user",
      name,
      email,
      phone,
    };

    client
      .create(newuser)
      .then((res) => {
        window.alert(`Successfuly join to S.R.B.A`);
        // Optionally reset form or show a success message
        setEmail("");
        setName("");
        setPhone("");
      })
      .catch((err) => {
        console.error("Error");
      });
  };

  return (
    <div id="mc_embed_shell" className="pt-36 flex justify-center">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        {`
          #mc_embed_signup {
            background: #fff;
            clear: left;
            font: 14px Helvetica, Arial, sans-serif;
            width: 100%;
            max-width: 600px;
          }
        `}
      </style>
      <div id="mc_embed_signup" className="w-full px-4">
        <form
          onSubmit={handleSubmit}
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2 className="text-center text-2xl font-semibold mb-4">
              Subscribe
            </h2>
            <div className="mc-field-group mb-4">
              <label htmlFor="mce-EMAIL" className="block mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="EMAIL"
                onChange={(e) => setEmail(e.target.value)}
                className="required email w-full p-2 border rounded"
                id="mce-EMAIL"
                required
                value={email}
              />
            </div>
            <div className="mc-field-group mb-4">
              <label htmlFor="mce-FNAME" className="block mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="FNAME"
                onChange={(e) => setName(e.target.value)}
                className="text w-full p-2 border rounded"
                id="mce-FNAME"
                value={name}
                required
              />
            </div>
            <div className="mc-field-group mb-4">
              <label htmlFor="mce-PHONE" className="block mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="PHONE"
                onChange={(e) => setPhone(e.target.value)}
                className="REQ_CSS w-full p-2 border rounded"
                id="mce-PHONE"
                value={phone}
                required
              />
            </div>
            <div id="mce-responses" className="clear foot mb-4">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              <input
                type="text"
                name="b_041dceaccb518c047f8341246_9da384cbf8"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot flex justify-center">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  value="Subscribe"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <script type="text/javascript">
        {`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0] = 'EMAIL';
            ftypes[0] = 'email';
            fnames[1] = 'FNAME';
            ftypes[1] = 'text';
            fnames[4] = 'PHONE';
            ftypes[4] = 'phone';
            fnames[2] = 'LNAME';
            ftypes[2] = 'text';
            fnames[3] = 'ADDRESS';
            ftypes[3] = 'address';
            fnames[5] = 'BIRTHDAY';
            ftypes[5] = 'birthday';
          }(jQuery));
          var $mcj = jQuery.noConflict(true);
        `}
      </script>
    </div>
  );
};

export default Email;
