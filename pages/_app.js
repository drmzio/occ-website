import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
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
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import MenuIcon from '@material-ui/icons/Menu';

import theme from '../src/theme';
import 'nprogress/nprogress.css';

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
  },
  navLink: {
    fontSize: 15,
    '&.active': {
      backgroundColor: theme.palette.action.hover,
    }
  },
  navCta: {
    marginLeft: theme.spacing(1.5),
  }
}));

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    // Removes the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
              <Hidden mdDown>
                <Button color="inherit" className={classes.navLink}>Blog</Button>
                <Button color="inherit" className={classes.navLink}>Events</Button>
                {/*<Button color="inherit" component={Link} href="/play" className={classes.navLink}>Play</Button>*/}
                <Button color="inherit" component={Link} href="/rules" className={classes.navLink}>Rules</Button>
                <Button color="inherit" component={Link} href="/staff" className={classes.navLink}>Staff</Button>
                <Button color="primary" variant="contained" component={Link} href="/play" className={classes.navCta}>Play Now</Button>
              </Hidden>
              <Hidden mdUp>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuClick}
                >
                  <MenuIcon />
                </IconButton>
                <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae debitis dolorem eligendi est eum ex explicabo facilis fuga, ipsum iusto laborum magnam mollitia nostrum omnis quam quia quo voluptates?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae debitis dolorem eligendi est eum ex explicabo facilis fuga, ipsum iusto laborum magnam mollitia nostrum omnis quam quia quo voluptates?
                  Lorem ipsum dolor sit amet, con sectetur adipisicing elit. Aliquam beatae debitis dolorem eligendi est eum ex explicabo facilis fuga, ipsum iusto laborum magnam mollitia nostrum omnis quam quia quo voluptates?
                </Popover>
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
