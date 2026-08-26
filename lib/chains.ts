// Sourced verbatim (arrow-joined sentences reformatted as step arrays) from
// 02-CONNECTION-MAP.md. Every chain here is real behavior in the working
// product, with its own citation in that file — nothing here is invented.
export type Chain = {
  id: string;
  title: string;
  trigger: string;
  steps: string[];
  earns: string;
};

export const chains: Chain[] = [
  {
    id: "authorization-delay",
    title: "The authorization delay",
    trigger: "An authorization has not come back and the stay is still running.",
    steps: [
      "Authorization delayed",
      "Payer Communication is notified",
      "Payor Grid verifies that payer's specific requirements",
      "Analytics updates the dashboards",
      "Quality identifies the workflow delay",
      "the Manager is alerted",
      "the team resolves it before discharge",
    ],
    earns: "Authorization efficiency, and one fewer preventable denial.",
  },
  {
    id: "denial-to-p2p",
    title: "A denial becomes a peer-to-peer",
    trigger: "A payer denies while the patient is in-house.",
    steps: [
      "Denial recorded in Authorizations",
      "a P2P case is created and scheduled with the physician advisor",
      "the advisor works the call, the outcome is captured",
      "overturned means the stay is authorized, no appeal needed — upheld means an appeal is drafted automatically, deep-linked back into the case that produced it",
      "overturn rates and advisor performance update in Analytics",
    ],
    earns: "Denial prevention, reduced avoidable days, faster appeal turnaround.",
  },
  {
    id: "self-pay-coverage-found",
    title: "An uninsured patient turns out to be insured",
    trigger: "A financial counselor finds coverage on a patient admitted as self-pay.",
    steps: [
      "Financial Counseling records the coverage found",
      "the authorization reopens on that visit — payer set, status back to pending",
      "every level-of-care line resets to pending, because no payer has answered yet",
      "the case leaves the self-pay worklist",
      "Analytics counts it in financial-counselor recovery",
      "if a self-pay stay sits unworked past five days, an alert fires",
    ],
    earns: "Recovery of revenue that would have been written off as self-pay.",
  },
  {
    id: "payer-rules-police-workflow",
    title: "The payer's own rules police the workflow",
    trigger: "A payer requires notification within a set window, or documentation in a set form.",
    steps: [
      "Payor Grid holds that payer's rules — notification windows, documentation requirements, submission endpoints, contacts",
      "the rules engine watches the actual work against those rules",
      "a deviation is recorded the moment work departs from what the payer requires",
      "the Payer Compliance analytics tab reads that deviation stream directly",
      "payer compliance becomes a measured number instead of an opinion",
    ],
    earns: "Improved payer compliance, fewer denials on technicalities like a missed notification.",
  },
  {
    id: "one-number-one-owner",
    title: "One number, one owner, everywhere it appears",
    trigger: "Any P2P outcome is captured.",
    steps: [
      "The P2P module owns the case record — it is the only place the outcome can be changed",
      "every P2P metric everywhere in Analytics reads from that one record",
      "the analytics hub is read-only by design; it cannot disagree with the workflow",
      "a row in a dashboard links back to the live case that produced it",
    ],
    earns: "Reimbursement accuracy, and a number the executive team will actually act on.",
  },
  {
    id: "missing-feed",
    title: "The platform tells you when it's missing a feed",
    trigger: "A hospital licenses some modules and not others.",
    steps: [
      "Each facility carries the modules it actually has",
      "a module a facility did not buy does not appear for its users",
      "the analytics for that module do not silently report zero",
      "a zero here means not sent, not none happened",
    ],
    earns: "Decisions made on numbers that are what they appear to be.",
  },
  {
    id: "contract-teaches-platform",
    title: "The contract teaches the rest of the platform",
    trigger: "A hospital uploads a payer contract.",
    steps: [
      "Contract Intelligence extracts reimbursement terms, covered services, authorization rules, notification rules and operational requirements",
      "Payor Grid gains that payer's rules without anyone typing them",
      "Authorization knows what needs authorizing under this contract",
      "Payer Communication knows the notification windows",
      "Denial Management knows the expected reimbursement, so an underpayment becomes visible instead of invisible",
      "Analytics measures actual payment against contracted payment",
    ],
    earns: "Increased reimbursement accuracy, and recovery of underpayments.",
  },
];
