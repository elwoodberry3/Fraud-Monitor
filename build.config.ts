/**
 * build.config.ts — BUILD 006 · Fraud & Risk Monitoring
 * ─────────────────────────────────────────────────────────────
 * Repo: ias-build-006-fraud-monitor
 * URL:  fraud-monitor.elwoodberry.com
 * Sector: Banking, Finance, FinTech & Insurance
 *
 * THE ONLY FILE EDITED FOR THIS BUILD.
 *
 * Governance (Article IX): no fabricated data. Every unknown
 * value stays as an explicit "TODO:" string — the page renders
 * TODO values in a visible warning style so they cannot ship
 * silently.
 * ─────────────────────────────────────────────────────────────
 */

import type { BuildConfig } from "./lib/types";

export const buildConfig: BuildConfig = {
  // ── Identity ─────────────────────────────────────────────
  buildNumber: "006",
  name: "Fraud & Risk Monitoring",
  sector: "Banking, Finance, FinTech & Insurance",

  // Verbatim from projects.csv (primary_description) —
  // site + CSV + repo never drift.
  tagline:
    "Cross-checks real-time transaction streams against historical patterns and alerts risk teams instantly when an anomaly surfaces.",

  // ── Status (honest, always) ──────────────────────────────
  // Upgrade path: "planned" → "preview" → "prototype" → "live"
  // as the deep-build ships. One word, push to main, auto-deploys.
  status: "planned",

  // ── What it does ─────────────────────────────────────────
  // One string per paragraph — the page renders each as its
  // own <p>. Problem / pipeline / traceability.
  whatItDoes: [
    "Fraud teams find anomalies after the fact — buried in reports, hours or days after the transaction cleared.",
    "This pipeline ingests live transaction streams via webhook, cross-references historical pattern vectors, scores each anomaly, and fires instant Slack and email alerts the moment a threshold is breached.",
    "Every alert carries its score and the pattern evidence behind it, so risk teams triage signal, not noise.",
  ],

  // ── Stack ────────────────────────────────────────────────
  stack: ["n8n", "Next.js", "Vercel", "Slack"],

  // ── Architecture ─────────────────────────────────────────
  architecture: {
    // Real diagrams only. Stays null until one is drawn —
    // the page renders the system-map table alone.
    diagramSrc: null,
    diagramAlt: "TODO: describe the diagram for screen readers",

    layers: [
      {
        layer: "Presentation",
        technology: "Next.js on Vercel",
        responsibility:
          "Build page, live transaction feed view, anomaly score and alert rendering",
      },
      {
        layer: "Orchestration",
        // Demos run on n8n Cloud. The identical workflows deploy
        // self-hosted or in a client's VPC for regulated
        // production — the /workflows export is the portable
        // artifact. Never state "self-hosted" as current fact.
        technology: "n8n (cloud-hosted)",
        responsibility:
          "Webhook stream ingestion, historical pattern cross-reference, anomaly scoring, alert dispatch",
      },
      {
        layer: "Data",
        // Storage + queue selection pending deep-build.
        // Stated uncertainty beats invented detail.
        technology: "TODO: pattern vector store + transaction history source pending deep-build",
        responsibility:
          "TODO: transaction events, historical pattern vectors, anomaly scores, alert log",
      },
      {
        layer: "AI",
        technology: "Anomaly scoring model (TODO: embedding vs statistical approach pending deep-build)",
        responsibility:
          "Scores incoming transactions against historical pattern vectors",
      },
    ],

    // One string per step — numbered on render because order
    // carries meaning: this is the sequence a record travels.
    flow: [
      "Transaction event received via webhook",
      "normalized",
      "cross-referenced against historical pattern vectors",
      "anomaly scored",
      "threshold breach fires instant Slack and email alerts to risk team",
      "event and score written to alert log",
    ],
  },

  // ── Sample payload ───────────────────────────────────────
  // Real production schema, mock values, labeled as mock.
  payload: {
    caption: "// mock data — representative of production schema",
    input: {
      event: "txn.stream.received",
      submitted_at: "2026-07-05T14:48:00Z",
      source: "fraud-monitor.elwoodberry.com",
      fields: {
        txn_ref: "MOCK-TXN-88231", amount: 4920, channel: "card-not-present", account_ref: "MOCK-ACCT-3319"
      },
    },
    output: {
      status: "alerted",
      confidence: 0.96,
      routed_to: "slack:#risk-alerts",
      audit_id: "ias-demo-006-0001",
    },
  },

  // ── Live demo slot ───────────────────────────────────────
  // Renders only when a real demo exists. Demo Mode (cached
  // representative responses) is the default for public
  // traffic — protects demo reliability and n8n Cloud
  // execution quota.
  demo: {
    embedUrl: null,
    videoUrl: null,
    note: "Demo Mode serves cached representative responses to public traffic; live mode is enabled per session.",
  },

  // ── Links ────────────────────────────────────────────────
  links: {
    github: "https://github.com/elwoodberry3/ias-build-006-fraud-monitor",
    // Decision pending: master CSV stores the build's own deploy
    // URL here; the page needs a route BACK to the portfolio
    // index. Root used until the portfolio index URL is final.
    portfolio: "https://elwoodberry.com", // TODO: confirm portfolio index URL
    // TODO: confirm /contact is the persona-routed booking page,
    // not a generic contact form, before deep-build ships.
    booking: "https://elwoodberry.com/contact",
  },
};
