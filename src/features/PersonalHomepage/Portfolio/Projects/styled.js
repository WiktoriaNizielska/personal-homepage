import styled from "styled-components";

export const Tile = styled.div`
  max-width: 592px;
  border: 6px solid ${({ theme }) => theme.tile.border};
  padding: 56px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.tile.background};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: 0.5s;

  &:hover{
    border: 6px solid ${({ theme }) => theme.tile.hover};
  }
`;

export const ProjectTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29.05px;
  color:${({ theme }) => theme.tile.header};
  margin-top: 0;
  text-transform: capitalize;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color:${({ theme }) => theme.tile.description};
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
  color:${({ theme }) => theme.tile.linkTitle};
`;

export const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color:${({ theme }) => theme.tile.link};
  text-decoration-color: ${({ theme }) => theme.tile.underline};
  transition: 0.5s;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 1px;

  &:hover{
    text-decoration-color: ${({ theme }) => theme.tile.linkHover};
  }
`;