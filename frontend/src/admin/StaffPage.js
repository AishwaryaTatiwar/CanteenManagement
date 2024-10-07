
import React from 'react';
import './StaffPage.css';

function StaffPage() {
  return (
      <div className="main-content">
        <div className="add-staff-container">
        <button className="add-staff-button">➕Add Staff</button>
        </div>
        {/* Table for staff list */}
        <div className="staff-list">
          <table>
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>Staff name</th>
                <th>Phone no.</th>
                <th>Work</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Badal Yadav</td>
                <td>9871234567</td>
                <td>Manager</td>
                <td><button className="update-button">Update</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default StaffPage;
