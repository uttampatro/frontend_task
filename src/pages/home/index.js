import React, { useEffect, useState } from "react";
import { fetchAllUser } from "../../services";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  const [users, setUsers] = useState([]);

  const getAllUser = async () => {
    try {
      const data = await fetchAllUser();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div className="container">
      <div className="box">
        <h3 className="header">Select an account</h3>
        <div className="boxBody">
          {users.map((user) => {
            return (
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to={`/profileDetails/${user?.id}`}
              >
                <div className="body">
                  <img className="image" src={user.profilepicture} />
                  <p>{user.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
