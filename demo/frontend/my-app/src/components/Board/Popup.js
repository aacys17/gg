import React from 'react'
import {Dialog, DialogTitle} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from '../../services/axiosinterceptor';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  Loginform,
  Formgroup,
  FieldControl,
  Btnsubmit,
  Heading,
  Linking,
  Maindiv,
} from '../../auth/login/loginwrapper';

const taskSchema = yup.object().shape({
  title: yup.string().required('Title cannot be empty'),
  color: yup.string().required('Color cannot be empty.'),
  price: yup.number().required('Price cannot be empty.')
});


function Popup(props) {
      const history = useHistory();
      
        // const isUpdated = localStorage.getItem('isUpdated');
     const onSubmit = async (values) => {
    const {description, title, color, price} = {...JSON.parse(values)};
    // console.log(payload);
    try {
         await axios.patch(
        '/tasks/' + props.id, {description, title, color, price}
         );
         setOpenPopup(false);
                  history.push('/dashboard');

          } 
    catch (err){
      alert(err.message);
    }
  }
  // React.useEffect(() => {
  //   isUpdated && history.push('/dashboard');
  // }, [isUpdated]);
    const {title, children, wishlist, openPopup, setOpenPopup} = props;
  return (
    <Dialog open={openPopup}>
         <Maindiv>
      <Formik
        onSubmit={async (values, _id) => {
          // console.log("Form submitted.")
          // console.log(values);
          onSubmit(JSON.stringify(values, null, 2));
        }}
        initialValues={{
         description: "",
         title: "",
         color: "",
         price: '',
         image: ''
        }}
        validationSchema={taskSchema}
      >
        {({ values, handleChange, errors, touched }) => (
          <Loginform>
            <Formgroup>
             <div className="form-field">
                <FieldControl
                  name="description"
                  type="description"
                  error={touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
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
                  name="image"
                  type="image"
                  label="Photo"
                  value={values.image}
                  onChange={handleChange}
                  as={TextField}
                />
              </div>
               <div className="form-field">
                <FieldControl
                  name="color"
                  type="color"
                  error={touched.color && !!errors.color}
                  helperText={touched.color && errors.color}
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
                  error={touched.price && !!errors.price}
                  helperText={touched.price && errors.price}
                  label="Price"
                  value={values.price}
                  onChange={handleChange}
                  as={TextField}
                />
              </div>
              <Btnsubmit type='submit'>Edit Wishlist</Btnsubmit>
            </Formgroup>
          </Loginform>
        )}
      </Formik>
    </Maindiv>
    </Dialog>
  )
}

export default Popup