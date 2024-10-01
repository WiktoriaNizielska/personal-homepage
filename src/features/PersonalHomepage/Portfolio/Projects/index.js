import { Description, Link, LinkContainer, LinkTitle, ProjectTitle, Tile, Wrapper } from "./styled";

export const Projects = ({ title, description, demoLink, codeLink }) => (
  <Wrapper>
    <Tile>
      <ProjectTitle>{title}</ProjectTitle>
      <Description>{description}</Description>
      <LinkContainer>
        <LinkTitle>Demo:</LinkTitle>
        <Link>{demoLink}</Link>
        <LinkTitle>Code:</LinkTitle>
        <Link>{codeLink}</Link>
      </LinkContainer>
    </Tile>
  </Wrapper>
);