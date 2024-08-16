import { Dispatch, SetStateAction } from "react";
import { content } from "../../../../types/types";

interface CreateAccountContentSpecs {
  setPannelPage: Dispatch<SetStateAction<content>>,
}

function CreateAccountContent(props: CreateAccountContentSpecs) {
  const {setPannelPage} = props;
  return (
    <>
      <p onClick={() => setPannelPage("login")}>CREATE AN ACCOUNT</p>
    </>
  )
}

export default CreateAccountContent;
