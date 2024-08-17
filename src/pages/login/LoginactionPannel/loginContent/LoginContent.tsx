import { Dispatch, SetStateAction } from "react";
import StyledInput from "../../../../components/styledInput/StyledInput";
import StyledSubmitInput from "../../../../components/styledSubmitInput.tsx/StyledSubmitInput";
import Container from "../../../../components/container/Container";
import { loginPageContent } from "../../../../types/types";
import "./LoginContent.css"


interface LoginContentSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function LoginContent(props: LoginContentSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container direction="column" id="LoginContent">
      <h1>Login</h1>
      <form id="loginFormContainer">
        <StyledInput
          placeholder="Email"
          name="login"
        />
        <StyledInput
          placeholder="Password"
          name="login"
        />
        <span
          id="forgotPassword"
          onClick={() => setPannelPage("reset-pwd-info")}
        >
          Forgot Password ?
        </span>
        <StyledSubmitInput
          value="Login"
          name="login"
        />
      </form>
      <Container direction="row">
        <p style={{ marginBottom: '0' }}>Don't have an account yet ?</p>
        <span
          id="createAccount"
          onClick={() => setPannelPage("create-account-info")}
        >
          Create
        </span>
      </Container>
    </Container>
  );
}

export default LoginContent;
