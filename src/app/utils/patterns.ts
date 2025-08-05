import { Pattern } from "../types/pattern";

export const wavePatterns: Pattern[] = [
  {
    id: "ocean-wave-gradient",
    name: "Ocean Wave Gradient",
    category: "gradients",
    badge: "Popular",
    description: "Deep ocean blue gradient with wave-like flow",
    style: {
      background: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0891b2 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Ocean Wave Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0891b2 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "teal-wave-radial",
    name: "Teal Wave Radial",
    category: "gradients",
    badge: "New",
    description: "Radial gradient with teal wave colors from center",
    style: {
      background: "radial-gradient(circle at center, #06b6d4 0%, #0891b2 50%, #0e7490 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Teal Wave Radial Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(circle at center, #06b6d4 0%, #0891b2 50%, #0e7490 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "sky-blue-mesh",
    name: "Sky Blue Mesh",
    category: "gradients",
    description: "Light sky blue gradient perfect for headers",
    style: {
      background: "linear-gradient(120deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Sky Blue Mesh Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(120deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "deep-ocean-vertical",
    name: "Deep Ocean Vertical",
    category: "gradients",
    description: "Vertical gradient from light to deep ocean blue",
    style: {
      background: "linear-gradient(to bottom, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Deep Ocean Vertical Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(to bottom, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "wave-dots-pattern",
    name: "Wave Dots Pattern",
    category: "geometric",
    badge: "New",
    description: "Dotted pattern with wave-like blue tones",
    style: {
      backgroundColor: "#f8fafc",
      backgroundImage: `radial-gradient(circle, #0ea5e9 1px, transparent 1px)`,
      backgroundSize: "20px 20px",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Wave Dots Pattern Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f8fafc",
      backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "ocean-grid",
    name: "Ocean Grid",
    category: "geometric",
    description: "Clean grid pattern with ocean blue lines",
    style: {
      backgroundColor: "#ffffff",
      backgroundImage: `
        linear-gradient(#0ea5e9 1px, transparent 1px),
        linear-gradient(90deg, #0ea5e9 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Ocean Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: \`
        linear-gradient(#0ea5e9 1px, transparent 1px),
        linear-gradient(90deg, #0ea5e9 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "cyan-wave-diagonal",
    name: "Cyan Wave Diagonal",
    category: "gradients",
    description: "Diagonal cyan gradient with wave movement",
    style: {
      background: "linear-gradient(45deg, #06b6d4 0%, #22d3ee 50%, #67e8f9 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Cyan Wave Diagonal Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(45deg, #06b6d4 0%, #22d3ee 50%, #67e8f9 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "blue-hexagon-pattern",
    name: "Blue Hexagon Pattern",
    category: "geometric",
    badge: "Popular",
    description: "Hexagonal pattern with blue wave colors",
    style: {
      backgroundColor: "#f1f5f9",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230ea5e9' fill-opacity='0.1'%3E%3Cpath d='m20 20 10-10v20l-10 10-10-10v-20z'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Blue Hexagon Pattern Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f1f5f9",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%230ea5e9\\' fill-opacity=\\'0.1\\'%3E%3Cpath d=\\'m20 20 10-10v20l-10 10-10-10v-20z\\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "turquoise-ripple",
    name: "Turquoise Ripple",
    category: "effects",
    description: "Ripple effect with turquoise wave colors",
    style: {
      background: "radial-gradient(circle at 30% 70%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 70% 30%, #0891b2 0%, transparent 50%), linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Turquoise Ripple Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(circle at 30% 70%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 70% 30%, #0891b2 0%, transparent 50%), linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "wave-stripes",
    name: "Wave Stripes",
    category: "decorative",
    badge: "New",
    description: "Diagonal stripes with wave-like blue tones",
    style: {
      background: `repeating-linear-gradient(
        45deg,
        #0ea5e9,
        #0ea5e9 10px,
        #06b6d4 10px,
        #06b6d4 20px
      )`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Wave Stripes Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`repeating-linear-gradient(
        45deg,
        #0ea5e9,
        #0ea5e9 10px,
        #06b6d4 10px,
        #06b6d4 20px
      )\`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "azure-bubble-pattern",
    name: "Azure Bubble Pattern",
    category: "decorative",
    description: "Floating bubbles in azure blue tones",
    style: {
      backgroundColor: "#f0f9ff",
      backgroundImage: `
        radial-gradient(circle at 20% 80%, #0ea5e9 2px, transparent 2px),
        radial-gradient(circle at 80% 20%, #06b6d4 1px, transparent 1px),
        radial-gradient(circle at 40% 40%, #0891b2 1.5px, transparent 1.5px)
      `,
      backgroundSize: "60px 60px, 40px 40px, 80px 80px",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Azure Bubble Pattern Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f0f9ff",
      backgroundImage: \`
        radial-gradient(circle at 20% 80%, #0ea5e9 2px, transparent 2px),
        radial-gradient(circle at 80% 20%, #06b6d4 1px, transparent 1px),
        radial-gradient(circle at 40% 40%, #0891b2 1.5px, transparent 1.5px)
      \`,
      backgroundSize: "60px 60px, 40px 40px, 80px 80px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "deep-sea-gradient",
    name: "Deep Sea Gradient",
    category: "gradients",
    badge: "Popular",
    description: "Dark ocean depths with mysterious blue-black tones",
    style: {
      background: "linear-gradient(180deg, #0c4a6e 0%, #082f49 50%, #0f172a 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Deep Sea Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(180deg, #0c4a6e 0%, #082f49 50%, #0f172a 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "wave-mesh-gradient",
    name: "Wave Mesh Gradient",
    category: "effects",
    badge: "New",
    description: "Complex mesh with multiple wave gradients",
    style: {
      background: `
        radial-gradient(at 40% 20%, #06b6d4 0px, transparent 50%),
        radial-gradient(at 80% 0%, #0891b2 0px, transparent 50%),
        radial-gradient(at 0% 50%, #0ea5e9 0px, transparent 50%),
        radial-gradient(at 80% 50%, #22d3ee 0px, transparent 50%),
        radial-gradient(at 0% 100%, #67e8f9 0px, transparent 50%),
        radial-gradient(at 80% 100%, #a5f3fc 0px, transparent 50%),
        radial-gradient(at 0% 0%, #0284c7 0px, transparent 50%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Wave Mesh Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(at 40% 20%, #06b6d4 0px, transparent 50%),
        radial-gradient(at 80% 0%, #0891b2 0px, transparent 50%),
        radial-gradient(at 0% 50%, #0ea5e9 0px, transparent 50%),
        radial-gradient(at 80% 50%, #22d3ee 0px, transparent 50%),
        radial-gradient(at 0% 100%, #67e8f9 0px, transparent 50%),
        radial-gradient(at 80% 100%, #a5f3fc 0px, transparent 50%),
        radial-gradient(at 0% 0%, #0284c7 0px, transparent 50%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "coral-reef-pattern",
    name: "Coral Reef Pattern",
    category: "decorative",
    description: "Organic coral-like pattern with ocean blues",
    style: {
      backgroundColor: "#e0f2fe",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23066d82' fill-opacity='0.15'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm30 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Coral Reef Pattern Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#e0f2fe",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23066d82\\' fill-opacity=\\'0.15\\'%3E%3Cpath d=\\'M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm30 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z\\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "tsunami-wave",
    name: "Tsunami Wave",
    category: "effects",
    description: "Dramatic wave effect with powerful blue gradients",
    style: {
      background: `
        linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.5) 50%, transparent 70%),
        linear-gradient(-45deg, transparent 30%, rgba(14, 165, 233, 0.5) 50%, transparent 70%),
        linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Tsunami Wave Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.5) 50%, transparent 70%),
        linear-gradient(-45deg, transparent 30%, rgba(14, 165, 233, 0.5) 50%, transparent 70%),
        linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "arctic-ice",
    name: "Arctic Ice",
    category: "gradients",
    description: "Cold, crisp gradient reminiscent of arctic ice",
    style: {
      background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #bae6fd 50%, #7dd3fc 75%, #38bdf8 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Arctic Ice Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #bae6fd 50%, #7dd3fc 75%, #38bdf8 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "ocean-current",
    name: "Ocean Current",
    category: "geometric",
    badge: "New",
    description: "Flowing lines that mimic ocean currents",
    style: {
      backgroundColor: "#f8fafc",
      backgroundImage: `
        linear-gradient(45deg, #0ea5e9 25%, transparent 25%),
        linear-gradient(-45deg, #0ea5e9 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #06b6d4 75%),
        linear-gradient(-45deg, transparent 75%, #06b6d4 75%)
      `,
      backgroundSize: "30px 30px",
      backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0px",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Ocean Current Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f8fafc",
      backgroundImage: \`
        linear-gradient(45deg, #0ea5e9 25%, transparent 25%),
        linear-gradient(-45deg, #0ea5e9 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #06b6d4 75%),
        linear-gradient(-45deg, transparent 75%, #06b6d4 75%)
      \`,
      backgroundSize: "30px 30px",
      backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "liquid-motion",
    name: "Liquid Motion",
    category: "effects",
    badge: "New",
    description: "Fluid-like motion with organic wave patterns",
    style: {
      background: `
        radial-gradient(circle at 25% 25%, #0ea5e9 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%),
        linear-gradient(115deg, #e0f2fe 0%, #bae6fd 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Liquid Motion Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 25% 25%, #0ea5e9 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%),
        linear-gradient(115deg, #e0f2fe 0%, #bae6fd 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diamond-waves",
    name: "Diamond Waves",
    category: "geometric",
    description: "Diamond-shaped pattern with wave-like repetition",
    style: {
      backgroundColor: "#f8fafc",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230ea5e9' fill-opacity='0.1'%3E%3Cpath d='M20 20l-10-10h20l-10 10zm0 0l10 10h-20l10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Diamond Waves Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f8fafc",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%230ea5e9\\' fill-opacity=\\'0.1\\'%3E%3Cpath d=\\'M20 20l-10-10h20l-10 10zm0 0l10 10h-20l10-10z\\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "midnight-ocean",
    name: "Midnight Ocean",
    category: "gradients",
    badge: "Popular",
    description: "Deep midnight blue ocean gradient",
    style: {
      background: "linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 25%, #1e40af 50%, #2563eb 75%, #3b82f6 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Midnight Ocean Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 25%, #1e40af 50%, #2563eb 75%, #3b82f6 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "sea-foam-texture",
    name: "Sea Foam Texture",
    category: "decorative",
    description: "Textured pattern resembling sea foam on beach",
    style: {
      backgroundColor: "#f0f9ff",
      backgroundImage: `
        radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0),
        radial-gradient(circle at 1px 1px, #06b6d4 1px, transparent 0)
      `,
      backgroundSize: "20px 20px, 30px 30px",
      backgroundPosition: "0 0, 15px 15px",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Sea Foam Texture Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f0f9ff",
      backgroundImage: \`
        radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0),
        radial-gradient(circle at 1px 1px, #06b6d4 1px, transparent 0)
      \`,
      backgroundSize: "20px 20px, 30px 30px",
      backgroundPosition: "0 0, 15px 15px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "tropical-lagoon",
    name: "Tropical Lagoon",
    category: "gradients",
    description: "Warm tropical lagoon colors with turquoise waves",
    style: {
      background: "linear-gradient(45deg, #06b6d4 0%, #22d3ee 25%, #67e8f9 50%, #a5f3fc 75%, #cffafe 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Tropical Lagoon Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(45deg, #06b6d4 0%, #22d3ee 25%, #67e8f9 50%, #a5f3fc 75%, #cffafe 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "wave-interference",
    name: "Wave Interference",
    category: "effects",
    badge: "New",
    description: "Intersecting wave patterns creating interference effects",
    style: {
      background: `
        radial-gradient(ellipse at top left, rgba(14, 165, 233, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at top right, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at bottom left, rgba(8, 145, 178, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(34, 211, 238, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Wave Interference Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(ellipse at top left, rgba(14, 165, 233, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at top right, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at bottom left, rgba(8, 145, 178, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(34, 211, 238, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "underwater-depth",
    name: "Underwater Depth",
    category: "gradients",
    badge: "Popular",
    description: "Deep underwater gradient with layers of blue",
    style: {
      background: "radial-gradient(ellipse at center bottom, rgba(30, 58, 138, 0.8) 0%, rgba(30, 64, 175, 0.6) 30%, rgba(37, 99, 235, 0.4) 60%, rgba(59, 130, 246, 0.2) 80%, transparent 100%), linear-gradient(to bottom, #0ea5e9, #0284c7)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Underwater Depth Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(ellipse at center bottom, rgba(30, 58, 138, 0.8) 0%, rgba(30, 64, 175, 0.6) 30%, rgba(37, 99, 235, 0.4) 60%, rgba(59, 130, 246, 0.2) 80%, transparent 100%), linear-gradient(to bottom, #0ea5e9, #0284c7)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "crystalline-waves",
    name: "Crystalline Waves",
    category: "geometric",
    description: "Crystal-like geometric pattern with wave motifs",
    style: {
      backgroundColor: "#f8fafc",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.08'%3E%3Cpath d='M30 0l15 30-15 30L15 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Crystalline Waves Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f8fafc",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2306b6d4\\' fill-opacity=\\'0.08\\'%3E%3Cpath d=\\'M30 0l15 30-15 30L15 30z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "morning-mist",
    name: "Morning Mist",
    category: "effects",
    description: "Soft morning mist over calm waters",
    style: {
      background: `
        linear-gradient(180deg, rgba(241, 245, 249, 0.9) 0%, rgba(226, 232, 240, 0.7) 50%, rgba(203, 213, 225, 0.5) 100%),
        radial-gradient(ellipse at top, rgba(14, 165, 233, 0.1) 0%, transparent 70%),
        linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Morning Mist Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        linear-gradient(180deg, rgba(241, 245, 249, 0.9) 0%, rgba(226, 232, 240, 0.7) 50%, rgba(203, 213, 225, 0.5) 100%),
        radial-gradient(ellipse at top, rgba(14, 165, 233, 0.1) 0%, transparent 70%),
        linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "electric-blue",
    name: "Electric Blue",
    category: "gradients",
    badge: "New",
    description: "Vibrant electric blue gradient with energy",
    style: {
      background: "linear-gradient(45deg, #1e40af 0%, #3b82f6 25%, #60a5fa 50%, #93c5fd 75%, #dbeafe 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Electric Blue Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(45deg, #1e40af 0%, #3b82f6 25%, #60a5fa 50%, #93c5fd 75%, #dbeafe 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "wave-spiral",
    name: "Wave Spiral",
    category: "decorative",
    description: "Spiral pattern inspired by ocean whirlpools",
    style: {
      backgroundColor: "#f0f9ff",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230ea5e9' fill-opacity='0.1'%3E%3Cpath d='M40 40c-11 0-20-9-20-20s9-20 20-20 20 9 20 20c0 11-9 20-20 20zm0-4c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Wave Spiral Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f0f9ff",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%230ea5e9\\' fill-opacity=\\'0.1\\'%3E%3Cpath d=\\'M40 40c-11 0-20-9-20-20s9-20 20-20 20 9 20 20c0 11-9 20-20 20zm0-4c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z\\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  // RED & PINK PATTERNS
  {
    id: "crimson-wave",
    name: "Crimson Wave",
    category: "gradients",
    badge: "New",
    description: "Deep crimson wave gradient with warm tones",
    style: {
      background: "linear-gradient(135deg, #dc2626 0%, #ef4444 25%, #f87171 50%, #fca5a5 75%, #fecaca 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Crimson Wave Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #dc2626 0%, #ef4444 25%, #f87171 50%, #fca5a5 75%, #fecaca 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "rose-petal",
    name: "Rose Petal",
    category: "gradients",
    description: "Soft rose petal gradient with romantic pink tones",
    style: {
      background: "radial-gradient(circle at center, #f43f5e 0%, #fb7185 30%, #fda4af 60%, #fecdd3 80%, #fef2f2 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Rose Petal Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(circle at center, #f43f5e 0%, #fb7185 30%, #fda4af 60%, #fecdd3 80%, #fef2f2 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "cherry-blossom",
    name: "Cherry Blossom",
    category: "decorative",
    badge: "Popular",
    description: "Delicate cherry blossom pattern with pink florals",
    style: {
      backgroundColor: "#fef7f0",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Cpath d='M20 20a5 5 0 0 1 10 0 5 5 0 0 1-10 0zm0 0a5 5 0 0 0-10 0 5 5 0 0 0 10 0z'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Cherry Blossom Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fef7f0",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23f43f5e\\' fill-opacity=\\'0.1\\'%3E%3Cpath d=\\'M20 20a5 5 0 0 1 10 0 5 5 0 0 1-10 0zm0 0a5 5 0 0 0-10 0 5 5 0 0 0 10 0z\\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "magenta-burst",
    name: "Magenta Burst",
    category: "effects",
    description: "Explosive magenta burst with radial energy",
    style: {
      background: `
        radial-gradient(circle at 30% 30%, #e11d48 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, #db2777 0%, transparent 50%),
        linear-gradient(45deg, #fdf2f8 0%, #fce7f3 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Magenta Burst Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 30% 30%, #e11d48 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, #db2777 0%, transparent 50%),
        linear-gradient(45deg, #fdf2f8 0%, #fce7f3 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // ORANGE PATTERNS
  {
    id: "sunset-fire",
    name: "Sunset Fire",
    category: "gradients",
    badge: "Popular",
    description: "Fiery sunset gradient with warm orange tones",
    style: {
      background: "linear-gradient(45deg, #ea580c 0%, #fb923c 25%, #fdba74 50%, #fed7aa 75%, #fff7ed 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Sunset Fire Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(45deg, #ea580c 0%, #fb923c 25%, #fdba74 50%, #fed7aa 75%, #fff7ed 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "tangerine-dream",
    name: "Tangerine Dream",
    category: "gradients",
    description: "Vibrant tangerine and coral gradient blend",
    style: {
      background: "radial-gradient(ellipse at top, #f97316 0%, #fb923c 30%, #fdba74 60%, #fed7aa 90%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Tangerine Dream Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(ellipse at top, #f97316 0%, #fb923c 30%, #fdba74 60%, #fed7aa 90%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "autumn-leaves",
    name: "Autumn Leaves",
    category: "decorative",
    description: "Scattered autumn leaves pattern in warm oranges",
    style: {
      backgroundColor: "#fff7ed",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ea580c' fill-opacity='0.15'%3E%3Cpath d='M30 30c-8 0-15-7-15-15s7-15 15-15 15 7 15 15-7 15-15 15zm0-25a10 10 0 1 0 0 20 10 10 0 0 0 0-20z'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Autumn Leaves Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fff7ed",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ea580c\\' fill-opacity=\\'0.15\\'%3E%3Cpath d=\\'M30 30c-8 0-15-7-15-15s7-15 15-15 15 7 15 15-7 15-15 15zm0-25a10 10 0 1 0 0 20 10 10 0 0 0 0-20z\\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // YELLOW PATTERNS
  {
    id: "golden-sunrise",
    name: "Golden Sunrise",
    category: "gradients",
    badge: "New",
    description: "Warm golden sunrise with yellow radiance",
    style: {
      background: "linear-gradient(to top, #f59e0b 0%, #fbbf24 25%, #fcd34d 50%, #fde68a 75%, #fef3c7 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Golden Sunrise Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(to top, #f59e0b 0%, #fbbf24 25%, #fcd34d 50%, #fde68a 75%, #fef3c7 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "lemon-zest",
    name: "Lemon Zest",
    category: "gradients",
    description: "Fresh lemon zest gradient with citrus vibes",
    style: {
      background: "radial-gradient(circle at center, #eab308 0%, #facc15 30%, #fde047 60%, #fef08a 80%, #fefce8 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Lemon Zest Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(circle at center, #eab308 0%, #facc15 30%, #fde047 60%, #fef08a 80%, #fefce8 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "honeycomb",
    name: "Honeycomb",
    category: "geometric",
    badge: "Popular",
    description: "Hexagonal honeycomb pattern in golden yellow",
    style: {
      backgroundColor: "#fefce8",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='M28 28l14-8v16l-14 8-14-8v-16z'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Honeycomb Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fefce8",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'56\\' height=\\'56\\' viewBox=\\'0 0 56 56\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23f59e0b\\' fill-opacity=\\'0.1\\'%3E%3Cpath d=\\'M28 28l14-8v16l-14 8-14-8v-16z\\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // GREEN PATTERNS
  {
    id: "emerald-forest",
    name: "Emerald Forest",
    category: "gradients",
    badge: "New",
    description: "Deep emerald forest gradient with natural greens",
    style: {
      background: "linear-gradient(135deg, #065f46 0%, #047857 25%, #059669 50%, #10b981 75%, #34d399 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Emerald Forest Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #065f46 0%, #047857 25%, #059669 50%, #10b981 75%, #34d399 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "mint-fresh",
    name: "Mint Fresh",
    category: "gradients",
    description: "Refreshing mint gradient with cool green tones",
    style: {
      background: "radial-gradient(circle at center, #22c55e 0%, #4ade80 30%, #86efac 60%, #bbf7d0 80%, #f0fdf4 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Mint Fresh Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(circle at center, #22c55e 0%, #4ade80 30%, #86efac 60%, #bbf7d0 80%, #f0fdf4 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "jungle-leaves",
    name: "Jungle Leaves",
    category: "decorative",
    description: "Tropical jungle leaves pattern in various greens",
    style: {
      backgroundColor: "#f0fdf4",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322c55e' fill-opacity='0.12'%3E%3Cpath d='M20 0a20 20 0 0 1 0 40A20 20 0 0 1 20 0zm0 5a15 15 0 0 0 0 30 15 15 0 0 0 0-30z'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Jungle Leaves Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f0fdf4",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%2322c55e\\' fill-opacity=\\'0.12\\'%3E%3Cpath d=\\'M20 0a20 20 0 0 1 0 40A20 20 0 0 1 20 0zm0 5a15 15 0 0 0 0 30 15 15 0 0 0 0-30z\\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "lime-electric",
    name: "Lime Electric",
    category: "effects",
    badge: "New",
    description: "Electric lime green with energy bursts",
    style: {
      background: `
        radial-gradient(circle at 25% 75%, #84cc16 0%, transparent 50%),
        radial-gradient(circle at 75% 25%, #a3e635 0%, transparent 50%),
        linear-gradient(45deg, #f7fee7 0%, #ecfccb 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Lime Electric Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 25% 75%, #84cc16 0%, transparent 50%),
        radial-gradient(circle at 75% 25%, #a3e635 0%, transparent 50%),
        linear-gradient(45deg, #f7fee7 0%, #ecfccb 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // PURPLE PATTERNS
  {
    id: "royal-purple",
    name: "Royal Purple",
    category: "gradients",
    badge: "Popular",
    description: "Majestic royal purple gradient with regal tones",
    style: {
      background: "linear-gradient(135deg, #581c87 0%, #7c3aed 25%, #a855f7 50%, #c084fc 75%, #e9d5ff 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Royal Purple Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #581c87 0%, #7c3aed 25%, #a855f7 50%, #c084fc 75%, #e9d5ff 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "lavender-dreams",
    name: "Lavender Dreams",
    category: "gradients",
    description: "Soft lavender dreams with pastel purple tones",
    style: {
      background: "radial-gradient(circle at center, #8b5cf6 0%, #a78bfa 30%, #c4b5fd 60%, #ddd6fe 80%, #f3f4f6 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Lavender Dreams Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(circle at center, #8b5cf6 0%, #a78bfa 30%, #c4b5fd 60%, #ddd6fe 80%, #f3f4f6 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "amethyst-crystal",
    name: "Amethyst Crystal",
    category: "geometric",
    description: "Crystalline amethyst pattern with geometric shapes",
    style: {
      backgroundColor: "#faf5ff",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237c3aed' fill-opacity='0.1'%3E%3Cpath d='M25 5l20 15-20 15L5 20z'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Amethyst Crystal Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#faf5ff",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'50\\' height=\\'50\\' viewBox=\\'0 0 50 50\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%237c3aed\\' fill-opacity=\\'0.1\\'%3E%3Cpath d=\\'M25 5l20 15-20 15L5 20z\\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "violet-storm",
    name: "Violet Storm",
    category: "effects",
    description: "Stormy violet effects with electric energy",
    style: {
      background: `
        radial-gradient(circle at 40% 60%, #6d28d9 0%, transparent 50%),
        radial-gradient(circle at 60% 40%, #8b5cf6 0%, transparent 50%),
        linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Violet Storm Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 40% 60%, #6d28d9 0%, transparent 50%),
        radial-gradient(circle at 60% 40%, #8b5cf6 0%, transparent 50%),
        linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // DARK PATTERNS
  {
    id: "midnight-black",
    name: "Midnight Black",
    category: "gradients",
    badge: "New",
    description: "Deep midnight black with subtle gradients",
    style: {
      background: "linear-gradient(135deg, #000000 0%, #1f2937 25%, #374151 50%, #4b5563 75%, #6b7280 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Midnight Black Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #000000 0%, #1f2937 25%, #374151 50%, #4b5563 75%, #6b7280 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "charcoal-grid",
    name: "Charcoal Grid",
    category: "geometric",
    description: "Charcoal grid pattern with subtle lines",
    style: {
      backgroundColor: "#111827",
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Charcoal Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#111827",
      backgroundImage: \`
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-waves",
    name: "Dark Waves",
    category: "decorative",
    description: "Flowing dark waves with subtle movement",
    style: {
      backgroundColor: "#0f172a",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50c25-25 75 25 100 0v50H0z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Dark Waves Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#0f172a",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 50c25-25 75 25 100 0v50H0z\\' fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\'/%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // MULTI-COLOR RAINBOW PATTERNS
  {
    id: "rainbow-gradient",
    name: "Rainbow Gradient",
    category: "gradients",
    badge: "Popular",
    description: "Full spectrum rainbow gradient with vibrant colors",
    style: {
      background: "linear-gradient(45deg, #ff0000 0%, #ff8000 14%, #ffff00 28%, #80ff00 42%, #00ff00 57%, #00ff80 71%, #00ffff 85%, #0080ff 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Rainbow Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(45deg, #ff0000 0%, #ff8000 14%, #ffff00 28%, #80ff00 42%, #00ff00 57%, #00ff80 71%, #00ffff 85%, #0080ff 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "aurora-borealis",
    name: "Aurora Borealis",
    category: "effects",
    badge: "New",
    description: "Northern lights effect with dancing colors",
    style: {
      background: `
        radial-gradient(ellipse at top, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at bottom left, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Aurora Borealis Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(ellipse at top, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at bottom left, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "prism-refraction",
    name: "Prism Refraction",
    category: "geometric",
    description: "Light refraction through prism with color spectrum",
    style: {
      backgroundColor: "#ffffff",
      backgroundImage: `
        linear-gradient(45deg, transparent 30%, rgba(255,0,0,0.1) 32%, rgba(255,0,0,0.1) 34%, transparent 36%),
        linear-gradient(45deg, transparent 40%, rgba(0,255,0,0.1) 42%, rgba(0,255,0,0.1) 44%, transparent 46%),
        linear-gradient(45deg, transparent 50%, rgba(0,0,255,0.1) 52%, rgba(0,0,255,0.1) 54%, transparent 56%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Prism Refraction Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: \`
        linear-gradient(45deg, transparent 30%, rgba(255,0,0,0.1) 32%, rgba(255,0,0,0.1) 34%, transparent 36%),
        linear-gradient(45deg, transparent 40%, rgba(0,255,0,0.1) 42%, rgba(0,255,0,0.1) 44%, transparent 46%),
        linear-gradient(45deg, transparent 50%, rgba(0,0,255,0.1) 52%, rgba(0,0,255,0.1) 54%, transparent 56%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // UNIQUE ARTISTIC PATTERNS
  {
    id: "marble-texture",
    name: "Marble Texture",
    category: "decorative",
    badge: "New",
    description: "Elegant marble texture with natural veining",
    style: {
      background: `
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Marble Texture Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "neon-grid",
    name: "Neon Grid",
    category: "geometric",
    badge: "Popular",
    description: "Cyberpunk neon grid with glowing lines",
    style: {
      backgroundColor: "#000000",
      backgroundImage: `
        linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,0,255,0.3) 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Neon Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#000000",
      backgroundImage: \`
        linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,0,255,0.3) 1px, transparent 1px)
      \`,
      backgroundSize: "50px 50px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "watercolor-blend",
    name: "Watercolor Blend",
    category: "effects",
    description: "Soft watercolor blending with artistic flow",
    style: {
      background: `
        radial-gradient(circle at 30% 30%, rgba(244, 63, 94, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
        linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Watercolor Blend Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 30% 30%, rgba(244, 63, 94, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
        linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  
  // CYAN & TEAL PATTERNS
  {
    id: "arctic-cyan",
    name: "Arctic Cyan",
    category: "gradients",
    badge: "New",
    description: "Cold arctic cyan with ice blue tones",
    style: {
      background: "linear-gradient(135deg, #155e75 0%, #0891b2 25%, #06b6d4 50%, #22d3ee 75%, #a5f3fc 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Arctic Cyan Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #155e75 0%, #0891b2 25%, #06b6d4 50%, #22d3ee 75%, #a5f3fc 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "peacock-feather",
    name: "Peacock Feather",
    category: "decorative",
    badge: "Popular",
    description: "Iridescent peacock feather pattern with blue-green hues",
    style: {
      background: `
        radial-gradient(circle at 25% 25%, #0891b2 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, #059669 0%, transparent 50%),
        linear-gradient(45deg, #0e7490 0%, #065f46 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Peacock Feather Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 25% 25%, #0891b2 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, #059669 0%, transparent 50%),
        linear-gradient(45deg, #0e7490 0%, #065f46 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // BROWN & EARTH TONES
  {
    id: "chocolate-truffle",
    name: "Chocolate Truffle",
    category: "gradients",
    description: "Rich chocolate brown gradient with warm earth tones",
    style: {
      background: "linear-gradient(135deg, #451a03 0%, #78350f 25%, #a16207 50%, #ca8a04 75%, #eab308 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Chocolate Truffle Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #451a03 0%, #78350f 25%, #a16207 50%, #ca8a04 75%, #eab308 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "coffee-beans",
    name: "Coffee Beans",
    category: "decorative",
    description: "Coffee bean pattern with rich brown tones",
    style: {
      backgroundColor: "#fef3c7",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2378350f' fill-opacity='0.2'%3E%3Cellipse cx='15' cy='15' rx='6' ry='10' transform='rotate(45 15 15)'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Coffee Beans Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fef3c7",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'30\\' height=\\'30\\' viewBox=\\'0 0 30 30\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%2378350f\\' fill-opacity=\\'0.2\\'%3E%3Cellipse cx=\\'15\\' cy=\\'15\\' rx=\\'6\\' ry=\\'10\\' transform=\\'rotate(45 15 15)\\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "desert-sand",
    name: "Desert Sand",
    category: "gradients",
    badge: "New",
    description: "Warm desert sand gradient with earthy tones",
    style: {
      background: "radial-gradient(circle at center, #d97706 0%, #f59e0b 30%, #fbbf24 60%, #fde68a 80%, #fef3c7 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Desert Sand Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(circle at center, #d97706 0%, #f59e0b 30%, #fbbf24 60%, #fde68a 80%, #fef3c7 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // SILVER & METALLIC
  {
    id: "silver-chrome",
    name: "Silver Chrome",
    category: "gradients",
    badge: "Popular",
    description: "Metallic silver chrome gradient with reflective shine",
    style: {
      background: "linear-gradient(135deg, #374151 0%, #6b7280 25%, #9ca3af 50%, #d1d5db 75%, #f3f4f6 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Silver Chrome Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #374151 0%, #6b7280 25%, #9ca3af 50%, #d1d5db 75%, #f3f4f6 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "platinum-mesh",
    name: "Platinum Mesh",
    category: "geometric",
    description: "Sophisticated platinum mesh pattern",
    style: {
      backgroundColor: "#f8fafc",
      backgroundImage: `
        linear-gradient(45deg, #6b7280 25%, transparent 25%),
        linear-gradient(-45deg, #6b7280 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #9ca3af 75%),
        linear-gradient(-45deg, transparent 75%, #9ca3af 75%)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Platinum Mesh Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f8fafc",
      backgroundImage: \`
        linear-gradient(45deg, #6b7280 25%, transparent 25%),
        linear-gradient(-45deg, #6b7280 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #9ca3af 75%),
        linear-gradient(-45deg, transparent 75%, #9ca3af 75%)
      \`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // UNIQUE ARTISTIC STYLES
  {
    id: "galaxy-spiral",
    name: "Galaxy Spiral",
    category: "effects",
    badge: "New",
    description: "Cosmic galaxy spiral with starfield effect",
    style: {
      background: `
        radial-gradient(ellipse at center, transparent 20%, rgba(139, 92, 246, 0.3) 50%, transparent 80%),
        radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
        linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Galaxy Spiral Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(ellipse at center, transparent 20%, rgba(139, 92, 246, 0.3) 50%, transparent 80%),
        radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
        linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "cosmic-dust",
    name: "Cosmic Dust",
    category: "decorative",
    description: "Scattered cosmic dust with stellar particles",
    style: {
      backgroundColor: "#0f172a",
      backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(139,92,246,0.6) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59,130,246,0.4) 1px, transparent 0)
      `,
      backgroundSize: "100px 100px, 150px 150px, 200px 200px",
      backgroundPosition: "0 0, 50px 50px, 100px 100px",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Cosmic Dust Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#0f172a",
      backgroundImage: \`
        radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(139,92,246,0.6) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59,130,246,0.4) 1px, transparent 0)
      \`,
      backgroundSize: "100px 100px, 150px 150px, 200px 200px",
      backgroundPosition: "0 0, 50px 50px, 100px 100px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // SEASONAL PATTERNS
  {
    id: "spring-bloom",
    name: "Spring Bloom",
    category: "decorative",
    badge: "Popular",
    description: "Fresh spring blooms with pastel colors",
    style: {
      background: `
        radial-gradient(circle at 30% 30%, rgba(251, 146, 60, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 50% 10%, rgba(244, 63, 94, 0.2) 0%, transparent 50%),
        linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Spring Bloom Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 30% 30%, rgba(251, 146, 60, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 50% 10%, rgba(244, 63, 94, 0.2) 0%, transparent 50%),
        linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "winter-frost",
    name: "Winter Frost",
    category: "effects",
    description: "Icy winter frost with crystalline patterns",
    style: {
      background: `
        radial-gradient(circle at 20% 20%, rgba(147, 197, 253, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(191, 219, 254, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Winter Frost Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 20% 20%, rgba(147, 197, 253, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(191, 219, 254, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // ABSTRACT GEOMETRICS
  {
    id: "triangle-mosaic",
    name: "Triangle Mosaic",
    category: "geometric",
    badge: "New",
    description: "Colorful triangle mosaic with geometric harmony",
    style: {
      backgroundColor: "#ffffff",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23f43f5e' points='30 0 60 30 30 60 0 30'/%3E%3Cpolygon fill='%2306b6d4' points='15 15 45 15 30 45'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Triangle Mosaic Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill-opacity=\\'0.1\\'%3E%3Cpolygon fill=\\'%23f43f5e\\' points=\\'30 0 60 30 30 60 0 30\\'/%3E%3Cpolygon fill=\\'%2306b6d4\\' points=\\'15 15 45 15 30 45\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "hexagon-pattern",
    name: "Hexagon Pattern",
    category: "geometric",
    description: "Modern hexagon pattern with subtle colors",
    style: {
      backgroundColor: "#f8fafc",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230ea5e9' fill-opacity='0.05'%3E%3Cpolygon points='14,1 28,8 28,22 14,29 0,22 0,8'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Hexagon Pattern Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f8fafc",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'28\\' height=\\'49\\' viewBox=\\'0 0 28 49\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%230ea5e9\\' fill-opacity=\\'0.05\\'%3E%3Cpolygon points=\\'14,1 28,8 28,22 14,29 0,22 0,8\\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // ADVANCED GRADIENTS & EFFECTS - Additional 80 patterns to reach 130+
  {
    id: "holographic-shine",
    name: "Holographic Shine",
    category: "effects",
    badge: "New",
    description: "Holographic rainbow effect with shifting colors",
    style: {
      background: `
        linear-gradient(45deg, #ff006e 0%, #8338ec 20%, #3a86ff 40%, #06ffa5 60%, #ffbe0b 80%, #fb5607 100%),
        linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Holographic Shine Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        linear-gradient(45deg, #ff006e 0%, #8338ec 20%, #3a86ff 40%, #06ffa5 60%, #ffbe0b 80%, #fb5607 100%),
        linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "neon-cyber-grid",
    name: "Neon Cyber Grid",
    category: "geometric",
    badge: "Popular",
    description: "Cyberpunk neon grid with electric colors",
    style: {
      backgroundColor: "#0a0a0a",
      backgroundImage: `
        linear-gradient(rgba(0,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,0,255,0.5) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(255,255,0,0.1) 0%, transparent 70%)
      `,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Neon Cyber Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#0a0a0a",
      backgroundImage: \`
        linear-gradient(rgba(0,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,0,255,0.5) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(255,255,0,0.1) 0%, transparent 70%)
      \`,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "volcanic-lava",
    name: "Volcanic Lava",
    category: "effects",
    description: "Molten lava flow with red-orange volcanic colors",
    style: {
      background: `
        radial-gradient(circle at 30% 70%, #dc2626 0%, transparent 50%),
        radial-gradient(circle at 70% 30%, #ea580c 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, #f59e0b 0%, transparent 50%),
        linear-gradient(135deg, #7f1d1d 0%, #451a03 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Volcanic Lava Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 30% 70%, #dc2626 0%, transparent 50%),
        radial-gradient(circle at 70% 30%, #ea580c 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, #f59e0b 0%, transparent 50%),
        linear-gradient(135deg, #7f1d1d 0%, #451a03 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "iridescent-bubbles",
    name: "Iridescent Bubbles",
    category: "decorative",
    badge: "New",
    description: "Floating iridescent bubbles with rainbow reflections",
    style: {
      backgroundColor: "#f8fafc",
      backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(255,0,128,0.3) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(0,255,128,0.3) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(128,0,255,0.3) 1px, transparent 0)
      `,
      backgroundSize: "80px 80px, 120px 120px, 160px 160px",
      backgroundPosition: "0 0, 40px 40px, 80px 80px",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Iridescent Bubbles Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f8fafc",
      backgroundImage: \`
        radial-gradient(circle at 1px 1px, rgba(255,0,128,0.3) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(0,255,128,0.3) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(128,0,255,0.3) 1px, transparent 0)
      \`,
      backgroundSize: "80px 80px, 120px 120px, 160px 160px",
      backgroundPosition: "0 0, 40px 40px, 80px 80px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "electric-storm",
    name: "Electric Storm",
    category: "effects",
    badge: "Popular",
    description: "Electric lightning storm with charged atmosphere",
    style: {
      background: `
        radial-gradient(ellipse at top, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
        radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.4) 0%, transparent 70%),
        linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a8a 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Electric Storm Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(ellipse at top, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
        radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.4) 0%, transparent 70%),
        linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a8a 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "coral-reef-vivid",
    name: "Coral Reef Vivid",
    category: "decorative",
    description: "Vibrant coral reef with tropical marine colors",
    style: {
      background: `
        radial-gradient(circle at 25% 25%, #f97316 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%),
        radial-gradient(circle at 50% 80%, #10b981 0%, transparent 50%),
        linear-gradient(135deg, #fef3c7 0%, #ecfdf5 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Coral Reef Vivid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 25% 25%, #f97316 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%),
        radial-gradient(circle at 50% 80%, #10b981 0%, transparent 50%),
        linear-gradient(135deg, #fef3c7 0%, #ecfdf5 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diamond-sparkle",
    name: "Diamond Sparkle",
    category: "geometric",
    badge: "New",
    description: "Sparkling diamond pattern with prismatic effects",
    style: {
      backgroundColor: "#f8fafc",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(10,10)'%3E%3Cpolygon fill='%23f59e0b' fill-opacity='0.2' points='10,0 20,10 10,20 0,10'/%3E%3Cpolygon fill='%236366f1' fill-opacity='0.1' points='5,5 15,5 10,15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Diamond Sparkle Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f8fafc",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(10,10)\\'%3E%3Cpolygon fill=\\'%23f59e0b\\' fill-opacity=\\'0.2\\' points=\\'10,0 20,10 10,20 0,10\\'/%3E%3Cpolygon fill=\\'%236366f1\\' fill-opacity=\\'0.1\\' points=\\'5,5 15,5 10,15\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "sunset-gradient-mesh",
    name: "Sunset Gradient Mesh",
    category: "gradients",
    description: "Complex sunset mesh with warm gradient transitions",
    style: {
      background: `
        radial-gradient(at 40% 20%, #ffbe0b 0px, transparent 50%),
        radial-gradient(at 80% 0%, #fb5607 0px, transparent 50%),
        radial-gradient(at 0% 50%, #ff006e 0px, transparent 50%),
        radial-gradient(at 80% 50%, #8338ec 0px, transparent 50%),
        radial-gradient(at 0% 100%, #3a86ff 0px, transparent 50%),
        radial-gradient(at 80% 100%, #06ffa5 0px, transparent 50%),
        radial-gradient(at 0% 0%, #ffbe0b 0px, transparent 50%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Sunset Gradient Mesh Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(at 40% 20%, #ffbe0b 0px, transparent 50%),
        radial-gradient(at 80% 0%, #fb5607 0px, transparent 50%),
        radial-gradient(at 0% 50%, #ff006e 0px, transparent 50%),
        radial-gradient(at 80% 50%, #8338ec 0px, transparent 50%),
        radial-gradient(at 0% 100%, #3a86ff 0px, transparent 50%),
        radial-gradient(at 80% 100%, #06ffa5 0px, transparent 50%),
        radial-gradient(at 0% 0%, #ffbe0b 0px, transparent 50%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "northern-lights-dark",
    name: "Northern Lights Dark",
    category: "effects",
    badge: "Popular",
    description: "Dark aurora borealis with mystical green-purple lights",
    style: {
      background: `
        radial-gradient(ellipse at top, rgba(34, 197, 94, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at bottom left, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(34, 211, 238, 0.4) 0%, transparent 50%),
        linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)
      `,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Northern Lights Dark Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(ellipse at top, rgba(34, 197, 94, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at bottom left, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(34, 211, 238, 0.4) 0%, transparent 50%),
        linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "geometric-prism",
    name: "Geometric Prism",
    category: "geometric",
    description: "Complex geometric prism with refracted colors",
    style: {
      backgroundColor: "#ffffff",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill-opacity='0.08'%3E%3Cpolygon fill='%23ef4444' points='40,0 80,40 40,80 0,40'/%3E%3Cpolygon fill='%2322c55e' points='20,20 60,20 40,60'/%3E%3Cpolygon fill='%233b82f6' points='20,60 60,60 40,20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Geometric Prism Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill-opacity=\\'0.08\\'%3E%3Cpolygon fill=\\'%23ef4444\\' points=\\'40,0 80,40 40,80 0,40\\'/%3E%3Cpolygon fill=\\'%2322c55e\\' points=\\'20,20 60,20 40,60\\'/%3E%3Cpolygon fill=\\'%233b82f6\\' points=\\'20,60 60,60 40,20\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
];