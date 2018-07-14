import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

const style = {
  wrapper: {
    padding: '24px',
  },
};

function Header({ subheading, heading }) {
  return (
    <div style={style.wrapper}>
      <Typography variant="subheading" color="textSecondary">
        {subheading}
      </Typography>
      <Typography variant="title">{heading}</Typography>
    </div>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};

export default Header;
