import { Dispatch, SetStateAction } from "react";
import { loginPageContent } from "../../../../../types/types";
import Container from "../../../../../components/container/Container";
import StyledButton from "../../../../../components/styledButton/StyledButton";
import StyledInput from "../../../../../components/styledInput/StyledInput";
import "./AccountCreationUserInfo.scss"
import ReturnButton from "../../../../../components/returnButton/ReturnButton";

interface AccountCreationUserInfoSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function AccountCreationUserInfo(props: AccountCreationUserInfoSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container
      direction="column"
      id="AccountCreationUserInfo"
    >
      <h1>Create an account</h1>
      <form>
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
        <StyledButton
          id="SubmitButton"
          text="Join now !"
          onClick={() => setPannelPage("create-account-email-success")}
        />
      </form>
      <ReturnButton setPannelPage={setPannelPage} />
    </Container>
  );
}

export default AccountCreationUserInfo;
