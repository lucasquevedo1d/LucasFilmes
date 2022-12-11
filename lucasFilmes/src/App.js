import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Router from "./router/Router";

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Router/>
      </BrowserRouter>
  );
}

export default App;
