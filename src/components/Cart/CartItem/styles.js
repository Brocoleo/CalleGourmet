import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto', 
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  textSizeLarge: {
    fontSize: '15px'
  },
  precio: {
    paddingBottom: '10px',
    fontSize: '1rem',
    letterSpacing: '1pt',
    fontFamily: 'Alfa Slab One', 
  },
}));
