"use client";

import React from "react";
import { Box, Typography, Avatar, Stack, useTheme, useMediaQuery } from "@mui/material";

export default function MediaRow() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ p: { xs: 3, md: 8 } }}>
      <Stack
        // Stacks vertically on mobile, horizontally on desktop
        direction={isMobile ? "column" : "row"}
        spacing={{ xs: 5, md: 10 }}
        // Center-aligns everything on mobile, vertical-center on desktop
        alignItems="center"
        justifyContent="center"
        sx={{
          // Centers the text text on mobile, left-aligns on desktop
          textAlign: isMobile ? "center" : "left",
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {/* Large Circular Image */}
        <Avatar
          src="https://via.placeholder.com/400" 
          alt="Profile Image"
          sx={{
            // Refined sizes: smaller than before but still prominent
            width: { xs: 220, sm: 300, md: 380 }, 
            height: { xs: 220, sm: 300, md: 380 },
            boxShadow: 8,
            border: "6px solid white",
            // Ensures image is centered in its container on mobile
            mx: isMobile ? "auto" : 0, 
          }}
        />

        {/* Text Content */}
        <Box sx={{ flex: 1, maxWidth: { md: "600px" } }}>
          <Typography 
            variant={isMobile ? "h4" : "h2"}
            component="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 2, 
              color: "primary.main",
              lineHeight: 1.2,
              // Tightens the letter spacing for a more modern feel
              letterSpacing: "-0.02em" 
            }}
          >
            Featured Artist Title
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: "text.secondary", 
              lineHeight: 1.8, 
              fontSize: { xs: "1rem", md: "1.15rem" }
            }}
          >
            By adjusting the dimensions to a maximum of 380px, the visual weight 
            is now perfectly balanced. On mobile views, the image and text automatically 
            center themselves, providing a clean and professional look for your 
            artist profile or landing page.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}