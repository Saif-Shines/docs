/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { IoHelpBuoyOutline, IoHelpCircleOutline } from "react-icons/io5";
import { PostHogProvider, usePostHog } from "posthog-js/react";
const options = {
  api_host: "https://us.i.posthog.com",
};

const DocsRating = ({ label }) => {
  const [haveVoted, setHaveVoted] = useState(false);
  const posthog = usePostHog();
  const giveFeedback = (value) => {
    posthog?.capture("docs_feedback", { label: label, liked: value });
    setHaveVoted(true);
  };
  const giveFullFeedback = (value) => {
    posthog?.capture("docs_feedback_text", { label: label, comments: value });
    setHaveVoted(true);
  };

  return (
    <div className="docsRating">
      {haveVoted ? (
        "Thank you for the feedback!"
      ) : (
        <>
          Is this page helpful?
          <a className="btn-outline" onClick={() => giveFeedback(1)}>
            <FaRegThumbsUp /> Yes
          </a>
          <a className="btn-outline" onClick={() => giveFeedback(0)}>
            <FaRegThumbsDown /> No
          </a>
        </>
      )}
    </div>
  );
};

const DocFeedbackComponent = () => {
  return (
    <PostHogProvider
      apiKey="phc_85pLP8gwYvRCQdxgLQP24iqXHPRGaLgEw4S4dgZHJZ"
      options={options}
    >
      <div className="feedbackFooter">
        {<DocsRating />}
        <hr />
        <div className="footerLink">
          <IoHelpBuoyOutline />
          Need help? <a href="mailto:support@scalekit.com">Contact Support</a>
        </div>
        <div className="footerLink">
          <IoHelpCircleOutline />
          Questions? <a href="mailto:hi@scalekit.com">Contact Us</a>
        </div>
      </div>
    </PostHogProvider>
  );
};

export default DocFeedbackComponent;
