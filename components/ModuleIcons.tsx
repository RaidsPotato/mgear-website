function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand/10 text-brand">
      {children}
    </span>
  );
}

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ReceivesIcon() {
  return (
    <Wrap>
      <svg width="18" height="18" viewBox="0 0 18 18" {...strokeProps}>
        <path d="M2 9h9M7 5l4 4-4 4" />
        <path d="M13 3v12" />
      </svg>
    </Wrap>
  );
}

export function SendsIcon() {
  return (
    <Wrap>
      <svg width="18" height="18" viewBox="0 0 18 18" {...strokeProps}>
        <path d="M16 9H7M11 5l4 4-4 4" />
        <path d="M5 3v12" />
      </svg>
    </Wrap>
  );
}

export function WorkflowIcon() {
  return (
    <Wrap>
      <svg width="18" height="18" viewBox="0 0 18 18" {...strokeProps}>
        <circle cx="3.5" cy="3.5" r="1.8" />
        <circle cx="9" cy="9" r="1.8" />
        <circle cx="14.5" cy="14.5" r="1.8" />
        <path d="M5 5l2.5 2.5M10.5 10.5l2.5 2.5" />
      </svg>
    </Wrap>
  );
}

export function ValueIcon() {
  return (
    <Wrap>
      <svg width="18" height="18" viewBox="0 0 18 18" {...strokeProps}>
        <path d="M9 2l2 4.5 5 .6-3.7 3.4.9 4.9L9 13l-4.2 2.4.9-4.9L2 7.1l5-.6z" />
      </svg>
    </Wrap>
  );
}

export function FinancialIcon() {
  return (
    <Wrap>
      <svg width="18" height="18" viewBox="0 0 18 18" {...strokeProps}>
        <path d="M9 1.5v15M12.5 4.5H7.2a2 2 0 000 4h3.6a2 2 0 010 4H5.5" />
      </svg>
    </Wrap>
  );
}

export function AIIcon() {
  return (
    <Wrap>
      <svg width="18" height="18" viewBox="0 0 18 18" {...strokeProps}>
        <path d="M9 2v3M9 13v3M2 9h3M13 9h3M4.3 4.3l2.1 2.1M11.6 11.6l2.1 2.1M13.7 4.3l-2.1 2.1M6.4 11.6l-2.1 2.1" />
        <circle cx="9" cy="9" r="2.2" />
      </svg>
    </Wrap>
  );
}

export function IntegrationIcon() {
  return (
    <Wrap>
      <svg width="18" height="18" viewBox="0 0 18 18" {...strokeProps}>
        <rect x="1.5" y="6" width="5" height="6" rx="1.2" />
        <rect x="11.5" y="6" width="5" height="6" rx="1.2" />
        <path d="M6.5 9h5" />
      </svg>
    </Wrap>
  );
}
