import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
import '../App.css';
import { toast } from 'react-toastify';
toast.configure()

const EditUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  // ___________________________________________________________________________________
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id)
    }
  }, [id]);


  const getSingleUser = async (id) => {
    // console.log(id)
    const response = await axios.get(`http://localhost:5000/specific/${id}`);

    if (response.status === 200) {
      // console.log(response.data)
      setUser({ ...response.data.specificUser });
    }
  }
  // _____________________________________________________________________________________


  const handleSubmit = (e) => {

    e.preventDefault();
    if (!name || !email || !phone || !address) {
      toast.error("Please fill all the fields");
    } else {
      updateUser(user , id);
      setTimeout(() => {
        history.push("/");
      }, 200);

    }

  }
  const updateUser = async (user, id) => {
    // console.log(user)
    const response = await axios.put(`http://localhost:5000/user/update/${id}`, user);
    if (response.status === 200){
      toast.success("User updated successfully");
      setTimeout(() => {
        history.push("/");
      }, 200);
    }
  }

  const { name, email, phone, address } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };




  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update A User</h2>
        {/* <form onSubmit={e => onSubmit(e)}> */}
        <form >

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>

          {/* <input className="btn btn-warning btn-block buttton" type="submit" value={"Update User" }>
        
        </input> */}


          <button className="btn btn-warning btn-block buttton" onClick={e => handleSubmit(e)}>
            Update User

          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;