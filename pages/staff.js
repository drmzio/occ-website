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
  staff: {
    textAlign: 'center',
  },
  avatar: {
    width: '100%',
    maxWidth: 84,
    height: 'auto',
    margin: '0 auto',
    marginBottom: theme.spacing(1),
  },
  staffRole: {
    color: theme.palette.text.secondary,
  }
}));

export default function Staff() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageHeader title="Staff" subtitle="These folks help run and maintain Overcast Community" />
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" color="text.secondary" gutterBottom>
              <span style={{ color: '#f89406' }}>Administrators</span>
              <small style={{ marginLeft: 8 }}>4</small>
            </Typography>
            <Divider sx={{ mb: 4 }} />
            <Grid container spacing={3}>
              {[...Array(4).keys()].map(i => (
                <Grid item xs={6} md={3} key={i}>
                  <Box className={classes.staff}>
                    <Avatar variant="rounded" src="https://crafatar.com/avatars/f54a1b17-3167-4162-948a-9c95d65a18a5?overlay&size=84" alt="applenick" className={classes.avatar} />
                    <Typography variant="h5">applenick</Typography>
                    <Typography variant="body2" className={classes.staffRole}>Moderation & Support</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" color="text.secondary" gutterBottom>
              <span style={{ color: '#800080' }}>Developers</span>
              <small style={{ marginLeft: 8 }}>2</small>
            </Typography>
            <Divider sx={{ mb: 4 }} />
            <Grid container spacing={3}>
              {[...Array(2).keys()].map(i => (
                <Grid item xs={6} md={3} key={i}>
                  <Box className={classes.staff}>
                    <Avatar variant="rounded" src="https://crafatar.com/avatars/f54a1b17-3167-4162-948a-9c95d65a18a5?overlay&size=84" alt="applenick" className={classes.avatar} />
                    <Typography variant="h5">applenick</Typography>
                    <Typography variant="body2" className={classes.staffRole}>Moderation & Support</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  )
}
