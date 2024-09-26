import styled from "styled-components";
import { ReactComponent as Github } from '../../../../images/github.svg';

export const Title = styled.p`

`;

export const Caption = styled.p`

`;

export const GithubIcon = styled(Github)`
  color: ${({ theme }) => theme.text.blue};
  width: 40px;
  height:40px;
`;