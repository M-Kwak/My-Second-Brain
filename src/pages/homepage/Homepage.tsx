import { useState } from "react";
import Container from "../../components/container/Container";
import { application } from "../../types/types";
import "./Homepage.scss";

function Homepage() {
  const [selectedApp, setSelectedApp] = useState<application>(null);

  return (
    <Container direction="column" id="HomePage">
      <header></header>
      <main>
        {selectedApp === null && (
          <>
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
              <img src="/images/calendarIcon.svg" />
            </Container>
            <Container
              className="appIconContainer"
              direction="row"
              onClick={() => setSelectedApp('to-do')}
            >
              <img src="/public/images/todolistIcon.svg" />
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
          </>
        )
        }
      </main>
      <footer>Made with spaghetti</footer>
    </Container>
  );
}

export default Homepage;
