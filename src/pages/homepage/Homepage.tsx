import { useRef, useState } from "react";
import { app } from "../../types/types";
import Container from "../../components/container/Container";
import CurvedLine from "../../components/curvedLine/CurvedLine";
import Navbar from "../../components/navbar/Navbar";
import "./Homepage.scss";

interface NavbarHandle {
  handleHomeClick: () => void;
}

function Homepage() {
  const navbarRef = useRef<NavbarHandle>(null);

  const [selectedApp, setSelectedApp] = useState<app | null>(null);
  const [appHovered, setAppHovered] = useState<app | null>(null);
  const [previewAnimationSaveState, setPreviewAnimationSaveState] = useState<app | null>(null);

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
          appHovered={appHovered}
          setAppHovered={setAppHovered}
          setPreviewAnimationSaveState={setPreviewAnimationSaveState}
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
              <h1 className={appHovered !== null ? `fadeOut` : `fadeIn`}>
                Welcome back !
                <br />
                Hover an application to reveal a preview
              </h1>
              <Container
                id="appPreviewContainer"
                className={
                  `${appHovered !== null ? `fadeIn` : `fadeOut`}
                   ${appHovered !== null ? 'slideOut' : 'slideIn'}`}
                direction="column"
              >
                <h2>{previewAnimationSaveState?.name?.toUpperCase()}</h2>
                <p>{previewAnimationSaveState?.description}</p>
                <img
                  className="appPreview"
                  src={previewAnimationSaveState?.preview}
                >
                </img>
              </Container>
            </Container>
            <CurvedLine />
          </>
        )}
        {selectedApp !== null && (
          <>
            <h1>{selectedApp.name}</h1>
          </>
        )}
      </main>
    </Container >
  );
}

export default Homepage;
