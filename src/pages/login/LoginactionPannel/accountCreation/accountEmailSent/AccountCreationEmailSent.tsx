import Container from "../../../../../components/container/Container";
import StyledButton from "../../../../../components/styledButton/StyledButton";
import { carousselDirection, loginPageContent } from "../../../../../types/types";
import "./AccountCreationEmailSent.scss";

interface AccountCreationEmailSentSpecs {
  handleContentChange: (
    direction: carousselDirection,
    newContentName: loginPageContent,
  ) => void,
}

function AccountCreationEmailSent(props: AccountCreationEmailSentSpecs): React.JSX.Element {
  const { handleContentChange } = props;
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
        <StyledButton
          text="Back to login"
          onClick={() => handleContentChange("backward", "login")}
        />
      </Container>
    </Container>
  );
}

export default AccountCreationEmailSent;
