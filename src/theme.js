import { createMuiTheme } from '@material-ui/core';
import { red, blue } from '@material-ui/core/colors';

const defaultTheme = createMuiTheme();

// Create the theme instance
const theme = createMuiTheme({
  palette: {
    primary: blue,
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  shape: {
    borderRadius: 6
  },
  zIndex: {
    appBar: 1030,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          letterSpacing: null,
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: { letterSpacing: 0 },
        h1: { fontWeight: 500 },
        h2: { fontWeight: 500 },
        h3: { fontWeight: 500 },
        h4: { fontWeight: 500 },
        h5: { fontWeight: 500 },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          letterSpacing: 0,
        }
      }
    },
    MuiTooltip: {
      defaultProps: {
        placement: 'top',
        arrow: true,
        disableInteractive: true,
      },
      styleOverrides: {
        arrow: {
          color: defaultTheme.palette.common.black,
        },
        tooltip: {
          backgroundColor: defaultTheme.palette.common.black,
        },
      }
    }
  },
});

export default theme;
