import React from "react";
import './memberDashBoard.css'
import UserItems from "../userItems/UserItems";
import Publish from "../publish/Publish";
import Details from "../details/Details";
export default function MemberDashboard() {
  return (
    <>
        <div className="member-dashboard">
          <h1>memberDeshBord</h1>
          <Publish />
          <UserItems />
          <Details />
        </div>
    </>
  );
}
