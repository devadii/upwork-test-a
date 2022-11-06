import React from "react";

const UserList = () => {
  return (
    <div className="createdr">
      <h1>Create DR List QR</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>Admin</td>
              <td>
                <div>
                  <p>edit</p>
                  <p style={{ color: "red" }}>delete</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>Admin</td>
              <td>
                <div>
                  <p>edit</p>
                  <p style={{ color: "red" }}>delete</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>Admin</td>
              <td>
                <div>
                  <p>edit</p>
                  <p style={{ color: "red" }}>delete</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>Admin</td>
              <td>
                <div>
                  <p>edit</p>
                  <p style={{ color: "red" }}>delete</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>Admin</td>
              <td>
                <div>
                  <p>edit</p>
                  <p style={{ color: "red" }}>delete</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
