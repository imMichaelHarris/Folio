export interface ProjectStyle {
  gradient: {
    from: string;
    via: string;
    to: string;
  };
}

export interface Project {
  title: string;
  description: string;
  details: string;
  tech: string[];
  link: string;
  liveUrl: string;
  videoUrl?: string;
  isMobile?: boolean;
  style: ProjectStyle;
}

export const projects: Project[] = [
  {
    title: "Rally Base",
    description: "A native mobile application that allows users to create events and invite their friends and family to better organize gatherings.",
    details: "App uses many third party APIs like Google's map and OAuth services and Twillio for sending text messages to invite users by text message.",
    tech: ["React Native", "Expo", "TypeScript", "Appwrite"],
    link: "https://github.com/imMichaelHarris/rally",
    liveUrl: "https://rallybase.app",
    videoUrl: "/videos/rallio.mp4",
    isMobile: true,
    style: {
      gradient: {
        from: "#a7f3d0",
        via: "#99f6e4",
        to: "#a5f3fc"
      }
    }
  },
  {
    title: "Founder Grants",
    description: "A searchable website attached to a database that can feed users grants based on requirements they enter.",
    details: "Users submit grants to this site and wait for it to be approved by admin for everyone to view. Built with a focus on accessibility and user experience.",
    tech: ["React", "Redux", "Auth0", "Node.js", "Express", "PostgreSQL"],
    link: "https://github.com/Lambda-School-Labs/startup-grant-database-fe",
    liveUrl: "https://grantly-b5b58.firebaseapp.com",
    videoUrl: "/videos/founder-grants.mp4",
    isMobile: false,
    style: {
      gradient: {
        from: "#bfdbfe",
        via: "#c7d2fe",
        to: "#ddd6fe"
      }
    }
  },
  {
    title: "Switch Filter Application",
    description: "Application for co-workers of Universal. It sorts through schedule and displays appropriate information to the user.",
    details: "It's gotten the attention of managers in our corporate offices and has helped provide a baseline of a future full scale application.",
    tech: ["JavaScript", "React", "Semantic UI"],
    link: "https://github.com/imMichaelHarris/Switch",
    liveUrl: "https://findmyswitch.netlify.app",
    videoUrl: "/videos/switch-filter.mp4",
    isMobile: false,
    style: {
      gradient: {
        from: "#fecdd3",
        via: "#fae8ff",
        to: "#fed7aa"
      }
    }
  },
  {
    title: "R.G.B",
    description: "R.G.B. color game inspired by Colt Steele.",
    details: "Learn RGB color values by playing this game. You'll receive a R.G.B. color value that you'll make guesses on what color that value represents.",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/imMichaelHarris/game",
    liveUrl: "https://immichaelharris.com/game/game.html",
    videoUrl: "/videos/rgb.mp4",
    isMobile: false,
    style: {
      gradient: {
        from: "#fef3c7",
        via: "#fde68a",
        to: "#fcd34d"
      }
    }
  }
]; 