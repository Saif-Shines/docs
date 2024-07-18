import LabeledCheckbox from "@site/src/components/checkbox";
import Parameters, { Parameter } from "@site/src/components/parameters";
import Endpoints from "@site/src/components/endpoint";
import CodeWithHeader from "@site/src/components/CodeWithHeader";
import Subtitle from "@site/src/components/custom";
import { CardTileWithImage, SimpleCode } from "@site/src/components/custom";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import IntersectingHeader from "@site/src/components/IntersectingHeader";
import { APIEndpoint } from "@site/src/components/APIEndpoint";
import Link from "@docusaurus/Link";
import Markdown from "react-markdown";
import { SimpleCard } from "@site/src/components/ProductList/ProductList";
import { FancyLink } from "@site/src/components/Card/CardWithArrow";
import QuickLinkStack from "@site/src/components/QuickLinkStack";
import { GlossaryListing } from "@site/src/components/Glossary/Glossary";
export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Subtitle,
  LabeledCheckbox,
  CardTileWithImage,
  SimpleCode,
  Tabs,
  TabItem,
  CodeBlock,
  Endpoints,
  CodeWithHeader,
  Parameters,
  Parameter,
  IntersectingHeader,
  APIEndpoint,
  Link,
  Markdown,
  SimpleCard,
  FancyLink,
  QuickLinkStack,
  GlossaryListing,
};
