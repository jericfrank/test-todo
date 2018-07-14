import React from 'react';
import PropTypes from 'prop-types';

const style = { marginLeft: '7px' };

function Label({ onClick, title }) {
  return <label style={style} onClick={onClick}>{title}</label>;
}

Label.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default Label;
