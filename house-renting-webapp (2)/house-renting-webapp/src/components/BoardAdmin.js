import React, { useState, useEffect } from "react";
import './HouseComponent/Admin/House.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import ListHouse from "./HouseComponent/Admin/ListHouse";
import AddHouse from "./HouseComponent/Admin/AddUsers";
import ViewHouse from "./HouseComponent/Admin/ViewHouse";
const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Manage Here</h3>
      </header>
      <div>

      </div>
    </div>
  );
};

export default BoardAdmin;
