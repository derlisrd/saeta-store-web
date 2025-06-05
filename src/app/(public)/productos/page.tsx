
import { Container, Typography } from "@mui/material";
import Productos from "modules/async-components/productos";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Store | productos',
}

function ProductosPage() {
    return <Container>
        <Typography variant="h6">Productos</Typography>
        <Productos />
    </Container>
}

export default ProductosPage;