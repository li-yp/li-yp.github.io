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
  },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-openings",
          title: "Openings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/opening/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "news-we-started-the-humbug-ii-project-in-collaboration-with-the-oxford-team-led-by-kathy-willis-and-steve-roberts-the-project-is-sponsored-by-the-natural-environment-research-council-in-its-innovation-in-environmental-monitoring-programme",
          title: 'We started the HumBug II project in collaboration with the Oxford team led...',
          description: "",
          section: "News",},{id: "news-zhi-qin-tan-presented-bayesian-detector-combination-for-object-detection-with-crowdsourced-annotations-at-eccv-2024-in-milan-italy-as-his-first-paper-in-phd-the-work-is-in-collaboration-with-olga-isupova-gustavo-carneiro-and-xiatian-zhu",
          title: 'Zhi Qin Tan presented Bayesian Detector Combination for Object Detection with Crowdsourced Annotations...',
          description: "",
          section: "News",},{id: "news-dr-xiongjie-chen-zhi-qin-tan-and-john-joseph-brady-completed-their-transfer-from-the-university-of-surrey-to-king-s-college-london-as-inaugural-members-of-the-statistical-machine-learning-lab-based-in-the-centre-for-oral-clinical-amp-amp-translational-sciences",
          title: 'Dr Xiongjie Chen, Zhi Qin Tan, and John-Joseph Brady completed their transfer from...',
          description: "",
          section: "News",},{id: "news-owen-addison-and-i-published-an-opinion-piece-at-bdj-in-practice-to-discuss-our-nihr-sponsored-project-and-becertain-ai",
          title: 'Owen Addison and I published an opinion piece at BDJ in Practice to...',
          description: "",
          section: "News",},{id: "news-i-introduced-our-ai-assisted-radiograph-based-dental-disease-detection-tool-undergoing-internal-testing-via-becertain-ai-at-the-royal-college-of-surgeons-of-england-workshop-on-ai-and-digital-innovation-in-dentistry-and-oral-health",
          title: 'I introduced our AI-assisted radiograph-based dental disease detection tool, undergoing internal testing via...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-normalizing-flow-based-differentiable-particle-filters-at-the-kcl-statistics-seminar",
          title: 'I gave a talk on Normalizing Flow-based Differentiable Particle Filters at the KCL...',
          description: "",
          section: "News",},{id: "news-i-was-selected-into-the-royal-academy-of-engineering-explore-4-0-cohort-to-explore-new-ecosystems-for-our-work-on-ai-assisted-dental-disease-detection",
          title: 'I was selected into the Royal Academy of Engineering Explore 4.0 cohort to...',
          description: "",
          section: "News",},{id: "news-we-are-recruiting-a-fully-funded-phd-position-is-available-in-the-broad-areas-of-multimodal-ai-and-digital-healthcare",
          title: 'We are recruiting! A fully-funded PhD position is available in the broad areas...',
          description: "",
          section: "News",},{id: "news-our-paper-normalizing-flow-based-differentiable-particle-filters-has-been-accepted-at-ieee-transactions-on-signal-processing-congratulations-xiongjie",
          title: 'Our paper Normalizing Flow-based Differentiable Particle Filters has been accepted at IEEE Transactions...',
          description: "",
          section: "News",},{id: "news-we-welcome-phd-applicants-to-apply-for-the-epsrc-centre-for-doctoral-training-in-data-driven-health-drive-health-programme-for-our-project-multimodal-dental-ai-with-uncertainty-quantification-the-application-deadline-is-30th-january-2025-see-openings-for-available-phd-positions-in-the-group",
          title: 'We welcome PhD applicants to apply for the EPSRC Centre for Doctoral Training...',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-on-learning-with-uncertainty-for-trustworthy-ai-with-radiography-in-the-2025-bellairs-workshop-on-machine-learning-and-statistical-signal-processing-for-data-on-graphs-in-the-bellairs-research-institute-in-holetown-barbados",
          title: 'I presented our work on “Learning with Uncertainty for Trustworthy AI with Radiography”...',
          description: "",
          section: "News",},{id: "news-i-joined-the-royal-academy-of-engineering-enterprise-hub-explore-mission-to-study-the-deep-tech-ecosystem-in-paris-and-île-de-france-the-trip-included-presenting-becertain-at-the-british-embassy-paris-and-attending-the-hello-tomorrow-global-summit",
          title: 'I joined the Royal Academy of Engineering Enterprise Hub EXPLORE mission to study...',
          description: "",
          section: "News",},{id: "news-our-dental-ai-spinout-becertain-was-named-the-most-investor-ready-company-in-the-medtech-group-in-bia-pulse-2025-hosted-at-the-francis-crick-institute",
          title: 'Our dental AI spinout, BeCertain, was named the “most investor-ready” company in the...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-talk-on-trustworthy-dental-ai-at-the-tor-workshop-2025-towards-future-medicine-and-dentistry-at-the-university-of-bergen-norway",
          title: 'I gave an invited talk on trustworthy dental AI at the TOR workshop...',
          description: "",
          section: "News",},{id: "news-i-gave-an-ai-in-healthcare-showcase-lightning-presentation-at-the-king-s-festival-of-artificial-intelligence",
          title: 'I gave an AI in Healthcare Showcase Lightning Presentation at the King’s Festival...',
          description: "",
          section: "News",},{id: "news-our-paper-differentiable-interacting-multiple-model-particle-filtering-has-been-accepted-for-publication-in-signal-processing-congratulations-john-jo-yuhui-wenwu-and-victor",
          title: 'Our paper Differentiable Interacting Multiple Model Particle Filtering has been accepted for publication...',
          description: "",
          section: "News",},{id: "news-i-presented-becertain-at-bia-life-science-leadership-summit-in-the-innovation-showcase",
          title: 'I presented BeCertain at BIA Life Science Leadership Summit in the Innovation Showcase....',
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
            },},{id: "projects-john-joseph-brady",
          title: 'John-Joseph Brady',
          description: "PhD student (2023-)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/People_John_Joseph_Brady/";
            },},{id: "projects-xiongjie-chen",
          title: 'Xiongjie Chen',
          description: "Research Fellow in Machine Learning in Medical Imaging (2023-). PhD (2019-2023)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/People_Xiongjie_Chen/";
            },},{id: "projects-zhi-qin-tan",
          title: 'Zhi Qin Tan',
          description: "PhD student (2023-)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/People_Zhi_Qin_Tan/";
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
