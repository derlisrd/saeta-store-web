"use client";
import { useState } from "react";
import { AppBar, Box, Container, Drawer, IconButton, List, ListItem, Toolbar, Typography, Link as Linkable } from "@mui/material";
import Icons from "components/ui/icons";
import Link from "next/link";


const navItems = [{
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
}];

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
    <Container maxWidth="lg">
      <AppBar component="nav" position="fixed" sx={{ backdropFilter: "blur(7px)", backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold" color="primary" sx={{ my: 2 }}>
            Saeta .
          </Typography>

          <IconButton edge="end" onClick={handleDrawerToggle} sx={{ display: { xs: "block", sm: "none" } }}>
            <Icons name="menu-2" size={24} />
          </IconButton>

          <Box sx={{ gap: 2, alignItems: "center", display: { xs: "none", sm: "flex" } }}>
            {navItems.map((i, key) => (
              <Linkable component={Link} key={key} href={i.link} color="text.secondary" sx={{ textDecoration: "none" }}>
                <Typography variant="body2">{i.label}</Typography>
              </Linkable>
            ))}
            <IconButton>
              <Icons name="shopping-cart" size={24} />
            </IconButton>
            <IconButton>
              <Icons name="user" size={24} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
      <Toolbar /> {/* Espaciador */}
    </Container>
  );
}
