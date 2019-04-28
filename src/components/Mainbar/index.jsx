import React from "react";
import { withStyles, AppBar, Button, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from "@material-ui/icons";

const styles = {
  titleLink: {
    color: '#FFFFFF'
  }
};

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
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Outils GW2 RP
        </Typography>
        <Hidden smDown>
          <Button color="secondary">
            Cartographe
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Mainbar);
