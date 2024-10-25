import { Dispatch, forwardRef, SetStateAction, useEffect, useImperativeHandle } from "react";
import { app, application } from "../../types/types";
import { applications } from "../../utils/genericDatas";
import Container from "../container/Container";

interface NavbarHandle {
  handleHomeClick: () => void;
}

interface NavbarSpecs {
  selectedApp: application,
  setSelectedApp: Dispatch<SetStateAction<application>>
  setAppHovered: Dispatch<SetStateAction<application>>,
}

const Navbar = forwardRef<NavbarHandle, NavbarSpecs>((props: NavbarSpecs, ref) => {
  const {
    selectedApp,
    setSelectedApp,
    setAppHovered,
  } = props;

  const apps: app[] = applications;
  const navbar: HTMLDivElement = document.getElementById('navbar') as HTMLDivElement;
  const navbarAppIconsContainers: HTMLCollectionOf<Element> = document.getElementsByClassName('navbarIconContainer');

  const setNavbarAnimationDirection: (action: 'expand' | 'reduce') => void = (action) => {
    const navbar: HTMLDivElement = document.getElementById('navbar') as HTMLDivElement;
    const animationDirection: string = action === 'expand' ? 'reverse' : 'normal';
    const allNavbarChildren: NodeListOf<Element> = navbar.querySelectorAll('*');

    navbar.style.animationDirection = animationDirection;
    allNavbarChildren.forEach((child) => {
      if (child instanceof HTMLElement) child.style.animationDirection = animationDirection;
    });
  };

  const addNavbarAnimationClass: () => void = () => {
    const navbar: HTMLDivElement = document.getElementById('navbar') as HTMLDivElement;
    // hide class only exist for mobile/tab screen and does not affect deskt
    navbar.classList.add('hide', 'navbarResizeAnimation');
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
    const navbar: HTMLDivElement = document.getElementById('navbar') as HTMLDivElement;
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

  const handleAppClick = (appName: application) => {
    if (!selectedApp) animateNavbar('reduce');
    setSelectedApp(appName);
  };

  useImperativeHandle(ref, () => ({
    handleHomeClick: () => {
      if (window.innerWidth <= 1025) {
        const navbar = document.getElementById('navbar') as HTMLDivElement;
        navbar.classList.remove('hide');
      } else animateNavbar('expand');
      setSelectedApp(null);
    }
  }));

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

    Array.from(navbarAppIconsContainers).forEach(appContainer => {
      appContainer.addEventListener('mouseover', handleMouseOver);
      appContainer.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      Array.from(navbarAppIconsContainers).forEach(appContainer => {
        appContainer.removeEventListener('mouseover', handleMouseOver);
        appContainer.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [navbarAppIconsContainers, setAppHovered]);

  return (
    <>
      <Container
        id="navbar"
        direction="row"
      >
        {apps.map((appContainer) => (
          <Container
            key={appContainer.name}
            className="navbarIconContainer"
            dataName={appContainer.name}
            direction="row"
            onClick={() => handleAppClick(appContainer.name)}
          >
            <img
              src={appContainer.icon}
              id={appContainer.name === "calendar" ? "CalendarIcon" : undefined}
              className="navbarIcon"
            />
          </Container>
        ))}
      </Container>
    </>
  )
});

export default Navbar;