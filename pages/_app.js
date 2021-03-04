import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
import theme from '../src/theme';
import { Hidden, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '../src/components/Link';
import Avatar from '@material-ui/core/Avatar';
import SecurityIcon from '@material-ui/icons/Security';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

export const cache = createCache({ key: 'css', prepend: true });

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const classes = useStyles();

  React.useEffect(() => {
    // Removes the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Overcast Community</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="sticky" color="default">
          <Container maxWidth="md" disableGutters>
            <Toolbar>
              <Link href="/" sx={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
                <Avatar variant="square" sx={{ backgroundColor: 'transparent', color: 'inherit' }}>
                  <SecurityIcon />
                </Avatar>
                <Typography variant="h6" className={classes.title} component="div">
                  Overcast Community
                </Typography>
              </Link>
              <Box sx={{ flexGrow: 1 }} />
              <Hidden smDown>
                <Button color="inherit">Blog</Button>
                <Button color="inherit">Events</Button>
                <Button color="inherit" component={Link} href="/play">Play</Button>
                <Button color="inherit" component={Link} href="/rules">Rules</Button>
                <Button color="inherit" component={Link} href="/staff">Staff</Button>
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
