import React                   from 'react';
import PropTypes               from 'prop-types';

// Material Components
import {
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  withStyles,
}                              from '@material-ui/core';

class Signup extends React.Component {
  static propTypes = {
    handleUsername: PropTypes.func,
    handleEmail: PropTypes.func,
    handlePassword: PropTypes.func,
    username: PropTypes.string,
    email: PropTypes.string,
    Password: PropTypes.string,
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
            value={this.props.username}
            onChange={this.props.handleUsername}
            margin="normal"
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            className={classes.textField}
            value={this.props.email}
            onChange={this.props.handleEmail}
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            label="Password"
            type="Password"
            className={classes.textField}
            value={this.props.password}
            onChange={this.props.handlePassword}
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button fullWidth variant="raised" color="primary">
            Signup
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const styles = () => ({
  container: {
    width: 320,
    margin: '80px auto',
  },
});

export default withStyles(styles)(Signup);
