import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CardActions from '@material-ui/core/CardActions';
import { Button } from '../../stories/Button';


const Notification = ({ title, description, ...props }) => {
  const classes = useStyles();
  const { isShowing, setIsShowing } = React.useState(true);

  const handleHiddenButton = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton onClick={handleHiddenButton} >
              {
                !isShowing
                  ? 
                  <CloseIcon />
                  :
                  null
              }
            </IconButton>
          }
          title={title}
          className={classes.title} >
        </CardHeader>
        <CardContent >
          <Typography
            className={classes.subtext}
            variant='body2'
            component='p'
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='large' label="Yes" style={{ outline: 0 }} />
          <Button size='large' label="No" style={{ outline: 0 }} />
        </CardActions>
      </Card>
    </div>
  )
};

Notification.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

Notification.defaultProps = {
  // onClick: undefined,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: '10px',
  },
  card: {
    maxWidth: '500px',
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  subtext: {
    maxWidth: "470px",
    overflow: "hidden",
    position: "relative",
    // lineHeight: "1.2em",
    maxHeight: "60px",
    textAlign: "justify",
    marginRight: "-1em",
    paddingRight: "1em",
    marginBottom: "0.5em",
    textAlign: 'left',
    "&&:before": {
      content: '"..."',
      position: "absolute",
      right: 0,
      bottom: 0,
    },
  }
}));
export default withStyles(useStyles)(Notification);
