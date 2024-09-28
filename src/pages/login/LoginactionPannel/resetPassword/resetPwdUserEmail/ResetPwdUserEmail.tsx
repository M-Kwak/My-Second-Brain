import { carousselDirection, loginPageContent } from "../../../../../types/types";
import Container from "../../../../../components/container/Container";
import StyledInput from "../../../../../components/styledInput/StyledInput";
import "./ResetPwdUserEmail.scss";
import ReturnButton from "../../../../../components/returnButton/ReturnButton";
import { FormEvent } from "react";
import StyledSubmitInput from "../../../../../components/styledSubmitInput/StyledSubmitInput";

// DEV MOD ENABLE, PLEASE DELETE ! (look handleSubmit)
const devMod = true;

interface ResetPwdUserEmailSpecs {
  handleContentChange: (
    direction: carousselDirection,
    newContentName: loginPageContent,
  ) => void,
}

function ResetPwdUserEmail(props: ResetPwdUserEmailSpecs): React.JSX.Element {
  const { handleContentChange } = props;
  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (devMod) return;
    handleContentChange('forward', 'reset-pwd-email-success')
  }

  return (
    <Container
      direction="column"
      id="ResetPwdUserEmail"
    >
      <h1>Reset password</h1>
      <Container
        direction="column"
        id="content"
      >
        <p>Enter your email address and get a link to reset your password</p>
        <form onSubmit={(e) => handleSumbit(e)}>
          <StyledInput
            name="resetPwdInfo"
            placeholder="Email"
            id="EmailInput"
          />
          <StyledSubmitInput
            value="Send an email"
            name="resetPwdUserEmail"
          />
        </form>
      </Container>
      <ReturnButton handleContentChange={handleContentChange} />
    </Container>
  );
}

export default ResetPwdUserEmail;