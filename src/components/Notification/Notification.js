import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';


// const Notification = ({ title, description, ...props }) => {
//   const classes = useStyles();
//   const { isShowing, setIsShowing } = React.useState(true);

//   const handleHiddenButton = () => {
//     setIsShowing(!isShowing);
//   };

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: true,
    };
  }
  toggleShowHide = () => {
    this.setState(state => ({ isDisplayed: !state.isDisplayed }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        <Card className={classes.card}>
          <Grid container spacing={0}>
            <Grid item xs={10}>
              <CardHeader
                className={classes.title}
                title={this.props.title}
              />
              <Divider />
              <CardContent>
                <Typography
                  className={classes.subtext}
                  variant='body1'
                  component='p'
                >
                  {this.props.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" className={classes.button}>{this.props.yes}</Button>
                <Button variant="outlined" className={classes.button}>{this.props.no}</Button>
              </CardActions>
            </Grid>
            <Grid item xs={2}>
              <Divider className={classes.divider} orientation="vertical" flexItem />
              <div className={classes.action}>
                <IconButton onClick={this.toggleShowHide} >
                  {this.state.isDisplayed ?
                    <CloseIcon />
                    : null
                  }
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    )
  }
};

Notification.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

Notification.defaultProps = {
  onClick: () => { },
};

// const useStyles = makeStyles((theme) => ({
const styles = (theme) => createStyles({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: '10px',
  },
  card: {
    width: '500px',
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  divider: {
    width: '1px',
    height: '100%'
  },
  action: {
    marginTop: '-150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtext: {
    textAlign: 'left',
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: 'hidden',
    height: "70px",
  },
  button: {
    borderRadius: '20px'
  }
});
export default withStyles(styles)(Notification);
