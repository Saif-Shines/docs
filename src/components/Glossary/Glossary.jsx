import React from "react";
import styles from "./Glossary.module.css";

const items = [
  {
    key: "Workspace",
    value: "Represents the account of Scalekit customer.",
  },
  {
    key: "Application",
    value: "A product or product-line that you offer to your customers",
  },
  {
    key: "Environment",
    value:
      "This is your application’s deployment environment. Scalekit maps to your deployment policies and your application can have multiple environments such as development, test, staging, and production. Each environment on Scalekit will have its own configuration, API settings, and authentication policies. Each environment is strictly separated from each other, thus ensuring protection and isolation of data and configuration.",
  },
  {
    key: "Team member",
    value:
      "A user in the account that uses, evaluates, and implements Scalekit platform. These could be your organization’s full time employees or consultants. Eg: product managers, developers, customer success managers from your team.",
  },
  {
    key: "Dashboard",
    value:
      "The dashboard of Scalekit that your team members would use to configure and integrate with your application.",
  },
  {
    key: "Organization",
    value:
      "This is your customer’s organization. Your application’s users would belong to this organization.",
  },
  {
    key: "Admin Portal",
    value:
      "The user interface (UI) that your customers' IT admins use to configure SSO connections and settings. This self-service portal makes the SSO configuration experience simple, fast, and secure. Scalekit fully manages and hosts this portal. This UI can be rendered as a standalone portal or as an embedded portal within your application's admin settings section.",
  },
  {
    key: "User",
    value:
      "Users of your application that belong to your customers’ organizations. Includes users, admins, IT admins who use and implement your application.",
  },
  {
    key: "Connection",
    value:
      "Represents the unique integration between your application and your customer’s organization. Examples: Connection 1 is Okta’s identity provider integration with your customer, Foocorp. Connection 2 is Microsoft Azure’s integration with another of your customer, Barcorp.",
  },
];

export const GlossaryListing = () => (
  <div>
    {items.map((item, index) => (
      <Glossary key={index} name={item.key} description={item.value}></Glossary>
    ))}
  </div>
);

const Glossary = ({ name, description }) => (
  <p>
    <strong>{name}</strong>
    <br />
    {description}
  </p>
);

export default Glossary;
