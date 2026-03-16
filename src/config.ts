// Site Configuration
// Product Designer Portfolio - Conrad Otieno

import { asset } from './lib/utils';

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Conrad Otieno | Product Designer",
  siteDescription: "Award-winning product designer crafting intuitive digital experiences. Specializing in UX/UI design, design systems, and user research.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  brandLogo?: string; // Optional logo image path
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "DESIGN",
  heroImage: asset("/hero-designer.png"),
  heroImageAlt: "Conrad Otieno - Product Designer",
  overlayText: "Crafting Experiences That Matter",
  brandName: "Conrad.",
  brandLogo: "", // Empty to use text instead of image
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Designing Products",
  titleLine2: "That People Love",
  description: "I'm a product designer with 8+ years of experience creating digital products that solve real problems. From startups to Fortune 500 companies, I help teams build intuitive, beautiful, and impactful user experiences.",
  portfolioImages: [
    { src: asset("/portfolio-1.jpg"), alt: "Mobile app design showcase" },
    { src: asset("/portfolio-2.jpg"), alt: "Dashboard interface design" },
    { src: asset("/portfolio-3.jpg"), alt: "E-commerce platform design" },
    { src: asset("/portfolio-4.jpg"), alt: "Design system components" },
    { src: asset("/portfolio-5.jpg"), alt: "User research workshop" },
  ],
  accentText: "Selected Works - 2024",
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Featured Work",
  titleRegular: "Case",
  titleItalic: "Studies",
  viewAllText: "View All Projects",
  viewAllHref: "#work",
  viewProjectText: "View Case Study",
  projects: [
    {
      id: 1,
      title: "Enterprise Journey Web App Design",
      category: "Web App Design",
      year: "2024",
      image: asset("/project-1.png"),
      description: "Designed an enterprise journey mapping web application that helps organizations visualize and optimize customer experiences across multiple touchpoints.",
    },
    {
      id: 2,
      title: "DigitalQatalyst Corporate Website",
      category: "Corporate Web | B2B Digital",
      year: "2025",
      image: asset("/project-2.png"),
      description: "Applying the Double Diamond Design Process to transform a digital transformation consultancy's web presence in Dubai.",
    },
    {
      id: 3,
      title: "CyberSolution Design System",
      category: "Design Systems",
      year: "2024",
      image: asset("/project-3.png"),
      description: "Crafted a comprehensive design system that brings clarity and consistency to digital products through unified components and design tokens.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "What I Offer",
  titleLine1: "Services That Drive",
  titleLine2Italic: "Real Results",
  description: "I provide end-to-end design services that help businesses create products users love. From research to final pixel, I'm with you every step of the way.",
  services: [
    {
      iconName: "Sparkles",
      title: "UX/UI Design",
      description: "Creating intuitive, beautiful interfaces that delight users and achieve business goals through research-backed design decisions.",
    },
    {
      iconName: "Diamond",
      title: "Design Systems",
      description: "Building scalable, consistent design systems that streamline workflows and ensure brand coherence across all touchpoints.",
    },
    {
      iconName: "Users",
      title: "User Research",
      description: "Conducting in-depth user research to uncover insights that drive product strategy and inform design decisions.",
    },
    {
      iconName: "Camera",
      title: "Prototyping",
      description: "Building high-fidelity interactive prototypes that bring ideas to life and enable effective user testing and stakeholder communication.",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Why Work With Me",
  titleRegular: "Design With",
  titleItalic: "Purpose",
  statsLabel: "By The Numbers",
  stats: [
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 12, suffix: "", label: "Design Awards" },
  ],
  featureCards: [
    {
      image: asset("/feature-1.jpg"),
      imageAlt: "Collaborative design workshop",
      title: "Collaborative Approach",
      description: "I work closely with your team, ensuring alignment at every stage and fostering a culture of design thinking.",
    },
    {
      image: asset("/feature-2.jpg"),
      imageAlt: "Design process visualization",
      title: "Data-Driven Design",
      description: "Every design decision is backed by research, user feedback, and analytics to ensure measurable outcomes.",
    },
  ],
  wideImage: asset("/process-wide.jpg"),
  wideImageAlt: "End-to-end design process",
  wideTitle: "From Concept to Launch",
  wideDescription: "A proven process that takes your product from initial ideation through to a polished, market-ready solution.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Client Stories",
  titleRegular: "What People",
  titleItalic: "Say",
  testimonials: [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "VP of Product, Khalifa Fund",
      image: asset("/testimonial-1.jpg"),
      quote: "Conrad's platform design transformed how our teams map and optimize customer journeys. His strategic thinking and user-centric approach delivered a solution that exceeded our expectations.",
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      role: "CEO, DigitalQatalyst",
      image: asset("/testimonial-2.jpg"),
      quote: "Working with Conrad was a game-changer. He didn't just design a website—he helped us rethink our entire digital presence. The results speak for themselves.",
    },
    {
      id: 3,
      name: "Design Community",
      role: "Featured on Dribbble & Behance",
      image: asset("/testimonial-3.jpg"),
      quote: "CyberSolution represents the gold standard for design systems. The attention to accessibility, comprehensive documentation, and flexible architecture make it an invaluable resource.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Frequently",
  titleItalic: "Asked",
  ctaText: "Still have questions?",
  ctaButtonText: "Get in Touch",
  ctaHref: "#contact",
  faqs: [
    {
      id: "1",
      question: "What is your design process?",
      answer: "My design process follows a user-centered approach: Discovery (research and stakeholder interviews), Define (problem framing and strategy), Design (ideation, prototyping, and testing), and Deliver (final designs and handoff). Each phase involves close collaboration with your team.",
    },
    {
      id: "2",
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A typical mobile app redesign takes 8-12 weeks, while a comprehensive design system project may take 12-16 weeks. I provide detailed timelines during our initial consultation.",
    },
    {
      id: "3",
      question: "Do you work with remote teams?",
      answer: "Absolutely! I have extensive experience working with distributed teams across different time zones. I use tools like Figma, Miro, and Slack to ensure seamless collaboration regardless of location.",
    },
    {
      id: "4",
      question: "What industries do you specialize in?",
      answer: "I have deep experience in fintech, healthcare, and e-commerce. However, my user-centered approach translates well across industries. I enjoy the challenge of understanding new domains and bringing fresh perspectives.",
    },
    {
      id: "5",
      question: "How do you handle design handoff to developers?",
      answer: "I provide comprehensive design documentation including component libraries, interaction specs, and accessibility guidelines. I also offer developer support during implementation to ensure the final product matches the design vision.",
    },
  ],
};

// Case Study Detail Section
export interface CaseStudySection {
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
}

// Design Process Phases
export interface InsightCard {
  title: string;
  description: string;
  icon?: string;
}

export interface PersonaCard {
  name: string;
  age: string;
  role: string;
  bio: string;
  goals: string[];
  painPoints: string[];
  image?: string;
}

export interface DesignPhase {
  phase: 'discover' | 'define' | 'develop' | 'deliver';
  title: string;
  subtitle?: string;
  description: string;
  insights?: InsightCard[];
  personas?: PersonaCard[];
  problemStatement?: string;
  productVision?: string;
  goals?: string[];
  userStories?: { story: string; feature: string }[];
  designPrinciples?: string[];
  keyFeatures?: { title: string; description: string }[];
  solutionDescription?: string;
  userFlows?: { title: string; description: string }[];
  loFiIdeation?: string;
  images?: { src: string; alt: string; caption?: string }[];
}

export interface Takeaway {
  title: string;
  description: string;
}

export interface CaseStudyDetail {
  id: number;
  title: string;
  category: string;
  year: string;
  client: string;
  duration: string;
  role: string;
  product?: string;
  tools?: string[];
  heroImage: string;
  overview: string;
  challenge: string;
  challengeCards?: { title: string; description: string }[];
  solution: string;
  approach?: string;
  designPhases?: DesignPhase[];
  process: CaseStudySection[];
  results: { metric: string; value: string; description: string }[];
  takeaways?: Takeaway[];
  reflection?: string;
  gallery: { src: string; alt: string; caption?: string }[];
  liveUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  nextProject?: {
    id: number;
    title: string;
    image: string;
  };
}

export const caseStudiesConfig: CaseStudyDetail[] = [
  {
    id: 1,
    title: "Enterprise Journey Web App Design",
    category: "Web App Design",
    year: "2025",
    client: "Khalifa Fund, UAE",
    duration: "12 months",
    role: "Product Designer",
    product: "Enterprise Journey Platform",
    tools: ["Figma", "Miro", "Maze"],
    heroImage: asset("/case-study-1-hero.png"),
    overview: "A comprehensive web application designed to streamline enterprise customer journey mapping and analytics. The platform serves product teams, UX designers, and business analysts, enabling them to visualize, analyze, and optimize complex customer experiences across multiple touchpoints.",
    challenge: "Enterprise teams struggled with fragmented tools and disconnected data when mapping customer journeys. Existing solutions were either too simplistic for complex B2B scenarios or too technical for non-developer users. Teams needed a unified platform that could handle sophisticated journey mapping while remaining accessible to all stakeholders.",
    solution: "We created an intuitive web application that combines powerful journey mapping capabilities with real-time analytics and collaboration features. The platform introduces a visual canvas for journey creation, automated data integration, and stakeholder-friendly reporting—all within a responsive, accessible interface that works seamlessly across devices.",
    designPhases: [
      {
        phase: 'discover',
        title: 'Understanding the Problem',
        subtitle: 'Discovery Phase',
        description: 'To design a platform that truly serves enterprise teams, I began by conducting comprehensive research with product managers, UX designers, and business analysts across multiple organizations. This phase was critical in understanding the complexities of enterprise journey mapping and identifying opportunities to create a unified solution.',
        insights: [
          {
            title: 'Fragmented Tool Ecosystem',
            description: '73% of teams used 3+ disconnected tools for journey mapping, analytics, and collaboration, leading to data silos.',
          },
          {
            title: 'Complex Data Integration',
            description: 'Teams spent 40% of their time manually importing and syncing customer data from various sources.',
          },
          {
            title: 'Limited Collaboration Features',
            description: 'Stakeholder alignment was difficult with static exports and no real-time collaboration capabilities.',
          },
          {
            title: 'Steep Learning Curves',
            description: 'Existing enterprise tools required extensive training, creating barriers for non-technical team members.',
          },
        ],
        images: [
          { src: '/case-study-1-research.jpg', alt: 'User research sessions', caption: 'Conducting stakeholder interviews with enterprise teams' }
        ]
      },
      {
        phase: 'define',
        title: 'Defining the Solution',
        subtitle: 'Define Phase',
        description: 'Based on research insights, I synthesized findings to define clear problem statements and establish the product vision that would guide the platform development.',
        problemStatement: 'Enterprise teams need a unified journey mapping platform that integrates data sources, enables real-time collaboration, and remains accessible to all stakeholders, because current solutions are either too fragmented or too complex, causing inefficiency and misalignment.',
        productVision: 'Create the industry\'s most intuitive enterprise journey mapping platform that empowers cross-functional teams to visualize, analyze, and optimize customer experiences with confidence and speed.',
        goals: [
          'Reduce journey creation time from days to hours',
          'Enable real-time collaboration across distributed teams',
          'Integrate with 10+ major enterprise data sources',
          'Achieve 90% user satisfaction for ease of use',
        ],
        userStories: [
          {
            story: 'As a product manager, I want to quickly map customer journeys with real data, so I can make informed decisions without waiting for analyst reports.',
            feature: 'Smart Canvas: Drag-and-drop journey builder with automated data integration from CRM and analytics platforms.',
          },
          {
            story: 'As a UX designer, I want to collaborate with stakeholders in real-time, so we can align on journey improvements without endless email threads.',
            feature: 'Live Collaboration: Multi-user editing with comments, annotations, and version history.',
          },
          {
            story: 'As a business analyst, I want to generate executive-ready reports automatically, so I can focus on insights rather than formatting.',
            feature: 'Intelligent Reporting: One-click export to presentation-ready formats with customizable templates.',
          },
        ],
      },
      {
        phase: 'develop',
        title: 'Ideating Solutions',
        subtitle: 'Develop Phase',
        description: 'With a clear understanding of enterprise needs and project goals, I began ideating solutions through sketching, wireframing, and prototyping. This phase focused on exploring multiple design directions before converging on the optimal platform architecture.',
        designPrinciples: [
          'Clarity Over Complexity: Every feature should have a clear purpose',
          'Data-Driven Design: Surface insights automatically, not buried in menus',
          'Collaborative by Default: Enable teamwork without friction',
          'Progressive Complexity: Simple for beginners, powerful for experts',
        ],
        keyFeatures: [
          {
            title: 'Visual Journey Canvas',
            description: 'Intuitive drag-and-drop interface for creating complex customer journeys with automated touchpoint suggestions and data integration.',
          },
          {
            title: 'Real-Time Collaboration',
            description: 'Multi-user editing with live cursors, comments, and notifications—enabling distributed teams to work together seamlessly.',
          },
          {
            title: 'Smart Data Integration',
            description: 'One-click connections to CRM, analytics, and support platforms with automated data mapping and real-time sync.',
          },
          {
            title: 'Intelligent Analytics',
            description: 'AI-powered insights that identify journey bottlenecks, drop-off points, and optimization opportunities automatically.',
          },
        ],
        images: [
          { src: '/case-study-1-ia.jpg', alt: 'Information architecture', caption: 'Platform architecture and user flows' },
          { src: '/case-study-1-prototype.jpg', alt: 'Wireframes and prototypes', caption: 'Low to high-fidelity iterations' },
        ]
      },
      {
        phase: 'deliver',
        title: 'Testing & Implementation',
        subtitle: 'Deliver Phase',
        description: 'I created high-fidelity prototypes and conducted multiple rounds of usability testing with enterprise teams. Each iteration refined the interface based on feedback, ensuring the platform worked seamlessly for all user roles and use cases.',
        images: [
          { src: '/case-study-1-prototype.jpg', alt: 'High-fidelity prototypes', caption: 'Interactive prototypes tested with enterprise teams' },
          { src: '/case-study-1-gallery-1.jpg', alt: 'Journey canvas interface', caption: 'Visual journey mapping canvas' },
          { src: '/case-study-1-gallery-2.jpg', alt: 'Collaboration features', caption: 'Real-time collaboration and analytics' },
        ]
      },
    ],
    takeaways: [
      {
        title: 'Unified Platforms Win',
        description: 'Consolidating fragmented tools into one platform reduced journey creation time by 65% and improved team alignment significantly.',
      },
      {
        title: 'Collaboration is Critical',
        description: 'Real-time collaboration features became the most-used capability, with 89% of teams reporting faster decision-making.',
      },
      {
        title: 'Progressive Complexity Works',
        description: 'Designing for both beginners and power users ensured adoption across all skill levels without compromising functionality.',
      },
      {
        title: 'Data Integration is Essential',
        description: 'Automated data connections eliminated 40% of manual work, allowing teams to focus on insights rather than data wrangling.',
      },
    ],
    process: [
      {
        title: "Enterprise Research & Discovery",
        content: "We conducted stakeholder interviews with product managers, UX designers, and business analysts across multiple organizations. Through contextual inquiries and workflow analysis, we identified key pain points in journey mapping, data integration, and team collaboration.",
        image: asset("/case-study-1-research.jpg"),
        imageAlt: "Enterprise stakeholder research sessions"
      },
      {
        title: "Platform Architecture",
        content: "We designed a scalable information architecture that supports complex journey mapping while remaining intuitive. User flow mapping and card sorting exercises helped us create a structure that works for both beginners and power users.",
        image: asset("/case-study-1-ia.jpg"),
        imageAlt: "Platform architecture and user flows"
      },
      {
        title: "Prototyping & Validation",
        content: "We built high-fidelity interactive prototypes and conducted multiple rounds of usability testing with enterprise teams. Each iteration refined the interface based on real feedback, ensuring the platform worked seamlessly for all user roles.",
        image: asset("/case-study-1-prototype.jpg"),
        imageAlt: "Interactive prototype screens"
      }
    ],
    results: [
      { metric: "Journey Creation", value: "-65%", description: "Reduction in time to create journeys" },
      { metric: "User Satisfaction", value: "4.8/5", description: "Platform ease-of-use rating" },
      { metric: "Team Collaboration", value: "+89%", description: "Increase in real-time collaboration" },
      { metric: "Data Integration", value: "-40%", description: "Reduction in manual data work" }
    ],
    gallery: [
      { src: asset("/case-study-1-gallery-1.jpg"), alt: "Journey canvas", caption: "Visual journey mapping canvas" },
      { src: asset("/case-study-1-gallery-2.jpg"), alt: "Collaboration interface", caption: "Real-time collaboration and analytics" },
      { src: asset("/case-study-1-gallery-3.jpg"), alt: "Data integration", caption: "Smart data integration dashboard" }
    ],
    testimonial: {
      quote: "Conrad's platform design transformed how our teams map and optimize customer journeys. The intuitive interface and powerful features exceeded our expectations.",
      author: "Sarah Mitchell",
      role: "VP of Product, Khalifa Fund"
    },
    nextProject: {
      id: 2,
      title: "DQ Corporate Website",
      image: asset("/case-study-2-hero.png")
    }
  },
  {
    id: 2,
    title: "DigitalQatalyst Corporate Website Redesign",
    category: "Corporate Web | B2B Digital",
    year: "2025",
    client: "DigitalQatalyst, Dubai",
    duration: "12 weeks",
    role: "Lead UX/UI Designer",
    product: "Corporate Website",
    tools: ["Figma", "Miro", "Maze"],
    heroImage: asset("/case-study-2-hero.png"),
    overview: "DigitalQatalyst is a digital transformation consultancy serving enterprise and government organizations across finance, logistics, energy, and public sectors. Despite deep expertise and a strong portfolio, their digital presence functioned as a static brochure rather than a business development engine.\n\nThis engagement was positioned as a strategic repositioning initiative—not a visual redesign. We restructured the design workflow around AI-accelerated prototyping, moving directly from research to interactive prototypes to shorten validation cycles and reduce production waste.\n\nWithin 90 days of launch:\n• Bounce rate: 67% → 43%\n• Consultation requests: +52%\n• Value clarity: 31% → 71%\n• Mobile bounce: 79% → 49%\n• Page production: 3 weeks → 2.3 days\n\nA measurable commercial transformation.",
    challenge: "DQ operates in a competitive enterprise consulting landscape where credibility, clarity, and trust must be established within seconds. However, the existing website created four structural risks:\n\n1. Positioning Ambiguity – Only 31% of visitors understood what DQ actually does.\n2. Navigation Friction – Services reflected internal taxonomy, not client decision pathways.\n3. Mobile Abandonment – 79% mobile bounce represented lost executive traffic.\n4. Under-leveraged Authority – Enterprise client credibility was hidden below the fold.\n\nThe risk was not aesthetic. The risk was commercial: high-value enterprise traffic was disengaging before qualification.",
    solution: "We created a modern, conversion-focused website that clearly communicates DQ's value proposition through strategic information architecture, mobile-first design, prominent social proof integration, and optimized conversion paths. The redesign achieved a 40% reduction in bounce rate (67% to 43%), 52% increase in consultation form submissions, and 71% visitor comprehension of DQ's core business (up from 31%).",
    designPhases: [
      {
        phase: 'discover',
        title: 'Understanding the Problem',
        subtitle: 'Discover Phase — Double Diamond: Diamond 1, First Half',
        description: 'We conducted:\n• 4 executive stakeholder interviews\n• 6 enterprise client interviews\n• 6-month analytics & behavior audit\n• Competitive positioning analysis\n\nThe most critical insight: Users were not overwhelmed by complexity. They were unclear about positioning.\n\nWhen a visitor cannot articulate your value proposition within seconds, conversion friction compounds across every page.\n\nThis became the organizing principle for the redesign.',
        insights: [],
        images: []
      },
      {
        phase: 'define',
        title: 'Defining the Solution',
        subtitle: 'Define Phase — Double Diamond: Diamond 1, Second Half',
        description: 'We reframed the website\'s purpose:\n\nNot to "inform." But to support enterprise decision-making under time constraints.\n\nStrategic Design Objectives:\n• Establish positioning clarity within the first viewport\n• Align navigation to industry and outcome mental models\n• Surface credibility continuously — not episodically\n• Reduce friction at conversion inflection points\n\nSuccess Metrics (Business-Level):\n• Bounce rate < 45%\n• Consultation increase ≥ 40%\n• Value clarity ≥ 70%\n• Mobile bounce < 55%',
      },
      {
        phase: 'develop',
        title: 'Ideating Solutions',
        subtitle: 'Develop Phase — Double Diamond: Diamond 2, First Half',
        description: 'AI-Enabled Strategic Exploration\n\nSkipping wireframes allowed us to test strategic hypotheses earlier. Using AI-assisted tools, we generated and iterated multiple hero messaging hierarchies, outcome-first vs narrative-first structures, sector-based navigation clustering, form placement and copy tone variations, and responsive breakpoint behaviors.\n\nInstead of presenting abstract sketches, we presented interactive prototypes reflecting near-production behavior. This shifted stakeholder conversations from "Do we like this layout?" to "Does this reduce decision friction?"\n\nThe difference was material.',
        keyFeatures: [
          {
            title: 'Evidence Before Explanation',
            description: 'Enterprise users seek validation before exploration.\n\nWe introduced measurable outcome signals within the first viewport and moved client authority assets above the fold.\n\nResult: Immediate trust calibration.',
          },
          {
            title: 'Navigation Aligned to User Intent',
            description: 'We restructured service discovery around sectors and problem domains rather than internal service architecture.\n\nThis reduced decision fatigue and increased Services engagement from 42% to 68%.',
          },
          {
            title: 'Conversion as a Designed Experience',
            description: 'The consultation form was treated as a product.\n\nWe reduced fields, contextualized entry points, reframed copy tone, and surrounded the interaction with trust signals.\n\nResult: +52% increase in qualified submissions.',
          },
          {
            title: 'Mobile as a Strategic Channel',
            description: 'Rather than scaling desktop down, we validated mobile-first prototypes directly.\n\nMobile bounce reduced by 30 percentage points.\n\nExecutive commute traffic became a viable acquisition channel.',
          },
        ],
      },
      {
        phase: 'deliver',
        title: 'System Over Screens',
        subtitle: 'Deliver Phase — Double Diamond: Diamond 2, Second Half',
        description: 'The final output was not pages. It was infrastructure.\n\nDeliverables:\n• 47 reusable components\n• Shared design tokens\n• Accessibility compliance\n• Performance budget alignment\n• Scalable content framework\n\nThe system now enables campaign page launches in under 3 days.\n\nThe website evolved from marketing artifact to modular growth platform.',
      },
    ],
    takeaways: [
      {
        title: 'Positioning Is a UX Problem',
        description: 'Clarity of business narrative drives interaction outcomes.',
      },
      {
        title: 'AI Is a Force Multiplier, Not a Strategy',
        description: 'AI reduced execution friction. Research defined direction. Strategic judgment remained the differentiator.',
      },
      {
        title: 'Validation Speed Is a Competitive Advantage',
        description: 'The faster hypotheses are tested, the lower the cost of being wrong. AI-enabled prototyping materially increased organizational learning speed.',
      },
      {
        title: 'Corporate Websites Are Revenue Systems',
        description: 'When treated as infrastructure rather than collateral, measurable commercial outcomes follow.',
      },
    ],
    reflection: 'This project demonstrates how modern product leadership evolves beyond deliverables.\n\nBy integrating AI into early-stage experimentation and reframing the website as decision infrastructure, we:\n• Reduced wasted production cycles\n• Improved stakeholder alignment\n• Accelerated validation\n• Delivered measurable commercial performance gains\n\nThe result was not a redesigned interface.\n\nIt was a repositioned enterprise growth engine supported by a scalable digital system.',
    process: [
      {
        title: "Multi-Method Research Program",
        content: "Six-week discovery phase including 8 stakeholder interviews with DQ leadership, 12 user interviews with enterprise clients across GCC region, six months of Google Analytics and Hotjar data analysis, competitive benchmarking of 8 consultancy websites, quantitative survey with 247 respondents, and full content audit of 84 existing pages.",
        image: asset("/case-study-2-research.jpg"),
        imageAlt: "Stakeholder workshops and user research sessions"
      },
      {
        title: "Ideation & Prototyping",
        content: "Three cross-functional workshops using 'How Might We' questions and Crazy 8s rapid sketching. Four homepage concepts emerged, with 'Hybrid Convergence' selected as the strongest all-persona solution. Low-fidelity wireframes produced for 14 page templates, followed by two rounds of feedback and iteration.",
        image: asset("/case-study-2-data.jpg"),
        imageAlt: "User flows and wireframe iterations"
      },
      {
        title: "Design System & Testing",
        content: "Comprehensive design system with color palette, typography system, and 12-column CSS Grid. Two rounds of usability testing with 24 participants revealed critical issues with pricing opacity and contact clarity, leading to targeted improvements that increased satisfaction scores from 3.6/5 to 4.3/5.",
        image: asset("/case-study-2-accessibility.jpg"),
        imageAlt: "Design system and component library"
      }
    ],
    results: [
      { metric: "Bounce Rate", value: "-24pts", description: "Reduced from 67% → 43%" },
      { metric: "Consultation Submissions", value: "+52%", description: "Increased qualified leads" },
      { metric: "Value Comprehension", value: "71%", description: "More than doubled from 31%" },
      { metric: "Session Duration", value: "3×", description: "Average session duration tripled" },
      { metric: "Mobile Submissions", value: "31%", description: "Of total leads (previously negligible)" }
    ],
    gallery: [
      { src: asset("/case-study-2-homepage.png"), alt: "Homepage design", caption: "Modern homepage with dynamic hero section" },
      { src: asset("/case-study-2-services.png"), alt: "Services page", caption: "Clear service offerings and capabilities" },
      { src: asset("/case-study-2-mobile.png"), alt: "Mobile responsive design", caption: "Optimized mobile experience" }
    ],
    liveUrl: "https://digitalqatalyst.com/",
    nextProject: {
      id: 3,
      title: "CyberSolution Design System",
      image: asset("/case-study-3-hero.png")
    }
  },
  {
    id: 3,
    title: "CyberSolution Design System",
    category: "Design Systems",
    year: "2024",
    client: "Personal Project",
    duration: "10 weeks",
    role: "Lead Design Systems Designer",
    product: "CyberSolution Design System",
    tools: ["Figma"],
    heroImage: asset("/case-study-3-hero.png"),
    overview: "CyberSolution is a comprehensive design system built to illuminate the path toward consistent, accessible, and scalable digital experiences. Created as a passion project, it demonstrates the power of systematic design thinking in creating cohesive products across multiple platforms and touchpoints.",
    challenge: "Modern digital products often suffer from inconsistent experiences across platforms, fragmented design decisions, and accessibility gaps. Teams waste time recreating components and struggle to maintain visual and functional consistency as products scale.\n\nWithout a unified system, design debt accumulates and user experience suffers.",
    challengeCards: [
      {
        title: 'Inconsistent Component Behavior',
        description: '78% of products showed variations in how similar components functioned across different screens and platforms.',
      },
      {
        title: 'Accessibility Gaps',
        description: 'Most design systems lacked comprehensive accessibility guidelines, leading to WCAG compliance issues.',
      },
      {
        title: 'Poor Documentation',
        description: 'Teams struggled with incomplete or outdated documentation, causing confusion and implementation errors.',
      },
      {
        title: 'Limited Scalability',
        description: 'Existing systems were rigid, making it difficult to adapt components for different brand needs or use cases.',
      },
    ],
    solution: "CyberSolution provides a complete design foundation with reusable components, design tokens, accessibility guidelines, and comprehensive documentation. The system enables teams to build consistent, accessible experiences faster while maintaining flexibility for brand expression and product-specific needs.",
    approach: "I approached CyberSolution as a systematic design challenge—not just creating components, but building infrastructure.\n\nThe methodology:\n• Research-driven foundation\n• Token-first architecture\n• Accessibility as baseline\n• Documentation as product\n\nThis wasn't about visual design alone. It was about creating a scalable system that reduces friction and elevates quality.",
    designPhases: [
      {
        phase: 'discover',
        title: 'Understanding the Problem',
        subtitle: 'Discover Phase',
        description: 'To create a truly effective design system, I began by researching common pain points teams face when building digital products. Through analysis of existing design systems, user interviews with designers and developers, and auditing popular products, I identified critical patterns and opportunities for CyberSolution.',
        insights: [],
        images: []
      },
      {
        phase: 'define',
        title: 'Defining the Solution',
        subtitle: 'Define Phase',
        description: 'Based on research insights, I synthesized findings to define clear principles and establish the vision for CyberSolution—a design system that brings clarity, consistency, and accessibility to digital product development.\n\nStrategic Design Objectives:\n• Establish 100% WCAG 2.1 AA compliance as the baseline\n• Create flexible token architecture for brand customization\n• Provide comprehensive documentation for seamless adoption\n• Enable rapid component development without sacrificing quality\n\nSuccess Metrics:\n• Component development time reduction ≥ 60%\n• WCAG compliance = 100%\n• Documentation completeness = 100%\n• Designer/developer satisfaction ≥ 90%',
      },
      {
        phase: 'develop',
        title: 'Building CyberSolution',
        subtitle: 'Develop Phase',
        description: 'I created CyberSolution from the ground up, establishing a foundation of design tokens, building a comprehensive component library, and crafting detailed guidelines. Every decision was made with consistency, accessibility, and scalability in mind.\n\nThe system architecture was designed to support:\n• Flexible theming through design tokens\n• Platform-agnostic component patterns\n• Comprehensive accessibility compliance\n• Clear documentation for adoption',
        keyFeatures: [
          {
            title: 'Foundation Layer',
            description: 'Design tokens for colors, typography, spacing, elevation, and motion—creating a flexible, themeable foundation that maintains consistency while enabling brand expression.',
          },
          {
            title: 'Component Library',
            description: '50+ production-ready components from buttons to complex data tables, all WCAG 2.1 AA compliant with comprehensive usage guidelines and code examples.',
          },
          {
            title: 'Pattern Library',
            description: 'Common UI patterns and compositions showing how components work together in real scenarios, reducing decision fatigue for designers.',
          },
          {
            title: 'Documentation Hub',
            description: 'Comprehensive guidelines covering usage, accessibility, code examples, and design principles—ensuring teams can adopt the system successfully.',
          },
        ],
      },
      {
        phase: 'deliver',
        title: 'Documentation & Delivery',
        subtitle: 'Deliver Phase',
        description: 'I created comprehensive documentation covering every aspect of CyberSolution—from design principles to implementation details. The system was packaged with Figma libraries, code snippets, and interactive examples to ensure teams could adopt it successfully.\n\nDeliverables:\n• 50+ production-ready components\n• 200+ design tokens\n• Complete accessibility guidelines\n• Implementation documentation\n• Figma component library\n\nThe system evolved from concept to a complete design infrastructure ready for real-world adoption.',
      },
    ],
    takeaways: [
      {
        title: 'Systems Thinking Over Component Thinking',
        description: 'A design system is infrastructure, not a collection of components. The real value comes from the relationships, constraints, and flexibility built into the foundation.',
      },
      {
        title: 'Accessibility Cannot Be Retrofitted',
        description: 'Building accessibility into the foundation from day one ensures every product using the system is inclusive by default. Retrofitting is exponentially more expensive.',
      },
      {
        title: 'Documentation Is the Product',
        description: 'Without clear, comprehensive documentation, a design system is just a Figma file. Documentation transforms components into a usable, adoptable system.',
      },
      {
        title: 'Flexibility Within Constraints',
        description: 'The best systems provide clear constraints that enable consistency while allowing enough flexibility for teams to solve unique problems creatively.',
      },
    ],
    process: [
      {
        title: "Research & Foundation",
        content: "I researched existing design systems and interviewed designers and developers to understand common pain points. This research informed the foundational principles and structure of Lumina.",
        image: asset("/case-study-3-checkout.jpg"),
        imageAlt: "Design system research and analysis"
      },
      {
        title: "Token & Component Development",
        content: "I built a comprehensive token system and component library from the ground up. Every component was designed with accessibility, flexibility, and scalability in mind.",
        image: asset("/case-study-3-journey.jpg"),
        imageAlt: "Design tokens and component library"
      },
      {
        title: "Documentation & Delivery",
        content: "I created detailed documentation covering design principles, component usage, accessibility guidelines, and implementation examples. The system was packaged for easy adoption by design and development teams.",
        image: asset("/case-study-3-mobile.jpg"),
        imageAlt: "System documentation and guidelines"
      }
    ],
    results: [
      { metric: "Components", value: "50+", description: "Production-ready accessible components" },
      { metric: "WCAG Compliance", value: "100%", description: "AA standard across all components" },
      { metric: "Design Tokens", value: "200+", description: "Flexible theming variables" },
      { metric: "Documentation", value: "Complete", description: "Comprehensive usage guidelines" }
    ],
    gallery: [
      { src: asset("/case-study-3-gallery-1.jpg"), alt: "Component library", caption: "Production-ready component library" },
      { src: asset("/case-study-3-gallery-2.jpg"), alt: "Design tokens", caption: "Flexible token architecture" },
      { src: asset("/case-study-3-gallery-3.jpg"), alt: "Documentation", caption: "Comprehensive system documentation" }
    ],
    reflection: "CyberSolution represents more than a design system—it's a philosophy.\n\nThe project reinforced that great design systems aren't about visual polish. They're about infrastructure that enables teams to focus on solving user problems rather than reinventing foundational patterns.\n\nAccessibility, documentation, and flexibility aren't features. They're requirements.\n\nThe most valuable insight: A design system's success isn't measured by how many components it has, but by how much friction it removes from the product development process.",
    testimonial: {
      quote: "CyberSolution represents the gold standard for design systems. The attention to accessibility, comprehensive documentation, and flexible architecture make it an invaluable resource for any product team.",
      author: "Design Community",
      role: "Featured on Dribbble & Behance"
    },
    nextProject: {
      id: 1,
      title: "Enterprise Journey Web App Design",
      image: asset("/case-study-1-hero.png")
    }
  }
];

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "CONRAD",
  contactLabel: "Get in Touch",
  email: "otienoconrad58@gmail.com",
  locationText: "Nairobi, Kenya\nAvailable Worldwide",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  socialLabel: "Follow Along",
  socialLinks: [
    { iconName: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { iconName: "Twitter", href: "https://twitter.com", label: "Twitter" },
    { iconName: "Linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:otienoconrad58@gmail.com", label: "Email" },
  ],
  tagline: "Crafting digital experiences\nthat make a difference",
  copyright: "© 2025 Conrad Otieno. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
