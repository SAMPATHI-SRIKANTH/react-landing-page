import React, { useState } from "react";
import "./index.css";

const FormComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [branch, setBranch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCallbackRequest = () => {
    setShowModal(true);
    setPhoneNumber("");
    setEmail("");
    setQualification("");
    setBranch("");
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="form-container">
      <h2>Request a Call Back</h2>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <select
            id="qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
          >
            <option value="">Select Qualification</option>
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
          </select>
        </div>
        <div className="form-group">
          <select
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option value="">Select Branch</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="button" onClick={handleCallbackRequest}>
          Request Call Back
        </button>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>
              Thank you for requesting a call back! We will get in touch with
              you soon.
            </p>

            <span className="close" onClick={handleCloseModal}>
              close
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
