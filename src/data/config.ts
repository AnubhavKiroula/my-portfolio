const config = {
  title: "Anubhav Kiroula | AI/ML & Full Stack Developer",
  description: {
    long: "Explore the portfolio of Anubhav Kiroula—an AI/ML Engineer and Full Stack Developer focused on building intelligent, real-world applications with clean architecture. Let's build something amazing together!",
    short:
      "Discover the portfolio of Anubhav Kiroula—an AI/ML Engineer and Full Stack Developer building intelligent, real-world applications.",
  },
  keywords: [
    "Anubhav Kiroula",
    "portfolio",
    "AI/ML Engineer",
    "Full Stack Developer",
    "web development",
    "React",
    "Next.js",
    "FastAPI",
    "Python",
    "HuggingFace",
    "Docker",
    "Supabase",
  ],
  author: "Anubhav Kiroula",
  email: "anubhavkiroula1@gmail.com",
  site: "",

  // for github stars button
  githubUsername: "AnubhavKiroula",
  githubRepo: "portfolio-website",


  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/AnubhavKiroula",
    linkedin:
      "https://www.linkedin.com/in/anubhav-kiroula-109641376",
    instagram: "https://www.instagram.com/anubhav_kiroula?igsh=dnZtbHU3dGxrYjdu",
    facebook: "",
    github: "https://github.com/AnubhavKiroula",
  },
};
export { config };
