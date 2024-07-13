import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import type FooterType from "@theme/DocItem/Footer";
import { useDoc } from "@docusaurus/theme-common/internal";
import type { WrapperProps } from "@docusaurus/types";
import DocsRating from "@site/src/components/DocsRating";
import { IoHelpBuoyOutline, IoHelpCircleOutline } from "react-icons/io5";
import { PostHogProvider, usePostHog } from "posthog-js/react";
const options = {
  api_host: "https://us.i.posthog.com",
};
type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc();
  return (
    <>
      <PostHogProvider
        apiKey="phc_85pLP8gwYvRCQdxgLQP24iqXHPRGaLgEw4S4dgZHJZ"
        options={options}
      >
        {<DocsRating label={metadata.id} />}
        <hr />
        <div className="footerLink">
          <IoHelpBuoyOutline />
          Need help? <a href="mailto:support@scalekit.com">Contact support</a>
        </div>
        <div className="footerLink">
          <IoHelpCircleOutline />
          Questions? <a href="mailto:hi@scalekit.com">Contact Scalekit Team</a>
        </div>
      </PostHogProvider>
      <Footer {...props} />
    </>
  );
}
