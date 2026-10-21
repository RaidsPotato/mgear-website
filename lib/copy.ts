// Copy that must read identically everywhere it appears. Both come from Max's
// website review of 2026-10-20 (not yet in the source package — add to
// 01-PRODUCT-TRUTH.md when it is next updated, and confirm with the
// interoperability workstream).

// Supported EHRs, per Max: replaces the earlier, shorter list. One vendor that
// used to be on it is to be mentioned nowhere on the site.
export const EMR_LIST =
  "Epic (via an application in the Epic Showroom), Oracle Health (Cerner), MEDITECH, TruBridge (CPSI), Altera Digital Health (Paragon, Sunrise), MEDHOST, Netsmart, Azalea Health, athenahealth (athenaOne)";

// One-line badges for tight spots (chips, tags).
export const EMR_BADGES = [
  "Epic",
  "Oracle Health (Cerner)",
  "MEDITECH",
  "TruBridge (CPSI)",
  "Altera Digital Health (Paragon, Sunrise)",
  "MEDHOST",
  "Netsmart",
  "Azalea Health",
  "athenahealth (athenaOne)",
];

// For very short mentions where the full list would not fit.
export const EMR_SHORT = "Epic, Oracle Health, MEDITECH, athenahealth and others";

// Hospitals are cautious about AI near patient data. Wherever AI is mentioned
// it has to be clear that it runs only on MGear's backend, on limited data, and
// has no way out of MGear.
export const AI_BACKEND_STATEMENT =
  "AI works only on MGear's backend, analyzing a limited amount of data to help with simple workflow steps. It has no connection to anything outside MGear.";
