import React from "react";
import { withStyles, AppBar, Button, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from "@material-ui/icons";
import {Link, NavLink, withRouter} from "react-router-dom";

const styles = theme => ({
  mainTitle: {
    color: '#FFFFFF',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
    marginLeft: '4px',
    marginRight: '4px',
  },
  menuLinkActive: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
});

function Mainbar(props) {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Hidden mdUp>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Link to="/" className={classes.mainTitle}>
          <Typography variant="h6" color="inherit">
            Outils GW2 RP
          </Typography>
        </Link>
        <Hidden smDown>
          <div className={classes.grow}>
            <NavLink to="/carte" className={classes.menuLink} activeClassName={classes.menuLinkActive}>
              <Button color="inherit">
                Cartographe
              </Button>
            </NavLink>
            <NavLink to="/events" className={classes.menuLink} activeClassName={classes.menuLinkActive}>
              <Button color="inherit">
                Events
              </Button>
            </NavLink>
            <NavLink to="/primes" className={classes.menuLink} activeClassName={classes.menuLinkActive}>
              <Button color="inherit">
                Primes
              </Button>
            </NavLink>
            <NavLink to="/compendium" className={classes.menuLink} activeClassName={classes.menuLinkActive}>
              <Button color="inherit">
                Compendium
              </Button>
            </NavLink>
          </div>
        </Hidden>
        <Button color="inherit">
          Compendium
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(withRouter(Mainbar));
