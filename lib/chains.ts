// Chains 1 and 3-8 are sourced from 02-CONNECTION-MAP.md (arrow-joined
// sentences reformatted as step arrays), each with its own citation there.
// Two chains carry additions from Max's website review of 2026-10-14, not yet
// in that file: the extra denial-path steps in "A denial becomes a
// peer-to-peer", and the whole "A status mismatch is caught and corrected"
// chain (Utilization Management). Per the package's provenance rule they are
// attributed to a named person and date; they should be added to
// 02-CONNECTION-MAP.md and confirmed against the product.
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
    earns:
      "Increased authorization efficiency, fewer preventable denials, and fewer avoidable days — the delay is caught and fixed while the stay is still open, instead of surfacing at a payer meeting weeks later, when the outcome can no longer change.",
  },
  {
    id: "status-mismatch",
    title: "A status mismatch is caught and corrected",
    trigger:
      "A criteria review, the patient's status, the physician's order and the payer's authorization stop agreeing — for example, a patient meets inpatient criteria but is on an observation order.",
    steps: [
      "An InterQual or MCG review is run — automatically, or by the case manager",
      "MGear checks it against the patient's status, the physician's order and the payer authorization, and catches the mismatch in real time",
      "it re-runs the criteria itself where the hospital has automated reviews — otherwise the case manager is asked to double-check",
      "if inpatient criteria are met, the attending physician or case manager is asked to enter the inpatient order — the physician decides",
      "the patient's status moves from observation to inpatient",
      "Analytics tracks timeliness, criteria accuracy, the payer's authorization, and whether the hospital was paid correctly",
    ],
    earns:
      "Increased inpatient admissions, reduced observation overutilization, and increased reimbursement accuracy — the hospital is paid for the level of care it actually delivered.",
  },
  {
    id: "denial-to-p2p",
    title: "A denial becomes a peer-to-peer",
    trigger: "A payer denies while the patient is in-house.",
    steps: [
      "Denial recorded in Authorizations",
      "MGear checks whether the case is appealable and whether the payer allows a concurrent peer-to-peer",
      "a P2P case is created and scheduled with the physician advisor, and the appeal process starts alongside it",
      "the advisor works the call, the outcome is captured",
      "overturned means the stay is authorized, no appeal needed — upheld means an appeal is drafted automatically, deep-linked back into the case that produced it",
      "if the payer is right and the case does not meet criteria, MGear recommends a lower level of care — a change of status, or billing at a lower level",
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
