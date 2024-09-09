import './ArchiveTopicPreview.scss';
import Container from "../container/Container";

interface ArchiveTopicPreviewSpecs {
  name: string,
  chapterNumber: number,
  icon?: string,
  className?: string,
}

function ArchiveTopicPreview(props: ArchiveTopicPreviewSpecs) {
  const { name, chapterNumber, icon, className } = props;

  return (
    <Container
      id="ArchiveTopicPreview"
      direction="row"
      className={className}
    >
      <Container direction="row">
        <p>{chapterNumber}</p>
        <img src="/images/book.svg" />
      </Container>
      <Container direction="row">
        <img src={icon !== null ? icon : "/images/questionmark.svg"} />
        <p>{name}</p>
      </Container>
    </Container>
  );
}

export default ArchiveTopicPreview;
