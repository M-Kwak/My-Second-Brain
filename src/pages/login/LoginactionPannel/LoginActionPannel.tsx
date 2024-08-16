import "./LoginActionPannel.css";
import { useState } from "react";
import { content } from "../../../types/types";
import Container from "../../../components/container/Container";
import LoginContent from "./loginContent/LoginContent";
import CreateAccountContent from "./createAccountContent/CreateAccountContent";
import ResetPasswordContent from "./resetPasswordContent/ResetPasswordContent";

function LoginActionPannel(): React.JSX.Element {
  const [pannelPage, setPannelPage] = useState<content>("login");

  return (
    <Container
      direction="column"
      id="loginActionPannelMainContainer"
    >
      <Container direction="column">
        {pannelPage === "login" && <LoginContent setPannelPage={setPannelPage} />}
        {pannelPage === "create" && <CreateAccountContent setPannelPage={setPannelPage} />}
        {pannelPage === "reset" && <ResetPasswordContent setPannelPage={setPannelPage} />}
      </Container>
    </Container>
  );
}

export default LoginActionPannel;
