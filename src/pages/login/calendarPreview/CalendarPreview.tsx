import Container from "../../../components/container/Container";

function CalendarPreview() {
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
          src="/images/calendarIcon.svg"
          alt="calendar icon"
        />
        <h3>Schedule your time and events</h3>
      </Container>
      <img
        className="appPreview"
        src="/images/calendarPreview.svg"
        alt="vault app preview"
      />
    </Container>
  )
}

export default CalendarPreview;
