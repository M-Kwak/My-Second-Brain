import { useRef, useState } from "react";
import { application } from "../../types/types";
import Container from "../../components/container/Container";
import CurvedLine from "../../components/curvedLine/CurvedLine";
import Navbar from "../../components/navbar/Navbar";
import "./Homepage.scss";

interface NavbarHandle {
  handleHomeClick: () => void;
}

function Homepage() {
  const navbarRef = useRef<NavbarHandle>(null);

  const [selectedApp, setSelectedApp] = useState<application>(null);
  const [appHovered, setAppHovered] = useState<application>(null);

  const handleHomeClick = () => {
    if (!navbarRef.current) return;
    navbarRef.current.handleHomeClick();
    setSelectedApp(null);
  };

  return (
    <Container
      direction="column"
      id="HomePage"
    >
      <header>
        <img src="/images/accountIcon.svg" />
        {selectedApp !== null &&
          <img
            src="/public/images/homeIcon.svg"
            onClick={() => handleHomeClick()}
          />
        }
      </header>
      <main>
        <Navbar
          ref={navbarRef}
          selectedApp={selectedApp}
          setSelectedApp={setSelectedApp}
          setAppHovered={setAppHovered}
        />
        {selectedApp === null && (
          <>
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
        {selectedApp !== null && (
          <>
            <h1>{selectedApp}</h1>
          </>
        )}
      </main>
    </Container >
  );
}

export default Homepage;
