import styled from "styled-components";
import { ReactComponent as GitHubIcon } from '../../../images/github.svg';


export const Wrapper = styled.div`
  max-width: 691px;
  margin-top: 120px;
`;

export const Caption = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  color: ${({ theme }) => theme.text.paragraph};
  margin: 0 0 24px;
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
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color: ${({ theme }) => theme.text.header};
  margin:24px 0 56px;
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
`;