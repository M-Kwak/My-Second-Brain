import { carousselDirection, loginPageContent } from "../../../../../types/types";
import Container from "../../../../../components/container/Container";
import StyledButton from "../../../../../components/styledButton/StyledButton";
import "./AccountCreationSuccess.scss";

interface AccountCreationSuccessSpecs {
  handleContentChange: (
    direction: carousselDirection,
    newContentName: loginPageContent,
  ) => void,
}

function AccountCreationSuccess(props: AccountCreationSuccessSpecs): React.JSX.Element {
  const { handleContentChange } = props;
  return (
    <Container
      direction="column"
      id="AccountCreationSuccess"
    >
      <h1>Create an account</h1>
      <Container
        direction="column"
        id="content"
      >
        <img src="/images/partyPopper.svg" />
        <p>Your account has been created with success !</p>
        <StyledButton
          text="Back to login"
          onClick={() => handleContentChange("backward", "login")}
        />
      </Container>
    </Container> 
  );
}

export default AccountCreationSuccess;
