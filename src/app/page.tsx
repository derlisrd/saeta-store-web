import { Container, Typography } from "@mui/material";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Store | inicio',
}

export default function Page() {
  return (
    <Container>
      <Typography variant="h1" component="h1">
        Inicio
      </Typography>
    </Container>
  );
}
