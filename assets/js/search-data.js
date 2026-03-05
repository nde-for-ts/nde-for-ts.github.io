// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-tutorial",
          title: "Tutorial",
          description: "Tutorial on Neural Differential Equations (NDEs) for continuous-time analysis, including NODEs, NCDEs, and NSDEs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tutorial/";
          },
        },{id: "nav-review",
          title: "Review",
          description: "Comprehensive review of Neural Differential Equations for Time Series Analysis covering NODEs, NCDEs, and NSDEs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/review/";
          },
        },{id: "nav-foundational-papers",
          title: "Foundational Papers",
          description: "Curated list of neural differential equations for time series analysis and the comprehensive review paper.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-contributors",
          title: "Contributors",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
