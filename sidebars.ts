import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { generateDocObjects } from "./src/utils/config-helper-fns";

const sidebars: SidebarsConfig = {
  homeSidebar: [
    {
      type: "category",
      label: "Single Sign-on",
      className: "sso_category",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "home",
      },
      items: [
        {
          type: "doc",
          label: "Quickstart", // The link label
          id: "sso/single-sign-on/quickstart-sso", // The internal path
        },
        {
          type: "doc",
          label: "Admin Portal",
          id: "sso/single-sign-on/quickstart-admin-portal",
        },
        {
          type: "doc",
          label: "Customization",
          id: "sso/single-sign-on/domain-and-theme-customization",
        },
        {
          type: "doc",
          label: "Launch Checklist",
          id: "sso/single-sign-on/launch-checklist",
        },
      ],
    },
    {
      type: "category",
      label: "Implementation Guides",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "sso/guides/index",
      },
      items: [
        {
          type: "category",
          label: "Setup SSO",
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "sso/guides/setup-sso/index",
          },
          items: [
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
            {
              type: "doc",
              label: "Handle Raw Attributes from IdP",
              id: "sso/guides/setup-sso/handle-raw-idp-attributes",
            },
            {
              type: "doc",
              label: "Customize User Attributes",
              id: "sso/guides/setup-sso/customize-user-attributes",
            },
            {
              type: "doc",
              label: "Admin Portal Branding",
              id: "sso/single-sign-on/domain-and-theme-customization",
            },
            {
              type: "doc",
              label: "Implement IdP Initiated SSO",
              id: "sso/guides/setup-sso/implement-idp-initiated-sso",
            },
            {
              type: "doc",
              label: "Customize SAML Assertions",
              id: "sso/guides/setup-sso/support-advanced-saml-settings",
            },
          ],
        },
        {
          type: "category",
          label: "Integrate with your Auth System",
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "sso/guides/integrate-with-your-auth-system/index",
          },
          items: [
            // {
            //   type: "doc",
            //   label: "In-House Authentication",
            //   id: "sso/guides/integrate-with-your-auth-system/inhouse-authentication",
            // },
            {
              type: "doc",
              label: "Auth0",
              id: "sso/guides/integrate-with-your-auth-system/auth0",
            },
            {
              type: "doc",
              label: "Firebase",
              id: "sso/guides/integrate-with-your-auth-system/firebase",
            },
          ],
        },
        {
          type: "category",
          label: "Test your integration",
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "sso/guides/test-your-integration/index",
          },
          items: [
            {
              type: "doc",
              label: "Using Mock IdP",
              id: "sso/guides/test-your-integration/using-mock-idp",
            },
            {
              type: "doc",
              label: "Using Okta",
              id: "sso/guides/test-your-integration/using-okta",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Key Concepts",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "sso/guides/key-concepts/index",
      },
      items: [
        {
          type: "doc",
          label: "SSO Basics",
          id: "sso/guides/key-concepts/sso-overview",
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
      ],
    },
  ],
  integrationsSidebar: [
    {
      type: "category",
      label: "Identity Providers",
      link: {
        type: "doc",
        id: "sso/guides/integrations/integrations",
      },
      items: [
        {
          type: "doc",
          label: "Okta SAML",
          id: "sso/guides/integrations/okta-saml",
        },
        {
          type: "doc",
          label: "Azure AD SAML",
          id: "sso/guides/integrations/azure-ad-saml",
        },
        {
          type: "doc",
          label: "OneLogin SAML",
          id: "sso/guides/integrations/onelogin-saml",
        },
        {
          type: "doc",
          label: "JumpCloud SAML",
          id: "sso/guides/integrations/jumpcloud-saml",
        },
        {
          type: "doc",
          label: "SAML",
          id: "sso/guides/integrations/saml",
        },
        {
          type: "doc",
          label: "OIDC",
          id: "sso/guides/integrations/oidc",
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
          id: "sso/guides/integrations/auth0",
        },
        {
          type: "doc",
          label: "Firebase",
          id: "sso/guides/integrations/firebase",
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
