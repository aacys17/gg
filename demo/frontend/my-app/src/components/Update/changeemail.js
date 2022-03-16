import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import LockIcon from '@mui/icons-material/Lock';
import { NavBar } from '../Navbar/navbar';
import axios from '../../services/axiosinterceptor';
import { useStyles } from '../Navbar/myprofilewrapper';
import { useHistory } from 'react-router-dom';
const ChangeEmail = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
      try {
        axios.patch('http://localhost:5000/users/me', {
          email,
        });
       history.push('/dashboard');
        } catch (e) {
        console.log('Email Save Error !!');
    }
  };
  return (
    <div>
      <Grid direction="column">
        <Grid direction="column">
          <NavBar />
        </Grid>
        <Grid>
          <Paper elevation={10} className={classes.paperStyle}>
            <Grid align="center">
              <Avatar className={classes.avatarStyle}>
                <LockIcon fontSize="large" />
              </Avatar>
              <h2>Change Email</h2>
            </Grid>
            {/* <TextField placeholder="emailID" /> */}
            <form onSubmit={handleSubmit}>
              <TextField
                required
                id="email"
                label="New Email"
                name="email"
                type="email"
                value={email}
                fullWidth
                onChange={(e) => {
                  setEmail(e.target.value);
                  // setPasswordErr('');
                }}
                // className={classes.textField}
                style={{
                  marginTop: '10px',
                  alignItems: 'center',
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  marginTop: '15px',
                }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default ChangeEmail;
