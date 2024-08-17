import { Dispatch, SetStateAction } from "react";
import Container from "../../../../../components/container/Container";
import { loginPageContent } from "../../../../../types/types";

interface AccountEmailSentSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function AccountEmailSent(props: AccountEmailSentSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container direction="column">
      <p>Email sent</p>
      <p onClick={() => setPannelPage("login")}>GO BACK</p>
    </Container>
  );
}

export default AccountEmailSent;
