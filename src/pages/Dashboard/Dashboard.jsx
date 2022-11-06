import React from "react";
import "./dashboard.css";
import { Link, Outlet } from "react-router-dom";
import { BadgeAvatars } from "../../tools/Avatar";

const Dashboard = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <Link to="/">
          <img src="./main.png" alt="" />
        </Link>
        {/* QA */}
        <div className="list">
          <h2>QA</h2>
          <Link to="write-tags">
            <p>Write Tags</p>
          </Link>
        </div>
        {/* Warehouse */}
        <div className="list">
          <h2>Warehouse</h2>
          <Link to="create-dr">
            <p>Create DR</p>
          </Link>
          <Link to="create-truck">
            <p>Create Truck</p>
          </Link>
          <Link to="for-dispatch">
            <p>Create Dispatch</p>
          </Link>
        </div>
        {/* Gate */}
        <div className="list">
          <h2>Gate</h2>
          <Link to="scans">
            <p>Scans</p>
          </Link>
          <Link to="missing">
            <p>Missing</p>
          </Link>
          <Link to="mismatch">
            <p>Mismatch</p>
          </Link>
          <Link to="/">
            <p>Complete</p>
          </Link>
        </div>
        {/* Setting */}
        <div className="list">
          <h2>Setting</h2>
          <Link to="user-roles">
            <p>User Role</p>
          </Link>
          <Link to="user-add">
            <p>User Add</p>
          </Link>
          <Link to="user-list">
            <p>User List</p>
          </Link>
        </div>
        <div className="list">
          <h2>LogOut</h2>
        </div>
      </div>
      <div className="body">
        <div className="upper">
          <div>
            <p>Welcome</p>
          </div>
          <div>
            <p>QA</p>
            <BadgeAvatars />
          </div>
        </div>
        <div className="lower">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
