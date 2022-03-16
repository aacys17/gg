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
} from '../Board/SingleboardWrapper';
import { useHistory, useParams } from 'react-router-dom';
import axios from '../../services/axiosinterceptor';
// import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router-dom';


function Wishlist() {
   const history = useHistory();
  const handleCreate = () => {
    history.push('/createwishlist');
  }

 const [details, setDetails] = useState({});
  const { id } = useParams();

  async function fetchDetails() {
    // const response = await axios.get('/tasks/' + id);
        const response = await axios.get('/tasks');

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
            <h1>Title: {details.title}</h1>
            <h3>Description: {details.description}</h3>
            <p>Color: {details.color}</p>
            <p>Price: {details.price}Rs.</p>
            <p>Negotiable: {details.negotiable ? 'Yes' : 'No'}</p> 
            {/* <p>Bran: {details.serviced ? 'Yes' : 'No'}</p> */}
             {/* <p>Image:{details.image}</p>  */} 
          </Sidebar>  
        </Seconddiv>
           <Button onClick={handleCreate}>Create wishlist</Button>
      </Maindiv>
    </>
  );
};


export default Wishlist

