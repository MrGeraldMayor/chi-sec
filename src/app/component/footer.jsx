"use client";

import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
  IconButton,
  Divider,
  Grid,
} from "@mui/material";
import { FaSpotify } from "react-icons/fa";
import { SiBandlab } from "react-icons/si";
import SvgIcon from '@mui/material/SvgIcon';

// Custom SVG for Audiomack (Wrapped in MUI SvgIcon)
const AudiomackIcon = (props) => (
  <SvgIcon {...props}>
    <path
      d="M17.51 10.151l1.795-1.488L24 11.235l-1.43 1.353-5.06-2.437zM8.84 15.367l-1.012 3.864-4.821-2.493 1.516-1.575 4.317.204zm1.18-8.204l1.373 3.964-5.062 2.458-1.43-1.352 5.119-5.07zm3.179 12.316l-3.35 1.776L0 16.32l1.657-1.637 11.542 4.572zm10.793-5.228l-5.118 5.07-1.373-3.964 5.062-2.458 1.429 1.352zm-12.805-9.726l3.35-1.776L24 7.68l-1.657 1.637-11.542-4.572z"
    />
  </SvgIcon>
);

// Custom SVG for Boomplay
const BoomplayIcon = (props) => (
  <SvgIcon {...props}>
    <path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.258V5.742L18.258 12 12 18.258z"
    />
  </SvgIcon>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: "#0a0a0a", // Equivalent to gray.950
        color: "grey.300", 
        mt: 10, 
        pt: 8, 
        pb: 4 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          
          {/* Brand/Logo Section */}
          <Grid item xs={12} md={4} sx={{ textAlign: { base: "center", md: "left" } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "#26a69a", // Teal 400
                fontWeight: "bold", 
                letterSpacing: 2,
                mb: 2 
              }}
            >
              DEDEIBE GERALDINE
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 300, mx: { xs: "auto", md: 0 } }}>
              Bringing the soul of jazz to the modern era. Follow my journey on all major streaming platforms.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={6} justifyContent={{ xs: "center", md: "flex-start" }}>
              <Stack spacing={1}>
                <Typography variant="subtitle2" color="white" fontWeight="bold">Explore</Typography>
                <Link href="#" underline="none" color="inherit" sx={{ '&:hover': { color: '#26a69a' } }}>Home</Link>
                <Link href="#" underline="none" color="inherit" sx={{ '&:hover': { color: '#26a69a' } }}>About</Link>
                <Link href="#" underline="none" color="inherit" sx={{ '&:hover': { color: '#26a69a' } }}>Tour</Link>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="subtitle2" color="white" fontWeight="bold">Contact</Typography>
                <Link href="mailto:info@geralidine.com" underline="none" color="inherit" sx={{ '&:hover': { color: '#26a69a' } }}>Booking</Link>
                <Link href="#" underline="none" color="inherit" sx={{ '&:hover': { color: '#26a69a' } }}>Press Kit</Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Music Streaming Links */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Typography variant="subtitle2" color="white" fontWeight="bold" sx={{ mb: 1 }}>
              Listen Now
            </Typography>
            <Stack direction="row" spacing={1} justifyContent={{ xs: "center", md: "flex-end" }}>
              <IconButton 
                component="a" href="https://spotify.com" target="_blank"
                sx={{ color: "#1DB954", '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                <FaSpotify size={22} />
              </IconButton>

              <IconButton 
                component="a" href="https://audiomack.com" target="_blank"
                sx={{ color: "#FFA500", '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                <AudiomackIcon />
              </IconButton>

              <IconButton 
                component="a" href="https://boomplay.com" target="_blank"
                sx={{ color: "#007FFF", '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                <BoomplayIcon />
              </IconButton>

              <IconButton 
                component="a" href="https://bandlab.com" target="_blank"
                sx={{ color: "#EE4444", '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                <SiBandlab size={22} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: "grey.900" }} />

        {/* Bottom Section */}
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          justifyContent="space-between" 
          alignItems="center"
          spacing={2}
        >
          <Typography variant="caption" color="grey.600">
            © {currentYear} Dedeibe Geraldine. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" underline="hover" variant="caption" color="grey.600">Privacy Policy</Link>
            <Link href="#" underline="hover" variant="caption" color="grey.600">Terms of Use</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}