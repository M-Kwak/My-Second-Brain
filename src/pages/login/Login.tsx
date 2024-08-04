import Container from "../../components/container/Container";

const loginContainerStyle = {
  height: '100vh',
  backgroundColor: '#222641',
  justifyContent: 'space-around',
}

function Login(): React.JSX.Element {
  return (
    <Container direction="column" customStyle={loginContainerStyle}>
      <Container direction="column">
        <h1>Login</h1>
      </Container>
      <Container direction="column">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <span>Forgot Password ?</span>
      </Container>
      <Container direction="column">
        <button>Login</button>
        <Container direction="row">
          <p>Don't have an account yet ?</p>
          <span>Create</span>
        </Container>
      </Container>
    </Container>
  );
}

export default Login;