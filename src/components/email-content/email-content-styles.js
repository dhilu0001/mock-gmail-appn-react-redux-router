import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    position: 'absolule',
  },
  inline: {
    display: 'inline ',
  },
  paper: {
    display: 'flex',
    height: '525px',
    flexDirection: 'column',
    margin: '120px 0px 50px 450px',
  },
}));
