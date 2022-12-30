import { useState } from "react";
import { Routes, Route,useNavigate } from "react-router-dom";
import Login from "./Login";
import MyPrograms from "./scenes/MyPrograms";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
 

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
          
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/MyPrograms" element={<MyPrograms />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
