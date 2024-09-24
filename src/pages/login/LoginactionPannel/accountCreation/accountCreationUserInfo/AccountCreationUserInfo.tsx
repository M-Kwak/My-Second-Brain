import { carousselDirection, loginPageContent } from "../../../../../types/types";
import Container from "../../../../../components/container/Container";
import StyledInput from "../../../../../components/styledInput/StyledInput";
import "./AccountCreationUserInfo.scss"
import ReturnButton from "../../../../../components/returnButton/ReturnButton";
import { FormEvent } from "react";
import StyledSubmitInput from "../../../../../components/styledSubmitInput/StyledSubmitInput";

interface AccountCreationUserInfoSpecs {
  handleContentChange: (
    direction: carousselDirection,
    newContentName: loginPageContent,
  ) => void,
}

function AccountCreationUserInfo(props: AccountCreationUserInfoSpecs): React.JSX.Element {
  const { handleContentChange } = props;
  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleContentChange('forward', 'create-account-email-success')
  }

  return (
    <Container
      direction="column"
      id="AccountCreationUserInfo"
    >
      <h1>Create an account</h1>
      <form onSubmit={(e) => handleSumbit(e)}>
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
          id="SubmitButton"
          value="Join now !"
          name="accountCreationUSerInfo"
        />
      </form>
      <ReturnButton handleContentChange={handleContentChange} />
    </Container>
  );
}

export default AccountCreationUserInfo;
