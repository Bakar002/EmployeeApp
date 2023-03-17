import Table from 'react-bootstrap/Table';

function usersDetails(props) {


    function editHandler(event,userData) {
        props.editUsers(userData)
        // console.log(userData);   
    }
    function deleteHandler(event,data) {
        props.deletUser(data);
        // console.log(data);
    }

    return (
        <div className='container my-3'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-Mail</th>
                        <th>Salary</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((data,index) => {
                        return (
                            <tr key={Math.random()}>
                                <td>{index + 1}</td>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.email}</td>
                                <td>{data.Salary}</td>
                                <td>{data.Date}</td>
                                <td className='text-center d-flex justify-content-around'>
                                    <button className='btn btn-light border text-dark' onClick={(event)=>{ editHandler(event,data) }}><strong>Edit</strong></button>
                                    <button className='btn btn-light border text-dark' onClick={(event)=>{ deleteHandler(event,data) }}><strong>Delete</strong></button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default usersDetails;