"use server";

import { Box, Grid, Typography } from "@mui/material";
import { productosApiService } from "services/api/producto/producto";

async function getData() {
  const datos = await productosApiService.lista();
  const data = datos.results;
  return data;
}

async function Productos() {
  const data = await getData();

  return (
    <Grid container spacing={2}>
      {data.map((e, key) => (
        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={key}>
          <Box borderRadius={2} boxShadow={2} p={2}>
            <Typography variant="body2">{e.nombre}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Productos;
