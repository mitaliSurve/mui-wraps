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
                style={{
                  color: this.props.color
                }}
              />
              <Divider />
              <CardContent>
                <Typography
                  className={classes.subtext}
                  variant='body1'
                >
                  {this.props.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color='primary'
                  className={classes.button}
                >
                  {this.props.yes}
                </Button>
                <Button
                  variant="contained"
                  color='secondary'
                  className={classes.button}
                >
                  {this.props.no}
                </Button>
              </CardActions>
            </Grid>
            <Grid item xs={2} className={classes.action}>
              <CardHeader
                style={{
                  color: this.props.color
                }}
                action={
                  <IconButton onClick={this.toggleShowHide} >
                    {this.state.isDisplayed ?
                      <CloseIcon style={{ color: this.props.color }} />
                      : null
                    }
                  </IconButton>
                }
              />
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
  color: PropTypes.string,
};

Notification.defaultProps = {
  color: '',
  onClick: () => { },
};

// const useStyles = makeStyles((theme) => ({
const styles = (theme) => createStyles({
  root: {
    display: 'flex',
    marginTop: '10px',
  },
  card: {
    width: '500px',
    paddingBottom: '10px',
  },
  title: {
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: '#ffffff',
  },
  subtext: {
    // overflow: 'hidden',
    // whiteSpace: 'nowrap',
    // textOverflow: 'ellipsis',
    // width: '400px',
    // position: 'relative',


    maxWidth: "30rem",
    overflow: "hidden",
    position: "relative",
    lineHeight: "1.2em",
    maxHeight: "2.4em",
    textAlign: "justify",
    // marginRight: "-1em",
    paddingRight: "1em",
    "&&:before": {
      content: '"..."',
      position: "absolute",
      right: 0,
      bottom: 0
    },
    "&&:after": {
      content: '""',
      position: "absolute",
      right: 0,
      width: "1em",
      height: "1em",
      marginTop: "0.2em",
    }
  },
  button: {
    borderRadius: '20px'
  },
  actionContainer: {
    display: "flex",
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default withStyles(styles)(Notification);
