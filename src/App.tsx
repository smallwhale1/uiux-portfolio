import "./styles/App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Home from "./components/Home";
import Topbar from "./components/Topbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      <Home />
      <Projects />
      <Footer />
      {/* <Skills /> */}
    </ThemeProvider>
  );
}

export default App;
