import React from "react";
import "./index.css"; // Import CSS file for styling

const LearnInfoComponent = () => {
  return (
    <div className="acca-info">
      <h2>What will you Learn in ACCA</h2>
      <div className="card-container">
        <div className="card">
          <div className="card-header">Knowledge level</div>
          <div className="card-content">
            <ul>
              <li>International Financial Reporting Standards (IFRS)</li>
              <li>Financial statement analysis</li>
              <li>Corporate governance</li>
            </ul>
          </div>
          <div className="card-footer">Footer </div>
        </div>
        <div className="card">
          <div className="card-header">Skill level</div>
          <div className="card-content">
            <ul>
              <li>Budgeting and forecasting</li>
              <li>Cost management</li>
              <li>Performance evaluation</li>
            </ul>
          </div>
          <div className="card-footer">Footer</div>
        </div>
        <div className="card">
          <div className="card-header">Professional Level</div>
          <div className="card-content">
            <ul>
              <li>Audit planning and risk assessment</li>
              <li>Internal controls</li>
              <li>Audit reporting</li>
            </ul>
          </div>
          <div className="card-footer">Footer </div>
        </div>
      </div>
    </div>
  );
};

export default LearnInfoComponent;
