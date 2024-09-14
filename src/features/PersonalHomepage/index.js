import { Wrapper } from "./Container/styled";
import { skills, toLearn } from "./data/data";
import { Section } from "./Section";

export const PersonalHomepage = () => (
  <Wrapper>
    <Section
      title="My skillset includes 🛠️"
      skills={skills}
    >
    </Section>
    <Section
      title="What I want to learn next 🚀"
      skills={toLearn}
    >
    </Section>
  </Wrapper>
);