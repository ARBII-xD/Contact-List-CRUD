import React , {useState , useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import '../App.css'
import {Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify'



const Home = () => {

  const deleteContact= async(id)=>{
    if (
      window.confirm("Are you sure you want to delete that contact ?")
      )
    {
      const response = await axios.delete(`http://localhost:5000/user/delete/${id}`);
      if (response.status === 200){
        toast.success("Contact deleted successfully");
        setTimeout(() => {
          window.location.reload();
        }, 200);
    }
    else{
      toast.error("Contact not deleted");
    }
  }
}


  const [allUsers, setAllUsers] = useState([]);

  useEffect(()=>{
    fetchUsers();
  }, []);


  const fetchUsers = async (req, res) => {
    const result = await axios.get('http://localhost:5000/user/view');
    if (result.status === 200) {
      setAllUsers(result.data.allUsers.reverse());
      console.log(result.data.allUsers);
    }}






  return (
    <>
    <div className="tablee">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
              <Link className="btn btn-primary mr-2" to={`/users/view/${user._id}`}>View</Link>
                <Link className="btn btn-outline-secondary mr-2" to={`/users/edit/${user._id}`}>Edit</Link>
                <Link className="btn btn-danger" onClick={()=> deleteContact(user._id)}>Delete</Link>
              </td>
            </tr>
          ))}

         
        </tbody>
 
      </Table>
      </div>

    </>
  )
}

export default Home