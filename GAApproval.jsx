import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/GAApproval.css';
import Tranferworkflow from '../assets/Transferworkflow.svg';
import Restart from '../assets/restart.svg';
import Reject from '../assets/reject.svg';
import ApproveBtn from '../assets/approve.svg';

const GAApproval = () => {
  const [projectName, setProjectName] = useState('IoT_Advanced_Features_(SRI_B)_Y2025');
  const [cfoApproval, setCfoApproval] = useState('NA');


  const networkData = [
    { networkType: 'Vodafone-5G', connectionType: 'Prepaid', connections: '2', remarks: 'For Samsung Finance Plus App' },
    { networkType: 'Airtel-5G', connectionType: 'Prepaid', connections: '1', remarks: 'For Samsung Finance Plus App' }
  ];

  return (
    <div className="approve-container">
      {/* Project Details Section */}
      <div className="approve-section">
        <div className="approve-header">
          <h2 className="approve-title">Project Details</h2>
            
          
        </div>

        <div className="approve-field">
          <label className="approve-label">
            Project <span className="required">*</span>
          </label>
          <div className="approve-select-wrapper">
            <select 
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="approve-select"
            >
              <option value="IoT_Advanced_Features_(SRI_B)_Y2025">
                IoT_Advanced_Features_(SRI_B)_Y2025
              </option>
            </select>
            <ChevronDown className="approve-icon" />
          </div>
        </div>
      </div>

      {/* SIM Card Details Section */}
      <div className="approve-section">
        <h2 className="approve-title">SIM Card Details</h2>
        <div className="approve-table-container">
          <table className="approve-table">
            <thead>
              <tr>
                <th>Network Type</th>
                <th>Connection Type</th>
                <th>No Of Connections</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {networkData.map((row, index) => (
                <tr key={index}>
                  <td>{row.networkType}</td>
                  <td>{row.connectionType}</td>
                  <td>{row.connections}</td>
                  <td>{row.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attachment Section */}
      <div className="report-section">
        <h3 className="report-subtitle">Attachment</h3>
        <div className="report-attachment">
        <div className="report-attachment-content">
          <div className="report-file-icon"></div>
          <div className="report-file-details">
            <div className="report-file-name">PAN Card.pdf</div>
            <div className="report-file-meta">11 Sep, 2023 • 12:24pm • 4MB</div>
          </div>
        </div>
        <div className="report-file-delete"></div>
      </div>
      </div>   

      {/* CFO Approval Section */}
      <div className="approve-section">
        <div className="approve-field">
          <label className="approve-label">
            CFO Approval Required <span className="required">*</span>
          </label>
          <div className="approve-select-wrapper wide">
            <select 
              value={cfoApproval}
              onChange={(e) => setCfoApproval(e.target.value)}
              className="approve-select"
            >
              <option value="NA">NA</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <ChevronDown className="approve-icon" />
          </div>
        </div>
      </div>

      {/* Comment Box Section */}
      <div className="comment-section">
        <label htmlFor="comment" className="comment-label">
          Comment (Max 500 Chars)
        </label>
        <textarea
          id="comment"
          className="comment-box"
          maxLength={500}
          placeholder="xxx-xxx-xx-xxx-x"
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="approve-actions">
        <button className="btn-icon"><img src={Restart} alt="restart" /></button>
        <button className="btn-icon"><img src={Reject} alt="reject" /></button>
        <button className="btn-icon"><img src={ApproveBtn} alt="approve" /></button>
      </div>


      <div className="transfer-workflow">
        <img src={Tranferworkflow} alt="workflow" className="transfer-img" />
      </div>

      
    </div>
  );
};

export default GAApproval;
