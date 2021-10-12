import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/UsersComponent/Login";
import Register from "./components/UsersComponent/Register";
import Profile from "./components/Profile";
import BoardTenant from "./components/BoardTenant";
import BoardOwner from "./components/BoardOwner";
import BoardAdmin from "./components/BoardAdmin";
import { logout } from "./ActionsForService/Service_auth";
import { clearMessage } from "./ActionsForService/message_action";

import { history } from "./UserHistory/history";
import EventBus from "./common/EventBus";
import ListHouse from "./components/HouseComponent/Admin/ListHouse";
import ViewHouse from "./components/HouseComponent/Admin/ViewHouse";
import AddHouse from "./components/HouseComponent/Admin/AddUsers";
import UpdateHouse from "./components/HouseComponent/Admin/UpdateHouse";
import ListUsers from "./components/UsersComponent/ListUsers";
import LisHouseowner from "./components/HouseComponent/Owner/ListHouse-owner";
import AddHouseowner from "./components/HouseComponent/Owner/AddHouse-owner";
import ViewHouseOwner from "./components/HouseComponent/Owner/ViewHouse-owner";
import UpdateHouseowner from "./components/HouseComponent/Owner/UpdateHouse owner";
import ListHouseowner from "./components/HouseComponent/Owner/ListHouse-owner";
import ListHousesTenant from "./components/HouseComponent/Tenant/View_House_For_Tenant";
import RequestRent from "./components/HouseComponent/Tenant/RequestRent";

const App = () => {
    const [showOwnerBoard, setShowOwnerBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowOwnerBoard(currentUser.roles.includes("OWNER_USER"));
            setShowAdminBoard(currentUser.roles.includes("ADMIN_USER"));
        } else {
            setShowOwnerBoard(false);
            setShowAdminBoard(false);
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);

    return (
        <Router history={history}>
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">
                                Home
                            </Link>
                        </li>
                        {showOwnerBoard && (
                            <li className="nav-item">
                                <Link to={"/owner-house"} className="nav-link">
                                    Owner Board
                                </Link>
                            </li>
                        )}

                        {showAdminBoard && (
                            <li className="nav-item">
                                <Link to={"/houses"} className="nav-link">
                                    Manage House
                                </Link>
                            </li>

                        )}
                        {showAdminBoard && (
                            <li className="nav-item">
                                <Link to={"/ListUsers"} className="nav-link">
                                    Manage Users
                                </Link>
                            </li>

                        )}

                        {currentUser && (
                            <li className="nav-item">
                                <Link to={"/tenant-house"} className="nav-link">
                                    Rent House
                                </Link>
                            </li>
                        )}
                    </div>

                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={logOut}>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/register"} className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        </div>
                    )}
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                        <Route path="/tenant" component={BoardTenant} />
                        <Route path="/mod" component={BoardOwner} />
                        <Route path="/admin" component={BoardAdmin} />
                        <Route path = "/houses" component = {ListHouse}/>
                        <Route path = "/add-houses/:id" component = {AddHouse}/>
                        <Route path = "/view-houses/:id" component = {ViewHouse}/>
                        <Route path = "/update-houses/:id" component = {UpdateHouse}/>
                        <Route path="/ListUsers" component ={ListUsers}/>

                        <Route path="/owner-house" component= {ListHouseowner}/>
                        <Route path = "/add-houses-owner/:id" component = {AddHouseowner}/>
                        <Route path = "/view-houses-owner/:id" component = {ViewHouseOwner}/>
                        <Route path = "/update-houses-owner/:id" component = {UpdateHouseowner}/>

                        <Route path="/tenant-house" component= {ListHousesTenant}/>
                        <Route path="/tenant-house-rent" component= {RequestRent}/>

                        <Route path="/ListUsers" component ={ListUsers}/>
                    </Switch>
                </div>

                {/* <AuthVerify logOut={logOut}/> */}
            </div>
        </Router>
    );
};

export default App;
