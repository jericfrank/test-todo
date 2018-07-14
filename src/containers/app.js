import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { selectTodosIncomplete, selectTodosCount } from '../selectors';
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

class App extends Component {
  render() {
    const { classes, todos, count } = this.props;
    return (
      <div className={classes.root}>
        <Header heading={`Todo List (${count})`} subheading="TASKS" />
        <Divider />
        <List dense component="nav">
          <AddTask />
          {_.map(todos, (value, index) => (
            <Items value={value} key={index} />
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: selectTodosIncomplete(state),
    count: selectTodosCount(state),
  };
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array,
  count: PropTypes.number,
};

export default connect( mapStateToProps, null )( withStyles(styles)(App) );
