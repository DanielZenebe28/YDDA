import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { login } from "../../ActionsForService/Service_auth";
import {Container, CssBaseline, Grid, makeStyles, Paper} from "@material-ui/core";
import Background from "../../Images/Background.png";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh'
  },
  container: {
    opacity: '0.8',
    height: '60%',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      width: '100%',
      height: '100%'
    }
  },
  div: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  button: {
    width:'20%',
    position:"absolute",
    margin: theme.spacing(5, 20, 0)

  },
}))
const required = (value) => {
  if (!value) {
    return (
      <div  role="alert">
        <p style={{color:'red'}}>This field is required!</p>
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
      <div >
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div>
            <label htmlFor="username">Username</label>
            <Input
                className="form-control"
              type="text"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div >
            <div className={classes.button}>
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"/>
              )}
              <span>Login</span>
            </button>
            </div>
          </div>

          {message && (
            <div >
              <div  role="alert">
                <p style={{color:'red'}}>{message}</p>
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
        </Container>
        </Grid>
    </div>
  );
};

export default Login;
