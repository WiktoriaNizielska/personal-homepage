import { Wrapper } from "./Container/styled";
import { skills, toLearn } from "./data/data";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Section } from "./Section";

export const PersonalHomepage = () => (
  <Wrapper>
    <Header />
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
    <Footer />
  </Wrapper>
);