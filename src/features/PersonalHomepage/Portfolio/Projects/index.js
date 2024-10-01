import { Description, Link, LinkContainer, LinkTitle, ProjectTitle, Tile } from "./styled";

export const Projects = ({ title, description, demoLink, codeLink }) => (
  <Tile>
    <ProjectTitle>{title}</ProjectTitle>
    <Description>{description}</Description>
    <LinkContainer>
      <LinkTitle>
        Demo:
      </LinkTitle>
      <Link
        href={demoLink}
        target="_blank"
        rel="noreferrer noopener"
      >
        {demoLink}
      </Link>
      <LinkTitle>
        Code:
      </LinkTitle>
      <Link
        href={codeLink}
        target="_blank"
        rel="noreferrer noopener"
      >
        {codeLink}
      </Link>
    </LinkContainer>
  </Tile>
);