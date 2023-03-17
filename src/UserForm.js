import Modal from 'react-bootstrap/Modal';
import Form from './Form';
import './Trans.css';


function UserForm(props) {

  return (
    <>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form handleClose={props.handleClose} users={props.users} datUse={props.datuse} setErrorMsg={props.setErrorMsg} getUsers={props.getUsers} edit={props.edit}></Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserForm;










