import { Wrapper } from "./Container/styled";
import { skills, toLearn } from "./data/data";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";
import { Section } from "./Section";
import { ThemeButton } from "./ThemeButton";

export const PersonalHomepage = () => (
  <Wrapper>
    <ThemeButton/>
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
    <Portfolio/>
    <Footer />
  </Wrapper>
);