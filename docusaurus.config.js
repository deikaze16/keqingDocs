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
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	deploymentBranch: 'deploy',
	organizationName: 'deikaze16',
	projectName: 'keqingDocs',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
				// disableSwitch: true,
				// defaultMode: 'light',
				switchConfig: {
					darkIcon: '🌙',
					darkIconStyle: {
						marginLeft: '1px',
						marginTop: '-2px'
					},
					lightIcon: '🔅',
					lightIconStyle: {
						marginLeft: '1px',
					},
				}
			},
			announcementBar: {
				id: 'note',
				content:
					'This website is still under development',
				backgroundColor: '#17213c',
				textColor: '#fff',
				isCloseable: false,
			},
      navbar: {
        title: 'Keqing Bot',
        logo: {
          alt: 'Keqing Bot Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/premium',
            className: 'button button--outline',
            position: 'right',
            label: 'Get Premium',
          },
          {
            href: 'https://discord.gg/keqingbot',
            label: 'Support',
            position: 'right',
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
                to: 'docs/intro'
              },
              {
                label: 'Support Server',
                href: 'https://discordapp.com/invite/keqingbot',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy-policy'
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                html: `Discord:   <span>Dei#6089</span>`
              },
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
