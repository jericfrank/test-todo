import React, { Component } from 'react';

import {
  ListItem,
  Divider,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RadioIcon from '@material-ui/icons/RadioButtonUnchecked';

import EditTask from './editTask';

class Items extends Component {
  state = {
    edit: false,
  };

  renderItemText = () => {
    return (
      <div>
        <ListItem>
          <IconButton>
            <RadioIcon />
          </IconButton>
          <label onClick={() => this.setState({ edit: true })}>{this.props.value}</label>
        </ListItem>
        <Divider inset component="li" light />
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.edit ? <EditTask onSubmit={() => this.setState({ edit: false })} /> : this.renderItemText() }
      </div>
    );
  }
}

export default Items;
