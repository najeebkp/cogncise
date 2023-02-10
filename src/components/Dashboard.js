import React from "react";
import { Stack, Col } from "react-bootstrap";

function Dashboard() {
  const data = [
    {
      title: "Unresolved",
      number: 60,
    },
    {
      title: "Overdue",
      number: 16,
    },
    {
      title: "Open",
      number: 43,
    },
    {
      title: "Onhold",
      number: 64,
    },
  ];
  return (
    <div className="dashboard">
      <Stack direction={"horizontal"} gap={3}>
        {data.map((item) => (
          <Col
            className={
              "dashboard-card " + (item.title == "Overdue" ? "active" : "")
            }
          >
            <div>
              <div
                className={
                  "card-title " + (item.title == "Overdue" ? "active" : "")
                }
              >
                {item.title}
              </div>
              <div
                className={
                  "card-number " + (item.title == "Overdue" ? "active" : "")
                }
              >
                {item.number}
              </div>
            </div>
          </Col>
        ))}
      </Stack>
    </div>
  );
}

export default Dashboard;
