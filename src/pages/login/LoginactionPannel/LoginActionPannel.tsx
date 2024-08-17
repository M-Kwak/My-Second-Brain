import "./LoginActionPannel.css";
import { useState } from "react";
import { loginPageContent } from "../../../types/types";
import Container from "../../../components/container/Container";
import LoginContent from "./loginContent/LoginContent";
import AccountEmailSent from "./accountCreation/accountEmailSent/AccountEmailSent";
import AccountCreationSuccess from "./accountCreation/accountCreationSuccess/AccountCreationSuccess";
import ResetPwdUserEmail from "./resetPassword/resetPwdUserEmail/ResetPwdUserEmail";
import ResetPwdSuccess from "./resetPassword/resetPwdSuccess/ResetPwdSuccess";
import ResetPwd from "./resetPassword/resetPwd/ResetPwd";
import AccountUserInfo from "./accountCreation/accountUserInfo/AccountUserInfo";

function LoginActionPannel(): React.JSX.Element {
  const [pannelPage, setPannelPage] = useState<loginPageContent>("login");

  return (
    <Container
      direction="column"
      id="loginActionPannelMainContainer"
    >
      <Container direction="column">
        {pannelPage === "login" && <LoginContent setPannelPage={setPannelPage} />}
        {pannelPage === "create-account-info" && <AccountUserInfo setPannelPage={setPannelPage} />}
        {pannelPage === "create-account-email-success" && <AccountEmailSent setPannelPage={setPannelPage} />}
        {pannelPage === "create-account-success" && <AccountCreationSuccess setPannelPage={setPannelPage} />}
        {pannelPage === "reset-pwd-info" && <ResetPwdUserEmail setPannelPage={setPannelPage} />}
        {pannelPage === "reset-pwd-email-success" && <ResetPwdSuccess setPannelPage={setPannelPage} />}
        {pannelPage === "reset-pwd" && <ResetPwd setPannelPage={setPannelPage} />}
        {pannelPage === "reset-pwd-success" && <ResetPwdSuccess setPannelPage={setPannelPage} />}
      </Container>
    </Container>
  );
}

export default LoginActionPannel;
