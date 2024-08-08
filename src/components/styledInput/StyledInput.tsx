import "./StyledInput.css";

interface StyledInputSpecs {
  type?: 'text',
  placeholder?: string,
  id?: string,
  name: string,
}

function StyledInput(props: StyledInputSpecs) {
  const { type, placeholder, id, name } = props;
  return (
    <>
      <input
        id={id}
        className="styledInput"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
}

export default StyledInput;