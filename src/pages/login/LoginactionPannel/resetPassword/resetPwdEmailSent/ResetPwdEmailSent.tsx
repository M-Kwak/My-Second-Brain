import { Dispatch, SetStateAction } from "react";
import { loginPageContent } from "../../../../../types/types";
import Container from "../../../../../components/container/Container";
import StyledSubmitInput from "../../../../../components/styledSubmitInput.tsx/StyledSubmitInput";
import "./ResetPwdEmailSent.css";

interface ResetPwdEmailSentSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function ResetPwdEmailSent(props: ResetPwdEmailSentSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  const emailTest: string = "test@test.com";

  return (
    <Container
      direction="column"
      id="ResetPwdEmailSent"
    >
      <h1>Reset password</h1>
      <Container
        direction="column"
        id="content"
      >
        <img src="/images/emailSuccess.svg" />
        <p>An email has been sent to : {emailTest} <br/> Follow the link inside to reset your password.</p>
        <StyledSubmitInput
          name="ResetPwdEmailSent"
          value="Back to login"
          onClick={() => setPannelPage("login")}
        />
      </Container>
    </Container>
  );
}

export default ResetPwdEmailSent;
