import './Form.css';
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './Trans.css';


function Form(props) {
    let fName = useRef();
    let lName = useRef();
    let eMail = useRef();
    let salary = useRef();
    let date = useRef();


    function submitHandler(e) {
        e.preventDefault();
        let userAdd = {
            fname: fName.current.value,
            lname: lName.current.value,
            email: eMail.current.value,
            Salary: salary.current.value,
            Date: date.current.value,
        }

        ////////Post Request////////
        //https://react-http-practise-664f7-default-rtdb.firebaseio.com/

        if (!props.edit) {
            axios.post('https://mohsin-d510e-default-rtdb.firebaseio.com/users.json', userAdd).then((res) => {
                props.getUsers();
            })
        }

        ////////Put Request////////
        
        else {
            axios.put('https://mohsin-d510e-default-rtdb.firebaseio.com/users/'+props.datUse.id+'.json',userAdd)
            .then((res)=>{
                props.getUsers();
            })
            .catch((err)=>{
                props.setErrorMsg(err.message);
            })
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="text-center">
                    <div className="row">
                        <div className="col my-2">
                            <input type="text" className='rounded border border-2 border-danger' placeholder='First Name' ref={fName} defaultValue={props.edit ? props.datUse.fname : ''} />
                        </div>
                        <div className="col my-2">
                            <input type="text" className='rounded border border-2 border-danger' placeholder='Last Name' ref={lName}
                                defaultValue={props.edit ? props.datUse.lname : ''} />
                        </div>
                    </div>
                    <div className="mb-2 px-2" style={{ 'margin': 'auto 4px' }}>
                        <input type="email" className="form-control border border-2 border-danger" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-m@il' ref={eMail} defaultValue={props.edit ? props.datUse.email : ''} />
                    </div>
                    <div className='row text-center '>
                        <div className='col  mb-2'>
                            <input type="number" className='rounded border border-2 border-danger' placeholder='Salary' ref={salary}
                                defaultValue={props.edit ? props.datUse.salary : ''} />
                        </div>
                        <div className='col'>
                            <input type="date" style={{ 'padding': '5px 30px' }} className='rounded border border-2 border-danger' placeholder='Date' ref={date} defaultValue={props.edit ? props.datUse.Date : ''} />
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 my-3 " style={{ 'margin': 'auto 12px' }}>
                    <Button variant="danger" className='text-dark trans' size="md" type='submit' onClick={props.handleClose}>
                        <strong> {props.edit ? 'Edit User' : 'Create User'} </strong>
                    </Button>
                </div>
            </form>
        </>
    );
}

export default Form;