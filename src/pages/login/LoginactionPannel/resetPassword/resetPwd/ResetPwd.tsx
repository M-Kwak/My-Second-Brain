import { FormEvent } from "react";
import { carousselDirection, loginPageContent } from "../../../../../types/types";
import Container from "../../../../../components/container/Container";
import StyledInput from "../../../../../components/styledInput/StyledInput";
import "./ResetPwd.scss";
import StyledSubmitInput from "../../../../../components/styledSubmitInput/StyledSubmitInput";

interface ResetPwdSpecs {
  handleContentChange: (
    direction: carousselDirection,
    newContentName: loginPageContent,
  ) => void,
}

function ResetPwd(props: ResetPwdSpecs): React.JSX.Element {
  const { handleContentChange } = props;
  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleContentChange('forward', 'reset-pwd-success')
  }

  return (
    <Container
      direction="column"
      id="ResetPwd"
    >
      <h1>Reset password</h1>
      <form onSubmit={(e) => handleSumbit(e)}>
        <StyledInput
          name="reset-pwd"
          placeholder="New password"
        />
        <StyledInput
          name="reset-pwd"
          placeholder="Confirm new password"
        />
        <StyledSubmitInput
          id="SubmitButton"
          value="Reset password"
          name="resetPwd"
        />
      </form>
    </Container>
  );
}

export default ResetPwd;
