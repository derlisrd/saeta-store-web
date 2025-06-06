import { Container, Typography } from "@mui/material";
import HomeCategorySection from "components/sections/home.category";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Store | inicio',
}

export default function Page() {
  return (
    <Container>
      <HomeCategorySection />
    </Container>
  );
}
