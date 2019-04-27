import React from "react";
import {Card, CardContent, CardHeader, Typography, withStyles} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import {red} from "@material-ui/core/colors";
import {Link} from "react-router-dom";

const styles = {
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 0,
    paddingTop: '20%',
  },
  eventCard: {
    margin: '4px',
  }
};

function EventCard(props) {
  const { classes, event } = props;

  function displayDate(dateString) {
    const date = new Date(dateString);

    const DAYS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    return `${DAYS[date.getDay()]} ${date.getDate()} ${MONTHS[date.getMonth()]}, ${date.toLocaleTimeString().substr(0, 5)}`;
  }

  return (
    <Card className={classes.eventCard}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            EV
          </Avatar>
        }
        title={event.title}
        subheader={
          <>
            {displayDate(event.date)}, Par <Link to={`/joueurs/${event.author.name}`}>{event.author.name}</Link>
          </>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      {event.image && <CardMedia
        className={classes.media}
        image={event.image}
        title={event.title}
      />}
      <CardContent>
        <Typography component="p">
          {event.summary}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(EventCard);
