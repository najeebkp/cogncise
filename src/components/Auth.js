import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { APIPusher } from "../services/ApiService";
import { Col, Row, Container, Form, Button, Alert } from "react-bootstrap";
import Logo from "../assets/logo.svg";

function Auth() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [view, setView] = useState("login");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  const handleChange = (type, value) => {
    if (type == "email") {
      setUserData((prev) => {
        return { ...prev, email: value };
      });
    } else if (type == "password") {
      setUserData((prev) => {
        return { ...prev, password: value };
      });
    } else {
      setConfirmPassword(value);
    }
  };

  const handleAuth = () => {
    if (view == "register" && userData.password != confirmPassword) {
      setError("Password doesn't match");
      return;
    }
    setError(false);
    APIPusher(view, userData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(error.error);
      });
  };
  const handleChangeView = (type) => {
    setView(type);
    setConfirmPassword("");
    setUserData({ email: "", password: "" });
    setError(false);
  };
  return (
    <div className="wrapper">
      <Container className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col className="card">
            <div className="pb-2">
              <img src={Logo} />
            </div>
            <div className="text-logo pb-4">Dashboard Kit</div>
            <div className="text-heading pb-2">Log In to Dashboard Kit</div>
            <div className="text-description pb-4">
              Enter your email and password below
            </div>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                value={userData.email}
                type="email"
                placeholder="Email address"
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <br></br>
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                value={userData.password}
                type="password"
                placeholder="Password"
                onChange={(e) => handleChange("password", e.target.value)}
              />
              {view == "login" ? (
                <>
                  <div className="pt-4">
                    <Button className="login-button" onClick={handleAuth}>
                      Log In
                    </Button>
                  </div>
                  <div className="pt-4 d-flex justify-content-center">
                    <div className="signup-label">Don't have an account?</div>
                    <div
                      className="signup-button"
                      onClick={() => handleChangeView("register")}
                    >
                      &ensp;Sign up
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <br></br>
                  <Form.Label>CONFIRM PASSWORD</Form.Label>
                  <Form.Control
                    value={confirmPassword}
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => handleChange("password2", e.target.value)}
                  />
                  <div className="pt-4">
                    <Button className="login-button" onClick={handleAuth}>
                      Register
                    </Button>
                  </div>
                  <div className="pt-4 d-flex justify-content-center">
                    <div className="signup-label">Already have an account?</div>
                    <div
                      className="signup-button"
                      onClick={() => handleChangeView("login")}
                    >
                      &ensp;Log In
                    </div>
                  </div>
                </>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Auth;
