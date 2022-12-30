import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";

import './index.css';
import Sidebar from "../../scenes/global/Sidebar";
import { Card,CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import Header from "../../components/Header";
import logo from "../../img/AANAPISI.jpg";
import logo1 from "../../img/EOC.jpg";
import logo2 from "../../img/ETS.jpg";
import logo3 from "../../img/GEARUP.jpg";
import logo4 from "../../img/LSAMP.jpg";
import logo5 from "../../img/MCNAIR.jpg";
import logo6 from "../../img/SSS.jpg";
import logo7 from "../../img/TTI.jpg";
import logo8 from "../../img/UB.jpg";
import logo9 from "../../img/VUB.jpg";

function Homepage() {
    
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const colors = tokens(theme.palette.mode);
  return (
    <> 
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
          
<div> 
        
        <Header title="Please select your College program" alignItems="center"/>
        
    
      </div>
    <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
               gap="10px"
        margin="10px"
        
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          
        >
          <a href="https://intra.caeo.unlv.edu/index.aspx">
              <img src={logo} height="200px" width="200px" alt="">
              </img>
            </a>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
            <a href="https://intra.caeo.unlv.edu/index.aspx">
              <img src={logo1} height="200px" width="200px" alt="">
              </img>
            </a>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
            <a href="https://intra.caeo.unlv.edu/index.aspx">
              <img src={logo2} height="200px" width="200px" alt="">
              </img>
            </a>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
            <a href="https://intra.caeo.unlv.edu/index.aspx">
              <img src={logo3} height="200px" width="200px" alt="">
              </img>
            </a>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
            <a href="https://intra.caeo.unlv.edu/index.aspx">
              <img src={logo4} height="200px" width="200px" alt="">
              </img>
            </a>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
            <a href="https://intra.caeo.unlv.edu/index.aspx">
              <img src={logo5} height="200px" width="200px" alt="">
              </img>
            </a>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
            <a href="https://intra.caeo.unlv.edu/index.aspx">
              <img src={logo6} height="200px" width="200px" alt="">
              </img>
            </a>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
            <a href="https://intra.caeo.unlv.edu/index.aspx">
              <img src={logo7} height="200px" width="200px" alt="">
              </img>
            </a>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
            <a href="https://intra.caeo.unlv.edu/index.aspx">
              <img src={logo8} height="200px" width="200px" alt="">
              </img>
            </a>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
            <a href="https://portals-d.caeo.unlv.edu/">
              <img src={logo9} height="200px" width="200px" alt="">
              </img>
            </a>
          </Box>        
           
    {/* <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >ULN
        </Box> */}
        
        </Box> 
        
        </main></div> </ThemeProvider>
        </ColorModeContext.Provider>
    </>
  )
}

export default Homepage
