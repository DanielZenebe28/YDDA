import React, {useEffect, useState} from 'react'

import House_Service from "../../../services/House_Service";

const UpdateHouse =(props)=> {
    const [id]= useState(props.match.params.id);
    const [h_location,setHouseLocation]=useState("");
    const [h_details,setHouseDetails]=useState("");
    const [h_price,setHousePrise]=useState("");
    const [h_status,setHouseStatus]=useState(true);
    useEffect(()=>{
        House_Service.getHousesById(id).then( (res) =>{
            let house = res.data;
            setHouseLocation(h_location);
            setHouseDetails(h_details);
            setHousePrise(h_price);
            setHouseStatus(h_status);
        });
    });

    const updateHouses = (e) => {
        e.preventDefault();
        let house = {h_location, h_details, h_price, h_status};
        setHouseLocation(h_location);
        console.log('house => ' + JSON.stringify(house));
        console.log('id => ' + JSON.stringify(id));
        House_Service.updateHouses(house, id).then(res => {
            props.history.push('/houses');
        });
    }
    
   const changeHouseLocation= (event) => {
       const h_location = event.target.value;
       setHouseLocation(h_location);
    }

    const changeHouseDetails= (event) => {
        const h_details = event.target.value;
        setHouseDetails(h_details);
    }

   const changeHousePrice= (event) => {
       const h_price = event.target.value;
       setHousePrise(h_price);
    }
    const changeHousestatus= (event) => {
        const h_status = event.target.value;
        setHouseStatus(h_status);
    }
   const cancel=()=>{
        props.history.push('/houses');
    }

        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update House</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> House Location: </label>
                                            <input placeholder="House Location"
                                                   name="h_location"
                                                   className="form-control"
                                                   value={h_location}
                                                   onChange={changeHouseLocation}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> House Details: </label>
                                            <input placeholder="House board"
                                                   name="h_details"
                                                   className="form-control"
                                                value={h_details}
                                                   onChange={changeHouseDetails}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> House Price: </label>
                                            <input placeholder="Email Address"
                                                   name="h_price"
                                                   className="form-control"
                                                value={h_price}
                                                   onChange={changeHousePrice}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> House Status: </label>
                                            <input placeholder="Email Address"
                                                   name="h_status"
                                                   className="form-control"
                                                   value={h_status}
                                                   onChange={changeHousestatus}/>
                                        </div>
                                        <button className="btn btn-success"
                                                onClick={updateHouses}>Save</button>
                                        <button className="btn btn-danger"
                                                onClick={cancel.bind(this)}
                                                style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
}

export default UpdateHouse;
