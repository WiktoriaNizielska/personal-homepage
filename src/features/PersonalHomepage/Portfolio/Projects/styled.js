import styled from "styled-components";

export const Tile = styled.div`
  max-width: 592px;
  border: 6px solid ${({ theme }) => theme.border};
  padding: 56px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background.section};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: 0.5s;

  &:hover{
    border: 6px solid #0366D633;
  }
`;

export const ProjectTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29.05px;
  color:${({ theme }) => theme.text.blue};
  margin-top: 0;
  text-transform: capitalize;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color:${({ theme }) => theme.text.paragraph};
  margin: 24px 0;
  text-align: justify;
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
`;

export const LinkTitle = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color:${({ theme }) => theme.text.paragraph};
`;

export const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color:${({ theme }) => theme.text.blue};
  text-decoration-color: ${({ theme }) => theme.underline};
  transition: 0.5s;

  &:hover{
    text-decoration-color: ${({ theme }) => theme.text.blue};
  }
`;