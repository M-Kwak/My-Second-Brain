import Container from "../../../components/container/Container";
import StyledInput from "../../../components/styledInput/StyledInput";
import StyledSubmitInput from "../../../components/styledSubmitInput.tsx/StyledSubmitInput";
import "./LoginActionPannel.css";

function LoginActionPannel(): React.JSX.Element {
  return (
    <Container
      direction="column"
      id="mainContainer"
    >
      <Container direction="column">
        <h1>Login</h1>
        <form id="loginFormContainer">
          <StyledInput
            type="text"
            placeholder="Email"
            name="login"
          />
          <StyledInput
            type="text"
            placeholder="Password"
            name="login"
          />
          <span id="forgotPassword">Forgot Password ?</span>
          <StyledSubmitInput
            value="Login"
            name="login"
          />
        </form>
        <Container direction="row">
          <p>Don't have an account yet ?</p>
          <span id="createAccount">Create</span>
        </Container>
      </Container>
    </Container>
  );
}

export default LoginActionPannel;