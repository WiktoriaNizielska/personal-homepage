import { Header, List, Wrapper } from "./styled";

export const Section = ({ title, list }) => (
  <Wrapper>
    <Header>{title}</Header>
    <List>{list}</List>
  </Wrapper>
);