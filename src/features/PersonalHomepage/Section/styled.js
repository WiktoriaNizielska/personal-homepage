import styled from "styled-components";
import { ReactComponent as DotIcon } from '../../../images/circle.svg';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.background.section};
  box-shadow: ${({ theme }) => theme.shadow};
  margin: auto;
  max-width: 1216px;
  padding: 32px;
  margin-bottom: 72px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 16px;
  }
`;

export const Header = styled.h2`
  font-weight: 900;
  font-size: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.divider};
  margin: 0;
  max-width: 1151px;
  padding-bottom: 13px;
  color: ${({ theme }) => theme.text.header};
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 18px;
  }
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
  padding-left: 0;
  grid-gap: 8px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 16.94px;
    padding-top: 12px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.text.paragraph};
  display: flex;
`;

export const Dot = styled(DotIcon)`
  color:${({ theme }) => theme.text.blue};
  width: 9px;
  height: 9px;
  margin-right: 16px;
  align-self: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 6px;
    height: 6px;
    margin-right: 8px;
  }
`;