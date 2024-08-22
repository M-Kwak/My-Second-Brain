import "./StyledButton.scss";

interface StyledButtonSpecs {
  id?: string,
  text: string,
  onClick: () => void,
}

function StyledButton(props: StyledButtonSpecs) {
  const { text, id, onClick } = props;
  return (
    <>
      <button
        id={id}
        className="styledButton"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

export default StyledButton;
