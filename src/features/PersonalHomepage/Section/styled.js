import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 16px 58px 0px #090A3308;
  margin: auto;
  max-width: 1216px;
`;

export const Header = styled.h2`
  font-weight: 900;
  font-size: 30px;
  border-bottom: 1px solid #D1D5DA4D;
  margin: 32px;
  max-width: 1151px;
`;

export const List = styled.ul`
  margin: 32px;
  max-width: 1151px;
`;