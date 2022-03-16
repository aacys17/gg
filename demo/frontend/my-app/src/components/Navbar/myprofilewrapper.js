import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

export const Maindiv = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ebebeb;
  @media screen and (max-width: 760px) {
    display: flex;
  }
`;

export const Seconddiv = styled.div`
  display: flex;
  // justify-content: center;
  // align-items: center;
  background: white;
  height: 70vh;
  width: 165vh;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
  margin-left: 2rem;
  // height: 100vh;
  // width: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  // background: linear-gradient(135deg, #71b7e6, #9b59b6);
`;

export const Divimage = styled.img`
  height: 20vh;
  margin-top: 7rem;
  width: 15vw;
  border: 2px solid red;
`;

export const Sidebar = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  border: 1px solid black;
  height: 50vh;
  width: 40vw;
  h1 {
    margin: 1rem;
  }
  h3 {
    margin: 1rem;
  }
  p {
    font-weight: bold;
    margin: 1rem;
  }
`;

export const Button = styled.button`
  width: 10rem;
  padding: 1em;
  display: flex;
  background-color: #8a2be2;
  margin: 1rem;
  color: #fff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 7px;
`;

export const useStyles = makeStyles({
  paperStyle: {
    padding: 20,
    // height: '65vh',
    width: 340,
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  avatarStyle: {
    backgroundColor: '#52B3BF',
  },
  btstyle: { margin: '8px 0' },
  textField: { margin: '8px 0' },
});