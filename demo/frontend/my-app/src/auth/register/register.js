import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';
import {
  RegisterForm,
  FormGroup,
  Heading,
  FieldControl,
  Btnsubmit,
  Linking,
  Maindiv,
} from './registerwrapper';


const end_point = 'http://localhost:5000/users';


const initialValues = {
  email: "",
  password: "",
  username: ""
}

const registerSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email cannot be empty'),
  password: yup.string().required('Password cannot be empty'),
  username: yup.string().required('Username cannot be empty'),
});


function Register() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    const payload = JSON.parse(values);
    console.log(payload);
    //axios code here
    try {
      const response = await axios.post(end_point, payload);
      console.log(response.data);
      setLoading(false);
      if (response.data) {
        alert('Signup successfull');
      } else {
        alert('Something went wrong');
      }
    } catch (err) {
      alert(err.message);
      setMessage(err.message);
    }
  };
  return (
    <Maindiv>
        <Formik
        onSubmit={async (values) => {
          console.log(values);
          onSubmit(JSON.stringify(values, null, 2));
          history.push('/login');
        }}
        initialValues={initialValues}
        validationSchema={registerSchema}
        >

        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <RegisterForm onSubmit={handleSubmit}>
            <FormGroup>
              <Heading>
                <h1>Register</h1>
              </Heading>
              <div className="form-field">
                <FieldControl
                  name="email"
                  type="email"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  as={TextField}
               />
              </div>
              <div className="form-field">
                <FieldControl
                  name="password"
                  type="password"
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  as={TextField}
                />
              </div>
              <div className="form-field">
                <FieldControl
                  name="username"
                  type="input"
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  label="Username"
                  value={values.username}
                  onChange={handleChange}
                  as={TextField}
                />
              </div>

              <Btnsubmit>Register</Btnsubmit>
            </FormGroup>
          </RegisterForm>
        )}
      </Formik>
      <Linking to="/login" className="links">
        Already have an account? Sign In
      </Linking>
    </Maindiv>
  );
}

export default Register;


