import React, { useEffect, useState } from 'react'
import { Heading } from '../Navbar/navelements';
import { NavBar } from '../Navbar/navbar';
import {
  Maindiv,
  Seconddiv,
  Section,
  Sidebar,
  Divimage,
  Button,
} from './myprofilewrapper';
import { useHistory, useParams } from 'react-router-dom';
import axios from '../../services/axiosinterceptor';
import { Avatar, Grid, Paper, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

function MyProfile() {
   const history = useHistory();
  const handleUpdate = () => {
    history.push('/updateprofile');
  }
  const [details, setDetails] = useState({});
  const { id } = useParams();

  async function fetchDetails() {
    
    // const response = await axios.get('/tasks/' + id);
        const response = await axios.get('/users/me');

    if (response) {
      setDetails({ ...response.data });
    } else {
      setDetails(details);
    }
  }
  
  useEffect(() => {
    fetchDetails();
  }, [id]);
console.log(details)
  return (
      <>
    <NavBar />
      <Maindiv>
        <Seconddiv>
          <Section>
            <Divimage src="/images/anony.jpg"></Divimage>

          </Section>

          <Sidebar>
           <h1>Email:{details.email}</h1>
            <h1>Username: {details.username}</h1>
          </Sidebar>  
        </Seconddiv>
           <Button onClick={handleUpdate}>Update Profile</Button>
      </Maindiv>
    </>
  );
};


export default MyProfile

