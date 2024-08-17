import { Dispatch, SetStateAction } from "react";
import Container from "../../../../../components/container/Container";
import { loginPageContent } from "../../../../../types/types";

interface ResetPwdEmailSentSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function ResetPwdEmailSent(props: ResetPwdEmailSentSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container direction="column">
      <p>RESET PWD EMAIL SENT</p>
      <p onClick={() => setPannelPage("login")}>GO BACK</p>
    </Container>
  );
}

export default ResetPwdEmailSent;
