import React from "react";
import Publish from "./Publish";
import MemberDashboard from "./MemberDashboard";

export default function MemberLayout() {
  return (
    <div>
      <Publish />
      <MemberDashboard />
    </div>
  );
}
