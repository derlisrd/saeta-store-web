"use server";

import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return data;
}

async function Productos() {
  const data = await getData();

  return (
    <Grid container spacing={2}>
      {data.map((i, key) => (
        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={key}>
          <Card sx={{ maxHeight: 345, height: "100%" }}>
            <CardMedia component="img" height="140" image={i.image} alt={i.name} sx={{ objectFit: "contain", padding: 2 }} />
            <CardContent>
              <Typography variant="caption" color="text.secondary">
                {i.category}
              </Typography>
              <Typography variant="caption" display="block">
                {i.title}
              </Typography>
              <Typography variant="caption" display="block" fontWeight="bold">
                {i.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Productos;
