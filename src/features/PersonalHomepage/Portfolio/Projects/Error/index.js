import { Button, DangerSign, Header, Message, Wrapper } from "./styled";

export const Error = () => (
  <Wrapper>
    <DangerSign />
    <Header>Ooops! Something went wrong... </Header>
    <Message>
      Sorry, failed to load Github projects.
      <br />
      You can check them directly on Github.
    </Message>
    <Button
      href="https://github.com/WiktoriaNizielska"
      target="_blank"
      rel="noreferrer noopener"
    >
      Go to Github
    </Button>
  </Wrapper>
);