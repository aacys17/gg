import React, {useState, useEffect } from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { BoardContainer, BoardDesign, Menus } from './moodboardWrapper';
import Button from '@mui/material/Button';
import { useHistory, useParams } from 'react-router-dom';
import axios from '../../services/axiosinterceptor';
import { blue } from '@material-ui/core/colors';
import { Paper, Grid, AccordionDetails } from '@mui/material';
import { useStyles } from '../Navbar/myprofilewrapper';
import Popup from './Popup';
import {MenuItem } from '@material-ui/core';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const MoodBoard = ({ title, name, description, _id,}) => {
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  //  const [iD, setID] = useState(0);
  const [openPopup, setOpenPopup]= useState(false);
  const [menu, setMenu] = useState(null)
  const [loading, setloading] = useState(false);
  const [wishlists, setwishlists] = useState([]);
  const handleExpandClick = (_id) => {
    history.push('/singleboard/' + _id);
  };
  const handleClose = () => {
    setMenu(null)
  }
  const openMenu = (event) => {
    setMenu(event.currentTarget)
  };
    

  const handleDelete = async(_id) => {
    // e.preventDefault();
    console.log('Clicked Delete');
    try {
    await axios.delete('/tasks/' + _id);
   
      const tmp = wishlists.filter(list => {
        return list._id !== _id
      })
      setwishlists(tmp);
}
    catch(err) {
       console.log('Delete error');
    }
    // setopenMenu(false);

  };
 useEffect(() => {
     setloading(true);
     axios.get('/alltasks').then(response => {
      //  console.log(response.data);
     
      setwishlists(response.data);
      setloading(false);
     }
     )
     .catch((e) => {
      console.log(e);
     })
  },[]);
  const [details, setDetails] = useState({});
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
// console.log(details)
  const tmp = wishlists.map( wishlist=> {
    return(
       <BoardDesign key={wishlist._id} sx={{minWidth:200, maxWidth: 200 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe"></Avatar>
          }
          action={
           
            <div style={{ marginTop: '10px' }}>
            <IconButton 
            onClick = {openMenu}
              aria-label="settings">
              <MoreVertIcon />
            </IconButton>
            <Menus
              id = "lame"
              menu={menu}
              keepMounted
              open={Boolean(menu)}
              onClose={handleClose}
              >
                <MenuItem onClick={() => setOpenPopup(true)}>Edit</MenuItem>
                <MenuItem onClick={() => handleDelete(wishlist._id)}>Delete</MenuItem>
            </Menus>
             <Popup
              id = {wishlist._id}
              openPopup = {openPopup}
              setOpenPopup = {setOpenPopup}
              >
            </Popup>
             
            </div>
          }
          
          title = {wishlist.title}
          
        />
        <CardMedia
          component="img"
          height="194"
          image="\images\image.jpg"
          alt={title}
        />
        <CardContent>
          {/* <Typography variant="body2" color="text.primary">
             {wishlist.title}
             
          </Typography> */}
          <Typography variant="body3" color="text.secondary">
             
             {wishlist.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <ExpandMore
            onClick={() => handleExpandClick(wishlist._id)}
            aria-label="see more"
          >
            <Button size="small">See More</Button>
          </ExpandMore>
           </CardActions>
            </BoardDesign>
      
    )
// console.log(tmp);
  })
  return (
    
    <BoardContainer >
      
      {
      tmp
      }
     
    </BoardContainer>
    
    
  );
  
};




// const ExpandMore2 = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));



//  useEffect(() => {
//      setloading(true);
//      axios.get('/tasks').then(response => {
//       //  console.log(response.data);
     
//       setwishlists(response.data);
//       setloading(false);
//      }
//      )
//      .catch((e) => {
//       console.log(e);
//      })
//   },[]);
//   const [details, setDetails] = useState({});
//   async function fetchDetails() {
    
//     // const response = await axios.get('/tasks/' + id);
//         const response = await axios.get('/users/me');

//     if (response) {
//       setDetails({ ...response.data });
//     } else {
//       setDetails(details);
//     }
//   }
  
//   useEffect(() => {
//     fetchDetails();
//   }, [id]);
// // console.log(details)
//   const tmp = wishlists.map( wishlist=> {
//     return(
//        <BoardDesign key={wishlist._id} sx={{minWidth:200, maxWidth: 200 }}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe"></Avatar>
//           }
//           action={
           
//             <div style={{ marginTop: '10px' }}>
//             <IconButton 
//             onClick = {openMenu}
//               aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//             <Menu
//               id = "lame"
//               menu={menu}
//               keepMounted
//               open={Boolean(menu)}
//               onClose={handleClose}
//               >
//                 <MenuItem onClick={() => setOpenPopup(true)}>Edit</MenuItem>
//                 <MenuItem onClick={() => handleDelete(wishlist._id)}>Delete</MenuItem>
//             </Menu>
//              <Popup
//               id = {wishlist._id}
//               openPopup = {openPopup}
//               setOpenPopup = {setOpenPopup}
//               >
//             </Popup>
             
//             </div>
//           }
          
//           title = {wishlist.title}
          
//         />
//         <CardMedia
//           component="img"
//           height="194"
//           image="\images\image.jpg"
//           alt={title}
//         />
//         <CardContent>
//           {/* <Typography variant="body2" color="text.primary">
//              {wishlist.title}
             
//           </Typography> */}
//           <Typography variant="body3" color="text.secondary">
             
//              {wishlist.description}
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           {/* <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton> */}
//           <ExpandMore
//             onClick={() => handleExpandClick(wishlist._id)}
//             aria-label="see more"
//           >
//             <Button size="small">See More</Button>
//           </ExpandMore>
//            </CardActions>
//             </BoardDesign>
      
//     )
// // console.log(tmp);
//   })
//   return (
    
//     <BoardContainer >
      
//       {
//       tmp
//       }
     
//     </BoardContainer>
    
    
//   );
  
// };




export default MoodBoard;

