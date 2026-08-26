export const moduleLinks = [
  { href: "/modules/utilization-management", label: "Utilization Management" },
  { href: "/modules/authorization-management", label: "Authorization Management" },
  { href: "/modules/payor-grid", label: "Payor Grid" },
  { href: "/modules/payer-communication", label: "Payer Communication" },
  { href: "/modules/p2p-management", label: "P2P Management" },
  { href: "/modules/denial-management", label: "Denial Management" },
  { href: "/modules/contract-management", label: "Contract Management" },
  { href: "/modules/conversational-analytics", label: "Conversational Analytics" },
  { href: "/modules/quality-management", label: "Quality Management" },
  { href: "/modules/productivity", label: "Productivity" },
  { href: "/modules/emr-integration", label: "EMR Integration" },
];

export const solutionLinks = [
  { href: "/solutions/physician-advisors", label: "Physician Advisors" },
  { href: "/solutions/patient-access-business-office", label: "Patient Access & Business Office" },
  { href: "/solutions/utilization-case-management", label: "Utilization & Case Management" },
  {
    href: "/solutions/revenue-cycle-authorization-denials",
    label: "Revenue Cycle, Authorization & Denials Leadership",
  },
];

export const industryLinks = [
  { href: "/industries/academic-medical-centers", label: "Academic Medical Centers" },
  { href: "/industries/community-hospitals", label: "Community Hospitals" },
  { href: "/industries/critical-access-hospitals", label: "Critical Access Hospitals" },
  { href: "/industries/behavioral-health", label: "Behavioral Health" },
  { href: "/industries/multi-hospital-systems", label: "Multi-Hospital Systems" },
];

export const primaryNav = [
  { href: "/platform", label: "Platform Overview" },
  { href: "/modules", label: "Modules", children: moduleLinks },
  { href: "/solutions", label: "Solutions", children: solutionLinks },
  { href: "/industries", label: "Industries", children: industryLinks },
  { href: "/ai", label: "AI" },
  { href: "/interoperability", label: "Interoperability" },
  { href: "/results", label: "Results" },
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
];

export const footerColumns = [
  {
    heading: "Platform",
    links: [
      { href: "/platform", label: "Platform Overview" },
      { href: "/modules", label: "Modules" },
      { href: "/ai", label: "AI" },
      { href: "/interoperability", label: "Interoperability" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/company", label: "Company" },
      { href: "/results", label: "Results" },
      { href: "/security", label: "Security" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    heading: "Get Started",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/implementation", label: "Implementation" },
      { href: "/request-demo", label: "Request Demo" },
      { href: "/contact", label: "Contact" },
    ],
  },
];
