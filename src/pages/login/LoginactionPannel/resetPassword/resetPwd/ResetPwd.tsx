import { Dispatch, SetStateAction } from "react";
import { loginPageContent } from "../../../../../types/types";
import Container from "../../../../../components/container/Container";
import StyledInput from "../../../../../components/styledInput/StyledInput";
import StyledButton from "../../../../../components/styledButton/StyledButton";
import "./ResetPwd.css";

interface ResetPwdSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function ResetPwd(props: ResetPwdSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container
      direction="column"
      id="ResetPwd"
    >
      <h1>Reset password</h1>
      <form id="ResetPwdForm">
        <StyledInput
          name="reset-pwd"
          placeholder="New password"
        />
        <StyledInput
          name="reset-pwd"
          placeholder="Confirm new password"
        />
        <StyledButton
          text="Reset password"
          id="SubmitButton"
          onClick={() => setPannelPage("reset-pwd-success")}
        />
      </form>
    </Container>
  );
}

export default ResetPwd;
