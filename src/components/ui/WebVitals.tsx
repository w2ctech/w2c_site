"use client";

import { useEffect } from "react";
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function report(metric: Metric) {
  // GA4 / GTM via dataLayer — appears as event "web-vitals"
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "web-vitals",
      metric_name: metric.name,
      metric_id: metric.id,
      metric_value: metric.value,
      metric_rating: metric.rating,
      metric_delta: metric.delta,
      metric_navigation_type: metric.navigationType,
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", metric.name, {
        event_category: "Web Vitals",
        event_label: metric.id,
        value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
        non_interaction: true,
        metric_rating: metric.rating,
      });
    }
  }
}

export function WebVitalsReporter() {
  useEffect(() => {
    onCLS(report);
    onFCP(report);
    onINP(report);
    onLCP(report);
    onTTFB(report);
  }, []);

  return null;
}
