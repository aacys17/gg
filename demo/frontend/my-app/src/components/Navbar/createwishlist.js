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
} from '../../auth/login/loginwrapper';
import axios from '../../services/axiosinterceptor';
import { Link, useHistory } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { FaParagraph } from 'react-icons/fa';
import { typography } from '@mui/system';
import { NavBar } from './navbar';

const taskSchema = yup.object().shape({
  title: yup.string().required('Title cannot be empty'),
  color: yup.string().required('Color cannot be empty.'),
  price: yup.number().required('Price cannot be empty.')
});

function Createwishlist() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [negotiable, setNegotiable] = useState('');
  const [image, setImage] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();

  const onSubmit = async (values) => {
    setLoading(true);
    const payload = {...JSON.parse(values)};
    console.log(payload);
    try {
      // console.log(axios)
         await axios.post(
        '/tasks', payload
         );
         history.push('/dashboard');
     
    } catch (err){
      // console.log(err);
      alert(err.message);
      setMessage(err.message);
    }
  }
      // console.log('button clicked');
  return (
      <>
      <NavBar />
    <Maindiv>
      <Formik
        onSubmit={async (values) => {
          console.log("Form submitted.")
          console.log(values);
          onSubmit(JSON.stringify(values, null, 2));
        }}
        initialValues={{
         description: "",
         title: "",
         color: "",
         price: '',
        }}
        validationSchema={taskSchema}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Loginform onSubmit={handleSubmit}>
            <Formgroup>
              {/* <Heading>
                <h1>WMC</h1> 
              </Heading> */}
              

              <div className="form-field">
                <FieldControl
                  name="description"
                  type="description"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  label="Description"
                  value={values.description}
                  onChange={handleChange}
                  as={TextField}
                />
              </div>
              <div className="form-field">
                <FieldControl
                  name="title"
                  type="title"
                  error={touched.title && !!errors.title}
                  helperText={touched.title && errors.title}
                  label="Title"
                  value={values.title}
                  onChange={handleChange}
                  as={TextField}
                />
              </div>
               <div className="form-field">
                <FieldControl
                  name="color"
                  type="color"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  label="Color"
                  value={values.color}
                  onChange={handleChange}
                  as={TextField}
                />
              </div>
               <div className="form-field">
                <FieldControl
                  name="price"
                  type="price"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  label="Price"
                  value={values.price}
                  onChange={handleChange}
                  as={TextField}
                />
              </div>
              <Btnsubmit type="submit">Create Wishlist</Btnsubmit>
            </Formgroup>
          </Loginform>
        )}
      </Formik>
    </Maindiv>
    </>
  );
};
export default Createwishlist
