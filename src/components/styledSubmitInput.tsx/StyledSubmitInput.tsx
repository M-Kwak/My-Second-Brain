import "./StyledSubmitInput.css";

interface StyledSubmitInputSpecs {
  value: string,
  name: string
  id?: string,
}

function StyledSubmitInput(props: StyledSubmitInputSpecs) {
  const { value, name, id } = props;
  return (
    <>
      <input
        id={id}
        className="styledSubmitInput"
        type="submit"
        value={value}
        name={name}
      />
    </>
  )
}

export default StyledSubmitInput;