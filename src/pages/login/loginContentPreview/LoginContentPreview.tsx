import Container from "../../../components/container/Container";
import ArchivePreview from "../archivePreview/ArchivePreview";
import CalendarPreview from "../calendarPreview/CalendarPreview";
import VaultPreview from "../vaultPreview/VaultPreview";
import "./LoginContentPreview.scss";

function LoginContentPreview(): React.JSX.Element {
  return (
    <Container
      direction="row"
      id="loginPreviewMainContainer"
    >
      <h2>The world is too vast to remember everything,<br /> treat yourself to a second <span id="titleBrain">brain</span> !</h2>
      <ArchivePreview />
      <VaultPreview />
      <CalendarPreview />
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
