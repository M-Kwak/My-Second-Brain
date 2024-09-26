import Container from "../../../components/container/Container";

function ArchivePreview() {
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
          src="/images/brainIcon.svg"
          alt="brain icon"
        />
        <h3>Archive your knowledge</h3>
      </Container>
      <img
        className="appPreview"
        src="/images/archivePreview.svg"
        alt="vault app preview"
      />
    </Container>
  )
}

export default ArchivePreview;
