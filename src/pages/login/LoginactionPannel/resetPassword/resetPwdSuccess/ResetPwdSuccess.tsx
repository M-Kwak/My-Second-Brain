import { carousselDirection, loginPageContent } from "../../../../../types/types";
import Container from "../../../../../components/container/Container";
import StyledButton from "../../../../../components/styledButton/StyledButton";
import "./ResetPwdSuccess.scss";

interface ResetPwdSuccessSpecs {
  handleContentChange: (
    direction: carousselDirection,
    newContentName: loginPageContent,
  ) => void,
}

function ResetPwdSuccess(props: ResetPwdSuccessSpecs): React.JSX.Element {
  const { handleContentChange } = props;
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
          onClick={() => handleContentChange("backward", "login")}
        />
      </Container>
    </Container> 
  );
}

export default ResetPwdSuccess;