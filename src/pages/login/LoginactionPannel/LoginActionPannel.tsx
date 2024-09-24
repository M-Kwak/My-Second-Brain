import "./LoginActionPannel.scss";
import "../../../styles/animations.scss";
import { useRef, useState } from "react";
import { carousselDirection, loginPageContent } from "../../../types/types";
import Container from "../../../components/container/Container";
import LoginContent from "./loginContent/LoginContent";
import AccountCreationUserInfo from "./accountCreation/accountCreationUserInfo/AccountCreationUserInfo";
import AccountCreationEmailSent from "./accountCreation/accountEmailSent/AccountCreationEmailSent";
import AccountCreationSuccess from "./accountCreation/accountCreationSuccess/AccountCreationSuccess";
import ResetPwdUserEmail from "./resetPassword/resetPwdUserEmail/ResetPwdUserEmail";
import ResetPwdEmailSent from "./resetPassword/resetPwdEmailSent/ResetPwdEmailSent";
import ResetPwd from "./resetPassword/resetPwd/ResetPwd";
import ResetPwdSuccess from "./resetPassword/resetPwdSuccess/ResetPwdSuccess";
import { removeAllAnimationClasses } from "../../../utils/genericFunctions";

function LoginActionPannel(): React.JSX.Element {
  const [pannelPage, setPannelPage] = useState<loginPageContent>("login");
  const contentContainerRef = useRef<HTMLDivElement | null>(null);

  const handleContentChange = (direction: carousselDirection, newContentName: loginPageContent) => {
    if (
      !direction ||
      !newContentName ||
      !contentContainerRef ||
      !contentContainerRef.current
    ) return;

    const currentContentContainer: HTMLDivElement = contentContainerRef.current;
    const animationClassName: string[] = direction === 'forward' ? ['pushToLeft', 'popFromRight'] : ['pushToRight', 'popFromLeft'];

    currentContentContainer.classList.add(animationClassName[0]);

    // after previous content has finished its slide-out animation
    setTimeout(() => {
      removeAllAnimationClasses(currentContentContainer);
      setPannelPage(newContentName);
      currentContentContainer.classList.add(animationClassName[1]);

      // after new content has finished its slide-in animation
      setTimeout(() => {
        removeAllAnimationClasses(currentContentContainer);
      }, 600);
    }, 520);
  }

  return (
    <Container
      direction="column"
      id="loginActionPannelMainContainer"
    >
      <div
        ref={contentContainerRef}
        className="popFromRight"
      >
        {pannelPage === "login" && (
          <LoginContent handleContentChange={handleContentChange} />
        )}
        {pannelPage === "create-account-info" && <AccountCreationUserInfo handleContentChange={handleContentChange} />}
        {pannelPage === "create-account-email-success" && <AccountCreationEmailSent handleContentChange={handleContentChange} />}
        {pannelPage === "create-account-success" && <AccountCreationSuccess handleContentChange={handleContentChange} />}
        {pannelPage === "reset-pwd-info" && <ResetPwdUserEmail handleContentChange={handleContentChange} />}
        {pannelPage === "reset-pwd-email-success" && <ResetPwdEmailSent handleContentChange={handleContentChange} />}
        {pannelPage === "reset-pwd" && <ResetPwd handleContentChange={handleContentChange} />}
        {pannelPage === "reset-pwd-success" && <ResetPwdSuccess handleContentChange={handleContentChange} />}
      </div>
    </Container>
  );
}

export default LoginActionPannel;
