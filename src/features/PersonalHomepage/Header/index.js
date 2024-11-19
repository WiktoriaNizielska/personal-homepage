import { Image, Wrapper } from "./styled";
import photos from '../../../images/photos.jpg'
import { Text } from "./Text";

export const Header = () => (
  <Wrapper>
    <Image src={photos} alt="Wiktoria Nizielska" />
    <Text />
  </Wrapper>
);