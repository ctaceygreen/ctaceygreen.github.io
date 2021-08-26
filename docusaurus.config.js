const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Definitely Not Intimidating',
  tagline: 'A blog by Chris Tacey-Green',
  url: 'https://ctaceygreen.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ctaceygreen', // Usually your GitHub org/user name.
  projectName: 'ctaceygreen.github.io', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Definitely Not Intimidating',
      logo: {
        alt: 'My Site Logo',
        src: 'https://avatars.githubusercontent.com/u/11404995?v=4',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ctaceygreen',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ctaceygreen',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chris Tacey-Green. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ctaceygreen/ctaceygreen.github.io',
        },
        blog: {
          blogTitle: 'Definitely Not Intimidating',
          blogDescription: 'The tech blog of Chris Tacey-Green, removing the intimidation from tech',
          /**
           * Number of blog post elements to show in the blog sidebar
           * 'ALL' to show all blog posts
           * 0 to disable
           */
          blogSidebarCount: 5,
          postsPerPage: 1,
          showReadingTime: true,
          editUrl:
            "https://github.com/ctaceygreen/ctaceygreen.github.io/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
