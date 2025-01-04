// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-we-started-the-humbug-ii-project-in-collaboration-with-the-amazing-oxford-team-led-by-kathy-willis-and-steve-roberts-the-project-is-generously-sponsored-by-the-natural-environment-research-council-in-its-innovation-in-environmental-monitoring-programme",
          title: 'We started the HumBug II project in collaboration with the amazing Oxford team...',
          description: "",
          section: "News",},{id: "news-zhi-qin-tan-presented-bayesian-detector-combination-for-object-detection-with-crowdsourced-annotations-at-eccv-2024-in-milan-italy-as-his-first-phd-paper-in-phd-the-work-is-in-collaboration-with-olga-isupova-gustavo-carneiro-and-xiatian-zhu",
          title: 'Zhi Qin Tan presented Bayesian Detector Combination for Object Detection with Crowdsourced Annotations...',
          description: "",
          section: "News",},{id: "news-dr-xiongjie-chen-zhi-qin-tan-and-john-joseph-brady-completed-their-transfer-from-the-university-of-surrey-to-king-s-college-london-as-inaugural-members-of-the-statistical-machine-learning-lab-based-in-the-centre-for-oral-clinical-amp-amp-translational-sciences",
          title: 'Dr Xiongjie Chen, Zhi Qin Tan, and John-Joseph Brady completed their transfer from...',
          description: "",
          section: "News",},{id: "news-i-introduced-our-internal-testing-product-of-radiograph-based-dental-disease-detection-accessible-via-becertain-ai-at-royal-college-of-surgeons-of-england-in-the-workshop-of-ai-and-digital-innovation-in-dentistry-and-oral-health-revolutionising-approaches-to-care-or-just-another-myth",
          title: 'I introduced our internal testing product of radiograph-based dental disease detection, accessible via...',
          description: "",
          section: "News",},{id: "news-i-was-selected-into-the-royal-academy-of-engineering-explore-4-0-cohort-to-explore-new-ecosystems-for-our-work-on-ai-assisted-dental-disease-detection",
          title: 'I was selected into the Royal Academy of Engineering Explore 4.0 cohort to...',
          description: "",
          section: "News",},{id: "news-we-are-recruiting-a-full-phd-studentship-is-provided-in-the-broad-areas-of-multimodal-ai-and-digital-healthcare",
          title: 'We are recruiting! A full PhD studentship is provided in the broad areas...',
          description: "",
          section: "News",},{id: "news-our-paper-normalizing-flow-based-differentiable-particle-filters-has-been-accepted-at-ieee-transactions-on-signal-processing-congratulations-xiongjie",
          title: 'Our paper Normalizing Flow-based Differentiable Particle Filters has been accepted at IEEE Transactions...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
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
