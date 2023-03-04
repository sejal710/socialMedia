import {BrowserRouter,Navigate,Routes,Route} from 'react-router-dom';
import HomePage from './scenes/homePage/index';
import LoginPage from './scenes/loginPage/index';
import ProfilePage from './scenes/ProfilePage/index'
import Navbar from './scenes/navbar/index';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
  
      <ThemeProvider theme={theme}>
        <CssBaseline />  
      <BrowserRouter >
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={isAuth ? <HomePage /> : <Navigate to="/" />} />
        <Route path='/profile/:userId' element={ isAuth ? <ProfilePage /> : <Navigate to="/" /> } />
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
