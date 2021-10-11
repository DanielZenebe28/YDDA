import React, {useEffect, useState} from "react";
import '../../../services/House_Service';
import House_Service from "../../../services/House_Service";


const ListHousesTenant = (props) => {
    const [house,setHouses]=useState([]);

    const viewHouse=(id)=>{
        props.history.push(`/tenant-house-rent`);
    };

    useEffect(()=>{
        House_Service.getHouses().then((res) => {
            setHouses(res.data);
        });
    });
    const addRequest=()=>{
        props.history.push('/add-employee/_add/-1');
    };
    return (
        <div>
            <h2 className="text-center">User List</h2>
            <br></br>
            <div className = "row">
                <table className = "table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th> House Location</th>
                        <th> House Detail</th>
                        <th> House Price</th>
                        <th> House Status</th>
                        <th> Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        house.map(
                            houses =>
                                <tr key = {houses.id}>
                                    <td> {houses.h_details}</td>
                                    <td> {houses.h_location} </td>
                                    <td> {houses.h_price}</td>
                                    <td> {houses.h_status}</td>
                                    <td>

                                        <button style={{marginLeft: "10px"}}
                                                onClick={ () => viewHouse(houses.id)}
                                                className="btn btn-info">Rent House </button>
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
export default ListHousesTenant;