import { Dispatch, SetStateAction } from "react";
import Container from "../../../../../components/container/Container";
import { loginPageContent } from "../../../../../types/types";

interface ResetPwdSuccessSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function ResetPwdSuccess(props: ResetPwdSuccessSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container direction="column">
      <p>RESET PWD SUCCESS</p>
      <p onClick={() => setPannelPage("login")}>GO BACK</p>
    </Container>
  );
}

export default ResetPwdSuccess;