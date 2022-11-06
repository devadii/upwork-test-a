import React from "react";
import "./maindash.css";

const MainDash = () => {
  return (
    <div className="maindash">
      <h1>Dashboard Statistics</h1>
      <div className="stats">
        <button>Total Gate Scans</button>
        <button>Total Tags QA</button>
        <button>Total Complete</button>
        <button>Total DR</button>
        <button>Total Truck</button>
        <button>Total Missing</button>
        <button>Total Mismatch</button>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th colspan="2">Truck</th>
              <th colspan="2">Warehouse</th>
              <th colspan="1">Status</th>
              <th colspan="1">Dispatch Approver</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>DR #</th>
              <th>SN #</th>
              <th>Compelte/ Mismatch/ Missing/ Corrected</th>
              <th>Dispatch Approver</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainDash;
