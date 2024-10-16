import { useDispatch, useSelector } from "react-redux";
import { Text, Wrapper, Button, Dot, Sun } from "./styled";
import { selectDarkMode, toggleTheme } from "./themeSlice";

export const ThemeButton = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  return (
    <Wrapper>
      <Text>DARK MODE {darkMode ? "ON" : "OFF"}</Text>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Dot $move={darkMode}>
          <Sun/>
        </Dot>
      </Button>
    </Wrapper>
  );
};