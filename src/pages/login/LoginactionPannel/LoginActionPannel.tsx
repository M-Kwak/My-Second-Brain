import "./LoginActionPannel.scss";
import { useState } from "react";
import { loginPageContent } from "../../../types/types";
import Container from "../../../components/container/Container";
import LoginContent from "./loginContent/LoginContent";
import AccountCreationUserInfo from "./accountCreation/accountCreationUserInfo/AccountCreationUserInfo";
import AccountCreationEmailSent from "./accountCreation/accountEmailSent/AccountCreationEmailSent";
import AccountCreationSuccess from "./accountCreation/accountCreationSuccess/AccountCreationSuccess";
import ResetPwdUserEmail from "./resetPassword/resetPwdUserEmail/ResetPwdUserEmail";
import ResetPwdEmailSent from "./resetPassword/resetPwdEmailSent/ResetPwdEmailSent";
import ResetPwd from "./resetPassword/resetPwd/ResetPwd";
import ResetPwdSuccess from "./resetPassword/resetPwdSuccess/ResetPwdSuccess";

function LoginActionPannel(): React.JSX.Element {
  const [pannelPage, setPannelPage] = useState<loginPageContent>("login");

  return (
    <Container
      direction="column"
      id="loginActionPannelMainContainer"
    >
      <Container direction="column">
        {pannelPage === "login" && <LoginContent setPannelPage={setPannelPage} />}
        {pannelPage === "create-account-info" && <AccountCreationUserInfo setPannelPage={setPannelPage} />}
        {pannelPage === "create-account-email-success" && <AccountCreationEmailSent setPannelPage={setPannelPage} />}
        {pannelPage === "create-account-success" && <AccountCreationSuccess setPannelPage={setPannelPage} />}
        {pannelPage === "reset-pwd-info" && <ResetPwdUserEmail setPannelPage={setPannelPage} />}
        {pannelPage === "reset-pwd-email-success" && <ResetPwdEmailSent setPannelPage={setPannelPage} />}
        {pannelPage === "reset-pwd" && <ResetPwd setPannelPage={setPannelPage} />}
        {pannelPage === "reset-pwd-success" && <ResetPwdSuccess setPannelPage={setPannelPage} />}
      </Container>
    </Container>
  );
}

export default LoginActionPannel;
