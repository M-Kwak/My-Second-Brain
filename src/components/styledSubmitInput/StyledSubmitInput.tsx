import "./StyledSubmitInput.scss";

interface StyledSubmitInputSpecs {
  value: string,
  name: string
  id?: string,
  onClick?: () => void,
}

function StyledSubmitInput(props: StyledSubmitInputSpecs) {
  const { value, name, id, onClick } = props;
  return (
    <>
      <input
        id={id}
        className="styledSubmitInput"
        type="submit"
        value={value}
        name={name}
        onClick={onClick}
      />
    </>
  )
}

export default StyledSubmitInput;