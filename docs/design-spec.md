# Design Specification: Robin Tapiru — Coming Soon Page

## 1. Design Concept
**Concept:** *The Active Build*

**Philosophy:** A coming soon page shouldn't feel like a locked door; it should feel like a glass wall into a workshop. This design eschews marketing fluff for developer realism, treating the page as a live build environment. It marries the surgical, high-end agency aesthetic of AIIMS Group (stark contrasts, rigid alignment, purposeful accents) with the community-minded craftsmanship of Robin's independent civic tech work. It is intentionally severe, highly polished, and entirely devoid of generic "AI slop." The interface *is* the portfolio.

---

## 2. Layout & Visual Hierarchy

**Structure:** Left-anchored, bottom-weighted (editorial style).
By avoiding the cliché dead-center alignment, the page feels like an editorial spread. Content rests comfortably in the lower left quadrant of the viewport, creating massive, luxurious negative space in the top right.

- **Grid System:** 12-column CSS Grid.
- **Container:** `max-w-7xl`, `mx-auto`, `px-6` (mobile) to `px-12` (desktop).
- **Alignment:** All text content is strictly flush-left to create a razor-sharp vertical axis.
- **Spacing System:** Modular scale based on 8px baseline (`rem`). 
  - Section gaps: `4rem` (64px)
  - Element gaps: `1rem` (16px) to `1.5rem` (24px)

---

## 3. Typography System

**Primary Typeface:** `Inter` (or `TT Interphases Pro` if licensed/available). Geometric, neutral, highly legible.
**Secondary Typeface (Status/Data):** `JetBrains Mono` or `Geist Mono` for developer-centric elements.

**Scale:**
- **H1 (Name):** 
  - Desktop: `5rem` (80px), `-0.03em` tracking, `1.1` line-height, Font-weight: 500 (Medium).
  - Mobile: `3rem` (48px).
- **H2 (Role/Location):** 
  - Desktop/Mobile: `1.125rem` (18px), `0em` tracking, `1.5` line-height, Font-weight: 400 (Regular).
- **Mono Status:** 
  - `0.875rem` (14px), `+0.02em` tracking, uppercase, Font-weight: 400.
- **Body/Teaser:**
  - `1rem` (16px), `1.6` line-height, Font-weight: 400.

---

## 4. Color Palette

**Dark Mode (Default - AIIMS DNA):**
- **Background:** `#0B0B0B` (Near Black, deep and flat)
- **Text Primary:** `#FFFFFF` (Pure White)
- **Text Muted:** `rgba(255, 255, 255, 0.50)` (High contrast readability without glare)
- **Borders/Lines:** `rgba(255, 255, 255, 0.08)` (Subtle structure)
- **Accent Red:** `#F5412C` (Used *only* for the active status dot and hover micro-interactions)

**Light Mode:**
- **Background:** `#FAFAFA` (Off-white, paper-like)
- **Text Primary:** `#0A0A0A` (Soft Black)
- **Text Muted:** `rgba(10, 10, 10, 0.60)`
- **Borders/Lines:** `rgba(10, 10, 10, 0.10)`
- **Accent Red:** `#E03520` (Slightly deeper red to maintain WCAG contrast on light background)

---

## 5. Component Specifications

### A. Page Background
- **Visuals:** Flat `#0B0B0B`. To prevent it from feeling dead, implement a highly subtle 1px grid background pattern (`100px` squares) in the border color (`rgba(255,255,255,0.04)`), masked with a radial gradient so it only appears subtly behind the text content and fades into total blackness at the edges. No generic glowing orbs.

### B. Status Indicator (Top Left of Content Block)
- **Content:** `<Blip> System active — Compiling v3.0`
- **Visuals:** A tiny 6px by 6px square (not circle) in Accent Red (`#F5412C`). Beside it, Mono font text in Muted Color.
- **Animation:** The red square pulses (opacity `1` to `0.3`) continuously every 2 seconds, mimicking a terminal cursor or server light. 

### C. Main Heading (Name)
- **Content:** `Robin Tapiru`
- **Visuals:** Primary white text, tightly tracked. 

