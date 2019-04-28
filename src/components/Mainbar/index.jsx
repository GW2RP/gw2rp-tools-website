import React from "react";
import { withStyles, AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from "@material-ui/icons";

const styles = {

};

function Mainbar(props) {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Outils GW2 RP
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Mainbar);
