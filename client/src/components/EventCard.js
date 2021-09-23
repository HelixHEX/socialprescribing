import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    maxHeight: 175,
    borderRadius: 30,
  },
  cardTitleText: {
    fontWeight: 'bold',
  },
  cardSubText: {
    textTransform: 'none',
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
  fullHeightCard: {
    height: '100%',
  },
  spacedCardActionArea: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImageTitleArea: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventCardTitle: {
    '&:last-child': {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: theme.spacing(1),
    },
  },
  eventCardTag: {
    paddingTop: 0,
  },
  customBox: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    overflow: "hidden"
  }
}));


export default function EventCard(props) {
  const classes = useStyles();
  const { event } = props;

  return (
    <Grid item xs={6} md={3}>
      <Card className={classes.fullHeightCard}>
        <CardActionArea component="a" href={event.url} target="_blank" rel="noopener" className={classes.spacedCardActionArea}>
          <div className={classes.cardImageTitleArea}>
            <CardMedia component="img" image={event.image} title={event.title} className={classes.cardMedia} />
            <CardContent className={classes.eventCardTitle}>
              <Box
                component="div"
                classes={{ root: classes.customBox }}
              >
                <Typography variant="body1" className={classes.cardTitleText}>
                  {event.title}
                </Typography>
              </Box>
            </CardContent>
          </div>
          <CardContent className={classes.eventCardTag}>
            <Button variant="contained" size="small" disabled className={classes.cardSubText}>
              {event.tag}
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid >
  );
}

EventCard.propTypes = {
  event: PropTypes.object,
};
