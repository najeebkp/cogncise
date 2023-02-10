import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import UserLayout from "./UserLayout";
import UsersList from "./UsersList";

export default function MainView() {
  const [active, setActive] = useState("Overview");
  const handleActive = (title) => {
    setActive(title);
  };
  return (
    <UserLayout active={active} handleActive={handleActive}>
      {active == "Users" ? <UsersList /> : <Dashboard />}
    </UserLayout>
  );
}
