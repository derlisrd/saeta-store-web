"use server";

import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { productosApiService } from "services/api/producto/producto";

async function getData() {
  const datos = await productosApiService.lista();
  const data = datos.results;
  return data;
}

async function Productos() {
  const data = await getData();
  console.log(data);
  return (
    <Grid container spacing={2}>
      {data.map((i, key) => (
        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={key}>
          <Card sx={{ maxHeight: 345, height: "100%" }}>
            <CardMedia component="img" height="140" image={i.images[0]?.url || "no-image.jpg"} alt={i.name} sx={{ objectFit: "contain", padding: 2 }} />
            <CardContent>
              <Typography variant="caption" color="text.secondary">
                {i.codigo}
              </Typography>
              <Typography variant="caption" display="block">
                {i.nombre}
              </Typography>
              <Typography variant="caption" display="block" fontWeight="bold">
                {i.precio_normal}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Productos;
