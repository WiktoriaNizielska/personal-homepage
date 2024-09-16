import { Dot, Header, List, ListItem, Wrapper } from "./styled";

export const Section = ({ title, skills }) => (
  <Wrapper>
    <Header>{title}</Header>
    <List>
      {skills.map((skill) => (
        <ListItem key={skill}>
          <Dot />
          {skill}
        </ListItem>))}
    </List>
  </Wrapper>
);