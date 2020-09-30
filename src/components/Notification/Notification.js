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
          <CardHeader
            className={classes.title}
            title={this.props.title}
            action={
              <IconButton onClick={this.toggleShowHide} >
                {this.state.isDisplayed ?
                  <CloseIcon />
                  : null
                }
              </IconButton>
            }
          >
          </CardHeader>
          <Divider />
          <CardContent>
              <Typography
                className={classes.subtext}
                variant='body1'
              >
                {this.props.description}
              </Typography>
          </CardContent>
          <CardActions className={classes.actionContainer}>
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
  },
  title: {
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  subtext: {
    maxWidth: "28rem",
    overflow: "hidden",
    position: "relative",
    lineHeight: "1.2em",
    maxHeight: "2.4em",
    textAlign: "justify",
    marginRight: "-1em",
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
  }
});
export default withStyles(styles)(Notification);
