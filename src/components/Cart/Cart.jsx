import React from 'react';
import CarroItem from './CartItem/CarroItem';
import {Link} from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles';
import {red, blue} from '@material-ui/core/colors';
import useStyles from './styles';

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart,  handleEmptyCart}) =>{
  const classes = useStyles();

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[700]),
      backgroundColor: red[700],
      '&:hover': {
        backgroundColor: red[700],
      },
    },
  }))(Button);

  const OKButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[700]),
      backgroundColor: blue[700],
      '&:hover': {
        backgroundColor: blue[700],
      },
    },
  }))(Button);


  const EmptyCart = () =>(
    <>
    <Typography variant="subtitle1">No tienes nada agregado al pedido, comienza agregar desde el Menu !</Typography>
    <Button component={Link} to ="/" variant="contained"  color="primary">Volver al Menu</Button>
    </>
  );

  const FilledCart = () => {
    return(
    <div>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
              <CarroItem item = {item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
          </Grid>
        ))}
      </Grid>
          <Grid container spacing={6} className={classes.cardDetails}>
            <Grid item className={classes.total}>
              <Typography variant="h5">  TOTAL : </Typography>
              <Typography className={classes.price} > {cart.subtotal.formatted_with_symbol}</Typography>  
            </Grid>   
            </Grid>    
            <Grid container direction="row" justify="center"  alignItems="center" >
               <ColorButton className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick= {handleEmptyCart}> Borrar</ColorButton>
               <OKButton component = {Link} to="/comprar" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Continuar</OKButton>
            </Grid>  
          

    </div>
    )
  };
  if (!cart.line_items) return 'Loading';

  return(
    <div className={classes.container}>
      <Container >
          <div className={classes.toolbar}/>
          <Typography className={classes.title} gutterbotttom="true">
            Detalle Pedido
            </Typography>
          
          { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
      </div>
  )

  
}

export default Cart;