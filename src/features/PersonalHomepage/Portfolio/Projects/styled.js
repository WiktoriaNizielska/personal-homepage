import styled from "styled-components";

export const Tile = styled.div`
  max-width: 592px;
  border: 6px solid ${({ theme }) => theme.border};
  padding: 56px;
`;

export const ProjectTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29.05px;
  color:${({ theme }) => theme.text.blue};
  margin-top: 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color:${({ theme }) => theme.text.grey};
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
  color:${({ theme }) => theme.text.grey};
`;

export const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color:${({ theme }) => theme.text.blue};
  text-decoration: none;
`;