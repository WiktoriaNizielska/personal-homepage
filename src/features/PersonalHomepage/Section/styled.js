import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 16px 58px 0px #090A3308;
  margin: auto;
  max-width: 1216px;
  padding: 32px;
  margin-bottom: 72px;
`;

export const Header = styled.h2`
  font-weight: 900;
  font-size: 30px;
  border-bottom: 1px solid #D1D5DA4D;
  margin: 0;
  max-width: 1151px;
  padding-bottom: 13px;
`;

export const List = styled.ul`
  max-width: 1151px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  margin: 0;
  padding-top: 32px;
`;

export const ListItem = styled.li``;