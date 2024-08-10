import Container from "../../../components/container/Container";
import "./LoginContentPreview.css";

function LoginContentPreview() {
  return (
    <>
      <Container
        direction="row"
        id="loginPreviewMainContainer"
      >
        <Container
          direction="column"
          id="loginPreviewContentContainer"
        >
          <h2>The world is too vast to remember everything, treat yourself to a second brain !</h2>
          <h3>Archive your knwoledge</h3>
          <img
            src="/public/images/brain.svg"
            alt="brain icone"
          />
        </Container>
      </Container>
    </>
  );
}

export default LoginContentPreview;
