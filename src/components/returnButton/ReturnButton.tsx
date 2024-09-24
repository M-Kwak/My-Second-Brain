import "./ReturnButton.scss";
import { carousselDirection, loginPageContent } from "../../types/types";

interface ReturnButtonSpecs {
  handleContentChange: (
    direction: carousselDirection,
    newContentName: loginPageContent,
  ) => void,
}

function ReturnButton(props: ReturnButtonSpecs) {
  const { handleContentChange } = props;
  return (
    <span
      id="ReturnButton"
      onClick={() => handleContentChange('backward', 'login')}
    >
      <img src="/images/returnIcon.svg" />
      return
    </span>
  )
}

export default ReturnButton;
