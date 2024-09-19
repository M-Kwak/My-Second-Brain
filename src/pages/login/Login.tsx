import Container from "../../components/container/Container";
import LoginActionPannel from "./loginActionPannel/LoginActionPannel";
import LoginContentPreview from "./loginContentPreview/LoginContentPreview";
import "./Login.scss";

function Login(): React.JSX.Element {
  return (
    <>
      <Container
        id="LoginRootContainer"
        direction="row"
      >
        <LoginContentPreview />
        <LoginActionPannel />
      </Container>
    </>
  );
}

export default Login;
