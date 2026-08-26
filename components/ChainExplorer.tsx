"use client";

import { useState } from "react";
import { ChainDiagram } from "./ChainDiagram";
import { chains } from "@/lib/chains";

export function ChainExplorer() {
  const [selectedId, setSelectedId] = useState(chains[0].id);
  const selected = chains.find((c) => c.id === selectedId)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {chains.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setSelectedId(c.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              c.id === selectedId
                ? "border-brand bg-brand text-white"
                : "border-slate-300 bg-white text-slate-600 hover:border-brand/50 hover:text-brand"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <p className="mt-5 max-w-3xl text-body text-slate-600">
        <strong className="font-semibold text-charcoal">Trigger:</strong> {selected.trigger}
      </p>

      <div className="mt-6">
        <ChainDiagram key={selected.id} steps={selected.steps} />
      </div>

      <p className="mt-5 max-w-3xl text-body text-slate-600">
        <strong className="font-semibold text-charcoal">What it earns:</strong> {selected.earns}
      </p>
    </div>
  );
}
