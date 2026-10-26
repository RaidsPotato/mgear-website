export const dynamic = "force-static";

// A plain-text summary for AI answer engines. Every statement here is taken
// from the same sources as the pages (01-PRODUCT-TRUTH.md, 02-CONNECTION-MAP.md)
// or from Max's 2026-10-14 website review. Page paths are relative because the
// production domain is not confirmed yet ([OPEN-7]).
const body = `# MGear

> MGear is the Real-Time Mid-Revenue Cycle Operating Platform — operational infrastructure for hospitals. It connects utilization management, authorization, peer-to-peer reviews, denials, payer communication and analytics into one process, automates the routine steps in them, and gives every department live visibility into where each case stands while the patient is still admitted.

MGear is not utilization management software, authorization software, denial software, analytics software or case management software on its own — it is the platform that connects all of those functions. It integrates with the hospital's EHR (Epic, Oracle Health/Cerner, MEDITECH, TruBridge/CPSI, Altera Digital Health, MEDHOST, Netsmart, Azalea Health, athenahealth) via FHIR and HL7 and does not replace it. AI assists operations and works only on MGear's backend, analyzing a limited amount of data to help with simple workflow steps; it has no connection to anything outside MGear. People remain responsible for every clinical and operational decision.

It is built for hospitals of any size: academic medical centers, community hospitals, critical access hospitals, behavioral health programs and multi-hospital systems.

## How it works

Every workflow in the platform has the same shape: a trigger fires (a delay, a denial, or a mismatch between InterQual or MCG criteria, the patient's status and the payer's authorization), the right modules learn about it automatically, MGear resolves what it can or tells the right person exactly what to do, and it is fixed before discharge.

## The eleven modules

Utilization Management, Authorization Management, Payor Grid, Payer Communication, P2P Management, Denial Management, Contract Management, Conversational Analytics, Quality Management, Productivity, EMR Integration.

## Pages

- /platform — how the modules connect, with the eight real chains
- /modules — the eleven modules, each opening with what it receives and what it sends
- /solutions — by department
- /industries — by hospital type
- /ai — how AI is used and governed
- /interoperability — EHR integration
- /security — enterprise readiness
- /results — the Providence case study
- /pricing — how MGear is priced
- /request-demo — schedule a live walkthrough
`;

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
