import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListItem,
  TextField,
  IconButton,
} from '@material-ui/core';
import RadioIcon from '@material-ui/icons/RadioButtonUnchecked';

import { editTodo, removeTodo } from '../actions';

class EditTask extends Component {
  handleChange = (e) => {
    if ( e.key === 'Enter' ) {
      this.props.updateTodo(e.target.value);
    }
  };

  render() {
    return (
      <ListItem>
        <IconButton onClick={this.props.toggleTodo}>
          <RadioIcon />
        </IconButton>
        <TextField fullWidth onKeyPress={this.handleChange} defaultValue={this.props.value.text} placeholder="new task" autoFocus />
      </ListItem>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  updateTodo: (text) => {
    props.onHide();
    const payload = {
      ...props.value,
      text
    };
    dispatch(editTodo(payload));
  },
  toggleTodo: () => {
    dispatch(removeTodo(props.value.id));
  },
});

export default connect(null, mapDispatchToProps)(EditTask);
