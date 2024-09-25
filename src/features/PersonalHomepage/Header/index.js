import { Image, Wrapper } from "./styled";
import portret from '../../../images/portret.png'
import { Text } from "./Text";

export const Header = () => (
  <Wrapper>
    <Image src={portret} alt="Wiktoria Nizielska" />
    <Text />
  </Wrapper>
);