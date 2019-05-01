import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link, Paper, Typography} from "@material-ui/core";

const styles = theme => ({
  container: {
    margin: 'auto',
    maxWidth: '1000px',
    marginTop: '16px',
  },
  innerContainer: {
    margin: '8px',
  },
  title: {
    fontSize: '3rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
  },
});

function CGU(props) {
  const { classes } = props;

  return (
    <>
      <Paper className={classes.container}>
        <div className={classes.innerContainer}>
          <Typography variant="h1" className={classes.title}>Conditions Générales d'Utilisation</Typography>

          <Typography variant="h2" className={classes.sectionTitle}>Données personnelles</Typography>

          <Typography variant="body1">La Boîte à Outils GW2RP utilise votre addresse email comme méthode de connexion. Les notifications par email, si vous les avez activées, seront envoyée à cette addresse également. Elle est stockée, avec votre mot de passe, sur un service tiers d'identification fourni par Google, sur des serveurs en zone européenne.</Typography>
          <Typography variant="body1">Votre nom de compte principal GW2 est indiqué dans les évènements que vous postez afin de permettre aux autres joueurs de vous contacter en jeu.</Typography>

          <Typography variant="h2" className={classes.sectionTitle}>Propriété des contenus</Typography>

          <Typography variant="body1">
            Vous restez propriétaire - et responsable - des contenus que vous émettez sur la boîte à outils. Par conséquent, veillez à ne pas poster d'images dont vous n'êtes pas les auteurs et sur lequelles vous n'avez pas les droits de propriété. Le cas échant, n'oubliez pas de mentionner le ou les artistes.
            Les contenus qui ne respectent pas le droit d'auteur pourront être supprimés sans avertissement.
          </Typography>

          <Typography variant="body1">
            Les jeux d'icônes et les tuiles de cartes sont la propriété d'ArenaNet et du jeu Guild Wars 2.
          </Typography>

          <Typography variant="body1">Les contenus sont stockés sur des serveurs en zone européenne.</Typography>

          <Typography variant="h2" className={classes.sectionTitle}>Modération de contenu</Typography>

          <Typography variant="body1">
            La boîte à outils est destinée à faciliter la pratique du jeu de rôle sur Guild Wars 2.
            Il est interdit de poster du contenu n'ayant pas de rapport avec le jeu ou cette pratique, et ces derniers seront supprimés sans avertissement.
            Les contenus répréhendés par la loi Française en vigueur seront immédiatement supprimés et entraîneront un blocage du compte, ainsi que l'émission d'une alerte aux autorités compétentes.
          </Typography>

          <Typography variant="h2" className={classes.sectionTitle}>Supporter le site</Typography>

          <Typography variant="body1">Si vous appréciez les outils et que vous voulez contribuer à leur maintient, et que vous utilisez le navigateur <Link color="primary" href="https://brave.com" target="__blank">Brave</Link>, vous pouvez envoyer des BAT à l'aide de ce dernier. Les dons en Ether sont également les bienvenus sur <code>gw2rp.nakasar.eth</code>.</Typography>

          <Typography variant="body1">Si vous avez des suggestions, des remarques, ou des incidents à signaler, n'hésitez pas à contacter en jeu <code>Nakasar.5192</code> ou à publier de préférence une issue sur <Link color="primary" href="https://github.com/gw2rptools/website" target="__blank">GitHub</Link>.</Typography>
        </div>
      </Paper>
    </>
  );
}

export default withStyles(styles)(CGU);
