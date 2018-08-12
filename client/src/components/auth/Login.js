import React                   from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  withStyles,
}                              from '@material-ui/core';

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
            fullWidth
            id="username"
            label="Username"
            className={classes.textField}
            value={this.state.username}
            onChange={this._handleUsername}
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            label="Password"
            type="Password"
            className={classes.textField}
            value={this.state.password}
            onChange={this._handlePassword}
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button fullWidth variant="raised" color="primary">
            Login
          </Button>
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
