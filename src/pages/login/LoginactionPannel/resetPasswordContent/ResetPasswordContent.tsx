import { Dispatch, SetStateAction } from "react";
import { content } from "../../../../types/types";
import Container from "../../../../components/container/Container";

interface ResetPasswordContentSpecs {
  setPannelPage: Dispatch<SetStateAction<content>>,
}

function ResetPasswordContent(props: ResetPasswordContentSpecs) {
  const { setPannelPage } = props;
  return (
    <>
      <Container direction="column" id="ResetPasswordContent">
        <p onClick={() => setPannelPage("login")}>RESET PASSWORD</p>
      </Container>
    </>
  )
}

export default ResetPasswordContent;
