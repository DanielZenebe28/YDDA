import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">

        <br></br>
        <div className = "card col-md-6 offset-md-3">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.username}</strong> Profile
                </h3>
            </header>
            <div className = "card-body">
                <div className = "row">
                    <label> User ID: {currentUser.id}</label>
                    <div> </div>
                </div>
                <div> </div>
                <div className = "row">
                    
                    <div> </div>
                </div>
                <div className = "row">
                    <label>Email:{currentUser.email}</label>
                    <div> </div>
                </div>
                <div> </div>
                <div className = "row">
                    <label>Username: {currentUser.username}</label>
                    <div> </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Profile;
