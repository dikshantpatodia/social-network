import React                   from 'react';

// Material Components
import {
  withStyles,
}                              from '@material-ui/core';

// import Login                   from './Login';
import Signup                   from './Signup';

class AuthParent extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  _handleUsername = e => this.setState({username: e.target.value});

  _handleEmail = e => this.setState({email: e.target.value});

  _handlePassword = e => this.setState({password: e.target.value});

  render() {
    const {classes} = this.props;
    return (
			<div className={classes.container}>
        
        {/* TODO: Need to refactor more here */}
				{/* <Login
          handleUsername={this._handleUsername}
          handlePassword={this._handlePassword}
          handleEmail={this._handleEmail}
          username={this.state.username}
          email={this.state.email}
          Password={this.state.password}
        /> */}
				<Signup
          handleUsername={this._handleUsername}
          handlePassword={this._handlePassword}
          handleEmail={this._handleEmail}
          username={this.state.username}
          email={this.state.email}
          Password={this.state.password}
        />

			</div>
    );
  }
}

const styles = () => ({
  container: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },
});

export default withStyles(styles)(AuthParent);
