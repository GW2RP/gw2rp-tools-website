import React from "react";
import { withStyles } from '@material-ui/core';
import {withRouter} from "react-router-dom";

const styles = {

};

function EventPage(props) {

  React.useEffect(() => {
    let titleMeta = document.getElementsByName('og:title')[0];

    if (!titleMeta) {
      titleMeta = document.createElement("META");
    }

    titleMeta.name = 'og:title';
    titleMeta.setAttribute('property', 'og:title');
    titleMeta.content = 'Soirée du Pichet sans Fond';

    document.head.append(titleMeta);

    let descriptionMeta = document.getElementsByName('og:description')[0];

    if (!descriptionMeta) {
      descriptionMeta = document.createElement("META");
    }

    descriptionMeta.name = 'og:description';
    descriptionMeta.setAttribute('property', 'og:description');
    descriptionMeta.content = 'Le Pichet sans Fond vous accueille pour vous faire découvrir un nouveau format de divertissement : Une aventure dont vous êtes les Héros.';

    document.head.append(descriptionMeta);
  }, []);

  return (
    <>
      <h1>Event</h1>
    </>
  );
}

export default withStyles(styles)(withRouter(EventPage));
