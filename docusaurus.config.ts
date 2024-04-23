import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Scalekit | Developer Documentation',
  tagline: 'Enterprise Ready Authentiction Platform for SaaS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.scalekit.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'scalekit-inc', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  clientModules:['./iframedetector.js'],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          showLastUpdateTime: true,
          sidebarCollapsed: false,
          sidebarPath: './sidebars.ts',
          routeBasePath:'/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    // Redocusaurus config
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            spec: 'openapi/swagger.json',
            route: '/api/',
          }
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  themeConfig: {
    navbar: {
      title: 'Scalekit Docs',
      items: [
        { to: '/api', label: 'API Reference', position: 'left' },
        {
          type: 'search',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Scalekit Inc.`,
    },
    algolia: {
      appId: "7554BDRAJD",
      apiKey: "0a906499d09119c83fd6d0568e7f8517",
      indexName: "scalekit",
      contextualSearch: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.palenight,
      // additionalLanguages: ['java','python','go', 'ruby', 'javascript', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
