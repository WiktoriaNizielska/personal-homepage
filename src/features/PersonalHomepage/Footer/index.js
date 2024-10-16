import { Caption, Description, Email, GitHub, Link, Linkedin, LinksContainer, Wrapper } from "./styled";

export const Footer = () => (
  <Wrapper>
    <Caption>LET'S TALK!</Caption>
    <Email href="mailto: wiktorianizielska@gmail.com">
      wiktorianizielska@gmail.com
    </Email>
    <Description>
      I'm always open to new projects. If you need a creative developer who can build responsive design websites and apps, feel free to contact me. Your ideas will come to life. 👋
    </Description>
    <LinksContainer>
      <Link
        title="GitHub"
        href="https://github.com/WiktoriaNizielska"
        target="_blank"
        rel="noreferrer noopener">
        <GitHub />
      </Link>
      <Link
        title="Linkedin"
        href="https://www.linkedin.com/in/wiktoria-nizielska-870633328/"
        target="_blank"
        rel="noreferrer noopener">
        <Linkedin />
      </Link>
    </LinksContainer>
  </Wrapper>
);