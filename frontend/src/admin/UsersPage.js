
import React from 'react';
import './UsersPage.css'; 

function UsersPage() {
  return (
    <div>
      <div className="main-content">
        {/* Table for User list */}
        <div className="User-list">
          <table>
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>User name</th>
                <th>Email-Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Random Sharma</td>
                <td>randomsharma@rknec.edu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
