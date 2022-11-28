import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  searchButton: {

    background: 'linear-gradient(45deg, #357a38 30%, #4caf50 90%)'
  },

  // appBarSearch:{
  //   background: 'linear-gradient(45deg, #ffd54f 30%, #ffd54f 90%)',
  // }
}));
