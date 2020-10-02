import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const Notification = ({ title, description, PrimaryButton, SecondaryButton, color }) => {
  // console.log( 'define props: ', title, 'title', description, 'description', actionYes, 'yes', actionNo, 'No', color,);
  const classes = useStyles();
  const [isCancel, setisCancel] = useState(true);

  const handleCancelAction = () => {
    setisCancel(false);
  };

  return (
      <div className={classes.root} >
        <Card className={classes.card}>
          <Grid container spacing={0}>
            <Grid item xs={11}>
              <CardHeader
                className={classes.title}
                title={title}
                style={color && { color }}
              />
              <Divider />
              <CardContent>
                <Typography
                  className={classes.subtext}
                  variant='body1'
                >
                  {description}
                </Typography>
              </CardContent>
              <CardActions
                className={classes.alignsty}>
                <Button
                  variant="contained"
                  color='primary'
                >
                  {PrimaryButton}
                </Button>
                <Button
                  variant="contained"
                  color='secondary'
                >
                  {SecondaryButton}
                </Button>
              </CardActions>
            </Grid>
            <Grid item xs={1}
              className={classes.closeIconContainer}>
              <IconButton onClick={handleCancelAction} >
                {isCancel && (
                  <CloseIcon style={color && { color }} />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Card>
      </div>
  )
};


Notification.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

Notification.defaultProps = {
  onClick: () => { },
};

const useStyles = makeStyles((theme) => ({
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
    height: '20px',
  },
  subtext: {
    maxWidth: "28rem",
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
  closeIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  alignsty: {
    marginLeft: '7px',
  }
}));
export default withStyles(useStyles)(Notification);



// class Notification extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isCancel: true,
//       action: [],
//       variant: '',
//     };
//   }
//   toggleShowHide = () => {
//     this.setState(state => ({ isCancel: !state.isCancel }));
//   };

//   render() {
//     const { classes } = this.props;
//     const { variant, action } = this.state;
//     return (
//       <div className={classes.root} >
//         <Card className={classes.card}>
//           <Grid container spacing={0}>
//             <Grid item xs={11}>
//               <CardHeader
//                 className={classes.title}
//                 title={this.props.title}
//                 action={this.props.action}
//                 // style={{ variant: }}
//               />
//               <Divider />
//               <CardContent>
//                 <Typography
//                   className={classes.subtext}
//                   variant='body1'
//                 >
//                   {this.props.description}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button
//                   variant="contained"
//                   color='primary'
//                 >
//                   {this.props.yes}
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color='secondary'
//                 >
//                   {this.props.no}
//                 </Button>
//               </CardActions>
//             </Grid>
//             <Grid item xs={1}>
//               <IconButton onClick={this.toggleShowHide} >
//                 {this.state.isCancel ?
//                   <CloseIcon style={{ variant }} />
//                   : null
//                 }
//               </IconButton>
//             </Grid>
//           </Grid>
//         </Card>
//       </div>
//     )
//   }
// };

