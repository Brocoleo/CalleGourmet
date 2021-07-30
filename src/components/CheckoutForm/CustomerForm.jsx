import React, {useState} from 'react';
import { Button,TextField, Grid, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const CustomerForm = ({ checkoutToken, test, data}) => {

  const methods = useForm();
  let [list, setList] = useState({});
  const [cliente, setCliente] = useState({});  

 setList = () => {
  list = checkoutToken.live.line_items;
 }

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
   
  };

 setList();


  return (
    <div className="container">
      <Typography variant="h6" gutterBottom>Datos Cliente</Typography>

        <form onSubmit = {methods.handleSubmit((data) => test({ ...data, cliente, list}))} >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField  variant="outlined" name= "nombre" label="Nombre" value={cliente.name}  onChange={handleChange} fullWidth  required />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField  variant="outlined" name= "apellidos" label="Apellidos" value={cliente.apellidos}  onChange={handleChange} fullWidth  required />
            </Grid>          
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/carro">Volver al carro</Button>
            <Button  type="submit" variant="contained" color="primary">Siguiente</Button>
          </div>
        </form>


    </div>
  );
};
export default CustomerForm;