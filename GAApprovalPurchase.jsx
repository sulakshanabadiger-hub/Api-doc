import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/GAApprovalPurchase.css';
import Reject from '../assets/reject.svg';
import ApproveBtn from '../assets/approve.svg';
import Clear from '../assets/clear.svg';
import Searchh from '../assets/searchh.svg';
import Tranferworkflow from '../assets/Transferworkflow.svg';
import CalendarIcon from '../assets/calendar.svg'
const GAApprovalPurchase = () => {
  const [projectName, setProjectName] = useState('IoT_Advanced_Features_USP_BL_Y2025');

  // Default values
  const defaultMobileNumber = '7550142047';
  const defaultConnectionType = 'Postpaid';
  const defaultValidityDate = '24-May-2026';
  const defaultAssignedTo = 'Vigneswaran S (72523350)';

  // Form states
  const [mobileNumber, setMobileNumber] = useState(defaultMobileNumber);
  const [connectionType, setConnectionType] = useState(defaultConnectionType);
  const [validityDate, setValidityDate] = useState(defaultValidityDate);
  const [assignedTo, setAssignedTo] = useState(defaultAssignedTo);

  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [showGATable, setShowGATable] = useState(false);
  const [gaDetailsData, setGaDetailsData] = useState([]);

  const calendarRef = useRef(null);

  const networkData = [
    { networkType: 'Vodafone-5G', connectionType: 'Prepaid', connections: '2', remarks: 'For Samsung Finance Plus App' },
    { networkType: 'Airtel-5G', connectionType: 'Prepaid', connections: '1', remarks: 'For Samsung Finance Plus App' }
  ];

  // Close calendar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  // Add GA Details
  const handleAddGADetails = () => {
    const newRow = {
      mobileNumber,
      simCardNumber: '1234567890',
      networkType: connectionType,
      validityDate,
      assignedTo
    };

    setGaDetailsData([...gaDetailsData, newRow]);
    setShowGATable(true);

    // Reset to empty after adding
    setMobileNumber('');
    setConnectionType('');
    setValidityDate('');
    setAssignedTo('');
  };

  // Date select
  const handleDateSelect = (day) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${day.toString().padStart(2, '0')}-${months[currentMonth]}-${currentYear}`;
    setValidityDate(formattedDate);
    setShowCalendar(false);
  };

  // Calendar navigation
  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let day = 1; day <= daysInMonth; day++) days.push(day);

    return days;
  };

  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const handleClearAssignedTo = () => setAssignedTo('');

  return (
    <div className="approve2-container">
      {/* Project Details */}
      <div className="approve2-section">
        <h2 className="approve2-section-title2">Project Details</h2>
        <div className="approve2-field">
          <label className="approve2-label">Project <span className="approve2-required">*</span></label>
          <div className="approve2-select-wrapper">
            <select
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="approve2-select"
            >
              <option value="IoT_Advanced_Features_USP_BL_Y2025">IoT_Advanced_Features_USP_BL_Y2025</option>
            </select>
            <ChevronDown className="approve2-select-icon" />
          </div>
        </div>
      </div>

      {/* SIM Card Details */}
      <div className="approve2-section">
        <h2 className="approve2-section-title">SIM Card Details</h2>
        <div className="approve2-table-container">
          <table className="approve2-table">
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

      {/* Attachment */}
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

      {/* GA Details */}
      <div className="approve2-section">
        <h2 className="approve2-section-title">GA Details</h2>
        <div className="approve2-row">
          <div className="approve2-input-group">
            <label className="approve2-label">Mobile Number <span className="approve2-required">*</span></label>
            <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="approve2-input" />
          </div>
          <div className="approve2-input-group">
            <label className="approve2-label">Connection Type <span className="approve2-required">*</span></label>
            <div className="approve2-select-wrapper">
              <select value={connectionType} onChange={(e) => setConnectionType(e.target.value)} className="approve2-select">
                <option value="">Select</option>
                <option value="Postpaid">Postpaid</option>
                <option value="Prepaid">Prepaid</option>
              </select>
              <ChevronDown className="approve2-select-icon" />
            </div>
          </div>
          <div className="approve2-input-group">
            <label className="approve2-label">Validity Date <span className="approve2-required">*</span></label>
            <div className="approve2-date-wrapper" ref={calendarRef}>
              <input type="text" value={validityDate} onChange={(e) => setValidityDate(e.target.value)} className="approve2-input" />
              <button type="button" className="calen-btn" onClick={() => setShowCalendar(!showCalendar)}>
                <img src={CalendarIcon} alt="calendar" />
              </button>
              {showCalendar && (
                <div className="calendar-popup">
                  <div className="calendar-header">
                    <button type="button" className="calendar-nav-btn" onClick={() => navigateMonth('prev')}><ChevronLeft size={16} /></button>
                    <span className="calendar-month-year">{months[currentMonth]} {currentYear}</span>
                    <button type="button" className="calendar-nav-btn" onClick={() => navigateMonth('next')}><ChevronRight size={16} /></button>
                  </div>
                  <div className="calendar-grid">
                    <div className="calendar-weekdays">
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <div key={day} className="calendar-weekday">{day}</div>)}
                    </div>
                    <div className="calendar-days">
                      {generateCalendarDays().map((day, index) => (
                        <div key={index} className="calendar-day-cell">
                          {day && <button type="button" className="calendar-day" onClick={() => handleDateSelect(day)}>{day}</button>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Assigned To */}
        <div className="approve2-field">
          <label className="approve2-label">Assigned To <span className="approve2-required">*</span></label>
          <div className="approve2-assigned">
            <div className="approve2-assigned-wrapper">
              <input type="text" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} className="approve2-input" />
              <button type="button" className="approve2-clear-btn" onClick={handleClearAssignedTo}><img src={Clear} alt="clear" /></button>
              <button className="approve2-search-btn"><img src={Searchh} alt="searchh" /></button>
            </div>
            <button type="button" className="add-btn" onClick={handleAddGADetails}></button>
          </div>
        </div>

        {/* GA Details Table */}
        {showGATable && gaDetailsData.length > 0 && (
          <div className="approve2-table-container">
            <table className="approve2-table">
              <thead>
                <tr>
                  <th>Mobile Number</th>
                  <th>SIM Card Number</th>
                  <th>Network Type</th>
                  <th>Validity Date</th>
                  <th>Assigned To</th>
                </tr>
              </thead>
              <tbody>
                {gaDetailsData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.mobileNumber}</td>
                    <td>{row.simCardNumber}</td>
                    <td>{row.networkType}</td>
                    <td>{row.validityDate}</td>
                    <td>{row.assignedTo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Comment */}
      <div className="comment-section">
        <label htmlFor="comment" className="comment-label">Comment (Max 500 Chars)</label>
        <textarea id="comment" className="comment-box" maxLength={500} placeholder="xxx-xxx-xx-xxx-x"></textarea>
      </div>

      {/* Buttons */}
      <div className="approve2-actions">
        <button className="btn-icon"><img src={Reject} alt="reject" /></button>
        <button className="btn-icon"><img src={ApproveBtn} alt="approve" /></button>
      </div>

      <div className="transfer-workflow">
        <img src={Tranferworkflow} alt="workflow" className="transfer-img" />
      </div>
    </div>
  );
};

export default GAApprovalPurchase;