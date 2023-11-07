import { useState } from "react";
import { TextField, Grid, Typography, Box } from "@mui/material";
import { principal, segundo } from "./style";

const CalculadoraInventario = () => {
  const [cantidadSeis, setCantidadSeis] = useState(0);
  const [cantidadDoce, setCantidadDoce] = useState(0);
  const [cantidadDieciocho, setCantidadDieciocho] = useState(0);

  const total = cantidadSeis * 6 + cantidadDoce * 12 + cantidadDieciocho * 18;
  const unidades24 = Math.floor(total / 24);
  const unidadesIndividuales = total % 24;

  return (
    <>
    <Box sx={principal}>
    <Grid container spacing={2} sx={segundo}>
      <Grid item xs={12}>
        <Typography variant="h4">Calculadora de Inventario</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Cantidad de productos de 6 piezas"
          type="number"
          value={cantidadSeis}
          onChange={(e) => setCantidadSeis(parseInt(e.target.value))}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Cantidad de productos de 12 piezas"
          type="number"
          value={cantidadDoce}
          onChange={(e) => setCantidadDoce(parseInt(e.target.value))}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Cantidad de productos de 18 piezas"
          type="number"
          value={cantidadDieciocho}
          onChange={(e) => setCantidadDieciocho(parseInt(e.target.value))}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">
          Total: {unidades24} y {unidadesIndividuales} piezas
        </Typography>
      </Grid>
    </Grid>
    </Box>
    </>
  );
};

export default CalculadoraInventario;
