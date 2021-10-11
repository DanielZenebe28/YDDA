import React, {Component, useEffect, useState} from 'react'
import House_Service from "../../../services/House_Service";

const AddHouse = (props) =>  {

    const [id] =useState(props.match.params.id);
    const [h_location,setHouseLocation]=useState("");
    const [h_details,setHouseDetails]=useState("");
    const [h_price,setHousePrise]=useState("");
    const [h_status,setHouseStatus]=useState(true);
    const [house,setHouse]=useState({})
    // step 3
    useEffect(()=> {
        {

            if (id === '_add') {
            } else {
                House_Service.getHousesById(id).then((res) => {
                    let house = res.data;
                    setHouseLocation(house.h_location);
                    setHouseDetails(house.h_details);
                    setHousePrise(house.h_price);
                    setHouseStatus(house.h_status);
                });
            }
        }
    });
        const saveOrUpdateHouses = (e) => {
            e.preventDefault();
            let house = {
                h_location,
                h_details,
                h_price,
                h_status
            };
            console.log('house => ' + JSON.stringify(house));

            // step 5
            if (id === '_add') {
                House_Service.createHouses(house).then(res => {
                    props.history.push('/houses');
                });
            } else {
                House_Service.updateHouses(house, id).then(res => {
                    props.history.push('/houses');
                });
            }
        }

        const changeHouseLocation = (event) => {
            const h_location = event.target.value;
            setHouseLocation(h_location);
        }

        const changeHouseDetails = (event) => {
            const h_details = event.target.value;
            setHouseDetails(h_details);
        }

        const changeHousePrice = (event) => {
            const h_price = event.target.value;
            setHousePrise(h_price);
        }
    const changeHouseStatus = (event) => {
        const h_status = event.target.value;
        setHouseStatus(h_status);
    }

        const cancel = () => {
            props.history.push('/houses');
        }

        const getTitle = () => {
            if (id === '_add') {
                return <h3 className="text-center">Add Houses</h3>
            } else {
                return <h3 className="text-center">Update Houses</h3>
            }
        }
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> House Location: </label>
                                        <input placeholder="House Location"
                                               name="firstName"
                                               className="form-control"
                                               value={h_location}
                                               onChange={changeHouseLocation}/>
                                    </div>
                                    <div className="form-group">
                                        <label> House Detail: </label>
                                        <input placeholder=" House Dashboard"
                                               name="lastName"
                                               className="form-control"
                                               value={h_details}
                                               onChange={changeHouseDetails}/>
                                    </div>
                                    <div className="form-group">
                                        <label> House Price: </label>
                                        <input placeholder="House Price"
                                               name="emailId"
                                               className="form-control"
                                               value={h_price}
                                               onChange={changeHousePrice}/>
                                    </div>
                                    <div className="form-group">
                                        <label> House Status: </label>
                                        <input placeholder="House Price"
                                               name="emailId"
                                               className="form-control"
                                               value={h_status}
                                               onChange={changeHouseStatus}/>
                                    </div>
                                    <button className="btn btn-success"
                                            onClick={saveOrUpdateHouses}>Save
                                    </button>
                                    <button className="btn btn-danger"
                                            onClick={cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
}

export default AddHouse;
