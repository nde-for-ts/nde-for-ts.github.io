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
          description: "CIKM 2025 Tutorial on Neural Differential Equations (NODE, NCDE, NSDE) for continuous-time time series — hands-on with PyTorch, torchcde, and torchsde.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tutorial/";
          },
        },{id: "nav-review",
          title: "Review",
          description: "IJCAI-25 survey: Comprehensive Review of Neural Differential Equations for Time Series Analysis — NODEs, NCDEs, NSDEs, benchmarks, DOI 10.24963/ijcai.2025/1179.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/review/";
          },
        },{id: "nav-papers",
          title: "Papers",
          description: "Curated bibliography of NDE papers — NODE, NCDE, NSDE — for time series analysis, with the IJCAI-25 review.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-contributors",
          title: "Contributors",
          description: "Profiles of researchers behind NDE for TS, including contributors from Pusan National University, UCLA, and UNIST.",
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
