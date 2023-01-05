// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Keqing Bot',
	tagline: 'Karuta Multi-functions Bot',
	url: 'https://deikaze16.github.io',
	baseUrl: '/',
	trailingSlash: false,
	onBrokenLinks: 'ignore',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	deploymentBranch: 'deploy',
	organizationName: 'deikaze16',
	projectName: 'keqingDocs',
  presets: [
    [
      '@docusaurus/preset-classic',
      // /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // pages: {
        //   path:"/"
        // },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/deikaze16/keqingDocs/edit/master',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
          
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: 'Keqing Bot',
        logo: {
          alt: 'Keqing Bot Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://discord.gg/keqingbot',
            label: 'Support',
            position: 'right',
          },
          {
            to: '/premium',
            className: 'text-gold',
            position: 'right',
            label: 'Get Premium',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ko-fi',
            items: [
              {
                html: `<a href="https://ko-fi.com/keqingbotdev"><img alt="Indonesia" src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/61e11ddcc39341db4958c5cc_Supportbutton.png" style="max-width:200px"></img></a>`,
              },
            ],
          },
          {
            title: 'Useful links',
            items: [
              {
                label: 'Docs',
                to: '/'
              },
              {
                label: 'Support Server',
                href: 'https://discordapp.com/invite/keqingbot',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy-policy'
              },{
                label: 'Terms of Service',
                to: '/tos'
              },{
                label: 'Commands',
                to: '/commands'
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                html: `Discord:   <span class="mention">@Dei#4445</span>`
              },
              {
                html: `Support server:   <a class="mention" href="https://discord.gg/keqingbot">Keqing [Bot] Mains</a>`
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Keqing Bot. Built with ❤️ in <img alt="Indonesia" src="https://paimon.moe/images/locales/id.svg" width="20px" style="border-radius:50%">`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;