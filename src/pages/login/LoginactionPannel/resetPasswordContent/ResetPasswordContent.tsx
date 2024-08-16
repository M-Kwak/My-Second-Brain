import { Dispatch, SetStateAction } from "react";
import { content } from "../../../../types/types";

interface ResetPasswordContentSpecs {
  setPannelPage: Dispatch<SetStateAction<content>>,
}

function ResetPasswordContent(props: ResetPasswordContentSpecs) {
  const {setPannelPage} = props;
  return (
    <>
      <p onClick={() => setPannelPage("login")}>RESET PASSWORD</p>
    </>
  )
}

export default ResetPasswordContent;
