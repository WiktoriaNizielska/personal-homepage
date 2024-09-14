import { Header, List, ListItem, Wrapper } from "./styled";

export const Section = ({ title, skills }) => (
  <Wrapper>
    <Header>{title}</Header>
    <List>
      {skills.map((skill) => (
        <ListItem key={skill}>{skill}</ListItem>))}
    </List>
  </Wrapper>
);