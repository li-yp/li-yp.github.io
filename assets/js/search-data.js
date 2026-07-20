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
            window.location.href = "/openings/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/tair-lab.github.io/projects/";
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
          section: "News",},{id: "news-i-presented-becertain-in-innovation-showcase-at-bia-life-science-leadership-summit",
          title: 'I presented BeCertain in Innovation Showcase at BIA Life Science Leadership Summit.',
          description: "",
          section: "News",},{id: "news-the-latest-edition-of-riskwise-shared-the-panel-discussion-on-the-future-of-ai-in-dentistry-i-joined-with-dr-raj-rattan-mbe-dr-sonia-szamocki-and-dr-loven-ganeswaran",
          title: 'The latest edition of Riskwise shared the panel discussion on the future of...',
          description: "",
          section: "News",},{id: "news-we-are-recruiting-a-fully-funded-3-year-international-phd-studentship-is-available-for-an-october-2025-or-february-june-october-2026-start-on-the-topic-of-trustworthy-generative-ai-in-healthcare",
          title: 'We are recruiting! A fully-funded 3-year international PhD studentship is available for an...',
          description: "",
          section: "News",},{id: "news-phd-student-zhi-qin-tan-led-our-efforts-that-secured-the-first-place-in-each-of-the-three-tasks-on-cone-beam-computed-tomography-cbct-scan-segmentation-in-the-miccai-2025-oral-and-dental-image-analysis-odin-challenges-congratulations-to-zhi-qin-and-the-supervsiory-team-yunpeng-li-owen-addison-xiatian-zhu",
          title: 'PhD student Zhi Qin Tan led our efforts that secured the first place...',
          description: "",
          section: "News",},{id: "news-ruiyang-hao-joined-the-group-as-a-phd-student-ruiyang-will-work-on-multimodal-learning-computer-vision-and-medical-ai-with-a-focus-on-dental-applications-welcome",
          title: 'Ruiyang Hao joined the group as a PhD student. Ruiyang will work on...',
          description: "",
          section: "News",},{id: "news-zhi-qin-tan-and-i-presented-our-work-bayesian-detector-combination-for-object-detection-with-crowdsourced-annotations-in-the-second-global-symposium-on-artificial-intelligence-in-dentistry-organised-by-the-harvard-school-of-dental-medicine-in-boston-usa",
          title: 'Zhi Qin Tan and I presented our work, Bayesian Detector Combination for Object...',
          description: "",
          section: "News",},{id: "news-our-paper-caries-detection-in-primary-molars-with-bitewing-radiographs-through-deep-learning-based-object-detectors-has-been-accepted-for-publication-in-caries-research",
          title: 'Our paper Caries Detection in Primary Molars with Bitewing Radiographs through Deep Learning...',
          description: "",
          section: "News",},{id: "news-our-paper-post-pandemic-tourism-forecasting-with-ensemble-rnn-has-been-accepted-as-an-invited-paper-for-publication-in-the-annals-of-tourism-research-congratulations-zhi-qin-tan-for-winning-third-runner-up-and-publishing-the-results-in-a-top-tier-journal-in-tourism-research",
          title: 'Our paper Post-pandemic tourism forecasting with ensemble RNN has been accepted as an...',
          description: "",
          section: "News",},{id: "news-john-joseph-brady-ruiyang-hao-zhi-qin-tan-and-i-presented-our-work-in-the-2026-bellairs-workshop-on-machine-learning-and-statistical-signal-processing-for-data-on-graphs-at-the-bellairs-research-institute-in-holetown-barbados",
          title: 'John-Joseph Brady, Ruiyang Hao, Zhi Qin Tan and I presented our work in...',
          description: "",
          section: "News",},{id: "news-we-started-a-two-year-project-trustworthy-ai-supported-dental-record-self-auditing-and-risk-mitigation-project-the-project-is-sponsored-by-the-medical-protection-society-mps-foundation",
          title: 'We started a two-year project, “Trustworthy AI-supported dental record self-auditing and risk mitigation...',
          description: "",
          section: "News",},{id: "news-owen-addison-and-i-presented-becertain-at-aeedc-one-of-the-world-s-largest-annual-dental-events-in-dubai-uae",
          title: 'Owen Addison and I presented BeCertain at AEEDC, one of the world’s largest...',
          description: "",
          section: "News",},{id: "news-i-presented-the-pydpf-work-with-john-joseph-brady-ben-cox-and-victor-elvira-at-the-siam-conference-on-uncertainty-quantification-uq26-in-minneapolis-mn-usa",
          title: 'I presented the PyDPF work with John-Joseph Brady, Ben Cox and Victor Elvira...',
          description: "",
          section: "News",},{id: "news-zhi-qin-tan-and-i-presented-becertain-and-our-work-dentalx-context-aware-dental-disease-detection-with-radiographs-at-the-2026-iadr-aadocr-cadr-general-session-amp-amp-exhibition-in-san-diego-ca-usa",
          title: 'Zhi Qin Tan and I presented BeCertain and our work, DentalX: Context-Aware Dental...',
          description: "",
          section: "News",},{id: "news-our-paper-deep-learning-in-dentistry-a-literature-review-from-an-ai-researcher-s-viewpoint-is-accepted-at-the-dentistry-review-journal",
          title: 'Our paper Deep Learning in Dentistry: A Literature Review from an AI Researcher’s...',
          description: "",
          section: "News",},{id: "news-zhi-qin-tan-gave-an-oral-presentation-on-our-work-dentalx-context-aware-dental-disease-detection-with-radiographs-at-the-international-symposium-of-biomedical-imaging-isbi-2026-in-london-uk",
          title: 'Zhi Qin Tan gave an oral presentation on our work DentalX: Context-Aware Dental...',
          description: "",
          section: "News",},{id: "news-we-are-recruiting-a-research-associate-position-is-available-for-an-mps-foundation-supported-project-on-ai-supported-dental-record-auditing",
          title: 'We are recruiting! A Research Associate position is available for an MPS Foundation-supported...',
          description: "",
          section: "News",},{id: "news-our-paper-efficient-learning-of-deep-state-space-models-via-importance-smoothing-is-accepted-at-icml-2026-congratulations-john-jo-and-nik",
          title: 'Our paper Efficient Learning of Deep State Space Models via Importance Smoothing is...',
          description: "",
          section: "News",},{id: "news-our-paper-toothfairy3-scaling-cbct-maxillofacial-segmentation-to-77-classes-with-u-mamba2-is-early-accepted-at-miccai-2026-congratulations-to-zhi-qin-tan-and-our-collaborators-at-the-aimagelab-unimore",
          title: 'Our paper “ToothFairy3: Scaling CBCT Maxillofacial Segmentation to 77 Classes with U-Mamba2” is...',
          description: "",
          section: "News",},{id: "news-ayan-das-joined-the-translational-ai-research-tair-lab-as-an-ai-academic-senior-fellow-at-king-s-welcome-ayan",
          title: 'Ayan Das joined the Translational AI Research (TAIR) Lab as an AI+ Academic...',
          description: "",
          section: "News",},{id: "news-the-becertain-team-and-tair-group-members-exhibited-becertain-at-the-british-dental-conference-amp-amp-dentistry-show-bdcds-2026-at-the-nec-birmingham",
          title: 'The BeCertain team and TAIR group members exhibited BeCertain at the British Dental...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-trustworthy-ai-in-dental-and-oral-health-at-the-joint-british-dental-association-wessex-branch-and-hampshire-amp-amp-isle-of-wight-ldc-cpd-event",
          title: 'I gave a talk on trustworthy AI in dental and oral health at...',
          description: "",
          section: "News",},{id: "news-we-are-offering-a-funded-phd-studentship-on-diffusion-llm-powered-generative-ai-with-healthcare-applications-which-i-will-supervise-with-ayan-das-applications-are-assessed-on-a-rolling-basis-so-apply-early-the-deadline-is-15-august-2026-see-openings",
          title: 'We are offering a funded PhD studentship on Diffusion/LLM Powered Generative AI with...',
          description: "",
          section: "News",},{id: "news-our-king-s-spin-out-becertain-has-completed-a-1-7-million-pre-seed-round-led-by-sure-valley-ventures-with-support-from-innovate-uk-to-bring-clinical-grade-ai-to-dental-diagnostics-read-the-king-s-news-story-becertain-is-now-hiring-its-first-commercial-lead",
          title: 'Our King’s spin-out BeCertain has completed a £1.7 million pre-seed round, led by...',
          description: "",
          section: "News",},{id: "news-we-are-recruiting-a-four-year-postdoctoral-research-associate-to-join-the-translational-ai-research-lab-working-on-trustworthy-ai-for-scientific-discovery-and-biomanufacturing-as-part-of-a-horizon-europe-project-the-deadline-for-applications-is-9-august-2026-see-openings",
          title: 'We are recruiting a four-year Postdoctoral Research Associate to join the Translational AI...',
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
            },},{id: "projects-ruiyang-hao",
          title: 'Ruiyang Hao',
          description: "PhD student (2025-)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/People_Ruiyang_Hao/";
            },},{id: "projects-xiongjie-chen",
          title: 'Xiongjie Chen',
          description: "Research Fellow in Machine Learning in Medical Imaging (2023-2025). PhD (2019-2023)",
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
