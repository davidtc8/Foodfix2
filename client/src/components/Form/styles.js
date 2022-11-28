
import { purple, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      color: 'black'
     
    },
  },



  paper: {
    padding: theme.spacing(1.5),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 15,
    background: 'linear-gradient(45deg, #357a38 30%, #4caf50 90%)',
  
  },
  buttonclear: {
    marginBottom: 15,
    background: 'linear-gradient(45deg, #8ab200 30%, #8ab200 90%)',
  
  },

  paper: {
    marginBottom: 15,
    background: 'linear-gradient(45deg, #ffd54f 30%, #ffd54f 90%)',

  }


}));
