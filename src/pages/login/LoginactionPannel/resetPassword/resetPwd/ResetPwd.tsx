import { Dispatch, SetStateAction } from "react";
import { loginPageContent } from "../../../../../types/types";
import Container from "../../../../../components/container/Container";
import StyledInput from "../../../../../components/styledInput/StyledInput";
import StyledSubmitInput from "../../../../../components/styledSubmitInput.tsx/StyledSubmitInput";
import "./ResetPwd.css";

interface ResetPwdSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function ResetPwd(props: ResetPwdSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container
      direction="column"
      id="ResetPwd"
    >
      <h1>Reset password</h1>
      <form id="ResetPwdForm">
        <StyledInput
          name="reset-pwd"
          placeholder="Password"
        />
        <StyledInput
          name="reset-pwd"
          placeholder="Confirm password"
        />
        <StyledSubmitInput
          value="Reset password"
          name="backLogin"
          id="SubmitButton"
          onClick={() => setPannelPage("login")}
        />
      </form>
    </Container>
  );
}

export default ResetPwd;
