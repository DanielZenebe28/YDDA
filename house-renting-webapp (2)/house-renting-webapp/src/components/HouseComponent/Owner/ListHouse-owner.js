import React, {useEffect, useState} from 'react'
import House_Service from "../../../services/House_Service";
const ListHouseowner = (props) => {
    const [house,sethouses]=useState([]);

    const deleteHouses=(id)=>{
        House_Service.deleteHouses(id).then( res => {
            props.history.push('/owner-house');
        });
    }
    const viewHouses=(id)=>{
        props.history.push(`/view-houses-owner/${id}`);
    }
    const editHouses=(id)=>{
        props.history.push(`/update-houses-owner/${id}`);
    }

    useEffect(()=>{
        House_Service.getHouses().then((res) => {
            sethouses(res.data);
        });
    });

    const addHouses=()=>{
        props.history.push('/add-houses-owner/_add');
    };

    return (
        <div>
            <h2 className="text-center">House List</h2>
            <div className = "row">
                <button className="btn btn-primary"
                        onClick={addHouses}> Add Houses</button>
            </div>
            <br></br>
            <div className = "row">
                <table className = "table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th> House Location</th>
                        <th> House detail</th>
                        <th> House Price</th>
                        <th> House Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        house.map(
                            houses =>
                                <tr key = {houses.id}>
                                    <td> {houses.h_location} </td>
                                    <td> {houses.h_details}</td>
                                    <td> {houses.h_price}</td>
                                    <td> {houses.h_status }{houses.h_status.toString()}</td>
                                    <td>
                                        <button onClick={ () => editHouses(houses.id)}
                                                className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}}
                                                onClick={ () => viewHouses(houses.id)}
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

export default ListHouseowner;
