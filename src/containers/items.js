import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListItem,
  Divider,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RadioIcon from '@material-ui/icons/RadioButtonUnchecked';

import Label from '../components/label';
import { removeTodo } from '../actions';
import EditTask from './editTask';

class Items extends Component {
  state = {
    edit: false,
  };

  renderItemText = () => {
    return (
      <div>
        <ListItem>
          <IconButton onClick={this.props.updateTodo}>
            <RadioIcon />
          </IconButton>
          <Label onClick={() => this.setState({ edit: true })} title={this.props.value.text} />
        </ListItem>
        <Divider inset component="li" light />
      </div>
    );
  };

  render() {
    const { text } = this.props.value;
    return (
      <div>
        {this.state.edit || _.isEmpty(text) ? <EditTask value={this.props.value} onHide={() => this.setState({ edit: false })} /> : this.renderItemText() }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  updateTodo: () => {
    const { id } = props.value;
    dispatch(removeTodo(id));
  },
});

export default connect(null, mapDispatchToProps)(Items);
