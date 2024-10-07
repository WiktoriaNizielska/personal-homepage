import styled from "styled-components";
import { ReactComponent as GitHubIcon } from '../../../images/github.svg';


export const Wrapper = styled.div`
  max-width: 691px;
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-top: 48px;
  }
`;

export const Caption = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  color: ${({ theme }) => theme.text.paragraph};
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 0 0 12px;
  }
`;

export const Email = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 38.73px;
  color: ${({ theme }) => theme.text.header};
  text-decoration: none;
  transition: 0.5s;

  &:hover{
      color: ${({ theme }) => theme.text.blue};
    }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 18px;
    line-height: 21.78px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color: ${({ theme }) => theme.text.header};
  margin: 24px 0 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    line-height: 16.94px;
    margin:12px 0 40px;
  }
`;

export const Link = styled.a``;

export const GitHub = styled(GitHubIcon)`
  width: 48px;
  height: 48px;
  color:  ${({ theme }) => theme.text.header};
  transition: 0.5s;

  &:hover{
        color: ${({ theme }) => theme.text.blue};
    }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 32px;
    height: 32px;
  }
`;