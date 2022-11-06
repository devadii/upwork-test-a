import React from "react";
import "./useradd.css";

const UserAdd = () => {
  return (
    <div className="useradd">
      <h2>Add User</h2>
      <div className="input">
        <p>First Name</p>
        <input type="text" />
      </div>
      <div className="input">
        <p>Last Name</p>
        <input type="text" />
      </div>
      <div className="input">
        <p>User Role</p>
        <input type="text" />
      </div>
      <div className="input">
        <p>Email</p>
        <input type="text" />
      </div>
      <div className="input">
        <p>ID</p>
        <input type="text" />
      </div>
      <div className="input">
        <p>Password</p>
        <input type="text" />
      </div>
      <div className="input">
        <p>Image</p>
        <input
          type="file"
          placeholder="Choose Image
        "
        />
      </div>
      <button>Save</button>
    </div>
  );
};

export default UserAdd;
