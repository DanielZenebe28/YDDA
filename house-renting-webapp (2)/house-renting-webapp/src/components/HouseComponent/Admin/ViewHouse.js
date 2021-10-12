import React, {useEffect, useState} from 'react'
import House_Service from "../../../services/House_Service";

const ViewHouse =(props)=> {

           const[id]=useState(props.match.params.id);
            const[house,setHouse]=useState({})

    useEffect(()=>{
        House_Service.getHousesById(id).then((res) => {
            setHouse(res.data);
        });
    });

        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View House Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> House Location: {house.h_location } </label>
                            <div> </div>
                        </div>
                        <div className = "row">
                            <label> House Details: { house.h_details}</label>
                            <div> </div>
                        </div>
                        <div className = "row">
                            <label> House Price: { house.h_price }</label>
                            <div> </div>
                        </div>
                        <div className = "row">
                            <label> House status: {(house.h_status)}</label>
                            <div> </div>
                        </div>
                    </div>

                </div>
            </div>
        );
}

export default ViewHouse;
