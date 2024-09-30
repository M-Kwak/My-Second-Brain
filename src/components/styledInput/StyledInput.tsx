import "./StyledInput.scss";

interface StyledInputSpecs {
  type?: 'text' | 'password',
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
        className={`styledInput ${placeholder === 'Confirm password' ? 'Password' : placeholder}`}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
}

export default StyledInput;