### D. Role & Context Line
- **Content:** `Web Developer at AIIMS Group · Creator of BetterKabugao.org`
- **Second line:** `From Apayao, PH → Dubai, UAE`
- **Visuals:** Sits immediately below the name. Muted text color. "AIIMS Group" links to aiims.group, "BetterKabugao.org" links to betterkabugao.org — both with subtle 1px underline (`rgba(255,255,255,0.2)`) that transitions to Accent Red on hover. The arrow (→) in the second line adds a subtle sense of journey.

### E. Social & Contact Footer
- **Primary Links Row (higher visual weight — Primary White color by default):**
  - `LinkedIn` → https://www.linkedin.com/in/robintapiru/
  - `GitHub` → https://github.com/KuyaLoy
- **Secondary Links Row (standard Muted color):**
  - `X` → https://x.com/bukoroll
  - `Facebook` → Robin Tapiru's FB profile
  - `Instagram` → Robin Tapiru's IG profile
  - `Threads` → Robin Tapiru's Threads profile
- **Contact Row (below social):**
  - `robintapiru0894@gmail.com` (mailto link)
  - `+971 56 594 4497` (tel link, formatted for UAE)
- **Visuals:** Icon-only rows. Primary links use `20px` icons in Primary text color. Secondary links use `16px` icons in Muted color. All separated by a thin horizontal rule (`rgba(255,255,255,0.08)`).
- **Interaction:** On hover, icon shifts to Accent Red. Contact row uses text links in Mono font, Muted color, same hover behavior.

### F. Theme Toggle
- **Position:** Fixed to top-right corner, `2rem` padding from edges.
- **Visuals:** Minimalist Lucide icons (Sun/Moon). Size: `18px`. Stroke width: `1.5`. No bulky button backgrounds; just the raw icon in Muted color, turning to Primary on hover.

---

## 6. Animation & Interaction Design

**Page Load Sequence (Framer Motion):**
- *No aggressive sliding or bouncing.* 
- **Initial State:** All elements `opacity: 0`, `y: 10px`.
- **Entrance:** Staggered fade-up, `duration: 0.8s`, `ease: [0.16, 1, 0.3, 1]` (custom spring-like bezier for a premium feel).
  1. Status Indicator (0.0s)
  2. Main Heading (0.1s)
  3. Role Line (0.2s)
  4. Social Links (0.3s)

**Hover States:**
- Text links transition duration: `0.2s` ease-out.
- No scaling (`scale: 1.05` is overused). Rely purely on color shifts and subtle line/dot reveals.

**Theme Transition:**
- `next-themes` should have a CSS transition on `background-color` and `color` of `0.3s ease-in-out` so the switch doesn't flash blindingly.

---

## 7. Responsive Behavior

- **Mobile (< 640px):**
  - Content block is pushed closer to the vertical center rather than bottom-weighted to ensure immediate visibility on smaller viewports.
  - H1 scales down to `3rem`.
  - Grid background pattern scales down to `50px` squares or is hidden entirely to avoid visual noise.
- **Tablet (640px - 1024px):**
  - H1 scales to `4rem`.
  - Content begins to anchor towards the bottom-left, taking up 8 columns of the 12-column grid.
- **Desktop (1024px+):**
  - Full bottom-left anchoring. H1 at `5rem`. Content spans 6 columns, leaving the right 6 columns entirely empty.

---

## 8. Accessibility (A11y)

- **Contrast:** The Muted text colors (`rgba(255,255,255,0.5)` on `#0B0B0B`) must clear WCAG AA standards (4.5:1). If it falls short, adjust opacity to `0.6`.
- **Focus States:** Custom focus rings for keyboard navigation. Remove default blue outline. Use `outline: 1px solid #F5412C; outline-offset: 4px;` for a branded, intentional focus state.
- **Reduced Motion:** Wrap all Framer Motion animations in a `useReducedMotion` hook check. If user prefers reduced motion, disable the staggered fade-up and the pulsing status dot.
- **Semantics:** 
  - H1 for Name.
  - H2 for Role.
  - Use `<nav>` for the social links list. 
  - Use `aria-label="Toggle theme"` on the theme switcher.
