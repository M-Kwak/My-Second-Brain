import { Dispatch, SetStateAction } from "react";
import { loginPageContent } from "../../../../types/types";
import { Link } from "react-router-dom";
import StyledInput from "../../../../components/styledInput/StyledInput";
import StyledButton from "../../../../components/styledButton/StyledButton";
import Container from "../../../../components/container/Container";
import "./LoginContent.scss";


interface LoginContentSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function LoginContent(props: LoginContentSpecs): React.JSX.Element {
  const { setPannelPage } = props;
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
        />
        <span onClick={() => setPannelPage("reset-pwd-info")}>Forgot Password ?</span>
        <Link
          to="/home"
          style={{ width: '60%' }}
        >
          <StyledButton
            text="Login"
            onClick={() => setPannelPage("login")}
          />
        </Link>
      </form>
      <Container direction="row">
        <p>Don't have an account yet ?</p>
        <span onClick={() => setPannelPage("create-account-info")}>Create</span>
      </Container>
    </Container>
  );
}

export default LoginContent;
