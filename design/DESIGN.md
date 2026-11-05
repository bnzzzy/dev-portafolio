---
name: Terminal Horizon
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  title-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  badge-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  caption-meta:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system blends refined engineering discipline with a high-performance cyber-minimalist aesthetic. Created specifically for mobile-first developer portfolios, it evokes technical precision, deep focus, and cutting-edge craft without falling into dated terminal or vaporwave clichés. 

The visual voice is quiet, confident, and architectural. It relies on pitch-black and deep zinc substrates, razor-thin luminous borders, monospaced data readouts, and concentrated bursts of electric indigo and cyan light. The emotional response is immediate credibility, sophisticated architectural structure, and modern engineering prowess.

## Colors

The palette is tuned specifically for deep OLED displays, minimizing eye strain while maximizing visual contrast.

- **Primary (`#6366F1` - Electric Indigo):** Primary calls to action, active navigation states, primary repository star indicators, and focal points.
- **Secondary (`#06B6D4` - Cyber Cyan):** Live status beacons, commits, dynamic telemetry, tech stack highlights, and hyperlinked inline elements.
- **Tertiary (`#10B981` - Emerald Matrix):** Status indicators denoting active uptime, green contribution metrics, and production verification badges.
- **Neutral Core (`#090A0F` to `#F8FAFC`):** 
  - Base Background: `#090A0F` (deep void black with a faint cool undertone).
  - Elevated Container: `#11131F` (slate-zinc hybrid surface).
  - High Elevation / Overlay: `#181B2C`.
  - Border Hairline: `#23273D` (subtle structural divider) and `#313854` (interactive state border).
  - Typography Base: `#F8FAFC` (90% white primary), `#94A3B8` (slate muted secondary), and `#475569` (low-contrast tertiary/meta text).

## Typography

The typographic hierarchy uses a triad of specialized fonts:

1. **Space Grotesk (Headlines & Hero):** Delivers geometric, machine-aesthetic visual impact with tight letter tracking and deliberate angularity.
2. **Geist (Body & Narrative Text):** Provides ultra-refined, uncolored neutral legibility for experience descriptions, project summaries, and bio statements.
3. **JetBrains Mono (Metadata, Badges & Labels):** Anchor points for numerical metrics, tech stack tags, timestamps, commit hashes, and system prompts.

All display titles on mobile are capped at tight leading to maintain a high-density, command-center posture.

## Layout & Spacing

This design system uses a strict 4-column fluid mobile grid scaling to a single-column stacked hierarchy on narrow viewport screens (< 380px) and an 8-column layout on tablets. 

Outer margins on mobile are locked to `1rem` (16px) to maximize screen real estate, while gutters maintain `0.75rem` (12px) separation between sibling card elements. Vertical cadence adheres to an 8px baseline rhythm, with compact `0.25rem` (4px) and `0.5rem` (8px) gaps used internally inside component cards to preserve an ultra-compact, high-density HUD feeling.

## Elevation & Depth

Visual hierarchy bypasses heavy blurry drop shadows in favor of a layered "glass-substrate" hierarchy and targeted photonic glow:

- **Surface Tier 0 (Canvas):** Pure `#090A0F` base canvas with an optional 32px radial gradient overlay (`rgba(99, 102, 241, 0.05)`) positioned behind the hero section.
- **Surface Tier 1 (Cards & Modules):** Background `#11131F` coupled with a 1px solid border of `#23273D`. 
- **Surface Tier 2 (Interactive Floating Overlays & Drawers):** Background `rgba(17, 19, 31, 0.85)` with a `12px` backdrop-filter blur and top edge border highlight of `rgba(255, 255, 255, 0.12)`.
- **Luminescent Accents (Glow):** Interactive elements (focused inputs, featured project cards, active status beads) introduce subtle directional glows using `box-shadow: 0 0 20px -5px rgba(99, 102, 241, 0.35)` or `0 0 15px -4px rgba(6, 182, 212, 0.4)`. Never cast opaque dark drop shadows.

## Shapes

The design system employs a geometric, soft-chiseled shape profile (`roundedness: 1`). Cards and integration panels utilize `0.5rem` (8px) corner radiuses, maintaining crisp structural clarity that matches the technical tone. Micro-elements like tech stack badges, live status dots, and pill buttons scale between `0.25rem` (4px) and full pill shapes (`9999px`) purely for functional semantic differentiation.

## Components

### Buttons
- **Primary Action:** Solid background in Primary Electric Indigo (`#6366F1`) with high-contrast text (`#FFFFFF`), 8px border radius, subtle hover glow (`box-shadow: 0 0 16px rgba(99, 102, 241, 0.4)`), and monospaced or Geist medium typography.
- **Secondary / Ghost Action:** Translucent fill (`rgba(255, 255, 255, 0.03)`), 1px border (`#23273D`), hover transition to cyan edge highlight (`#06B6D4`).

### Tech Stack Badges & Chips
- Rendered in `JetBrains Mono` at `11px` uppercase.
- Contained within a `0.25rem` (4px) rounded frame, `rgba(6, 182, 212, 0.08)` surface, and a 1px border colored `rgba(6, 182, 212, 0.25)`. Text sits in secondary cyan or high-contrast neutral slate.

### GitHub Integration Card
- Background: Surface Tier 1 (`#11131F`).
- Features a top-aligned repository moniker with an external-link glyph, commit activity pulse, language indicator (colored circular dot with language string), and repository star/fork count readouts rendered in monospaced captions.
- Border includes a subtle hover glow shift from zinc to electric indigo.

### LinkedIn Integration Card
- Surface styled in dark carbon tones with an electric blue accent line (1px top border gradient: `linear-gradient(90deg, #0A66C2, transparent)`).
- Embeds avatar thumbnail, current engineering role, real-time connection tally, and a direct "Connect" ghost button with an outbound arrow icon.

### Form Inputs & Terminal Command Line
- Inset field styled with dark background (`#0D0E17`), 1px structural border (`#23273D`), and monospaced typography with a blinking cyan cursor (`|`) for search or quick-filter interactions.
- Focus state activates an electric cyan hairline border and a faint 10px diffuse outer glow.

### Lists & Timeline Trees
- Experience entries connect via a 1px vertical trace line (`#23273D`) punctuated by active status nodes (emerald `#10B981` for current position; muted slate for historical roles).