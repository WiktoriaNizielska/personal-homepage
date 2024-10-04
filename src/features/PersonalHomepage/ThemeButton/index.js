import { useDispatch, useSelector } from "react-redux";
import { Text, Wrapper, Button } from "./styled";
import { selectDarkMode, toggleTheme } from "./themeSlice";

export const ThemeButton = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(selectDarkMode);


  return (
    <Wrapper>
      <Text>Dark mode {darkMode ? "on" : "off"}</Text>
      <Button
        onClick={() => dispatch(toggleTheme())}
      >
      </Button>
    </Wrapper>
  );
};