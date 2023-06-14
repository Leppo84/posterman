import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Navbar from './Navbar';
// import Link from 'docs/src/modules/components/Link';
// import ROUTES from 'docs/src/route';
// import FEATURE_TOGGLE from 'docs/src/featureToggle';

const Header: React.FC = (() => {

  const bannerMessage = `🚀  Questo sito è altamente instabile. Don't try this at home  🚀`

  return (

        <Container>
      <Typography
        fontWeight="medium"
        sx={(theme) => ({
          color: '#fff',
          p: '12px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          justifyContent: 'center',
          fontSize: theme.typography.pxToRem(13),
          background: "black"
        })}
        >
        {bannerMessage}
        </Typography>
        <Navbar />
      </Container>
    )
});

export default Header;