import { Spinner, Text, Wrapper } from "./styled";

export const Loading = () => (
  <Wrapper>
    <Text>Please wait, projects are being loaded...</Text>
    <Spinner />
  </Wrapper>
);