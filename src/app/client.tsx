import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";
import * as Sentry from "@sentry/tanstackstart-react";

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.NODE_ENV,

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

hydrateRoot(document, <StartClient />);
