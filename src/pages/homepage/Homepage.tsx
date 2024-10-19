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

  const navbar: HTMLDivElement = document.getElementById('navbar') as HTMLDivElement;
  const navbarAppIconsContainers: HTMLCollectionOf<Element> = document.getElementsByClassName('navbarIconContainer');

  const [selectedApp, setSelectedApp] = useState<application>(null);
  const [appHovered, setAppHovered] = useState<application>(null);

  const setNavbarAnimationDirection: (action: 'expand' | 'reduce') => void = (action) => {
    const animationDirection: string = action === 'expand' ? 'reverse' : 'normal';
    const allNavbarChildren: NodeListOf<Element> = navbar.querySelectorAll('*');

    navbar.style.animationDirection = animationDirection;
    allNavbarChildren.forEach((child) => {
      if (child instanceof HTMLElement) child.style.animationDirection = animationDirection;
    });
  };

  const addNavbarAnimationClass: () => void = () => {
    navbar.classList.add('navbarResizeAnimation');
    Array.from(navbarAppIconsContainers).forEach(appIconContainer => {
      const appIcon: HTMLImageElement = appIconContainer.firstChild as HTMLImageElement;
      appIconContainer.classList.add('navbarIconsContainerResizeAnimation')
      if (appIcon.id === 'CalendarIcon') appIcon.classList.add('calendarIconResizeAnimation');
      appIcon.classList.add('navbarIconsResizeAnimation');
    });
  }

  // navbar and children can't keep props from css class after animation because we
  // use 'reverse' in setNavbarAnimationDirection... wich lead to this mess
  const keepPropsPostAnimation: (action: 'expand' | 'reduce') => void = (action) => {
    navbar.addEventListener('animationend', () => {
      if (action === 'reduce') {
        navbar.style.top = '15px';
        navbar.style.width = '550px';
        Array.from(navbarAppIconsContainers).forEach(appIconContainer => {
          if (appIconContainer instanceof HTMLElement) {
            appIconContainer.style.width = '55px';
            appIconContainer.style.height = '55px';
          }
          const appIcon = appIconContainer.firstChild as HTMLImageElement;
          appIcon.id === 'CalendarIcon' ? appIcon.style.width = '40px' : appIcon.style.width = '50px';
          appIcon.id === 'CalendarIcon' ? appIcon.style.height = '40px' : appIcon.style.height = '50px';
        });
      } else if (action === 'expand') {
        navbar.style.top = '90px';
        navbar.style.width = '635px';
        Array.from(navbarAppIconsContainers).forEach(appIconContainer => {
          if (appIconContainer instanceof HTMLElement) {
            appIconContainer.style.width = '75px';
            appIconContainer.style.height = '75px';
          }
          const appIcon = appIconContainer.firstChild as HTMLImageElement;
          appIcon.id === 'CalendarIcon' ? appIcon.style.width = '55px' : appIcon.style.width = '70px';
          appIcon.id === 'CalendarIcon' ? appIcon.style.height = '55px' : appIcon.style.height = '70px';
        });
      }
    }, { once: true });
  }

  const animateNavbar: (action: 'expand' | 'reduce') => void = (action) => {
    setNavbarAnimationDirection(action);
    addNavbarAnimationClass();
    keepPropsPostAnimation(action);
  };

  const handleHomeClick = () => {
    navbar.classList.remove('hide');
    animateNavbar('expand');
    setSelectedApp(null);
  };

  const handleAppClick = (appName: application) => {
    if (!selectedApp) animateNavbar('reduce');
    setSelectedApp(appName);
  };

  useEffect(() => {
    const navbar: HTMLDivElement = document.getElementById('navbar') as HTMLDivElement;

    const removeAnimationClasses = () => {
      navbar.classList.remove('navbarResizeAnimation');
      Array.from(navbarAppIconsContainers).forEach(appIconContainer => {
        const appIcon = appIconContainer.firstChild as HTMLImageElement;
        appIconContainer.classList.remove('navbarIconsContainerResizeAnimation');
        appIcon.classList.remove('navbarIconsResizeAnimation', 'calendarIconResizeAnimation');
      });
    };

    navbar.addEventListener('animationend', removeAnimationClasses);

    return () => {
      navbar.removeEventListener('animationend', removeAnimationClasses);
    };
  }, [navbar, navbarAppIconsContainers]);

  useEffect(() => {

    const handleMouseOver: (event: Event) => void = (event: Event) => {
      const target: HTMLElement = (event.currentTarget as HTMLElement);
      const appName: string | application = target.getAttribute('data-name');
      setAppHovered(appName as application);
    };

    const handleMouseOut: () => void = () => {
      setAppHovered(null);
    };

    Array.from(navbarAppIconsContainers).forEach(icon => {
      icon.addEventListener('mouseover', handleMouseOver);
      icon.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      Array.from(navbarAppIconsContainers).forEach(icon => {
        icon.removeEventListener('mouseover', handleMouseOver);
        icon.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [navbarAppIconsContainers]);

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
                className="navbarIcon"
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
