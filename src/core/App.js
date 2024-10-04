import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../features/PersonalHomepage";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../features/PersonalHomepage/ThemeButton/themeSlice";

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
