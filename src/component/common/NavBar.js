import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CategoryIcon from '@material-ui/icons/Category';
import'../../assets/css/ss.css';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Context from '../../assets/js/Context';
import {Popover,Pane,Avatar } from 'evergreen-ui'
const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
    root: {
        flexGrow: 1,
    },
    appBar: {
        flexGrow: 1,
        backgroundColor: '#346bae',
        [theme.breakpoints.up('md')]: {
            height: 70,
        },
        [theme.breakpoints.down('md')]: {
            height: 70,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        },
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1,
paddingLeft:0,
[theme.breakpoints.up('md')]: {
    paddingLeft:60,
},
    },
    MenuBTNNavContiner: {
        flexGrow: 0.3,
        display: 'none',
        fontSize: 18,
        fontWeight:400,
        cursor: 'pointer',
        paddingRight:80,
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'space-between',

        },

    },
    spann:{
        '&:hover': {
            color: '#00bcd1!important',
            transitionDuration: '.3s',
transitionTimingFunction: 'linear',
         },
    }

}));



  function SearchAppBar() {
 
    const classes = useStyles();
   
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
    
    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };

      const sideList = side => (
        <div  style={{backgroundColor:'#346BAE',minHeight:'100vh'}}
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
<div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'5%',paddingBottom:'5%'}}  >
<img src={require('../../assets/img/logo.png')} style={{height:'60px',marginTop:'10%'}} alt='img' /> </div>


        <Link to='/'>    <List  style={{marginTop:'15%'}} >
            {['Home'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <HomeIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> </Link>
          <Divider />
          <Link to='/About'>   <List>
            {['About Us'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InfoIcon /> : <InfoIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> </Link>
          <Divider />

          <Link to='/Folio'>   <List>
            {['Portfolio'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InfoIcon /> : <InfoIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> </Link>
          <Divider />

          <Link to='/Category'>    <List>
            {['Category'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <CategoryIcon /> : <CategoryIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> </Link>
          <Divider />
          <Link to='/Contact'>    <List>
            {['Contact Us'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <ContactPhoneIcon /> : <ContactPhoneIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> </Link>
          <Divider />
       
     
        </div>
      );




    return (
      <Context.Consumer>
      {ctx => {
          return (
        <div className={classes.root}>
            <AppBar position="static" className='ss'>
                <Toolbar>
                
                    <div onClick={toggleDrawer('left', true)}>    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                   
                    >
                        <MenuIcon />
                    </IconButton>
                    </div>
  
                    <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
               {sideList('left')}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
        {/* {fullList('top')} */}
      </SwipeableDrawer>

      <Typography className={classes.title} variant="h6" noWrap>
      <Link to='/'>  <img src={require('../../assets/img/logo.png')} style={{height:'45px'}} alt='img' />  </Link>
                   </Typography>

              
                    <article className={classes.MenuBTNNavContiner}>
                        <span className={classes.spann}> <Link to='/'>   Home </Link>   </span>
                        <span className={classes.spann}> <Link to='/About'> About Us </Link>   </span>
                        <span className={classes.spann}> <Link to='/Folio'> Portfolio</Link>   </span>
                        <span className={classes.spann}> <div className="dropdown">Category 
                        <div className="dropdown-content">
                          <div id='Bt_link' > <Link to='/Equipment'>   Equipment </Link>   </div>
                          <div id='Bt_link' >  <Link to='/Injection'>    Injections   </Link>  </div>
                        </div>
                        
                         </div> </span>
                   
                        <span className={classes.spann}><Link to='/Contact'> Contact Us </Link>  </span>

                        <span className={classes.spann}>     {(localStorage.getItem("auth")=== 'lgoin') ?(
                          <div>
                       
                       <Popover
                          content={
                            <Pane
                              width={200}
                              height={200}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexDirection="column"
                            >

                       
                                 <div id='Bt_link'        onClick={() => {
                             localStorage.removeItem("token","auth");
                              window.location.href = "/"
                            }} > Logout  </div>
                          <div id='Bt_link' >  <Link to='/Dashbourd' style={{color:'#fff'}} >    Dashbourd   </Link>  </div>
                          </Pane>
                          }>
                          <Avatar
                        src={require('../../assets/img/d.jpg')}
                      
                        size={20}
                        id='hh'
                      />
               
                    </Popover>

                  </div>
                          
                          
                          ):(

                            <React.Fragment></React.Fragment>)}</span>


                    </article>
               
                </Toolbar>



                
            </AppBar>
            
        </div>
   
   
   
   
   
   
          )}}
         </Context.Consumer>
   
   
   
   );
}
const debounce = (fn) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
  
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) { 
        cancelAnimationFrame(frame);
      }
  
      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        
        // Call our function and pass any params we received
        fn(...params);
      });
  
    } 
  };
  
  
  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  }
  
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  
  // Update scroll position for first time
  storeScroll();
export default SearchAppBar;