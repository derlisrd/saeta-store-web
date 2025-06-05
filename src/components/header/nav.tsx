"use client";
import { useState } from "react";
import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import Icons from "components/ui/icons";
import Icon from "components/ui/icon";

const navItems = ["Inicio", "Productos", "Nosotros", "Contacto"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" fontWeight="bold" sx={{ my: 2 }}>
        Saeta .
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <Typography>{item}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container maxWidth="lg">
      <AppBar component="nav" position="fixed" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ my: 2 }}>
            Saeta .
          </Typography>

          <IconButton edge="end" onClick={handleDrawerToggle}>
            <Icon>menu</Icon>
          </IconButton>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button key={item}>{item}</Button>
            ))}
            <IconButton>
              <Icons name="shopping-cart" size={24} color="black" />
            </IconButton>
            <IconButton>
              <Icon>users</Icon>
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
