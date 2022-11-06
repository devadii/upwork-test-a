import React from "react";
import "./userroles.css";

const UserRoles = () => {
  return (
    <div className="userrole">
      <h1>User Roles</h1>
      <div className="roles_person">
        <p>Role Person</p>
        <input type="text" placeholder="ex. Admin" />
      </div>
      <h2>System Module Permission</h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th scope="col">Dashboard</th>
              <th scope="col">QA</th>
              <th scope="col">Warehouse</th>
              <th scope="col">Gates</th>
              <th scope="col">Setting</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Read</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Read</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Read</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Read</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Read</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Write</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Write</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Write</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Write</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Write</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Edit</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Edit</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Edit</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Edit</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Edit</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Delete</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Delete</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Delete</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Delete</p>
                </div>
              </td>
              <td>
                <div className="role-input">
                  <input type="checkbox" />
                  <p>Delete</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button>Save</button>
      </div>
    </div>
  );
};

export default UserRoles;
