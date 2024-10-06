import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 691px;
  margin-top: 120px;
`;

export const Caption = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  color: ${({ theme }) => theme.text.paragraph};
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
`;