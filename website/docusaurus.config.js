// Docs at https://v2.docusaurus.io/docs/configuration


// Replace 'project-blueprint' with {project name}
const projectName = 'The Untold Stories of Open Source'
// Replace 'project-blueprint' with {project name}
const projectSlug = 'linux-foundation-podcast-project'
// Replace 'FINOS' with {name of copyright owner}
const copyrightOwner = 'The Linux Foundation'

module.exports = {  
  title: `${projectName}`,
  tagline: `${projectName}`,
  url: 'https://podcast.linuxfoundation.org/',
  baseUrl: '/',
  favicon: 'img/favicon/cropped-favicon-80x80.png',
  projectName: 'lf-podcast',
  organizationName: 'linuxfoundation',
  trailingSlash: false,
  customFields: {
    deploymentBranch: 'gh-pages',
    repoUrl: `https://github.com/linuxfoundation/lf-podcast`,
    ctaButton: 'CONTRIBUTE YOUR LF PODCAST EPISODE',
    ctaUrl: 'https://github.com/linuxfoundation/lf-podcast',
    ctaHeader: 'The Linux Foundation Podcast Series'
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700'],
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: `${projectName}`,
      logo: {
        alt: 'The Linux Foundation',
        src: 'img/favicon/lf_logo.svg',
      },
      items: [
        {to: 'docs/', label: 'Introduction', position: 'right'},
        {to: 'docs/podcasts/finance-industry', label: 'Podcasts', position: 'right'},
        {to: 'docs/templates', label: 'Add New Podcast', position: 'right'},
        {href: 'https://feeds.captivate.fm/untold-stories-of-open-source/', label: 'RSS', position: 'right'},        
        {href: 'https://github.com/linuxfoundation/lf-podcast', label: 'GitHub', position: 'right'}
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} ${projectName} - ${copyrightOwner}`,
      logo: {
        alt: 'The Linux Foundation',
        src: 'img/untold-stories.png',
        href: 'https://linuxfoundation.org/'
      },
      links: [
        {
          title: 'Getting Started',
          items: [
            {
              label: 'Podcast Intro',
              to: 'docs/',
            },
            {
              label: 'LF Podcast Team',
              to: 'docs/team',
            }
          ]
        },
        {
          title: 'The Linux Foundation',
          items: [
            {
              label: 'The Linux Foundation Website',
              to: 'https://linuxfoundation.org/',
            },
            {
              label: 'About',
              to: 'https://linuxfoundation.org/about/',
            },
            {
              label: 'Blog',
              to: 'https://linuxfoundation.org/blog/',
            }
          ]
        },
        {
          title: 'Podcast Supporters',
          items: [
            {
              label: 'Fintech Open Source Foundation',
              to: 'https://www.finos.org/',
            },
            {
              label: 'FINOS GitHub',
              to: 'https://github.com/finos',
            },
            {
              label: 'FINOS News and Events',
              to: 'https://www.finos.org/news-and-events',
            }
          ]
        },
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          editUrl:
            'https://github.com/linuxfoundation/lf-podcast/edit/main/website/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};    
