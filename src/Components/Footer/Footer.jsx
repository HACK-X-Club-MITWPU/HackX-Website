import "./index.css";
import SocialButton from "./social-button";
import HorizontalRule from "./horizontal-line";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="col">
        <HorizontalRule />
      </div>

      <div className="col">
        <SocialButton
        // URL="https://www.facebook.com/ianupamshekhar"
        // img="https://assets.leetcode.com/users/avatars/avatar_1655745431.png"
        // alt="Facebook"
        />
        <p>MITWPU, Pune</p>
      </div>

      <div className="col">
        <HorizontalRule />
      </div>
    </footer>
  );
};

export default Footer;
