import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Users from "../assets/users.svg";
import Overview from "../assets/overview.svg";

function SideBar({ active, handleActive }) {
  const menu = [
    { icon: Overview, title: "Overview" },
    { icon: Users, title: "Users" },
  ];

  const handleMenu = (title) => {
    handleActive(title);
  };
  return (
    <div>
      {/* header */}
      <div className="heading">
        <div className="logo-image">
          <img src={Logo} />
        </div>
        <div className="p-2">Dashboard Kit</div>
      </div>
      {/* menu */}
      <div>
        {menu.map((item) => (
          <div
            className={"menu " + (item.title == active ? "active" : "")}
            onClick={() => handleMenu(item.title)}
          >
            <div>
              <img src={item.icon} />
            </div>
            <div className={"menu-title"}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
