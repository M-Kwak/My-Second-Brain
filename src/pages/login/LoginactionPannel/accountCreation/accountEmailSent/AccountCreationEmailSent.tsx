import { Dispatch, SetStateAction } from "react";
import Container from "../../../../../components/container/Container";
import StyledSubmitInput from "../../../../../components/styledSubmitInput.tsx/StyledSubmitInput";
import { loginPageContent } from "../../../../../types/types";
import "./AccountCreationEmailSent.css";

interface AccountCreationEmailSentSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function AccountCreationEmailSent(props: AccountCreationEmailSentSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  const emailTest: string = "test@test.com";

  return (
    <Container
      direction="column"
      id="AccountCreationEmailSent"
    >
      <h1>Create an account</h1>
      <Container
        direction="column"
        id="content"
      >
        <img src="/images/emailSuccess.svg" />
        <p>A verification email has been sent to : {emailTest} <br/> Please check your mailbox to verify your new account before you sign in.</p>
        <StyledSubmitInput
          name="AccountCreationEmailSent"
          value="Back to login"
          onClick={() => setPannelPage("login")}
        />
      </Container>
    </Container>
  );
}

export default AccountCreationEmailSent;
