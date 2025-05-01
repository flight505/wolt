## Cancel Wolt Website - Redesign & Refinement Checklist

**Goal:** Overhaul the Cancel Wolt website's design and layout to be modern, professional, visually aligned with the Wolt style guide (for protest effect), and effective in communicating its message. Improve component structure, image usage, and code consistency.

**Reference:** Use the original Wolt merchant site (`explore.wolt.com`) shown in the video as the primary visual style guide, particularly for card layouts. Refer to `src/styles/wolt-design-system.css` and potentially `src/components/StyleGuide.md` for existing style definitions.

**Key Issues Identified:**

1.  **Outdated/Unprofessional Design:** Header, navigation, buttons, tables, and general layout lack modern polish.
2.  **Poor Image Usage:** Images are placed randomly within content or in page headers instead of being integrated into informative cards.
3.  **Ineffective Component Styling:** Existing components (like `FeatureCard`) don't match the desired Wolt card style shown in the reference. Tables (`ComparisonTable`) look very basic.
4.  **Inconsistent Layout:** Content stretches full-width on some pages (e.g., pledge form), text organization is poor, and elements like vertical bars appear randomly.
5.  **Hidden Call-to-Action:** The pledge form/link is buried within content instead of being prominent.
6.  **Header Issues:** Top navigation bar elements (theme switcher, language switcher) are poorly styled and potentially non-functional or visually disruptive, especially concerning transparency on scroll.
7.  **Potential Code Overlap/Inconsistency:** Existence of multiple card types (`FeatureCard`, `InfoCard`), mixed use of Tailwind colors vs. CSS variables. Supabase schema files might need review.

---

### **Phase 1: Global Styles & Foundation**

*   **Task:** **Standardize Color Palette:**
    *   `[x]` Review `tailwind.config.ts` and `src/styles/wolt-design-system.css`.
    *   `[x]` Ensure all components consistently use the CSS variables defined in `wolt-design-system.css` (e.g., `--wolt-cyan`, `--wolt-navy`, etc.).
    *   `[x]` Remove or deprecate direct color definitions in `tailwind.config.ts` if they conflict with the CSS variables.
    *   `[x]` Verify dark mode colors in CSS variables provide good contrast and visual appeal.
*   **Task:** **Standardize Typography:**
    *   `[ ]` Ensure the Omnes font (`font-omnes` in Tailwind config, loaded via `OmnesFontLoader.tsx`) is applied correctly to headings and key elements as per Wolt's style.
    *   `[ ]` Verify body text uses the specified fallback (Inter or sans-serif defined in Tailwind).
    *   `[ ]` Review font sizes and weights defined in `wolt-design-system.css` and ensure they are applied consistently across components and pages.
    *   `[ ]` Improve text readability: Limit line width for body text sections (e.g., using `prose` classes or max-width containers within `ContentSection`). Avoid text stretching across the entire page width.
*   **Task:** **Review Base Layout:**
    *   `[x]` Check `src/app/layout.tsx` for overall structure.
    *   `[x]` Ensure `main#main-content` has appropriate top padding to account for the fixed header.
    *   `[ ]` Verify `ThemeProvider` and `LanguageProvider` wrap the application correctly.

### **Phase 2: Header & Footer Refinement**

*   **Task:** **Redesign Header Component (`src/components/Header.tsx`):**
    *   `[x]` Restyle the header to closely match the reference Wolt header (clean, modern).
    *   `[ ]` Implement smooth background/opacity transition on scroll (current implementation `isScrolled` logic seems okay, but styling needs work). Ensure transparency when at the top and a slightly opaque background (white/dark) when scrolled.
    *   `[x]` Fix Navigation Links: Ensure nav links (`/`, `/about`, `/pricing`, etc.) are clearly visible, well-spaced, and use the correct hover states (`linkColorClass` needs refinement based on scroll state and theme). Currently, they are likely invisible when the header is transparent.
    *   `[ ]` Restyle Theme Toggle Button: Make the sun/moon icon button visually appealing and consistent with the overall design.
    *   `[ ]` Restyle Language Switcher (`src/components/LanguageSwitcher.tsx`): Replace the basic text/dropdown with a more polished flag/language code selector, matching modern UI standards. Ensure dropdown styling is consistent with the theme.
    *   `[ ]` Implement Mobile Navigation: The current code has a placeholder hamburger icon (`md:hidden`). Implement a functional slide-out or dropdown menu for mobile devices.
*   **Task:** **Review Footer Component (`src/components/Footer.tsx`):**
    *   `[ ]` Ensure footer layout is clean and organized on all screen sizes.
    *   `[ ]` Verify links work correctly.
    *   `[ ]` Check styling consistency with the rest of the site (colors, fonts).

### **Phase 3: Core Component Overhaul (File Cards & Content Display)**

*   **Task:** **Consolidate/Refine Card Components:**
    *   `[ ]` Analyze `FeatureCard.tsx` and `InfoCard.tsx`. Prioritize using/refining `InfoCard` as it seems closer to the desired Wolt merchant style (image on top, text below).
    *   `[ ]` Deprecate or refactor `FeatureCard` if its style (used on the homepage black section) is not desired. If kept, ensure its styling is consistent.
    *   `[ ]` **Crucially:** Update `InfoCard` (or the chosen card component) to precisely mimic the Wolt reference:
        *   `[ ]` Image placed cleanly *at the top* within the card's padding.
        *   `[ ]` Title and description below the image.
        *   `[ ]` Rounded corners (`rounded-xl` seems present).
        *   `[ ]` Subtle hover effect (slight scale/shadow change).
        *   `[ ]` Optional link/button at the bottom.
