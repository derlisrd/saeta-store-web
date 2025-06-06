"use client";
import { useState } from "react";
import { Box, Container, Drawer, IconButton, List, ListItem, Typography, Link as Linkable, Stack } from "@mui/material";
import Icons from "components/ui/icons";
import Link from "next/link";

const navItems = [
  {
    label: "Inicio",
    link: "/",
  },
  {
    label: "Productos",
    link: "/productos",
  },
  {
    label: "Contacto",
    link: "/contacto",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", mx: 2, minWidth: 240 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ my: 2 }}>
        Saeta .
      </Typography>
      <List>
        {navItems.map((i, key) => (
          <ListItem key={key}>
            <Typography>{i.label}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box width="100%" sx={{ position: "fixed", top: 0, left: 0, py: 2, backdropFilter: "blur(8px)", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6" fontWeight="bold" color="primary">
            Saeta .
          </Typography>
          <IconButton edge="end" onClick={handleDrawerToggle} sx={{ display: { xs: "block", sm: "none" } }}>
            <Icons name="menu-2" size={24} />
          </IconButton>
          <Box sx={{ gap: 2, alignItems: "center", display: { xs: "none", sm: "flex" } }}>
            {navItems.map((i, key) => (
              <Linkable component={Link} key={key} href={i.link} color="text.secondary" sx={{ textDecoration: "none", mx: 1 }}>
                <Typography variant="body1">{i.label}</Typography>
              </Linkable>
            ))}
            <IconButton>
              <Icons name="shopping-cart" size={24} />
            </IconButton>
            <IconButton>
              <Icons name="user" size={24} />
            </IconButton>
          </Box>
        </Stack>
      </Container>
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </Box>
  );
}
