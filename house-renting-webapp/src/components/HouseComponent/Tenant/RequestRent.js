import React, { useEffect, useState} from 'react'
import Rent_service from "../../../services/Rent_service";
const RequestPayment = (props) =>  {

    const [id] =useState(props.match.params.id);
    const [t_username,setUserName]=useState("");
    const [p_status,setPaymentStatus]=useState("");
    const [duration,setDuration]=useState("");
    const [dateofpayment,setDateOfPayment]=useState("");
    const [transactioncode,setTransactionCode]=useState("");
    const [tenant_account,setTenantAccount]=useState("");

    const saveOrUpdateHouses = (e) => {
        e.preventDefault();
        let payment = {
            t_username,
            p_status,
            duration,
            dateofpayment,
            transactioncode,
            tenant_account
        };
        console.log('payment => ' + JSON.stringify(payment));

        if (id === '_add') {
            Rent_service.requestPayment(payment).then(res => {
                props.history.push('/tenant-house');
            });
        }
    }

    const changeUserName = (event) => {
        const t_username = event.target.value;
        setUserName(t_username);
    }

    const changePaymentstatus = (event) => {
        const p_status = event.target.value;
        setPaymentStatus(p_status);
    }

    const changeDuration = (event) => {
        const duration = event.target.value;
        setDuration(duration);
    }
    const changeDatePayment = (event) => {
        const dateofpayment = event.target.value;
        setDateOfPayment(dateofpayment);
    }
    const changeTransactioncode = (event) => {
        const transactioncode = event.target.value;
        setTransactionCode(transactioncode);
    }
    const changeTenantAccount = (event) => {
        const tenant_account = event.target.value;
        setTenantAccount(tenant_account);
    }
    const cancel = () => {
        props.history.push('/tenant-house');
    }

    const getTitle = () => {
        if (id === '_add') {
            return <h3 className="text-center">Add Houses</h3>
        } else {
            return <h3 className="text-center">Request Payment Form</h3>
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
                                    <label> User Name: </label>
                                    <input placeholder="User Name"
                                           name="t_username"
                                           className="form-control"
                                           value={t_username}
                                           onChange={changeUserName}/>
                                </div>
                                <div className="form-group">
                                    <label> Payment Status: </label>
                                    <input placeholder=" Payment Status"
                                           name="p_status"
                                           className="form-control"
                                           value={p_status}
                                           onChange={changePaymentstatus}/>
                                </div>
                                <div className="form-group">
                                    <label> Duration For: </label>
                                    <input placeholder="Duration"
                                           name="duration"
                                           className="form-control"
                                           value={duration}
                                           onChange={changeDuration}/>
                                </div>
                                <div className="form-group">
                                    <label> Payment Date: </label>
                                    <input placeholder="Payment Date"
                                           type="date"
                                           name="dateofpayment"
                                           className="form-control"
                                           value={dateofpayment}
                                           onChange={changeDatePayment}/>
                                </div>
                                <div className="form-group">
                                    <label> Tenant Account: </label>
                                    <input placeholder="Account Number"
                                           type="text"
                                           name="tenant_account"
                                           className="form-control"
                                           value={tenant_account}
                                           onChange={changeTenantAccount}/>
                                </div>
                                <div className="form-group">
                                    <label> Transaction Code: </label>
                                    <input placeholder="Bank Transaction Code"
                                           type="text"
                                           name="transactioncode"
                                           className="form-control"
                                           value={transactioncode}
                                           onChange={changeTransactioncode}/>
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

export default RequestPayment;
