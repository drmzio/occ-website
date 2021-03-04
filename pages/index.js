import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Link from '../src/components/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box sx={{ py: { xs: 4, md: 12 }, color: '#fff', backgroundSize: 'cover', textAlign: 'center' }} style={{ backgroundImage: 'url(http://oc.tc/assets/img/image-slider/15.jpg)' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 500 }}>
            <span style={{ color: red['500'] }}>Overcast</span>
            {' Community'}
          </Typography>
          <Typography variant="h5" component="p" sx={{ marginBottom: 6 }}>The awesome server that lets you play large varieties of Minecraft PvP anytime, anywhere.</Typography>
          <Button variant="contained" size="large" endIcon={<ArrowForwardIcon />} component={Link} href="/play">
            Play Now
          </Button>
        </Container>
      </Box>
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Grid container spacing={4} sx={{ textAlign: 'center' }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" component="h3" gutterBottom>Variety</Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <Typography component="p">
                With Overcast Community, you get to play a variety of Minecraft PvP maps. Test your skills on different types of maps with unique objectives, made by awesome designers from the former Overcast Network and the community!
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" component="h3" gutterBottom>Competition</Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <Typography component="p">
                Managed by former administrators of the now closed Overcast Network, Overcast Community hosts massive PvP matches. Experience a casual competitive environment, where Minecraft PvP can be enjoyed by all!
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" component="h3" gutterBottom>Reliability</Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <Typography component="p">
                Community contributors are constantly making improvements and fixes to the PvP Game Manager to keep Overcast Community stable and strong!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}
