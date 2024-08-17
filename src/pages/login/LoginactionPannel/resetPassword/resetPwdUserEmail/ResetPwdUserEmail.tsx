import { Dispatch, SetStateAction } from "react";
import Container from "../../../../../components/container/Container";
import { loginPageContent } from "../../../../../types/types";

interface ResetPwdUserEmailSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function ResetPwdUserEmail(props: ResetPwdUserEmailSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container direction="column">
      <p>RESET PWD USER EMAIL</p>
      <p onClick={() => setPannelPage("login")}>GO BACK</p>
    </Container>
  );
}

export default ResetPwdUserEmail;