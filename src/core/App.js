import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../features/PersonalHomepage";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
