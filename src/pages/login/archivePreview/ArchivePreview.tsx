import ArchiveTopicPreview from "../../../components/archiveTopicPreview/ArchiveTopicPreview";
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
      <Container
        direction="column"
        className="innerAppPreviewContainer"
      >
        <p style={{ marginBottom: 0 }}>Create topics</p>
        <Container direction="row">
          <ArchiveTopicPreview
            className="archiveTopicExemple"
            name="Painting"
            chapterNumber={14}
            icon="/images/paintingArt.svg"
          />
          <ArchiveTopicPreview
            className="archiveTopicExemple"
            name="Cooking"
            chapterNumber={3}
            icon="/images/cookHat.svg"
          />
          <ArchiveTopicPreview
            className="archiveTopicExemple"
            name="Astronomy"
            chapterNumber={9}
            icon="/images/telescope.svg"
          />
        </Container>
      </Container>
      <Container
        direction="column"
        className="innerAppPreviewContainer"
      >
        <p>And fill it with chapter, images and texts.</p>
        <div className="appPreview">ARCHIVE APP EXEMPLE</div>
      </Container>
    </Container>
    )
}

export default ArchivePreview;
