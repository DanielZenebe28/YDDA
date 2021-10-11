import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { register } from "../../ActionsForService/Service_auth";
import {Container, CssBaseline, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import Background from "../../Images/Background.png";
import {red} from "@mui/material/colors";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:0,
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '91vh'
  },
  container: {
    marginTop:'2%',
    opacity: '0.9',
    height: '95%',
    minWidth:'60%',
  },
  form: {
    marginTop: theme.spacing(1)
  },
  button: {
    width:'20%',
    position:"absolute",
    margin: theme.spacing(55, 45, 0)

  },

}))
// eslint-disable-next-line react-hooks/rules-of-hooks

const required = (value) => {
  if (!value) {
    return (
      <div>
        <p style={{color:'red'}}>This field is required!</p>
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div>
        <p style={{color:'red'}}>This is not a valid email.</p>
      </div>
    );
  }
};
const vfirstname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
        <div>
          <p  style={{color:'red'}}>The First Name must be between
            <br></br>
            3 and 20 characters.</p>
        </div>
    );
  }
};
const vmiddlename = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
        <div>
          <p  style={{color:'red'}}>The Middle Name must be between
            <br></br>
            3 and 20 characters.</p>
        </div>
    );
  }
};
const vlastname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
        <div>
          <p  style={{color:'red'}}>The Last Name must be between
            <br></br>
            3 and 20 characters.</p>
        </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div>
        <p  style={{color:'red'}}>The username must be between
          <br></br>
          3 and 20 characters.</p>
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div >
        <p style={{color:'red'}}>The password must be between
        <br></br>
        6 and 40 characters.</p>
      </div>
    );
  }
};
const vRole = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
        <div >
          <p style={{color:'red'}}>The Role must be between
            <br></br>
            6 and 40 characters.</p>
        </div>
    );
  }
};

const vphonenomber = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
        <div >
          <p style={{color:'red'}}>The phone number must be between
            <br></br>
            6 and 40 characters.</p>
        </div>
    );
  }
};
const Register = () => {
  const classes = useStyles();
  const form = useRef();
  const checkBtn = useRef();
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [role, setRole] = useState([""]);
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeFirstName = (e) => {
    const firstname = e.target.value;
    setFirstName(firstname);
  };
  const onChangeMiddleName = (e) => {
    const middlename = e.target.value;
    setMiddleName(middlename);
  };
  const onChangeLastName = (e) => {
    const lastname = e.target.value;
    setLastName(lastname);
  };
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeDateOfBirth = (e) => {
    const dateofbirth = e.target.value;
    setDateOfBirth(dateofbirth);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangePhoneNumber = (e) => {
    const phonenumber = e.target.value;
    setPhonenumber(phonenumber);
  };

  const onChangeRole = (e) => {
    const role = e.target.value;
    setRole([role]);
  };
  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(firstname,middlename,lastname,username, email,dateofbirth,phonenumber, password,role))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (

      <div>
        <Grid container component='main' className={classes.root}>
          <CssBaseline />
          <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
          <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
          />

          <Form className={classes.form} onSubmit={handleRegister} ref={form}>
            {!successful && (
                <div>
                  <div className="divfirstname">
                    <label clhtmlFor="firstname">First Name</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="firstname"
                        value={firstname}
                        onChange={onChangeFirstName}
                        validations={[required, vfirstname]}
                    />
                </div>
                  <div className="divmiddlename">
                    <label htmlFor="middlename">Meddle Name</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="middlename"
                        value={middlename}
                        onChange={onChangeMiddleName}
                        validations={[required, vmiddlename]}
                    />
                  </div>
                  <div className="divlastname">
                    <label htmlFor="lastname">Last Name</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="lastname"
                        value={lastname}
                        onChange={onChangeLastName}
                        validations={[required, vlastname]}
                    />
                  </div>
                  <div className="divusername">
                    <label htmlFor="username">User Name</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required, vusername]}
                    />
                  </div>
                  <div className="divemail">
                    <label htmlFor="email">Email</label>
                    <Input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        validations={[required, validEmail]}
                    />
                  </div>
                  <div className="divdateofbirth">
                    <label htmlFor="dateofbirth">Date Of Birth</label>
                    <Input
                        type={"date"}
                        className="form-control"
                        name="dateofbirth"
                        value={dateofbirth}
                        onChange={onChangeDateOfBirth}
                        validations={[required]}
                    />
                  </div>

                  <div className="divpassword">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required, vpassword]}
                    />
                  </div>
                  <div className="divconfpassword">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="phonenumber"
                        value={phonenumber}
                        onChange={onChangePhoneNumber}
                        validations={[required, vphonenomber]}
                    />
                  </div>
                  <div className="divrole">
                    <label htmlFor="role">Role(as tenant or owner)</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="role"
                        value={role}
                        onChange={onChangeRole}
                        validations={[required]}
                    />
                  </div>
                  <div className={classes.button}>
                    <button className="btn btn-primary btn-block">Sign Up</button>
                  </div>
                </div>
            )}
            <div>
              {message && (
                  <div className="form-group">
                    <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                      {message}
                    </div>
                  </div>
              )}
            </div>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
          </Container>
        </Grid>
      </div>
  );
};

export default Register;
