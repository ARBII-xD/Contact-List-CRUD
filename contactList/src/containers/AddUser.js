import React, { useState , useEffect } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
import '../App.css';
import {toast} from 'react-toastify';
toast.configure()


const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const { name, email, phone, address } = user;
  const history = useHistory();
  





  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const newContact = async (daata) => {
    // toast.error(ddaata);
    const response = await axios.post('http://localhost:5000/user/add', daata);

    if (response.status === 200) {
      toast.success("User added successfully");
      

      
    }else{
      toast.error("User not added");
    }
  };
  


  const handleSubmit = (e) =>{
    
    e.preventDefault();
    if (!name || !email || !phone || !address) {
      toast.error("Please fill all the fields");
    } else {
      newContact(user);
      setTimeout(() => {
        history.push("/");
      }, 200);

    }

  }









  // const handleSubmit = async()=>{

  //   const newUser = await axios.post('http://localhost:3000/add/users', user);
  //   console.log(newUser);
  //   history.push('/');

  // }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        {/* <form onSubmit={e => onSubmit(e)}> */}
        <form action={e=> handleSubmit()} > 
          
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

          {/* <input className="btn btn-primary btn-block buttton" type="submit" value={"Add User" }>
          
          </input> */}


          <button className="btn btn-primary btn-block buttton" onClick={e => handleSubmit(e)}>
            Add User
          
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;