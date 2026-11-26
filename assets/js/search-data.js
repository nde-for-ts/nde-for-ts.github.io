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
  },{id: "nav-a-practical-guide-to-neural-differential-equations",
          title: "A Practical Guide to Neural Differential Equations",
          description: "A KSC 2026 tutorial with thirteen demos on neural ODEs, CDEs, SDEs, irregular observations, and continuous-time generative modeling.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ksc-2026/";
          },
        },{id: "nav-tutorial",
          title: "Tutorial",
          description: "CIKM 2025 tutorial on neural ODEs, CDEs, and SDEs for continuous-time analysis of irregular time series, with examples and code.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cikm-2025/";
          },
        },{id: "nav-review",
          title: "Review",
          description: "IJCAI 2025 survey of neural ODEs, CDEs, and SDEs for time series, covering theory, numerical methods, and benchmarks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ijcai-2025/";
          },
        },{id: "nav-papers",
          title: "Papers",
          description: "Research papers on neural differential equations for time series analysis.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-contributors",
          title: "Contributors",
          description: "Researchers contributing to neural differential equations for time series.",
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
