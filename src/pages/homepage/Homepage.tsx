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

  const appIconsContainer: HTMLDivElement = document.getElementById('navbar') as HTMLDivElement;
  const appIcons: HTMLCollectionOf<Element> = document.getElementsByClassName('navbarIconContainer');

  const [selectedApp, setSelectedApp] = useState<application>(null);
  const [appHovered, setAppHovered] = useState<application>(null);

  const swapNavbarStyle: (action: 'enlarge' | 'reduce') => void = (action: 'enlarge' | 'reduce') => {
    if (action === 'enlarge') {
      appIconsContainer.classList.remove('reducedNavbar');
      appIconsContainer.classList.remove('hide');

      Array.from(appIcons).forEach(icon => {
        const innerImage: HTMLImageElement = icon.firstChild as HTMLImageElement;
        icon.classList.remove('reducedNavbarIconsContainer')
        innerImage.classList.remove('reducedNavbarIcons');
      });
    }
    else {
      appIconsContainer.classList.add('reducedNavbar');
      appIconsContainer.classList.add('hide');

      Array.from(appIcons).forEach(icon => {
        const innerImage: HTMLImageElement = icon.firstChild as HTMLImageElement;
        icon.classList.add('reducedNavbarIconsContainer')
        innerImage.classList.add('reducedNavbarIcons');
      });
    }
  };

  const handleHomeClick = () => {
    appIconsContainer.classList.remove('hide');
    swapNavbarStyle('enlarge');
    setSelectedApp(null);
  };

  const handleAppClick = (appName: application) => {
    swapNavbarStyle('reduce');
    setSelectedApp(appName);
  };

  useEffect(() => {

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
  }, [appIcons]);

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
        <Container
          id="navbar"
          direction="row"
        >
          {apps.map((app) => (
            <Container
              key={app.name}
              className="navbarIconContainer"
              dataName={app.name}
              direction="row"
              onClick={() => handleAppClick(app.name)}
            >
              <img
                src={app.image}
                id={app.name === "calendar" ? "CalendarIcon" : undefined}
              />
            </Container>
          ))}
        </Container>
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
