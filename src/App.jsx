import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import MainDash from "./components/MainDash/MainDash";
import WriteTags from "./components/WriteTags/WriteTags";
import CreateDR from "./components/CreateDR/CreateDR";
import CreateTruck from "./components/CreateTruck/CreateTruck";
import ForDispatch from "./components/ForDispatch/ForDispatch";
import Scans from "./components/Scans/Scans";
import Missing from "./components/Missing/Missing";
import Mismatch from "./components/Mismatch/Mismatch";
import UserRoles from "./components/UserRoles/UserRoles";
import UserAdd from "./components/UserAdd/UserAdd";
import UserList from "./components/UserList/UserList";

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<MainDash />} />
            <Route path="write-tags" element={<WriteTags />} />
            <Route path="create-dr" element={<CreateDR />} />
            <Route path="create-truck" element={<CreateTruck />} />
            <Route path="for-dispatch" element={<ForDispatch />} />
            <Route path="scans" element={<Scans />} />
            <Route path="missing" element={<Missing />} />
            <Route path="mismatch" element={<Mismatch />} />
            <Route path="user-roles" element={<UserRoles />} />
            <Route path="user-add" element={<UserAdd />} />
            <Route path="user-list" element={<UserList />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};
