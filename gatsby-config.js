module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://zacharyrportfolio.netlify.app/`,
    // Your Name
    name: 'Zachary Rosenberg',
    // Main Site Title
    title: `Zachary Rosenberg | Aspiring Game Developer`,
    // Description that goes under your name in main bio
    description: `Computer Science graduate with aspirations of entering the Game Industry.`,
    // Optional: Twitter account handle
    //author: ``,
    // Optional: Github account URL
    github: `https://github.com/TSAPWTCOTTTADC`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/zachary-rosenberg-14855b161/`,
    // Content of the About Me section
    about: `Graduate from UMBC with a bachelor of Computer Science, with a focus on Game Development. Hopeful of eventually becoming a video game designer`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'High School Games Projects',
        description:
          'Allotted one to two months to design a video game to present during the yearly celebration for the accomplishments of each of the school’s different magnet programs. Gained experience with collaborative programming and applied programming. Worked with a separate person on the project, each completing different portions of the game, in order to combine them for the finished product. An example was that one person programmed level generation while the other programmed how the character would move.',
      },
      {
        name: 'JumpStarters',
        description:
          'Video game created in final semester of senior year. Collaborative project alongside six other people; 3 artists and 4 programmers, myself included. Worked primarily on implementing obstacles into the game and syncing sound effects to events. Gained experience with Unreal Engine 4 and especially Blueprint. NOTE: link is to game build as of 5/9/2021.',
        link: 'https://drive.google.com/file/d/1CydmRtugVmegxMiRANnGXTeKkcl76ziY/view?usp=sharing',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Mt. Washington Pediatric Hospital',
        description: 'Technical Intern, Summer 2016-Summer 2019',
        'Updated and managed staff and equipment information along with creating Excel spreadsheets to catalogue other data.',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'C++, C#, Python (Basic), Assembly (Basic), RStudio',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Adobe Photoshop & Illustrator, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
