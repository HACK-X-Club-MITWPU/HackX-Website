import SocialButton from "./social-button";
import HorizontalRule from "./horizontal-line";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <HorizontalRule />
            <Heading>Useful Links</Heading>
            <FooterLink href="/home">Home</FooterLink>
            <FooterLink href="/events">Events</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/achivements">Achievements</FooterLink>
          </Column>

          <Column>
            <SocialButton
              URL="https://www.facebook.com/ianupamshekhar"
              img="https://assets.leetcode.com/users/avatars/avatar_1655745431.png"
              alt="Facebook"
            />
            <SocialButton
              URL="https://www.instagram.com/ianupamshekhar/"
              img="https://assets.leetcode.com/users/avatars/avatar_1655745431.png"
              alt="Instagram"
            />
            <SocialButton
              URL="https://www.linkedin.com/in/anupamshekhar/"
              img="https://assets.leetcode.com/users/avatars/avatar_1655745431.png"
              alt="LinkedIn"
            />
            <p>MITWPU, Pune</p>
          </Column>

          <Column>
            <HorizontalRule />
            <img
              src="https://assets.leetcode.com/users/avatars/avatar_1655745431.png"
              alt="Logo"
            />
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
