import { Description, Title, Button, Caption, Wrapper, Envelope } from "./styled";

export const Text = () => (
  <Wrapper>
    <Caption>THIS IS</Caption>
    <Title>Wiktoria Nizielska</Title>
    <Description>
    ⚛️ I’m a Frontend Developer passionate about creating new websites, currently looking for new job opportunities.
    </Description>
    <Button href="mailto: wiktorianizielska@gmail.com">
      <Envelope />
      Hire Me
    </Button>
  </Wrapper>
);