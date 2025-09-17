// src/utils/constants.js

/**
 * GITHUB_USERNAME
 * Your GitHub username, used to fetch project and stats data.
 */
export const GITHUB_USERNAME = 'Suganth46';

/**
 * FEATURED_PROJECTS
 * Add the exact names of your best GitHub repositories here.
 */
export const FEATURED_PROJECTS = [
  'portfolio-project',
  'spring-boot-api-example',
  'data-structures-algorithms',
];

/**
 * SKILL_CATEGORIES
 * A structured list of your skills, organized by category.
 */
export const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: 'java.svg' },
      { name: 'Python', icon: 'python.svg' },
      { name: 'JavaScript', icon: 'javascript.svg' },
      { name: 'C', icon: 'c.svg' },
    ],
  },
  {
    title: 'Backend & Frameworks',
    items: [
      { name: 'Spring Boot', icon: 'spring.svg' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL', icon: 'mysql.svg' },
      { name: 'PostgreSQL', icon: 'postgresql.svg' },
      { name: 'MongoDB', icon: 'mongodb.svg' },
    ],
  },
  {
    title: 'Cloud & OS',
    items: [
      { name: 'Git', icon: 'git.svg' },
      { name: 'Linux', icon: 'linux.png' }
    ],
  },
  {
    title: 'Web & Frontend',
    items: [
      { name: 'HTML', icon: 'html5.svg' },
      { name: 'CSS', icon: 'css3.svg' },
    ],
  },
  {
    title: 'Testing & Tools',
    items: [
      { name: 'Postman', icon: 'postman.svg' },
    ],
  },
];
