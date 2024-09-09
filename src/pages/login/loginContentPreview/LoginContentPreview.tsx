import ArchiveTopicPreview from "../../../components/archiveTopicPreview/ArchiveTopicPreview";
import Container from "../../../components/container/Container";
import "./LoginContentPreview.scss";

function LoginContentPreview(): React.JSX.Element {
  return (
    <Container
      direction="row"
      id="loginPreviewMainContainer"
    >
      <h2>The world is too vast to remember everything,<br /> treat yourself to a second <span id="titleBrain">brain</span> !</h2>
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
          <p>Create topics</p>
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
      <Container
        direction="column"
        className="appPreviewContainer"
      >
        <Container
          direction="column"
          className="innerAppPreviewContainer"
        >
          <img
            src="/images/calendarIcon.svg"
            alt="calendar icon"
          />
          <h3>Schedule your time and events</h3>
        </Container>
        <Container direction="column">
          <div className="appPreview">CALENDAR APP EXEMPLE</div>
        </Container>
      </Container>
      <Container
        direction="column"
        className="appPreviewContainer"
      >
        <h3>And many more to come !</h3>
        <img
          src="/images/barbellIcon.svg"
          alt="barbell icon"
        />
        <img
          src="/images/todolistIcon.svg"
          alt="barbell icon"
        />
      </Container>
    </Container>
  );
}

export default LoginContentPreview;
