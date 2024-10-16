import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from '../../../images/sun.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 15.6px;
  color: ${({ theme }) => theme.text.paragraph};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
   display: none;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 48px;
  height: 26px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.themeButton.border};
  background-color: ${({ theme }) => theme.themeButton.background};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  outline-offset: 6px;
`;

export const Dot = styled.div`
  position: absolute;
  top: 1;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.text.paragraph};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
 
  ${({ $move }) => $move && css`
        left: 24px;
        transform: rotate(360deg);
    `}
`;

export const Sun = styled(SunIcon)`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme.sun};
`;