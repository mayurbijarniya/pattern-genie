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
];