import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.background.main};
    font-family: "Inter", sans-serif;
    margin: 14px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
      margin: 18px;
    }
  }
`;