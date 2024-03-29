import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const ProductList = ({ checkoutToken, data }) => (
  <>
    <Typography variant="h6" align="center" gutterBottom>Detalle del pedido </Typography>
    <Typography variant="body1" gutterBottom>Nombre: {data.cliente.nombre} {data.cliente.apellidos}</Typography>  
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Cantidad: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default ProductList;