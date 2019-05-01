import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import LogInForm from "../LogInForm";
import {Paper} from "@material-ui/core";

const styles = theme => ({
  logInContainer: {
    margin: 'auto',
    marginTop: '100px',
    maxWidth: '400px',
  },
});

function LogInPage(props) {
  const { classes } = props;

  return (
    <>
      <Paper className={classes.logInContainer}>
        <LogInForm />
      </Paper>
    </>
  );
}

export default withStyles(styles)(LogInPage);
