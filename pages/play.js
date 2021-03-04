import * as React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import PageHeader from '../src/components/PageHeader';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
  },
  avatar: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto'
  }
}));

export default function Play() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageHeader title="Play" subtitle="Play anytime, anywhere" />
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" component="h2">Connect</Typography>
                <Divider />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <img className={classes.image} src="https://raw.githubusercontent.com/OvercastCommunity/overcastcommunity.github.io/master/assets/img/maps/Tetrad/map.png" alt="" />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" gutterBottom>Tetrad</Typography>
              <Grid container spacing={1}>
                {[...Array(12).keys()].map(x => (
                  <Grid item xs={2} key={x}>
                    <Tooltip title="applenick">
                      <Avatar variant="rounded" src="https://crafatar.com/avatars/f54a1b17-3167-4162-948a-9c95d65a18a5?overlay&size=40" tabIndex={0} className={classes.avatar} />
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}
