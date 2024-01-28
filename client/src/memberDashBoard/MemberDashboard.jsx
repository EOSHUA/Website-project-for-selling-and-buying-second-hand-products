import React from "react";
import UserItems from "../userItems/UserItems";
import Publish from "../publish/Publish";
import Details from "../details/Details";
export default function MemberDashboard() {
  return (
    <div>
      <Publish />
      <UserItems />
      <Details />
    </div>
  );
}
