import React from "react";
import {Grid, Typography, withStyles} from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {red} from "@material-ui/core/colors";
import EventCard from "../EventCard";
import RumorCard from "../RumorCard";

const styles = {
  avatar: {
    backgroundColor: red[500],
  },
  background: {
    background: 'url(https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2017/07/21ce48.jpg)',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
  landingContent: {
    display: 'flex',
    flexDirection: 'row',
    height: '93vh',
  },
  content: {
    width: '100%',
    overflowY: 'scroll',
    padding: '32px',
  },
  contentCard: {
    padding: '8px',
  },
  loginBar: {
    minWidth: '300px',
    maxWidth: '400px',
    width: '30%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginForm: {
    padding: '8px',
  },
  media: {
    height: 0,
    paddingTop: '20%',
  },
};

function Landing(props) {
  const { classes } = props;

  const [events, setEvents] = React.useState([]);
  const [rumors, setRumors] = React.useState([]);

  React.useEffect(() => {
    loadEvents();
    loadRumors();
  }, []);

  async function loadEvents() {
    setEvents([
      {
        title: 'Soirée du Pichet sans Fond',
        date: new Date(),
        summary: 'Le Pichet sans Fond vous accueille pour vous faire découvrir un nouveau format de divertissement : Une aventure dont vous êtes les Héros.',
        description: '',
        image: 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2019/01/9e8fa2018-12_LWS4_EP5_ReleaseHub.jpg',
        author: {
          name: 'John',
          id: '0976de'
        }
      },
      {
        title: 'Soirée du Pichet sans Fond',
        date: new Date(),
        summary: 'Le Pichet sans Fond vous accueille pour vous faire découvrir un nouveau format de divertissement : Une aventure dont vous êtes les Héros.',
        description: '',
        author: {
          name: 'John',
          id: '0976de'
        }
      },
      {
        title: 'Soirée du Pichet sans Fond',
        date: new Date(),
        summary: 'Le Pichet sans Fond vous accueille pour vous faire découvrir un nouveau format de divertissement : Une aventure dont vous êtes les Héros.',
        description: '',
        image: 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2019/01/9e8fa2018-12_LWS4_EP5_ReleaseHub.jpg',
        author: {
          name: 'John',
          id: '0976de'
        }
      },
      {
        title: 'Soirée du Pichet sans Fond',
        date: new Date(),
        summary: 'Le Pichet sans Fond vous accueille pour vous faire découvrir un nouveau format de divertissement : Une aventure dont vous êtes les Héros.',
        description: '',
        image: 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2019/01/9e8fa2018-12_LWS4_EP5_ReleaseHub.jpg',
        author: {
          name: 'John',
          id: '0976de'
        }
      },
    ]);
  }

  async function loadRumors() {
    setRumors([]);
  }

  return (
    <>
      <div className={classes.background} />
      <div className={classes.landingContent} >
        <div className={classes.content}>
          <Grid container spacing={32}>
            <Grid item xs={12}>
              <Paper className={classes.contentCard}>
                <Typography variant="headline">Nous sommes le 33 du Zéphyr, 1337 AE.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.contentCard}>
                <Typography variant="headline">Prochains évènements</Typography>

                {events && events.map(event => <EventCard event={event} />)}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.contentCard}>
                <Typography variant="headline">Dernières rumeurs</Typography>

                {rumors && rumors.map(rumor => <RumorCard rumor={rumor} />)}
              </Paper>
            </Grid>
          </Grid>
        </div>
        <Paper className={classes.loginBar} elevation={10} square>
          <h1>Connexion</h1>

          <form noValidate autoComplete="off" className={classes.loginForm}>
            <TextField
              id="email"
              label="Email"
              margin="normal"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="password"
              label="Mot de Passe"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </form>
        </Paper>
      </div>
    </>
  );
};

export default withStyles(styles)(Landing);
