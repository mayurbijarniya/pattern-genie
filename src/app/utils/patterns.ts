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
];