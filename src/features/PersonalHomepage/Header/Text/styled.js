import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 633px;
`;

export const Caption = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  color: ${({ theme }) => theme.text.grey};
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 45.99px;
  color: ${({ theme }) => theme.text.black};
  letter-spacing: 2px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text.grey};
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.background.section};
  background-color: ${({ theme }) => theme.text.blue};
  border-radius: 4px;
  border: 1px solid  ${({ theme }) => theme.border}; 
  padding: 12px 16px;
  letter-spacing: 2px;
`;