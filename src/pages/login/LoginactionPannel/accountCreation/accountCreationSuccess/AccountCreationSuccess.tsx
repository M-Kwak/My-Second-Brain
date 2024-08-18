import { Dispatch, SetStateAction } from "react";
import Container from "../../../../../components/container/Container";
import { loginPageContent } from "../../../../../types/types";
import StyledSubmitInput from "../../../../../components/styledSubmitInput.tsx/StyledSubmitInput";
import "./AccountCreationSuccess.css";

interface AccountCreationSuccessSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function AccountCreationSuccess(props: AccountCreationSuccessSpecs): React.JSX.Element {
  const { setPannelPage } = props;
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
        <StyledSubmitInput
          name="AccountCreationEmailSent"
          value="Back to login"
          onClick={() => setPannelPage("login")}
        />
      </Container>
    </Container> 
  );
}

export default AccountCreationSuccess;
