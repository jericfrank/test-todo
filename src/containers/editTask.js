import React, { Component } from 'react';

import {
  ListItem,
  TextField,
  IconButton,
} from '@material-ui/core';
import RadioIcon from '@material-ui/icons/RadioButtonUnchecked';

class EditTask extends Component {
  handleChange = (e) => {
    if ( e.key === 'Enter' ) {
      this.props.onSubmit();
    }
  };

  render() {
    return (
      <ListItem>
        <IconButton>
          <RadioIcon />
        </IconButton>
        <TextField fullWidth onKeyPress={this.handleChange} autoFocus />
      </ListItem>
    );
  }
}

export default EditTask;
