import LoginActionPannel from "./loginActionPannel/LoginActionPannel";
import LoginContentPreview from "./loginContentPreview/LoginContentPreview";

function Login(): React.JSX.Element {
  return (
    <>
      <LoginContentPreview />
      <LoginActionPannel />
    </>
  );
}

export default Login;
