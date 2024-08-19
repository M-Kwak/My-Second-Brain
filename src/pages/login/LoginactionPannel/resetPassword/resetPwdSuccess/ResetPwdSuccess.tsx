import { Dispatch, SetStateAction } from "react";
import { loginPageContent } from "../../../../../types/types";
import Container from "../../../../../components/container/Container";
import StyledButton from "../../../../../components/styledButton/StyledButton";
import "./ResetPwdSuccess.css";

interface ResetPwdSuccessSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function ResetPwdSuccess(props: ResetPwdSuccessSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container
      direction="column"
      id="ResetPwdSuccess"
    >
      <h1>Reset password</h1>
      <Container
        direction="column"
        id="content"
      >
        <img src="/images/tickCircle.svg" />
        <p>Your password has been reset with success !</p>
        <StyledButton
          text="Back to login"
          onClick={() => setPannelPage("login")}
        />
      </Container>
    </Container> 
  );
}

export default ResetPwdSuccess;