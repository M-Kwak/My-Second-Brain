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
        <img src="/images/hamburgerIcon.svg" />
        <img src="/images/accountIcon.svg" />
      </header>
      <main>
        {selectedApp === null && (
          <>
            <Container id="appMainContainer" direction="row">
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
                <img src="/images/calendarIcon.svg" style={{ width: '50px', height: '50px' }} />
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
          </>
        )}
      </main>
      <footer>Made with spaghetti</footer>
    </Container>
  );
}

export default Homepage;
