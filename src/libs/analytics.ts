import posthog from "posthog-js";

const token = import.meta.env.PUBLIC_POSTHOG_PROJECT_TOKEN?.trim();
const host = import.meta.env.PUBLIC_POSTHOG_HOST?.trim();
let enabled = false;

if (token && host && import.meta.env.PROD) {
  try {
    posthog.init(token, {
      api_host: host,
      defaults: "2026-08-30",
      persistence: "localStorage+cookie",
      person_profiles: "never",
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: false,
      mask_all_text: true,
      mask_all_element_attributes: true,
      capture_exceptions: {
        capture_unhandled_errors: true,
        capture_unhandled_rejections: true,
        capture_console_errors: false,
      },
      capture_performance: { web_vitals: true },
      disable_session_recording: true,
      disable_surveys: true,
      capture_heatmaps: false,
      capture_dead_clicks: false,
      rageclick: false,
      advanced_disable_feature_flags: true,
      respect_dnt: true,
    });
    enabled = true;
  } catch {
    // Analytics must not interrupt navigation or contact submissions.
  }
} else if (import.meta.env.DEV && (!token || !host)) {
  const missing = !token
    ? "PUBLIC_POSTHOG_PROJECT_TOKEN"
    : "PUBLIC_POSTHOG_HOST";
  console.error(
    `${missing} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missing} is configured`,
  );
}

const clickEvents = [
  "resume_clicked",
  "social_link_clicked",
  "project_clicked",
  "project_demo_clicked",
  "project_source_clicked",
  "gallery_clicked",
  "email_clicked",
  "navigation_clicked",
  "ai_skills_library_clicked",
  "contact_submit_clicked",
] as const;

type PortfolioEvent =
  | (typeof clickEvents)[number]
  | "portfolio_like_clicked"
  | "contact_detail_copied"
  | "contact_submit_succeeded"
  | "contact_submit_failed";

type EventProperties = Record<string, string | number>;

export function captureEvent(
  event: PortfolioEvent,
  properties?: EventProperties,
) {
  if (!enabled) return;
  try {
    posthog.capture(event, properties);
  } catch {
    // Analytics must not interrupt navigation or contact submissions.
  }
}

export function captureContactFailure(
  reason: "missing_configuration" | "provider_rejected" | "request_failed",
  status?: number,
) {
  const properties: EventProperties = { reason };
  if (status !== undefined) properties.status = status;
  captureEvent("contact_submit_failed", properties);
  if (!enabled) return;
  try {
    posthog.captureException(
      new Error(`Contact form failed: ${reason}`),
      properties,
    );
  } catch {
    // Keep the existing form error handling independent of analytics.
  }
}

function captureClick(event: MouseEvent) {
  if (event.defaultPrevented || event.button > 1) return;
  const target =
    event.target instanceof Element
      ? event.target.closest<HTMLElement>(
          "a[data-analytics-event], button[data-analytics-event]",
        )
      : null;
  if (!target || (target.tagName === "BUTTON" && event.button !== 0)) return;
  const name = clickEvents.find(
    (name) => name === target.dataset.analyticsEvent,
  );
  if (!name) return;

  const properties: EventProperties = {};
  if (target.dataset.project) properties.project = target.dataset.project;
  if (target.dataset.projectName)
    properties.project_name = target.dataset.projectName;
  if (target.dataset.analyticsPlatform)
    properties.platform = target.dataset.analyticsPlatform;
  if (target.dataset.analyticsLocation)
    properties.location = target.dataset.analyticsLocation;
  if (target.dataset.analyticsDestination)
    properties.destination = target.dataset.analyticsDestination;
  captureEvent(name, Object.keys(properties).length ? properties : undefined);
}

document.addEventListener("click", captureClick);
document.addEventListener("auxclick", captureClick);
