import { Dispatch, SetStateAction } from "react";
import Container from "../../../../../components/container/Container";
import { loginPageContent } from "../../../../../types/types";

interface AccountCreationSuccessSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>,
}

function AccountCreationSuccess(props: AccountCreationSuccessSpecs): React.JSX.Element {
  const { setPannelPage } = props;
  return (
    <Container direction="column">
      <p>Account creation success</p>
      <p onClick={() => setPannelPage("login")}>GO BACK</p>
    </Container>
  );
}

export default AccountCreationSuccess;
