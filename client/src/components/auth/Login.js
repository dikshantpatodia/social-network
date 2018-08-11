import React                   from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  withStyles,
}                              from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };
  
  _handleUsername = e => {
    this.setState({
      username: e.target.value,
    });
  };

  _handlePassword = e => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.container}>
        <CardContent>
          <TextField
            id="name"
            label="Username"
            className={classes.textField}
            value={this.state.username}
            onChange={this._handleUsername}
            margin="normal"
          />
          <TextField
            id="name"
            label="Password"
            className={classes.textField}
            value={this.state.password}
            onChange={this._handlePassword}
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

const styles = theme => ({
  container: {
    width: 320,
    margin: '80px auto',
  },
});

export default withStyles(styles)(Login);
