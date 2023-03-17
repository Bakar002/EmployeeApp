import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import Button from 'react-bootstrap/Button';
import UserForm from "./UserForm";
import './Trans.css';
import axios from 'axios';
import UsersDetails from './UsersDetails';
import Loading from './Loading';

function App() {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoadng] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [edit, setEdit] = useState(false);
  const [datuse, setDatUse] = useState(null);

  const handleClose = () => { setShow(false) };
  const handleShow = () => {
    setShow(true);
    setEdit(false)
  };

  useEffect(() => {
    getUsers();
  }, [])

  function editUsers(userData) {
    setDatUse(userData);
    setEdit(true);
    setShow(true);
    // console.log(userData);
  }
  function deletUser(data) {
    let del = window.confirm(`Do you really want to delete it ?`);
    // console.log(data.id);
    if (del) {
      axios.delete('https://mohsin-d510e-default-rtdb.firebaseio.com/users/'+data.id+'.json')
      .then((res)=>{
        // console.log(res);
        getUsers();
      })
      .catch((err)=>{
        setErrorMsg(err.message);
      })
    }
  }

  function getUsers() {
    setLoadng(true);
    setErrorMsg(null);
    axios.get('https://mohsin-d510e-default-rtdb.firebaseio.com/users.json')
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        let nowUser = [];
        for (let key in data) {

          nowUser.push({ ...data[key],id : key });

        }
        setUsers(nowUser)
        setLoadng(false);
        setShow(false);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setLoadng(false)
      })
  }

  return (
    <>
      <Nav>
        <div>
          <Button variant="primary" className='trans me-3  text-light' onClick={handleShow}>
            <strong> Add User </strong>
          </Button>
          <Button variant="light" className='trans border text-secondary'  >
            <strong> Logout </strong>
          </Button>
        </div>
      </Nav>
      <UserForm handleClose={handleClose} datuse={datuse} users={users} setErrorMsg={setErrorMsg} show={show} getUsers={getUsers} edit={edit}></UserForm>
      {!loading && !errorMsg && <UsersDetails deletUser={deletUser} users={users} editUsers={editUsers}></UsersDetails>}
      {errorMsg && <h3><pre className='text-center my-5'>{errorMsg}...</pre></h3>}
      {loading && <Loading></Loading>}
    </>
  );
}

export default App;
