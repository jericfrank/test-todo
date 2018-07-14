import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Header from '../components/header';
import AddTask from './addTask';
import Items from './items';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    fontFamily: 'roboto',
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

const ITEMS = [ 'go shopping', 'call telephone company', 'call mother' ];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header heading="Nico Smit's List (10)" subheading="TASKS" />
        <Divider />
        <List dense component="nav">
          <AddTask />
          {_.map(ITEMS, (value, index) => (
            <Items value={value} key={index} />
          ))}
        </List>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
