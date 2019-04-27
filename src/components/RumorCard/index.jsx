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
  rumorCard: {
    margin: '4px',
  }
};

function RumorCard(props) {
  const { classes, rumor } = props;

  return (
    <Card className={classes.rumorCard}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={rumor.title}
        subheader={
          <>
            Par <Link to={`/joueurs/${rumor.author.name}`}>{rumor.author.name}</Link>
          </>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography component="p">
          {rumor.summary}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(RumorCard);
