import { Card, Grid, Typography } from "@mui/material";
async function Productos() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);

  return <Grid container spacing={2}>
    {
      data.map((i, key) => (
        <Grid size={{ xs: 12, sm: 4, md: 3 }} key={key}>
          <Card>
            <Typography variant="body2" >{i.title}</Typography>
          </Card>
        </Grid>
      ))
    }
  </Grid>
}

export default Productos;