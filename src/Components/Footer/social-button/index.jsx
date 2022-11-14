function SocialButton(props) {
  return (
    <div className="social-button">
      <a href={props.URL}>
        <img src={props.img} alt={props.alt} />
      </a>
    </div>
  );
}

export default SocialButton;
