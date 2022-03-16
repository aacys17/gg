import React from 'react'
import { NavBar } from '../Navbar/navbar';
import {
  Maindiv,
  Seconddiv,
  Section,
  Sidebar,
  Divimage,
  Button,
} from '../Navbar/myprofilewrapper';
import { useHistory } from 'react-router-dom';
import axios from '../../services/axiosinterceptor';

function UpdateProfile() {
  const history = useHistory();
  const handlePassword = () => {
    history.push('/changepassword');
  }
  const handleEmail = () => {
    history.push('/changeemail');
  }
  const handleUsername = () => {
    history.push('/changeusername');
  }
  const handleDelete = () => {
    try {
      axios.delete('http://localhost:5000/users/me');
    history.push('/login');
    }
    catch(e){
      console.log('Cannot delete user.')
  }
}
  return (
      <>
    <NavBar />
      <Maindiv>
        <Seconddiv>
          <Section>
            <Divimage></Divimage>
            <Button>Change photo</Button>
          </Section>
          <Sidebar>
          <ul>
            <Button onClick={handleUsername}>Change username</Button>
            <Button onClick={handleEmail}>Change email</Button>
            <Button onClick={handlePassword}>Update password</Button>
            <Button onClick={handleDelete}>Deactivate Account</Button>
          </ul>
            
          </Sidebar>  
          
        </Seconddiv>
           
      </Maindiv>
    </>
  );
};


export default UpdateProfile

