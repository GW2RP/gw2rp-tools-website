import React from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import {Checkbox, FormLabel} from "@material-ui/core";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  loginForm: {
    padding: '8px',
  },
  secondButton: {
    marginTop: '4px',
  }
});

function LogInForm(props) {
  const { classes } = props;

  const [mode, setMode] = React.useState('LOGIN');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  async function logIn(event) {
    event.preventDefault();
  }

  if (mode === 'LOGIN') {
    return (
      <>
        <h1>Connexion</h1>

        <form id="login-form" noValidate autoComplete="off" className={classes.loginForm} onSubmit={logIn}>
          <TextField
            id="email"
            label="Email"
            margin="normal"
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <TextField
            id="password"
            label="Mot de Passe"
            margin="normal"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <Button color="primary" variant="contained" type="submit" fullWidth>Connexion</Button>
          <Button color="primary" variant="outlined" fullWidth className={classes.secondButton} onClick={() => setMode('SIGNUP')}>Créer un compte</Button>
        </form>
      </>
    )
  } else {
    return (
      <>
        <h1>Enregistrement</h1>

        <form id="login-form" noValidate autoComplete="off" className={classes.loginForm} onSubmit={logIn}>
          <TextField
            id="email"
            label="Email"
            margin="normal"
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <TextField
            id="password"
            label="Mot de Passe"
            margin="normal"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <TextField
            id="password-confirm"
            label="Confirmation du Mot de Passe"
            margin="normal"
            variant="outlined"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
          />

          <Checkbox id="accept-cgu"/>
          <FormLabel for="accept-cgu">J'ai lu les <Link href="/cgu" color="secondary" target="__blank">conditions d'utilisation.</Link></FormLabel>

          <Button color="secondary" variant="contained" type="submit" fullWidth>S'enregistrer</Button>
          <Button color="secondary" variant="outlined" type="submit" fullWidth className={classes.secondButton} onClick={() => setMode('LOGIN')}>Connection</Button>
        </form>
      </>
    )
  }
}

export default withStyles(styles)(LogInForm);
