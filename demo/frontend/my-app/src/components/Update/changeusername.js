import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import LockIcon from '@mui/icons-material/Lock';
import { NavBar } from '../Navbar/navbar';
import axios from '../../services/axiosinterceptor';
import { useStyles } from '../Navbar/myprofilewrapper';
// import { username } from 'react-lorem-ipsum';
import { useHistory } from 'react-router-dom';
const ChangeUsername = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
        axios.patch('http://localhost:5000/users/me', {
          username,
        });
        history.push('/dashboard');
      } catch (e) {
        console.log('Username Save Error !!');
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
              <h2>Change Username</h2>
            </Grid>
            {/* <TextField placeholder="emailID" /> */}
            <form onSubmit={handleSubmit}>
              <TextField
                required
                id="username"
                label="New Username"
                name="username"
                type="username"
                value={username}
                fullWidth
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
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
export default ChangeUsername;
