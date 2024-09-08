import { useEffect, useState } from "react";
import { application } from "../../types/types";
import Container from "../../components/container/Container";
import "./Homepage.scss";
import CurvedLine from "../../components/curvedLine/CurvedLine";

type iconType = {
  name: application,
  image: string,
};

function Homepage() {
  const apps: iconType[] = [
    {
      name: 'archive',
      image: '/images/brainIcon.svg'
    },
    {
      name: 'calendar',
      image: '/images/calendarIcon.svg'
    },
    {
      name: 'to-do',
      image: '/images/todolistIcon.svg'
    },
    {
      name: 'vault',
      image: '/images/vaultIcon.svg'
    },
    {
      name: 'progress',
      image: '/images/barbellIcon.svg'
    },
  ]
  const [selectedApp, setSelectedApp] = useState<application>(null);
  const [appHovered, setAppHovered] = useState<application>(null);

  useEffect(() => {
    const appIcons: HTMLCollectionOf<Element> = document.getElementsByClassName('appIconContainer');

    const handleMouseOver: (event: Event) => void = (event: Event) => {
      const target: HTMLElement = (event.currentTarget as HTMLElement);
      const appName: string | application = target.getAttribute('data-name');
      setAppHovered(appName as application);
    };

    const handleMouseOut: () => void = () => {
      setAppHovered(null);
    };

    Array.from(appIcons).forEach(icon => {
      icon.addEventListener('mouseover', handleMouseOver);
      icon.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      Array.from(appIcons).forEach(icon => {
        icon.removeEventListener('mouseover', handleMouseOver);
        icon.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <Container
      direction="column"
      id="HomePage"
    >
      <header>
        <img src="/images/accountIcon.svg" />
        {selectedApp !== null &&
          <img src="/images/hamburgerIcon.svg"
            onClick={() => setSelectedApp(null)}
          />
        }
      </header>
      <main>
        {selectedApp === null && (
          <>
            <Container
              id="appMainContainer"
              direction="row"
            >
              {apps.map((app) => (
                <Container
                  key={app.name}
                  className="appIconContainer"
                  dataName={app.name}
                  direction="row"
                  onClick={() => setSelectedApp(app.name)}
                >
                  <img
                    src={app.image}
                    id={app.name === "calendar" ? "CalendarIcon" : undefined}
                  />
                </Container>
              ))}
            </Container>
            <Container
              direction="row"
              id="desktopSummaryContainer"
            >
              <Container direction="column">
                <Container direction="column">
                  <p>TODO - Calendar</p>
                </Container>
                <Container direction="column">
                  <p>TODO - Todolist</p>
                </Container>
                <Container direction="column">
                  <p>TODO - Progress</p>
                </Container>
              </Container>
              <Container direction="column">
                {appHovered === null ? (
                  <h1>Welcome back !<br />Hover an application to reveal a preview</h1>
                ) : (
                  <Container
                    id="appPreviewContainer"
                    direction="column"
                  >
                    <h2>{appHovered.toUpperCase()}</h2>
                  </Container>
                )}
              </Container>
            </Container>
            <CurvedLine />
          </>
        )}
      </main>
    </Container >
  );
}

export default Homepage;
