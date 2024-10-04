import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from '../../../../images/envelope.svg';

export const Wrapper = styled.div`
  max-width: 633px;
`;

export const Caption = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  color: ${({ theme }) => theme.text.paragraph};
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 45.99px;
  color: ${({ theme }) => theme.text.header};
  letter-spacing: 2px;
  margin-bottom: 35px;
  margin-top: 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text.paragraph};
  margin-bottom: 32px;
`;

export const Button = styled.a`
  color: ${({ theme }) => theme.background.section};
  background-color: ${({ theme }) => theme.text.blue};
  border-radius: 4px;
  border: 1px solid  ${({ theme }) => theme.border}; 
  padding: 12px 16px;
  letter-spacing: 2px;
  text-decoration: none;
  display: inline-block;

  &:hover{
    box-shadow: 0px 0px 0px 2px #8CC2FF;
  }

  &:active{
    box-shadow: 0px 2px 0px 0px #14462033 inset;
  }
`;

export const Envelope = styled(EnvelopeIcon)`
  color: ${({ theme }) => theme.background.section};
  margin-right: 10px;
`;