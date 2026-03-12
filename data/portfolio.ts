export const personalInfo = {
  name: "Dorborobari Samuel Lambert",
  role: "Frontend Engineer & Product Builder",
  tagline: "I design and build thoughtful web experiences with performance and clarity in mind.",
  philosophy: "Don't just build projects — build experiences that make people feel something",
  email: "igweajurijosph@gmail.com",
  github: "https://github.com/Lambert265",
  linkedin: "https://linkedin.com/in/samuellambert",
  twitter: "https://twitter.com/_yk_lambert",
  university: "Rivers State University (RSU)",
  location: "Nigeria",
  availability: "Available for freelance work",
};

export const skills = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Supabase", "PostgreSQL", "Firebase"],
  design: ["Figma", "UI/UX Design", "Responsive Design"],
  tools: ["Git", "Vercel", "VS Code", "npm"],
};

export const projects = [
  {
    id: "bahdel",
    title: "Bahdel",
    subtitle: "Professional Contractor Platform",
    description: "Professional contractor website with modern design and service showcase",
    longDescription: "A comprehensive platform designed to connect contractors with clients, featuring real-time project management and seamless communication.",
    image: "/images/project1.jpg",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/Lambert265/bahdel",
    live: "https://bahdel.vercel.app",
    featured: true,
    year: "2024",
    category: "Web App",
    
    // Case Study Data
    problem: "Contractors struggle to showcase their services professionally online and manage client communications effectively.",
    solution: "Built a modern, responsive platform that highlights services, past projects, and enables direct client engagement.",
    process: [
      "Conducted user research with local contractors",
      "Designed wireframes focusing on service presentation",
      "Developed responsive UI with React and TypeScript",
      "Integrated Supabase for backend functionality",
      "Implemented contact forms and inquiry management"
    ],
    challenges: [
      {
        title: "Performance Optimization",
        description: "Optimized image loading and implemented lazy loading for better performance on mobile devices."
      },
      {
        title: "Real-time Updates",
        description: "Integrated Supabase real-time subscriptions for instant project updates."
      }
    ],
    outcome: {
      metrics: [
        "90+ Lighthouse performance score",
        "50% increase in client inquiries",
        "Mobile-first responsive design"
      ],
      impact: "Helped contractors establish professional online presence and streamline client acquisition."
    },
    techStack: {
      frontend: "React, TypeScript, Tailwind CSS",
      backend: "Supabase",
      deployment: "Vercel"
    }
  },
  {
    id: "gloluxe",
    title: "Gloluxe",
    subtitle: "Luxury E-commerce Experience",
    description: "Luxury e-commerce platform with modern design and smooth user experience",
    longDescription: "A premium e-commerce platform designed for luxury brands, featuring elegant product showcases and seamless checkout experience.",
    image: "/images/project2.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Lambert265/gloluxe",
    live: "https://gloluxe.vercel.app",
    featured: true,
    year: "2024",
    category: "E-commerce",
    
    problem: "Luxury brands need sophisticated online presence that matches their premium positioning.",
    solution: "Created an elegant e-commerce platform with refined animations and intuitive shopping experience.",
    process: [
      "Analyzed luxury brand websites for design patterns",
      "Created high-fidelity mockups in Figma",
      "Implemented smooth animations with Framer Motion",
      "Built responsive product catalog",
      "Optimized checkout flow for conversions"
    ],
    challenges: [
      {
        title: "Animation Performance",
        description: "Balanced sophisticated animations with performance using Framer Motion optimization techniques."
      },
      {
        title: "Image Quality",
        description: "Implemented progressive image loading to maintain visual quality while ensuring fast load times."
      }
    ],
    outcome: {
      metrics: [
        "95+ Lighthouse score",
        "Smooth 60fps animations",
        "Fully responsive across devices"
      ],
      impact: "Demonstrated ability to build premium user experiences that match luxury brand standards."
    },
    techStack: {
      frontend: "React, TypeScript, Tailwind CSS, Framer Motion",
      deployment: "Vercel"
    }
  },
  {
    id: "cardetailer",
    title: "Car Detailer",
    subtitle: "Auto Detailing Service Platform",
    description: "Professional car detailing service website with booking functionality",
    longDescription: "A service-focused platform for car detailing businesses, featuring service showcases and appointment booking.",
    image: "/images/project3.jpg",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Lambert265/cardetailer",
    live: "https://cardetailer.vercel.app",
    featured: true,
    year: "2024",
    category: "Service Platform",
    
    problem: "Car detailing businesses need an online presence to showcase services and manage bookings.",
    solution: "Developed a visually appealing platform with service galleries and integrated booking system.",
    process: [
      "Researched car detailing industry needs",
      "Designed service-focused layout",
      "Implemented before/after image galleries",
      "Created booking interface",
      "Added smooth page transitions"
    ],
    challenges: [
      {
        title: "Image Galleries",
        description: "Built optimized image galleries showcasing before/after transformations with smooth transitions."
      },
      {
        title: "Mobile Experience",
        description: "Ensured touch-friendly interface for mobile users booking services on-the-go."
      }
    ],
    outcome: {
      metrics: [
        "Fast page load times",
        "Intuitive booking flow",
        "Mobile-optimized design"
      ],
      impact: "Provided detailing businesses with professional online booking platform."
    },
    techStack: {
      frontend: "React, Tailwind CSS, Framer Motion",
      deployment: "Vercel"
    }
  }
];

export const testimonials = [
  {
    name: "Client Name",
    role: "Founder, Company",
    content: "Lambert delivered exceptional work. His attention to detail and technical expertise exceeded our expectations.",
    avatar: "/images/avatar1.jpg"
  }
];

export const blogPosts = [
  {
    id: "building-performant-react-apps",
    title: "Building Performant React Applications",
    excerpt: "Learn the techniques I use to build fast, responsive React applications that users love.",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/images/blog1.webp",
    tags: ["React", "Performance", "Web Development"]
  },
  {
    id: "design-systems-that-scale",
    title: "Design Systems That Scale",
    excerpt: "How to build maintainable design systems for growing products.",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "/images/blog2.webp",
    tags: ["Design Systems", "UI/UX", "Frontend"]
  }
];