*   **Task:** **Implement Wolt-Style File Cards Across the Site:**
    *   `[ ]` **Homepage:** Replace the initial three links (`Overpriced`, `Exploitation`, `Hurting Local Restaurants`) with the new `InfoCard` component, using appropriate images and linking to the respective pages.
    *   `[ ]` **Homepage:** Redesign the "The Real Wolt Experience" section. Instead of using `FeatureCard`s with dark backgrounds, use the `InfoCard` component for each point (Hidden Costs, Unfair Pricing, Hurting Restaurants, Worker Exploitation, Cancel Wolt, Better Alternatives), populated from `featureData.ts`. Ensure images from `featureData.ts` are used *within* these cards.
    *   `[ ]` **Subpages (`/pricing`, `/workers`, `/restaurants`):** Remove images currently placed in `PageHero` components.
    *   `[ ]` **Subpages:** Remove large, standalone images placed randomly within `ContentSection`s (e.g., the crying chef, the hidden cost image).
    *   `[ ]` **Subpages:** Where appropriate (e.g., illustrating key concepts), use the `InfoCard` component *within* the content flow, potentially in a grid (`InfoCardGrid.tsx`), to present information visually with associated images. Images should *only* appear inside these cards, not floating in the text.
*   **Task:** **Improve Content Section Layout (`src/components/ContentSection.tsx`):**
    *   `[ ]` Review the logic for `imagePosition`. Ensure text (`prose` container) and image columns align correctly and look balanced on different screen sizes.
    *   `[ ]` Ensure adequate spacing within sections.
    *   `[ ]` Remove the erroneous vertical bar identified in the video (likely a CSS artifact or misplaced element on the specific page, check `/pricing` or `/workers`).
*   **Task:** **Refine Image Handling (`src/components/ImageContainer.tsx`):**
    *   `[ ]` Address the CSS comments regarding `next/image` fill/height issues. Ensure `ImageContainer` reliably prevents layout shifts and displays images correctly within cards and other contexts. Test thoroughly.
    *   `[ ]` Ensure `priority` prop is used correctly for Above-The-Fold (ATF) images (e.g., in `PageHero`).
*   **Task:** **Restyle Comparison Tables (`src/components/ComparisonTable.tsx`):**
    *   `[ ]` Apply modern table styling. The current look is very basic.
    *   `[ ]` Use subtle background colors, proper padding, and clear typography.
    *   `[ ]` Ensure highlighting (`woltHighlight`, etc.) is visually clear but not jarring. Use the defined color schemes (`fees`, `workers`) effectively.
    *   `[ ]` Improve responsiveness for smaller screens (consider horizontal scrolling or card-based layout).

### **Phase 4: Pledge Flow & Call to Action**

*   **Task:** **Make Pledge Prominent:**
    *   `[ ]` Add a clear "Sign the Pledge" button (using `WoltButton`) in the main site `Header`.
    *   `[ ]` Ensure the `/pledge` page itself is visually engaging and prioritizes the form.
    *   `[ ]` Consider adding a persistent "Sign the Pledge" CTA in the footer or as a sticky element.
*   **Task:** **Improve Pledge Form Layout (`src/app/pledge/page.tsx`, `src/components/PledgeForm.tsx`):**
    *   `[ ]` Prevent the form from stretching full-width on large screens. Contain it within a reasonable max-width (e.g., `max-w-md` or `max-w-lg`).
    *   `[ ]` Ensure form elements (`wolt-input`, `wolt-label`) are styled consistently with the design system.
    *   `[ ]` Verify the success/error message display is clear and well-styled.
    *   `[ ]` Review the dev mode verification URL display – ensure it's only visible when `NEXT_PUBLIC_DEV_MODE=true`.

### **Phase 5: Backend & Code Quality**

*   **Task:** **Review Supabase Schema:**
    *   `[ ]` Compare `supabase/pledges_schema.sql` and `supabase/schema.sql`.
    *   `[ ]` Consolidate into a single, correct schema file (`pledges_schema.sql` seems more complete). Delete the redundant file.
    *   `[ ]` Verify the schema (`pledges` table columns, functions `get_verified_pledge_count`, `verify_pledge`) aligns with the implementation in `src/lib/supabase.ts`.
*   **Task:** **Code Cleanup & Consistency:**
    *   `[ ]` Run `eslint` and `prettier` to ensure code style consistency.
    *   `[ ]` Review component props for consistency and clarity.
    *   `[ ]` Check for any unused code or components.
    *   `[ ]` Ensure error handling in API routes (`api/pledge`, `api/verify`) is robust.

### **Phase 6: Testing & Deployment**

*   **Task:** **Cross-Browser/Device Testing:**
    *   `[ ]` Test the redesigned site on major browsers (Chrome, Firefox, Safari, Edge).
    *   `[ ]` Test thoroughly on different screen sizes (desktop, tablet, mobile).
    *   `[ ]` Verify interactive elements (buttons, forms, dropdowns) work correctly on touch devices.
*   **Task:** **Review Deployment:**
    *   `[ ]` Ensure all necessary environment variables are set in Vercel for production.
    *   `[ ]` Verify production build completes without errors.

---