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
} from "@mui/material";

export default function Body() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 10, md: 20 } }}>
      {/* Hero Section: Image & Intro */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 6, md: 12 }}
        alignItems="center"
        sx={{ mb: 10 }}
      >
        {/* Image with Decorative Border */}
        <Box sx={{ flexShrink: 0, position: "relative" }}>
          <Box
            component="img"
            src="https://i.postimg.cc/nL5HR3Wv/About.jpg"
            alt="Dedeibe Geraldine"
            sx={{
              width: { xs: "300px", md: "450px" },
              height: { xs: "300px", md: "450px" },
              objectFit: "cover",
              borderRadius: 4, // 2xl equivalent
              boxShadow: 24,
              display: "block",
            }}
          />
          {/* Decorative Teal Frame */}
          <Box
            sx={{
              position: "absolute",
              top: "-10px",
              left: "-10px",
              width: "100%",
              height: "100%",
              border: "2px solid",
              borderColor: "teal.500",
              borderRadius: 4,
              zIndex: -1,
            }}
          />
        </Box>

        {/* Text Intro Section */}
        <Stack spacing={3} alignItems={isMobile ? "center" : "flex-start"}>
          <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
            <Chip
              label="Soul & Jazz Artist"
              sx={{
                bgcolor: "teal.500",
                color: "white",
                fontWeight: "bold",
                mb: 2,
                borderRadius: 1,
              }}
            />
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h1"
              sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Dedeibe Geraldine
            </Typography>
          </Box>

          <Divider sx={{ width: "100%", borderColor: "teal.500", borderBottomWidth: 2 }} />

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.125rem" },
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <strong>Geraldine Chinonso Dedeibe (Gera D) | Official Biography</strong>
            <br />
            Geraldine Chinonso Dedeibe, professionally known as Gera D, is a talented and versatile artist, songwriter, and self-taught music producer. Born on July 30, 2007, in the heart of Lagos, she comes from a multi-talented family where creativity is a shared bond. Her journey into music and production reached a new height in 2023, the same year she graduated from secondary school.
            <br /><br />
            Guided by her faith, she chooses to create music that is not worldly, focusing instead on themes of motivation, sound advice, and the environment. Her work is fueled by deep passion and feeling, intended to take listeners to another world.
          </Typography>

          {/* Stats Section */}
          <Stack direction="row" spacing={4} alignItems="center" sx={{ pt: 2 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>0</Typography>
              <Typography variant="caption" sx={{ color: "text.disabled", letterSpacing: 1 }}>
                LIVE SHOWS
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ height: 40 }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>0</Typography>
              <Typography variant="caption" sx={{ color: "text.disabled", letterSpacing: 1 }}>
                MONTHLY LISTENERS
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      {/* The Journey Section */}
      <Box sx={{ pt: { xs: 5, md: 10 } }}>
        <Typography variant="h4" sx={{ color: "teal.700", mb: 4, fontWeight: "bold" }}>
          The Journey So Far
        </Typography>
        
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1.5 }}>
              The Early Years
            </Typography>
            <Typography sx={{ color: "text.primary", lineHeight: 1.7 }}>
              Dedeibe's musical journey began in her local church choir, where she 
              first discovered the power of gospel and soul. Influenced by legends 
              like Ella Fitzgerald and Erykah Badu, she spent years honing her 
              unique vocal texture and songwriting skills.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1.5 }}>
              Musical Philosophy
            </Typography>
            <Typography sx={{ color: "text.primary", lineHeight: 1.7 }}>
              "Music is the language of the unspoken," she says. Her approach to 
              composition is fluid—often starting with a simple bass line or a 
              hummed melody that evolves into a complex tapestry of sound. 
              Currently, she is exploring the intersection of West African 
              highlife and contemporary Neo-soul.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}