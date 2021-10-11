import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Project Title: House Renting System</h3>
      </header>
      <h4>Group Members</h4>
      <li>Abraraw Zerfu</li>
      <li>Danait Girma</li>
      <li>Daniel Zenebe</li>
      <li>Yohannes Reda</li>
    </div>
  );
};

export default Home;
