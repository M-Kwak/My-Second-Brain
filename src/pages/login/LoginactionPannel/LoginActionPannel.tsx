import Container from "../../../components/container/Container";
import "./LoginActionPannel.css";

function LoginActionPannel(): React.JSX.Element {
  return (
    <Container direction="column" id="mainContainer">
      <Container direction="column">
        <h1>Login</h1>
      </Container>
      <Container direction="column">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <span>Forgot Password ?</span>
      </Container>
      <Container direction="column">
        <button>Login</button>
        <Container direction="row">
          <p>Don't have an account yet ?</p>
          <span>Create</span>
        </Container>
      </Container>
    </Container>
  );
}

export default LoginActionPannel;