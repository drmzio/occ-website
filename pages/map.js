import * as React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import PageHeader from '../src/components/PageHeader';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  embed: {
    position: 'relative',
    paddingTop: '100%',
    width: '100%'
  },
  embedIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
}));

export default function Rules() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageHeader title="Map" subtitle="See the current map being played" />
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <div className={classes.embed}>
            <iframe 
              className={classes.embedIframe} 
              src="https://mineflayer-occ-bot.herokuapp.com/" 
              frameBorder={0} 
              width="500" 
              height="500" 
            />
          </div>
        </Container>
      </Box>
    </div>
  )
}
