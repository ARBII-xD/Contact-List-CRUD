import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../App.css';

const ViewUser = () => {
  const [user, setUser] = useState({
    
    username: "",
    email: "",
    phone: "",
    address: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser(id);
  }, [id]);
  const loadUser = async () => {
    const response = await axios.get(`http://localhost:5000/specific/${id}`);
    setUser(response.data.specificUser);
    console.log(response.data.specificUser);
  };
  return (
    <div className="container view py-4">
      <h3 className="display-4">User ID: {id}</h3>
      <hr />
      <ul className="list-group view w-45 insideTable">
        <li className="list-group-item insideTable" >Username: {user.name}</li>
        <li className="list-group-item insideTable">Email: {user.email}</li>
        <li className="list-group-item insideTable">Phone: {user.phone}</li>
        <li className="list-group-item insideTable">Address: {user.address}</li>
        <br/>
        <Link className="btn btn-primary insideTable" to="/">
        back to Home
      </Link>
      </ul>
    </div>
  );
};

export default ViewUser;