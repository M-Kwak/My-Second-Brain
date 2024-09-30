import { Link } from "react-router-dom";
import StyledInput from "../../../../components/styledInput/StyledInput";
import StyledButton from "../../../../components/styledButton/StyledButton";
import Container from "../../../../components/container/Container";
import "./LoginContent.scss";
import { carousselDirection, loginPageContent } from "../../../../types/types";


interface LoginContentSpecs {
  handleContentChange: (
    direction: carousselDirection,
    newContentName: loginPageContent,
  ) => void,
}

function LoginContent(props: LoginContentSpecs): React.JSX.Element {
  const { handleContentChange } = props;
  return (
    <Container
      direction="column"
      id="LoginContent"
    >
      <h1>Login</h1>
      <form>
        <StyledInput
          placeholder="Email"
          name="login"
        />
        <StyledInput
          placeholder="Password"
          name="login"
          type="password"
        />
        <span onClick={() => handleContentChange('forward', 'reset-pwd-info')}>Forgot Password ?</span>
        <Link
          to="/home"
          style={{ width: '60%' }}
        >
          <StyledButton
            text="Login"
            onClick={() => handleContentChange('forward', 'login')}
          />
        </Link>
      </form>
      <Container direction="row">
        <p>Don't have an account yet ?</p>
        <span onClick={() => handleContentChange('forward', 'create-account-info')}>Create</span>
      </Container>
    </Container>
  );
}

export default LoginContent;
