import { useState } from "react";
import { application } from "../../types/types";
import Container from "../../components/container/Container";
import "./Homepage.scss";

function Homepage() {
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
              <Container
                className="appIconContainer"
                direction="row"
                onClick={() => setSelectedApp('archive')}
              >
                <img src="/images/brainIcon.svg" />
              </Container>
              <Container
                className="appIconContainer"
                direction="row"
                onClick={() => setSelectedApp('calendar')
                }>
                <img
                  src="/images/calendarIcon.svg"
                  id="CalendarIcon"
                />
              </Container>
              <Container
                className="appIconContainer"
                direction="row"
                onClick={() => setSelectedApp('to-do')}
              >
                <img src="/images/todolistIcon.svg" />
              </Container>
              <Container
                className="appIconContainer"
                direction="row"
                onClick={() => setSelectedApp('vault')}
              >
                <img src="/images/vaultIcon.svg" />
              </Container>
              <Container
                className="appIconContainer"
                direction="row"
                onClick={() => setSelectedApp('progress')}
              >
                <img src="/images/barbellIcon.svg" />
              </Container>
            </Container>
            <Container
              direction="row"
              id="desktopSummaryContainer"
            >
              <Container direction="column">
                <Container direction="column">
                  <p>TODO - Calendar summary</p>
                </Container>
                <Container direction="column">
                  <p>TODO - Todolist summary</p>
                </Container>
                <Container direction="column">
                  <p>TODO - Progress summary</p>
                </Container>
              </Container>
              <Container direction="column">
                <p>Welcome back !<br />Hover an application to reveal a preview</p>
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
