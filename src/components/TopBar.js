import React, { useEffect } from "react";
import { Col, Row, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Search from "../assets/Search.svg";
import Notification from "../assets/Notification.svg";
import Avatar from "../assets/Avatar.svg";

function TopBar({ active }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="top-bar">
      <Row className="align-items-center">
        <Col sm={9}>
          <div className="title">{active}</div>
        </Col>
        <Col>
          <Row className="align-items-center">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <img src={Search} />
              </div>

              <div>
                <img src={Notification} />
              </div>

              <div className="vl" />

              <div className="name">Jones Ferdinand</div>

              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-toggle">
                  <div style={{ cursor: "pointer" }}>
                    <img src={Avatar}></img>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default TopBar;
