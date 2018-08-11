import React                   from 'react';

// Material Components
import {
  withStyles,
}                              from '@material-ui/core';

// import Login                   from './Login';
import Signup                   from './Signup';

class Main extends React.Component {
  render() {
    const {classes} = this.props;
    return (
			<div className={classes.container}>
				{/* <Login /> */}
				<Signup />
			</div>
    );
  }
}

const styles = theme => ({
  container: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },
});

export default withStyles(styles)(Main);
