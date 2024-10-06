import { Caption, Description, Email, GitHub, Link, Wrapper } from "./styled";

export const Footer = () => (
  <Wrapper>
    <Caption>LET'S TALK!</Caption>
    <Email href="mailto: wiktorianizielska@gmail.com">
      wiktorianizielska@gmail.com
    </Email>
    <Description>
      I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me 🤞
    </Description>
    <Link
      href="https://github.com/WiktoriaNizielska"
      target="_blank"
      rel="noreferrer noopener">
      <GitHub />
    </Link>
  </Wrapper>
);