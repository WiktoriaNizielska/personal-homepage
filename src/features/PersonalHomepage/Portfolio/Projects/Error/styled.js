import styled from "styled-components";
import { ReactComponent as DangerIcon } from "../../../../../images/danger.svg";

export const Wrapper = styled.div`
  max-width: 426.53px;
  margin: auto;
  text-align: center;
  margin-top: 88px;
`;

export const Header = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29.05px;
  color: ${({ theme }) => theme.text.black};
  margin: 16px 0 32px;
`;

export const Message = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.text.black};
  margin: 0;
`;

export const DangerSign = styled(DangerIcon)`
  width: 37px;
  height: 33.34px;
  color: ${({ theme }) => theme.text.black};
`;

export const Button = styled.a`
  display: inline-block;
  margin: 32px 0 140px;
  background-color: ${({ theme }) => theme.text.blue};
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border};
  text-decoration: none;
  color: ${({ theme }) => theme.background.section};
  font-weight: 600;
  font-size: 20.06px;
  line-height: 24.28px;
  letter-spacing: 1px;
`;