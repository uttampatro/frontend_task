import React, { useEffect, useState } from "react";
import { fetchAllUser } from "../../services";
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

  console.log(users);

  return (
    <div className="container">
      <div className="box">
        <h3 className="header">Select an account</h3>
        <div className="boxBody">
          {users.map((user) => {
            return (
              <div className="body">
                <img className="image" src={user.profilepicture} />
                <p>{user.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
