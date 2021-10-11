import React, {useEffect, useState} from "react";
import '../../services/ManageUserService';
import ManageUserService from "../../services/ManageUserService";


const ListUsers = (props) => {

    const [user,setUsers]=useState([]);

    const deleteUsers=(id)=>{
        ManageUserService.deleteusers(id).then( res => {
            props.history.push('/ListUsers');
        });
    }
    
    const viewUser=(id)=>{
        props.history.push('/view-users/${id}');
    };
    const editUser=(id)=>{
        props.history.push("/add-users/${id}");
    };
    useEffect(()=>{
        ManageUserService.getUsers().then((res) => {
            setUsers(res.data);
        });
    });
    const addUsers=()=>{
        props.history.push('/add-users/_add/-1');
    };
    return (
        <div>
            <h2 className="text-center">Users List</h2>

            <div className = "row">
                <table className = "table table-striped table-bordered">

                    <thead>
                    <tr>
                        <th> First Name</th>
                        <th> Middle Name</th>
                        <th> Last Name</th>
                        <th> User Name</th>
                        <th> Email</th>
                        <th> Date of Birth</th>
                        <th> Phone number</th>
                        <th> Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        user.map(
                            users =>
                                <tr key = {users.id}>
                                    <td> { users.firstname} </td>
                                    <td> {users.middlename}</td>
                                    <td> {users.lastname}</td>
                                    <td> {users.username}</td>
                                    <td> {users.email}</td>
                                    <td> {users.dateofbirth}</td>
                                    <td> {users.phonenumber}</td>
                                    <td>
                                        <button onClick={ () => editUser(users.id)}
                                                className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}}
                                                onClick={ () => deleteUsers(users.id)}
                                                className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}}
                                                onClick={ () => viewUser(users.id)}
                                                className="btn btn-info">View </button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>

        </div>
    );
}
export default ListUsers;