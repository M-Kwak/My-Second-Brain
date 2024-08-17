import { Dispatch, SetStateAction } from "react";
import Container from "../../../../../components/container/Container";
import { loginPageContent } from "../../../../../types/types";

interface ResetPwdSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function ResetPwd(props: ResetPwdSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container direction="column">
      <p>RESET PWD</p>
      <p onClick={() => setPannelPage("login")}>GO BACK</p>
    </Container>
  );
}

export default ResetPwd;
