import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import {
  Loginform,
  Formgroup,
  FieldControl,
  Btnsubmit,
  Heading,
  Linking,
  Maindiv,
} from './loginwrapper';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { FaParagraph } from 'react-icons/fa';
import { typography } from '@mui/system';

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email cannot be empty'),
  password: yup.string().required('Password cannot be empty'),
});

function Login() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onSubmit = async (values) => {
         console.log(values);
    setLoading(true);
    const payload = JSON.parse(values);
    console.log(payload);
    try {
         const isLoggedIn = await axios.post(
        'http://localhost:5000/users/login', payload
      );
       const { token } = isLoggedIn.data;
      localStorage.setItem('jwt', token);
      history.push('/dashboard');


     
    } catch (err){
      alert(err.message);
      setMessage(err.message);
    }
      console.log('button clicked');
    
  };
  React.useEffect(() => {
    isLoggedIn && history.push('/dashboard');
  }, [isLoggedIn]);
  return (
    <Maindiv>
      {/* {isLoginFailed && (
        <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      )} */}
      <Formik
        onSubmit={async (values) => {
          console.log(values);
          onSubmit(JSON.stringify(values, null, 2));
        }}
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Loginform onSubmit={handleSubmit}>
            <Formgroup>
              <Heading>
                <h1>WMC</h1> 
                <h2>Login to your Account</h2>
               
                
              </Heading>
              

              <div className="form-field">
                <FieldControl
                  name="email"
                  type="email"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  label="Your Email"
                  value={values.email}
                  onChange={handleChange}
                  as={TextField}
                />
              </div>
              <div className="form-field">
                <FieldControl
                  name="password"
                  type="password"
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  label="Your Password"
                  value={values.password}
                  onChange={handleChange}
                  as={TextField}
                />
              </div>
              <Btnsubmit variant="outlined">Login</Btnsubmit>
            </Formgroup>
          </Loginform>
        )}
      </Formik>
      <Linking to="/register">Don't have an account? Sign Up</Linking>
    </Maindiv>
  );
}
export default Login;
