import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { APIFetcher } from "../services/ApiService";
import More from "../assets/More.svg";
import Sort from "../assets/Sort.svg";
import Filter from "../assets/Filter.svg";

function UsersList() {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(false);

  const getData = (key = "users?page=1") => {
    APIFetcher(key)
      .then((response) => {
        setUsersData(response);
      })
      .catch((error) => {
        setError(error.error);
      });
  };

  const handlePage = (key) => {
    if (key == "prev" && usersData.page == 1) return;
    if (key == "next" && usersData.page == 2) return;
    if (key == "prev") {
      getData("users?page=1");
    } else {
      getData("users?page=2");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="users-list">
      <div className="d-flex align-items-center">
        <div className="users-list-heading">All Users</div>
        <div className="icons-wrapper">
          <div className="icon">
            <img src={Sort} />
          </div>
          &ensp;Sort
          <div className="icon ms-4">
            <img src={Filter} />
          </div>
          &ensp;Filter
        </div>
      </div>

      {usersData && usersData.data && usersData.data.length > 0 ? (
        <>
          <Table hover responsive>
            <thead>
              <tr>
                <th className="cell-padding">User</th>
                <th className="cell-padding">Email</th>
                <th className="cell-padding">Date</th>
                <th className="cell-padding">Priority</th>
                <th className="cell-padding"></th>
              </tr>
            </thead>
            <tbody>
              {usersData &&
                usersData.data &&
                usersData.data.length &&
                usersData.data.map((item) => (
                  <tr>
                    <td className="cell-padding">
                      <div className="d-flex align-items-center">
                        <div className="avatar">
                          <img src={item.avatar} />
                        </div>
                        <div className="text-wrapper">
                          <div className="text">
                            {item.first_name + " " + item.last_name}
                          </div>
                          <div className="updated">Updated 1 day ago</div>
                        </div>
                      </div>
                    </td>
                    <td className="cell-padding">
                      {" "}
                      <div className="text">{item.email}</div>
                    </td>
                    <td className="cell-padding">
                      <div className="">
                        <div className="text">May 26, 2019</div>
                        <div className="updated">6:10 PM</div>
                      </div>
                    </td>
                    <td className="cell-padding">
                      <div className="tag">HIGH</div>
                    </td>
                    <td className="cell-padding">
                      <div>
                        <img src={More} />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <div className="info">
            <div>Rows per page: {usersData.per_page}</div>
            <div className="ps-4">
              {usersData.page == 1 ? "1 - 6 " : "7 - 12"} of 12
            </div>
            <div className="d-flex ps-4 buttons">
              <div onClick={() => handlePage("prev")}>{"<"}</div>
              &emsp;
              <div onClick={() => handlePage("next")}>{">"}</div>
            </div>
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>Loading...</div>
      )}
    </div>
  );
}

export default UsersList;
