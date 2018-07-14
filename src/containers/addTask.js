import React, { Component } from 'react';

import {
  ListItem,
  IconButton,
} from '@material-ui/core';

import { Add } from '@material-ui/icons';

class AddTask extends Component {
  render() {
    return (
      <ListItem button>
        <IconButton>
          <Add color="primary" />
        </IconButton>
        <label>Add a task</label>
      </ListItem>
    );
  }
}

export default AddTask;
