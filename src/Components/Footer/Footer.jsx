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
              img="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
              alt="Instagram"
            />
            <SocialButton
              URL="https://www.instagram.com/ianupamshekhar/"
              img="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
              alt="LinkedIn"
            />
            <SocialButton
              URL="https://www.linkedin.com/in/anupamshekhar/"
              img="https://cdn-icons-png.flaticon.com/512/3293/3293282.png"
              alt="Email"
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
