"use client"
import { AppBar, Typography, Button,} from "@mui/material";

import { Link as MuiLink } from "@mui/material";

export default function Header(){
    return(
        <>
            <AppBar position="static">
                <Typography>
                    GERA D
                </Typography>
              <Button color="inherit" >
                    Home
               </Button>
               <Button color="inherit" >
                    About
               </Button>
                 <Button color="inherit" >
                    Tracks
               </Button>
            </AppBar>
        </>
    )
}