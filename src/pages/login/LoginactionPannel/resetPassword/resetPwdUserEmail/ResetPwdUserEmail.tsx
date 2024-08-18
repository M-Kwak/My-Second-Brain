import { Dispatch, SetStateAction } from "react";
import Container from "../../../../../components/container/Container";
import { loginPageContent } from "../../../../../types/types";
import StyledInput from "../../../../../components/styledInput/StyledInput";
import StyledSubmitInput from "../../../../../components/styledSubmitInput.tsx/StyledSubmitInput";
import "./ResetPwdUserEmail.css";

interface ResetPwdUserEmailSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function ResetPwdUserEmail(props: ResetPwdUserEmailSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container
      direction="column"
      id="ResetPwdUserEmail"
    >
      <h1>Reset password</h1>
      <Container direction="column" id="content">
        <p>Enter your email address and get a link to reset your password</p>
        <form>
          <StyledInput
            name="resetPwdInfo"
            placeholder="Email"
            id="EmailInput"
          />
          <StyledSubmitInput
            name="resetPwdInfo"
            value="Send an email"
            onClick={() => setPannelPage("reset-pwd-email-success")}
          />
        </form>
      </Container>
      <span onClick={() => setPannelPage("login")}>return</span>
    </Container>
  );
}

export default ResetPwdUserEmail;