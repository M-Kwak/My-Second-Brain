import { Dispatch, SetStateAction } from "react";
import { loginPageContent } from "../../../../../types/types";
import Container from "../../../../../components/container/Container";
import StyledSubmitInput from "../../../../../components/styledSubmitInput.tsx/StyledSubmitInput";
import StyledInput from "../../../../../components/styledInput/StyledInput";
import "./AccountCreationUserInfo.css"

interface AccountCreationUserInfoSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function AccountCreationUserInfo(props: AccountCreationUserInfoSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container direction="column" id="AccountCreationUserInfo">
      <h1>Create an account</h1>
      <form id="CreateAccountForm">
        <StyledInput
          name="create-account"
          placeholder="Email"
        />
        <StyledInput
          name="create-account"
          placeholder="Password"
        />
        <StyledInput
          name="create-account"
          placeholder="Confirm password"
        />
        <StyledSubmitInput
          value="Join now !"
          name="send-user-info"
          id="SubmitButton"
        />
      </form>
      <span onClick={() => setPannelPage("login")}>return</span>
    </Container>
  );
}

export default AccountCreationUserInfo;
