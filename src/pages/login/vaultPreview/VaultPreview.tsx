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
      <Container direction="column">
        <div className="appPreview">VAULT APP EXEMPLE</div>
      </Container>
    </Container>
  )
}

export default VaultPreview;
