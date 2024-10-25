import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Drawer, Box, List, Button, ListItem, Container, Stack, Typography, Link, ListItemButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '../../../theme';
import { NAVBAR_LIST } from '../../../constants';

import MenuIcon from '@mui/icons-material/Menu';
import NavIcon from './NavIcon/NavIcon';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  const [isOpen, setIsOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <AppBar sx={{ bgcolor: `${theme.light_main}` }}>
      <Container maxWidth="lg">
        <Stack sx={{ display: "flex", alignItems: "center", flexDirection: "row", gap: "20px", p: 1 }}>
          {isMobile &&
            <Button onClick={handleDrawerToggle}>
              <MenuIcon sx={{ color: `${theme.white}` }} />
            </Button>}
          <Link
            to="/"
            component={RouterLink}
            sx={{ width: "50px", height: "50px" }}>
            <img
              width={50}
              height={50}
              src="https://cdn-icons-png.flaticon.com/512/2184/2184561.png"
              alt="main-icon" />
          </Link>
          {isMobile && <Typography sx={{ fontSize: "18px" }} variant="h6">Онлаин кинотеатр</Typography>}

          {isMobile ?
            <Drawer
              open={isOpen}
              onClose={handleDrawerToggle}>
              <Box sx={{ width: "250px", height: "100vh", bgcolor: `${theme.light_main}` }}
                role="presentation"
                onClick={handleDrawerToggle}>
                <List sx={{ height: "100vh", pt: "10%", pb: "50%", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                  {NAVBAR_LIST.map((item, i) => (
                    <Link
                      component={RouterLink}
                      to={item.url}
                      key={i}
                      sx={{ textDecoration: "none", color: theme.white }}>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ gap: "10px" }}>
                          <NavIcon iconName={item.icon} />
                          <Typography variant="h6" component="div">{item.type}</Typography>
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </Drawer>

            : NAVBAR_LIST.map((item, i) => {
              return (
                <Link
                  key={i}
                  to={item.url}
                  component={RouterLink}
                  sx={{ textDecoration: "none", color: theme.white }}
                >
                  <Typography
                    sx={{ '&:hover': { color: theme.pale_purple }, transition: ".2s ease-in-out" }}
                    variant="h6"
                    component="div">{item.type}</Typography>
                </Link>
              )
            })}
        </Stack>
      </Container>
    </AppBar>
  );
}



export default Navbar;