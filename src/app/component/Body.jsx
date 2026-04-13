"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  Stack,
  Chip,
  Grid,
  useTheme,
  useMediaQuery,
  Paper
} from "@mui/material";

export default function Body() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 15 } }}>
      {/* Hero Section: Image & Intro */}
      <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center" sx={{ mb: { xs: 10, md: 15 } }}>
        
        {/* Left Side: Image with Decorative Border */}
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ position: "relative", width: "fit-content" }}>
            <Box
              component="img"
              src="https://i.postimg.cc/nL5HR3Wv/About.jpg"
              alt="Dedeibe Geraldine"
              sx={{
                width: { xs: "280px", sm: "350px", md: "100%" },
                maxWidth: "450px",
                aspectRatio: "1/1",
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                display: "block",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.02)" }
              }}
            />
            {/* Decorative Teal Frame */}
            <Box
              sx={{
                position: "absolute",
                top: "-15px",
                left: "-15px",
                width: "100%",
                height: "100%",
                border: "2px solid",
                borderColor: "teal.400",
                borderRadius: 4,
                zIndex: -1,
                opacity: 0.6
              }}
            />
          </Box>
        </Grid>

        {/* Right Side: Text Intro Section */}
        <Grid item xs={12} md={7}>
          <Stack spacing={3} alignItems={isMobile ? "center" : "flex-start"}>
            <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
              <Chip
                label="Soul & Jazz Artist"
                sx={{
                  bgcolor: "teal.600",
                  color: "white",
                  fontWeight: "bold",
                  mb: 2,
                  px: 1,
                }}
              />
              <Typography
                variant={isMobile ? "h3" : "h2"}
                component="h1"
                sx={{ 
                  fontWeight: 900, 
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: "text.primary"
                }}
              >
                Dedeibe Geraldine
              </Typography>
            </Box>

            <Divider sx={{ width: "80px", borderColor: "teal.500", borderBottomWidth: 4, borderRadius: 2 }} />

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                fontSize: { xs: "1rem", md: "1.1rem" },
                textAlign: isMobile ? "center" : "left",
                maxWidth: "600px"
              }}
            >
              <strong>Geraldine Chinonso Dedeibe (Gera D)</strong> is a versatile artist, songwriter, and self-taught producer based in Lagos. 
              <br /><br />
              Since fully embracing her gift for composition in 2023, she has focused on creating music that transcends the "worldly"—crafting soulful anthems of motivation and positive change. Her work is intended to be a vessel, taking listeners to a place of peace and deep reflection.
            </Typography>

            {/* Stats Section */}
            <Stack direction="row" spacing={5} sx={{ pt: 2 }}>
              <Box textAlign="center">
                <Typography variant="h4" sx={{ fontWeight: "800", color: "teal.700" }}>0</Typography>
                <Typography variant="caption" sx={{ color: "text.disabled", fontWeight: 'bold', letterSpacing: 1.5 }}>
                  LIVE SHOWS
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
              <Box textAlign="center">
                <Typography variant="h4" sx={{ fontWeight: "800", color: "teal.700" }}>0</Typography>
                <Typography variant="caption" sx={{ color: "text.disabled", fontWeight: 'bold', letterSpacing: 1.5 }}>
                  MONTHLY LISTENERS
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      {/* The Journey Section */}
      <Box sx={{ pt: 5 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            color: "text.primary", 
            mb: 6, 
            fontWeight: 800,
            textAlign: isMobile ? "center" : "left"
          }}
        >
          The Journey So Far
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%', 
                bgcolor: 'grey.50', 
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'grey.200'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "teal.800" }}>
                The Early Years
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                Geraldine's musical journey reached a new height in 2023, the same year 
                she graduated from secondary school. Her roots in the multi-talented 
                Dedeibe family provided a foundation of shared creativity, allowing her 
                to hone a unique vocal texture that blends traditional soul with modern energy.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%', 
                bgcolor: 'grey.50', 
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'grey.200'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "teal.800" }}>
                Musical Philosophy
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                She works with a dedicated efficiency, often producing entire tracks 
                within a single day. Her music is intended to touch hearts and 
                transform lives. Currently, she continues to collaborate on platforms 
                like BandLab, connecting with artists globally while staying true to 
                her mission of positive change.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}