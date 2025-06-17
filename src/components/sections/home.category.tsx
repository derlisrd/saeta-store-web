import { Avatar, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

function HomeCategorySection() {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h5"> Categorias en destaque</Typography>
      </Grid>
      {Array.from(Array(6)).map((_, key) => (
        <Grid key={key} size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
          <Card>
            <CardContent>
              <Stack direction="column" alignItems="center" gap={2}>
                <Avatar src="https://picsum.photos/200/300" />
                <Typography variant="overline">Man clothes</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default HomeCategorySection;
