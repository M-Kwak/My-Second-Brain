import { useState } from "react";
import { application } from "../../types/types";
import Container from "../../components/container/Container";
import "./Homepage.scss";

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
              {apps.map((icon) => (
                <Container
                  key={icon.name}
                  className="appIconContainer"
                  direction="row"
                  onClick={() => setSelectedApp( icon.name )}
                >
                  <img
                    src={icon.image}
                    id={icon.name === "calendar" ? "CalendarIcon" : undefined}
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
                <h1>Welcome back !<br />Hover an application to reveal a preview</h1>
              </Container>
            </Container>
          </>
        )}
      </main>
      <footer>Made with spaghetti</footer>
    </Container>
  );
}

export default Homepage;
