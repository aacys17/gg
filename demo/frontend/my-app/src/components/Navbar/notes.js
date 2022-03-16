import React from 'react'
import { Heading } from '../Navbar/navelements';
import { NavBar } from '../Navbar/navbar';
import { FaParagraph } from 'react-icons/fa';
import { LoremIpsum } from 'react-lorem-ipsum';

function Notes() {
  return (
      <div>
      <NavBar/>
      <Heading>
        <h1>Notes</h1>
        <div>
          <p>
            <LoremIpsum p={2} />
          </p>
        </div>
      </Heading>
      

    </div>
  )
}

export default Notes