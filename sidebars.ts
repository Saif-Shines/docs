import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { generateDocObjects } from "./src/utils/config-helper-fns";

const sidebars: SidebarsConfig = {
  homeSidebar: [
    {
      type: "html",
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Getting Started</span>",
      defaultStyle: true,
    },
    {
      type: "doc",
      label: "SSO - Quickstart", // The link label
      id: "sso/quickstart", // The internal path
    },
    // {
    //   type: "doc",
    //   label: "Testing SSO",
    //   id: "sso/guides/test-your-integration/using-okta",
    // },
    {
      type: "doc",
      label: "Admin Portal",
      id: "sso/quickstart-admin-portal",
    },
    {
      type: "doc",
      label: "Launch Checklist",
      id: "sso/launch-checklist",
    },
    {
      type: "doc",
      label: "Social Login - Quickstart",
      id: "sso/social-login",
    },
    {
      type: "html",
      value: "<div />", // The link label
      defaultStyle: true,
    },
    {
      type: "html",
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Implementation Guides</span>",
      defaultStyle: true,
    },
    {
      type: "doc",
      label: "Add SSO to your Login Page",
      id: "sso/guides/setup-sso/build-login-page",
    },
    {
      type: "doc",
      label: "Fetch User Attributes from IdP",
      id: "sso/guides/setup-sso/handle-user-profile",
    },
    // {
    //   type: "doc",
    //   label: "Handle Raw Attributes from IdP",
    //   id: "sso/guides/setup-sso/handle-raw-idp-attributes",
    // },
    {
      type: "doc",
      label: "Customize User Attributes",
      id: "sso/guides/setup-sso/customize-user-attributes",
    },
    {
      type: "doc",
      label: "Customize Admin Portal Branding",
      id: "sso/domain-and-theme-customization",
    },
    {
      type: "doc",
      label: "Implement IdP Initiated SSO",
      id: "sso/guides/setup-sso/implement-idp-initiated-sso",
    },
    {
      type: "doc",
      label: "Configure SAML Settings",
      id: "sso/guides/setup-sso/support-advanced-saml-settings",
    },
    {
      type: "html",
      value: "<div />", // The link label
      defaultStyle: true,
    },
    {
      type: "html",
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Integration Resources</span>",
      defaultStyle: true,
    },
    {
      type: "doc",
      label: "Integrate with Auth0",
      id: "sso/guides/integrate-with-your-auth-system/auth0",
    },
    {
      type: "doc",
      label: "Integrate with Firebase",
      id: "sso/guides/integrate-with-your-auth-system/firebase",
    },
    {
      type: "doc",
      label: "Test your Integration using Okta",
      id: "sso/guides/test-your-integration/using-okta",
    },
    {
      type: "html",
      value: "<div />", // The link label
      defaultStyle: true,
    },
    {
      type: "html",
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Learning Guides</span>",
      defaultStyle: true,
    },
    {
      type: "doc",
      label: "SSO Basics",
      id: "sso/guides/key-concepts/overview",
    },
    {
      type: "doc",
      label: "Authorization URL",
      id: "sso/guides/key-concepts/authorization-url",
    },
    {
      type: "doc",
      label: "Redirect URI",
      id: "sso/guides/key-concepts/redirect-uri",
    },
    {
      type: "doc",
      label: "ID Token Claims",
      id: "sso/guides/key-concepts/idtoken-claims",
    },
    {
      type: "doc",
      label: "Normalized User Profile",
      id: "sso/guides/key-concepts/user-profile",
    },
    // {
    //   type: "category",
    //   label: "Implementation Guides",
    //   collapsible: false,
    //   collapsed: false,
    //   link: {
    //     type: "doc",
    //     id: "sso/guides/index",
    //   },
    //   items: [
    //     {
    //       type: "category",
    //       label: "Setup SSO",
    //       collapsed: true,
    //       collapsible: true,
    //       // link: {
    //       //   type: "doc",
    //       //   id: "sso/guides/setup-sso/index",
    //       // },
    //       items: [
    //         {
    //           type: "doc",
    //           label: "Add SSO to your Login Page",
    //           id: "sso/guides/setup-sso/build-login-page",
    //         },
    //         {
    //           type: "doc",
    //           label: "Fetch User Attributes from IdP",
    //           id: "sso/guides/setup-sso/handle-user-profile",
    //         },
    //         // {
    //         //   type: "doc",
    //         //   label: "Handle Raw Attributes from IdP",
    //         //   id: "sso/guides/setup-sso/handle-raw-idp-attributes",
    //         // },
    //         {
    //           type: "doc",
    //           label: "Customize User Attributes",
    //           id: "sso/guides/setup-sso/customize-user-attributes",
    //         },
    //         {
    //           type: "doc",
    //           label: "Admin Portal Branding",
    //           id: "sso/domain-and-theme-customization",
    //         },
    //         {
    //           type: "doc",
    //           label: "Implement IdP Initiated SSO",
    //           id: "sso/guides/setup-sso/implement-idp-initiated-sso",
    //         },
    //         {
    //           type: "doc",
    //           label: "Customize SAML Assertions",
    //           id: "sso/guides/setup-sso/support-advanced-saml-settings",
    //         },
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "Integrate with your Auth System",
    //       collapsed: true,
    //       collapsible: true,
    //       // link: {
    //       //   type: "doc",
    //       //   id: "sso/guides/integrate-with-your-auth-system/index",
    //       // },
    //       items: [
    //         // {
    //         //   type: "doc",
    //         //   label: "In-House Authentication",
    //         //   id: "sso/guides/integrate-with-your-auth-system/inhouse-authentication",
    //         // },
    //         {
    //           type: "doc",
    //           label: "Auth0",
    //           id: "sso/guides/integrate-with-your-auth-system/auth0",
    //         },
    //         {
    //           type: "doc",
    //           label: "Firebase",
    //           id: "sso/guides/integrate-with-your-auth-system/firebase",
    //         },
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "Test your integration",
    //       collapsed: true,
    //       collapsible: true,
    //       // link: {
    //       //   type: "doc",
    //       //   id: "sso/guides/test-your-integration/index",
    //       // },
    //       items: [
    //         {
    //           type: "doc",
    //           label: "Using Mock IdP",
    //           id: "sso/guides/test-your-integration/using-mock-idp",
    //         },
    //         {
    //           type: "doc",
    //           label: "Using Okta",
    //           id: "sso/guides/test-your-integration/using-okta",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "Key Concepts",
    //   collapsible: true,
    //   collapsed: true,
    //   link: {
    //     type: "doc",
    //     id: "sso/guides/key-concepts/index",
    //   },
    //   items: [
    //     {
    //       type: "doc",
    //       label: "SSO Basics",
    //       id: "sso/guides/key-concepts/overview",
    //     },
    //     {
    //       type: "doc",
    //       label: "Authorization URL",
    //       id: "sso/guides/key-concepts/authorization-url",
    //     },
    //     {
    //       type: "doc",
    //       label: "Redirect URI",
    //       id: "sso/guides/key-concepts/redirect-uri",
    //     },
    //     {
    //       type: "doc",
    //       label: "ID Token Claims",
    //       id: "sso/guides/key-concepts/idtoken-claims",
    //     },
    //     {
    //       type: "doc",
    //       label: "Normalized User Profile",
    //       id: "sso/guides/key-concepts/user-profile",
    //     },
    //   ],
    // },
  ],
  integrationsSidebar: [
    {
      type: "category",
      label: "Identity Providers",
      link: {
        type: "doc",
        id: "integrations/integrations",
      },
      items: [
        {
          type: "doc",
          label: "Okta SAML",
          id: "integrations/okta-saml",
        },
        {
          type: "doc",
          label: "Azure AD SAML",
          id: "integrations/azure-ad-saml",
        },
        {
          type: "doc",
          label: "OneLogin SAML",
          id: "integrations/onelogin-saml",
        },
        {
          type: "doc",
          label: "JumpCloud SAML",
          id: "integrations/jumpcloud-saml",
        },
        {
          type: "doc",
          label: "SAML",
          id: "integrations/saml",
        },
        {
          type: "doc",
          label: "OIDC",
          id: "integrations/oidc",
        },
      ],
    },
    {
      type: "category",
      label: "Auth Systems",
      items: [
        {
          type: "doc",
          label: "Auth0",
          id: "integrations/auth0",
        },
        {
          type: "doc",
          label: "Firebase",
          id: "integrations/firebase",
        },
      ],
    },
  ],
  guidesSidebar: [
    {
      type: "link",
      label: "Back to Home",
      href: "/",
    },
    {
      type: "doc",
      label: "Explore",
      id: "sso/guides/index",
    },
  ],
};

export default sidebars;
