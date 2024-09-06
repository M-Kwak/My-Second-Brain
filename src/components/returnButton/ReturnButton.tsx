import "./ReturnButton.scss";
import { Dispatch, SetStateAction } from "react";
import { loginPageContent } from "../../types/types";

interface ReturnButtonSpecs {
  setPannelPage: Dispatch<SetStateAction<loginPageContent>>;
}

function ReturnButton(props: ReturnButtonSpecs) {
  const { setPannelPage } = props;
  return (
    <span
      id="ReturnButton"
      onClick={() => setPannelPage("login")}
    >
      <img src="/images/returnIcon.svg" />
      return
    </span>
  )
}

export default ReturnButton;
