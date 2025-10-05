import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";
import * as Sentry from "@sentry/tanstackstart-react";

Sentry.init({
  dsn: "https://96cd0debd34a4371d57467c10ebf1b1b@o402636.ingest.us.sentry.io/4510135242326016",
  environment: process.env.NODE_ENV,

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

hydrateRoot(document, <StartClient />);
