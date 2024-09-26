import Container from "../../../components/container/Container";

function VaultPreview() {
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
          src="/images/vaultIcon.svg"
          alt="vault icon"
        />
        <h3>Store your documents</h3>
      </Container>
      <img
        className="appPreview"
        src="/images/vaultPreview.svg"
        alt="vault app preview"
      />
    </Container>
  )
}

export default VaultPreview;
