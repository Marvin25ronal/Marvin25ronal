import { Box, AppBar, Toolbar, IconButton, Typography, Button, Avatar, Container, Menu, MenuItem, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import React, { useState } from 'react';
import { Image } from '@mui/icons-material';
const pages = ['Home', 'About', 'Skills', 'Projects'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}

                sx={{ my: 2, color: 'white', display: 'block' }}
                href={`#${page.toLowerCase()}`}
              >
                <Typography textAlign="center" textTransform={'capitalize'}>{page}</Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <div className='social-icons'>
              <a href=''>
                <img src='' />
              </a>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

