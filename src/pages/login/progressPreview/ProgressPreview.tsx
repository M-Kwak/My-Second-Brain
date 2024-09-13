import Container from "../../../components/container/Container";

function ProgressPreview() {
  return (
    <Container
    direction="column"
    className="appPreviewContainer"
  >
    <Container
      direction="column"
      className="innerAppPreviewContainer"
    >
      <img
        src="/images/barbellIcon.svg"
        alt="barbell icon"
      />
      <h3>Settle your own goals and track your progresses</h3>
    </Container>
    <Container direction="column">
      <div className="appPreview">PROGESS APP EXEMPLE</div>
    </Container>
  </Container>
  )
}

export default ProgressPreview;
