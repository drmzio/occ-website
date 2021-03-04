import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function PageHeader(props) {
  const { title, subtitle, image } = props;

  return (
    <Box sx={{ py: 4, color: '#fff', backgroundSize: 'cover' }} style={{ backgroundImage: 'url(http://oc.tc/assets/img/image-slider/15.jpg)' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" sx={{ mb: 1 }}>{title}</Typography>
        <Typography variant="h6" component="p">{subtitle}</Typography>
      </Container>
    </Box>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
