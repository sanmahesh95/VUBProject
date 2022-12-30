import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { height } from "@mui/system";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      

      
      {/* <IconButton>
          <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
          <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
          <PersonOutlinedIcon />
          </IconButton>
    
        </Box> */}
    {/* <AppBar  display={"flex"}  height="25px"  sx={{bgcolor :'error.main',flexDirection:'row',justifyContent:'space-between'}} position="fixed"> */}
    
   
{/* Dark-Mode ICONS */}
        <Box display='flex'  margin='10px'  >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton>
        <SettingsOutlinedIcon />
        </IconButton>
          
          {/* <IconButton>
          <NotificationsOutlinedIcon />
          </IconButton> */}
          
          {/* <IconButton>
          <PersonOutlinedIcon />
          </IconButton> */}
 {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        >
        
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
     </Box>
     {/* </AppBar> */}
    
     </Box>
  );
};

export default Topbar;
