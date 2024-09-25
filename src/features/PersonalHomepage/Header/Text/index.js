import { Description, Title, Button, Caption, Wrapper, Envelope } from "./styled";

export const Text = () => (
  <Wrapper>
    <Caption>THIS IS</Caption>
    <Title>Wiktoria Nizielska</Title>
    <Description>
      👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
    </Description>
    <Button href="mailto: wiktorianizielska@gmail.com">
      <Envelope />
      Hire Me
    </Button>
  </Wrapper>
);