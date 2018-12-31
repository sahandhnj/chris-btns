import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './App.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function playme(code) {
  var audio = document.getElementById('audio');
  // audio.src = `audio${code}.mp3`;
  audio.src= 'error.wav'
  audio.load();
  audio.play();
}

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div className='container'>
      <Button variant="contained" color="default" className={classes.button} onClick={() => { playme(1) }}>
        1
      </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => { playme(2) }}>
        2
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={() => { playme(3) }}>
        3
      </Button>
      <div>
					<audio id="audio">
						<source type="audio/mp3" />
					</audio>
			</div>
    </div >
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);