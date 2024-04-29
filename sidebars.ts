import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Single Sign-on',
      className: 'sso_category',
      items: [
        {
          type: 'doc',
          label: 'SSO Basics', // The link label
          id: 'learn-basics/single-sign-on', // The internal path
        },
       {
        type: 'doc',
        label: 'Quick Start', // The link label
        id: 'single-sign-on/quickstart-sso', // The internal path
      }, 
      {
         type: 'doc',
         label: 'Test SSO', // The link label
         id: 'single-sign-on/testing-sso', // The internal path
        },
       {
         type: 'doc',
         label: 'Go-live Checklist', // The link label
         id: 'single-sign-on/golive-checklist', // The internal path
        }]
    },
    {
      type: 'category',
      label: 'Admin Portal',
      items: [
         {
          type: 'doc',
          label: 'Integrate', // The link label
          id: 'admin-portal/quickstart-admin-portal', // The internal path
        },
              'admin-portal/custom-domain', 'admin-portal/branding-theming']
    },
    {
      type: 'category',
      // link: {
      //   type: 'generated-index',
      //   title: 'Integration Guides',
      //   slug: '/integrations'
      // },
      label: 'Advanced Guides',
      items: ['best-practices/manage-client-secrets', 'best-practices/redirect-uri', 'best-practices/error-handling', 'best-practices/advanced-saml', 'best-practices/troubleshooting-sso' ]
    },
    {
      type: 'category',
      // link: {
      //   type: 'generated-index',
      //   title: 'Integration Guides',
      //   slug: '/integrations'
      // },
      label: 'Manage Scalekit',
      items: ['manage-scalekit/glossary' ]
    },
    {
      type: 'category',
      // link: {
      //   type: 'generated-index',
      //   title: 'Integration Guides',
      //   slug: '/integrations'
      // },
      label: 'Integration Guides',
      collapsible: true,
      collapsed: true,
      items: ['integrations/saml', 'integrations/oidc', 'integrations/azure-ad-saml', 'integrations/okta-saml', 'integrations/onelogin-saml' ]
    },
    {
      type: 'category',
      label: 'API & SDKs',
      items: [{
        type: 'link',
        label: 'API Reference', // The link label
        href: '/api-reference', // The internal path
      }, 'sdks']
    },
    
  ],
  
};

export default sidebars;
