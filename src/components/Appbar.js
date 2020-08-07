import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Home from "../pages/Home";
import About from "../pages/About";

const drawerWidth = '45%'
const history = createBrowserHistory();
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  }
});

const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick }) => (
    <Fragment>
      <AppBar className={classes.aboveDrawer}
         style={{ background: '#182c87' }}
      >
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.flex}
          >
            {title}
          </Typography>
          <a href="http://www.mediafire.com/file/gk4vevpu7vrl3d9/CaptionKing-Captions_for_Instagram_%2526_FB_post.apk/file" target="_blank">
            <img
              height='50'
              src={require('../asset/app.png')} />
          </a>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
);

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Router history={history}>
      <Drawer variant={variant} open={open} onClose={onClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div
          className={clsx({
            [classes.toolbarMargin]: variant === 'persistent'
          })}
        />

        <img
          height='200'

          src={require('../asset/header.jpg')} />

        <List>
          <ListItem button component={Link} to="/" onClick={onItemClick('CaptionKing')}>
           
           <HomeIcon
           style ={{
             marginRight: 5
           }}
           />
            <ListItemText>Home</ListItemText>
          </ListItem>
         
          <ListItem button component={Link} to="/About" onClick={onItemClick('Contact Info')}>
            
            <ContactPhoneIcon
                 style ={{
                  marginRight: 5
                }}
                />
        
            <ListItemText>Contact Info</ListItemText>
          </ListItem>

          <div

            style={{
              marginTop: '50%',
              paddingLeft: 10,
              backgroundColor: 'grey'
            }}
          >
            <text
            style={{
              fontSize: 25
            }}
            > Made with 
            
            <FavoriteIcon

              style ={{
                color:'red',
                paddingTop: 2,
                marginLeft: 4,
                marginRight: 4
              }}
            />
            in India.
            </text> 
            
       

          </div>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>
    </Router>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState('CaptionKing');

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = title => () => {
    setTitle(title);
    setDrawer(variant === 'temporary' ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);