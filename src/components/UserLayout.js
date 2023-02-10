import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Row, Col, Container } from "react-bootstrap";

function UserLayout({ active, handleActive, children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <Container
      fluid
      className=""
      style={{ background: "#F7F8FC", minHeight: "100vh" }}
    >
      <Row>
        <Col className="side-bar" md={2}>
          <SideBar active={active} handleActive={handleActive} />
        </Col>
        <Col>
          <TopBar active={active} />
          <div className="main-children">{children}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default UserLayout;
