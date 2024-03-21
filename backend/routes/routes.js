import teamProjects from "./team/projects.route.js";
import teamAchievements from "./team/achievements.route.js";
import teamBlogs from "./team/blogs.route.js";
import sandraSkills from "./sandra/skills.route.js";
import sandraExperiences from "./sandra/experiences.route.js";
import comfortSkills from "./comfort/skills.route.js";
import comfortExperiences from "./comfort/experiences.route.js";
import kennethSkills from "./ken/skills.route.js";
import kennethExperiences from "./ken/experiences.route.js";
import prilaExperiences from "./prila/experiences.route.js";
import prilaSkills from "./prila/skills.route.js";

export default [
  {
    routeName: "/team-projects",
    routes: teamProjects,
  },
  {
    routeName: "/team-achievements",
    routes: teamAchievements,
  },
  {
    routeName: "/team-blogs",
    routes: teamBlogs,
  },
//sandra's routes
  {
    routeName: "/sandra-skills",
    routes: sandraSkills,
  },
  {
    routeName: "/sandra-experiences",
    routes: sandraExperiences,
  },
//comfort's routes
  {
    routeName: "/comfort-skills",
    routes: comfortSkills,
  },
  {
    routeName: "/comfort-experiences",
    routes: comfortExperiences,
  },
//kenneth's routes
  {
    routeName: "/kenneth-skills",
    routes: kennethSkills,
  },
  {
    routeName: "/kenneth-experiences",
    routes: kennethExperiences,
  },
//prila's routes
  {
    routeName: "/prila-skills",
    routes: prilaSkills,
  },
  {
    routeName: "/prila-experiences",
    routes: prilaExperiences,
  },
];

