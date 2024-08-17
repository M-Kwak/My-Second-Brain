import { Dispatch, SetStateAction } from "react";
import { content } from "../../../../types/types";
import Container from "../../../../components/container/Container";

interface CreateAccountContentSpecs {
  setPannelPage: Dispatch<SetStateAction<content>>,
}

function CreateAccountContent(props: CreateAccountContentSpecs) {
  const { setPannelPage } = props;
  return (
    <>
      <Container direction="column" id="CreateAccountContent">
        <p onClick={() => setPannelPage("login")}>CREATE AN ACCOUNT</p>
      </Container>
    </>
  )
}

export default CreateAccountContent;
