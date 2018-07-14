import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListItem,
  IconButton,
} from '@material-ui/core';

import { Add } from '@material-ui/icons';

import Label from '../components/label';
import { addTodo } from '../actions';

class AddTask extends Component {
  render() {
    return (
      <ListItem button onClick={this.props.createTodo}>
        <IconButton>
          <Add color="primary" />
        </IconButton>
        <Label title="Add a task" />
      </ListItem>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  createTodo: () => dispatch(addTodo()),
});

export default connect(null, mapDispatchToProps)(AddTask);
