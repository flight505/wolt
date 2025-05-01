Okay, understood. Let's integrate the detailed descriptions for all relevant phases into the complete checklist. This will provide the AI coding assistant with the necessary specifics for each task.

---

## Cancel Wolt Website - Redesign & Refinement Checklist (Comprehensive & Detailed)

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
    *   `[x]` Ensure all components consistently use the CSS variables defined in `wolt-design-system.css` (e.g., `--wolt-cyan`, `--wolt-navy`, `--wolt-gray-X00`, etc.) for colors.
    *   `[x]` Remove or deprecate direct color definitions in `tailwind.config.ts` (like `wolt.blue`) if they conflict with the CSS variables. Use the RGBA definitions in Tailwind for applying opacity (e.g., `bg-wolt-cyan/90`).
    *   `[x]` Verify dark mode colors defined via CSS variables provide good contrast ratios (minimum 4.5:1 for normal text) and maintain the desired visual hierarchy.
*   **Task:** **Standardize Typography:**
    *   `[ ]` Ensure the Omnes font (`font-omnes` in Tailwind config, loaded via `OmnesFontLoader.tsx`) is correctly applied to headings (`h1`-`h4`), hero titles, button text, and other prominent elements, mirroring Wolt's branding.
    *   `[ ]` Verify body text (`p`, `li`, table cells) correctly uses the specified fallback font (Inter or sans-serif defined in Tailwind).
    *   `[ ]` Review font sizes and weights defined in `wolt-design-system.css` (e.g., `--font-size-xl`, `--font-weight-bold`) and ensure they are applied consistently via utility classes or component styles across the site.
    *   `[ ]` Improve text readability: Apply `max-w-prose` (or similar max-width constraint like `max-w-3xl`) to containers holding long-form text within `ContentSection` or other page areas to prevent lines from becoming too wide. Ensure adequate line-height (e.g., `leading-relaxed`).
*   **Task:** **Review Base Layout & Providers:**
    *   `[x]` Check `src/app/layout.tsx` for correct structure (`Header`, `main`, `Footer`).
    *   `[x]` Ensure `main#main-content` has sufficient top padding (e.g., `pt-20` or dynamic padding based on header height) to prevent content from being hidden behind the fixed header initially.
    *   `[x]` Verify `ThemeProvider` and `LanguageProvider` correctly wrap the `{children}` in `layout.tsx` to provide context globally.

### **Phase 2: Header & Footer Refinement**

*   **Task:** **Redesign Header Component (`src/components/Header.tsx`):**
    *   `[x]` **Layout:** Implement a clean horizontal layout using Flexbox or Grid within the container.
        *   `[x]` Left Section: Logo ('Cancel Wolt' text or a simple parody logo).
        *   `[x]` Center/Left Section: Navigation links (`Home`, `About`, `Pricing`, etc.). Use `hidden md:flex` to hide on mobile. Ensure clean spacing between links (`space-x-6` or `space-x-8`).
        *   `[x]` Right Section: Group action icons (Pledge Button, Theme Toggle, Language Switcher, Mobile Menu Toggle). Use `flex items-center space-x-4`.
    *   `[x]` **Background & Scroll Behavior:**
        *   `[x]` Initial State (Top): `bg-transparent`. Text/icons should be light (e.g., `text-white`, `text-white/80`).
        *   `[x]` Scrolled State (>10px): Add classes dynamically via `isScrolled` state: `bg-white/90 dark:bg-gray-800/90` (or `dark:bg-wolt-navy-light/90`), `backdrop-blur-md`, `shadow-md`. Text/icons should adapt (e.g., `text-gray-900 dark:text-white`, `text-gray-700 dark:text-gray-200`). Use smooth CSS transitions (`transition-all duration-300 ease-in-out`).
    *   `[x]` **Logo:** Style the "Cancel Wolt" `Link` with `font-bold`, `text-xl` or `text-2xl`. Color should adapt based on scroll state (e.g., `text-white` initially, `text-wolt-cyan dark:text-wolt-light` when scrolled).
    *   `[x]` **Navigation Links:**
        *   `[x]` Font: Use `font-medium` weight.
        *   `[x]` Hover State: Change text color (e.g., `hover:text-wolt-blue dark:hover:text-wolt-light` when scrolled, `hover:text-white` when transparent) or add a subtle underline. Apply `transition-colors`.
        *   `[x]` Color Adaptation: Ensure `linkColorClass` logic correctly sets text color based on `isScrolled`.
    *   `[x]` **Action Icons (Theme, Language, Pledge):**
        *   `[x]` **Theme Toggle:** Use simple, clean Sun/Moon SVGs. Ensure button has clear `aria-label`. Apply consistent hover effect (e.g., slight background change or color shift).
        *   `[x]` **Language Switcher:** Replace current implementation.
            *   `[x]` Trigger: Use Flag Icon + Language Code (e.g., `<span>🇬🇧 EN</span>`).
            *   `[x]` Dropdown (`motion.div`): Style with `bg-white dark:bg-gray-800`, `rounded-md`, `shadow-lg`. List options (`🇬🇧 English`, `🇩🇰 Dansk`) vertically with padding (`px-4 py-2`). Highlight active language (e.g., `bg-gray-100 dark:bg-gray-700 font-medium`). Ensure clean hover states on options. Position below the trigger using `absolute top-full right-0 mt-2`. Implement click-outside-to-close logic (already present, verify).
        *   `[x]` **Pledge Button:** Add a new `<WoltButton>` component instance here. Style: `variant="primary"` (or `secondary` if primary conflicts), `size="small"` or `medium`. Text: "Sign the Pledge" / Translate. Make it clearly visible.
    *   `[x]` **Responsiveness (Mobile):**
        *   `[x]` Mobile Menu Toggle: Use the existing hamburger SVG button (`md:hidden`). Add `onClick` handler to toggle mobile menu state.
        *   `[x]` Mobile Menu Panel: Create a new component (e.g., `MobileMenu.tsx`) rendered conditionally. Use `motion.div` for smooth slide-in/fade-in animation. Style with appropriate background (matching scrolled header). List nav links vertically. Include Theme and Language switchers within this panel. Add a close button.

*   **Task:** **Review Footer Component (`src/components/Footer.tsx`):**
    *   `[x]` **Layout:** Ensure the 3-column grid (`grid-cols-1 md:grid-cols-3`) adapts well on all screen sizes. Check alignment and spacing (`gap-8`).
    *   `[x]` **Styling:** Verify text colors (`text-gray-600 dark:text-gray-300`), link colors (`hover:text-wolt-blue dark:hover:text-wolt-light`), and font sizes/weights are consistent with the overall design system.
    *   `[x]` **Links:** Test all footer links (`/about`, `/privacy`, `/contact`, external links) to ensure they work correctly.

### **Phase 3: Core Component Overhaul (File Cards & Content Display)**

*   **Task:** **Consolidate/Refine Card Components:**
    *   `[x]` **Confirm Target Component:** Standardize on using `InfoCard.tsx` for displaying features/items with an image and text, mimicking the Wolt merchant card style.
    *   `[x]` **Deprecate `FeatureCard`:** Remove `FeatureCard.tsx` and its usage from `src/app/page.tsx` ("Real Wolt Experience" section). Refactor `featureData.ts` if necessary or adapt `InfoCard` to handle its data structure.

*   **Task:** **Define and Implement Precise `InfoCard` Style (Based on Wolt Reference):**
    *   `[x]` **Overall Structure:** `WoltCard` > `div (Image Area)` > `div (Text Area)`.
    *   `[x]` **Card Container (`WoltCard`):**
        *   `[x]` Apply `bg-white dark:bg-gray-800`, `rounded-xl`, `shadow-md`, `border border-gray-200 dark:border-gray-700`, `overflow-hidden`.
        *   `[x]` Hover Effect (`interactive={true}`): Add `hover:shadow-lg`, `hover:-translate-y-1`, `transition-all duration-200`.
    *   `[x]` **Image Area (Top):**
        *   `[x]` Container Div: Add `px-6 pt-6`. (This provides padding around the image).
        *   `[x]` `ImageContainer`: Use `height={180}` (or adjust for aspect ratio), `className="mx-auto"` (if needed for centering), ensure image inside uses `object-contain`. Ensure `priority` prop is used judiciously.
    *   `[x]` **Text Area (Bottom):**
        *   `[x]` Container Div: Add `p-6 pt-4`. Add `flex flex-col flex-grow` if used in a grid to ensure consistent card height and bottom-alignment of links.
        *   `[x]` Title (`h3`): Apply `font-omnes font-bold text-xl mb-3 text-gray-900 dark:text-white`.
        *   `[x]` Description (`p`): Apply `text-base text-gray-700 dark:text-gray-300`. Add `flex-grow` if needed for grid alignment.
        *   `[x]` Link (Optional): Apply `mt-4 pt-2`. Style link: `text-[--wolt-cyan] hover:text-[--wolt-cyan-light] font-medium inline-flex items-center`. Add SVG arrow icon.

*   **Task:** **Implement `InfoCard` for Homepage Feature Display:**
    *   `[x]` **"Why Cancel Wolt?" Section:** Remove the three plain links under the title.
    *   `[x]` Replace with `<InfoCardGrid columns={3}>`. Populate with the first 3 items (Pricing, Workers, Restaurants), using appropriate images (e.g., `unfair_pricing.png`, `fair_pay_for_workers.png`, `hurting_restaurants.png`) inside each `InfoCard`. Link each card to the respective page (`/pricing`, `/workers`, `/restaurants`).
    *   `[x]` **"Real Wolt Experience" Section:**
        *   `[x]` Remove the black background (`bg-black`) and the `FeatureCardGrid` component.
        *   `[x]` Replace with a new section (e.g., `bg-gray-100 dark:bg-gray-800`) containing an `InfoCardGrid` (likely `columns={3}`).
        *   `[x]` Populate this grid with the six items from `featureData.ts` (`hidden_cost.png`, `unfair_pricing.png`, etc.). Ensure images are displayed *inside* each `InfoCard`. Link each card appropriately (some link to `/pricing`, `/workers`, `/restaurants`, `/pledge`, `/alternatives`).

*   **Task:** **Refactor Content Pages (`/pricing`, `/workers`, `/restaurants`):**
    *   `[ ]` **Remove Standalone Images:** Search and remove `ImageContainer` or `<img>` tags used directly within `ContentSection` components on these pages.
    *   `[ ]` **Remove `imageUrl` Prop Usage from `ContentSection`:** Modify `ContentSection.tsx` to remove `imageUrl`, `imageAlt`, `imagePosition` props and related logic, as images will now be inside `InfoCard`s.
    *   `[ ]` **Integrate `InfoCard`s:** Identify key points in the text (e.g., "Commission Squeeze", "Dependence Trap", "Partners Without Protections", "Low Earnings"). Create data objects (similar to `featureData.ts` or `merchantCardData.ts`) for these points, assigning the previously removed images.
    *   `[ ]` Use `InfoCardGrid` (with 1, 2, or 3 columns as appropriate) or single `InfoCard`s placed strategically within the content flow (e.g., after a paragraph introducing the concept) to display these points with their associated images.
    *   `[ ]` **Ensure Text Flow:** Read through the modified pages to ensure text flows logically around the new card elements. Adjust surrounding text or `ContentSection` breaks as needed.

*   **Task:** **Improve Content Section Layout (`src/components/ContentSection.tsx`):**
    *   `[ ]` Since image props are removed, simplify the internal layout to just handle the text content (`prose` container). Ensure it's centered or constrained appropriately (`max-w-4xl mx-auto` or similar).
    *   `[ ]` Verify background color classes (`wolt-content-section-light`, `wolt-content-section-dark`) are applied correctly.
    *   `[ ]` Specifically investigate `/pricing` or `/workers` pages to find and remove the cause of the vertical bar artifact seen in the video. Check for stray `border` classes or layout issues.

*   **Task:** **Refine Image Handling (`src/components/ImageContainer.tsx`):**
    *   `[ ]` Double-check the CSS targeting `img[data-nimg="fill"]` in `wolt-design-system.css` (lines 291-314). Ensure the `min-height` rules are appropriate and don't cause unexpected layout issues now that images are primarily inside cards. Consider making height more flexible or controlled by the `InfoCard` props.
    *   `[ ]` Ensure images within `InfoCard`s load efficiently (correct `sizes` attribute, potentially remove `priority` unless the card is ATF).

*   **Task:** **Restyle Comparison Tables (`src/components/ComparisonTable.tsx`):**
    *   `[ ]` **Visual Appearance:** Apply `border-collapse: collapse; width: 100%;`. Use `border-b border-gray-200 dark:border-gray-700` for subtle row separation. Apply alternating row backgrounds: `tbody tr:nth-child(even) { @apply bg-gray-50 dark:bg-gray-800; }`.
    *   `[ ]` **Header Row (`thead tr`):** Apply `bg-gray-100 dark:bg-gray-800 text-left`. Header cells (`th`): Apply `px-4 py-3 font-semibold text-gray-700 dark:text-gray-300`. Center-align headers for data columns (`text-center`).
    *   `[ ]` **Cell Padding (`td`):** Apply `px-4 py-3`.
    *   `[ ]` **Typography:** Use `text-sm` or `text-base`. Left-align first column (`text-left`), center-align others (`text-center`). Apply `font-medium` to the first column label.
    *   `[ ]` **Highlighting:** Verify the green/red/blue/yellow backgrounds applied by `getHighlightColor` are subtle (e.g., `bg-green-100 dark:bg-green-900`) and text contrast remains good.
    *   `[ ]` **Responsiveness:** Wrap the `<table>` in a `div` with `overflow-x-auto` to allow horizontal scrolling on small screens. Add a subtle shadow to the container if it scrolls to indicate more content.

### **Phase 4: Pledge Flow & Call to Action**

*   **Task:** **Make Pledge Prominent:**
    *   `[ ]` Add the "Sign the Pledge" `WoltButton` to the right side of the main site `Header` as described in Phase 2.
    *   `[ ]` **`/pledge` Page Design:** Ensure the page layout (`src/app/pledge/page.tsx`) clearly presents the "Why Your Pledge Matters" section alongside the `PledgeForm`. Use a two-column layout on wider screens (`md:grid-cols-5` seems okay, verify balance) and stack vertically on mobile. Make the form visually appealing and easy to use.
    *   `[ ]` Add a clear "Sign the Pledge" `WoltButton` CTA at the bottom of most content pages (e.g., `/pricing`, `/workers`, `/restaurants`, `/about`) linking to `/pledge`.
    *   `[ ]` Consider adding a CTA section in the `Footer`.
*   **Task:** **Improve Pledge Form Layout (`src/components/PledgeForm.tsx`):**
    *   `[ ]` Ensure the form container (`wolt-card`) does not stretch full-width. If used directly on `/pledge`, the page's column layout should handle this. If used elsewhere, apply `max-w-md` or similar.
    *   `[ ]` Style `wolt-label` and `wolt-input` according to the design system (check `wolt-design-system.css` - already defined, verify application). Ensure clear focus states (`focus:ring-wolt-blue focus:border-wolt-blue`).
    *   `[ ]` Style the success/error message boxes clearly (padding, background, border, icon).
    *   `[ ]` Dev Mode URL: Ensure the conditional rendering `verificationUrl && process.env.NODE_ENV !== 'production'` is correct (or use `NEXT_PUBLIC_DEV_MODE === 'true'` if that's the variable). Make the link easily clickable.

### **Phase 5: Backend & Code Quality**

*   **Task:** **Review Supabase Schema:**
    *   `[ ]` Delete the redundant `supabase/schema.sql` file. Keep `supabase/pledges_schema.sql` as the source of truth.
    *   `[ ]` Compare `supabase/pledges_schema.sql` with the table structure and functions expected/used in `src/lib/supabase.ts` (`pledges` table columns, `get_verified_pledge_count`, `verify_pledge`). Ensure they match exactly. Update the SQL or the TS types/functions if discrepancies exist. Pay attention to column names (e.g., `verification_token`, `ip_address`, `user_agent`, `locale`).
    *   `[ ]` Test the RLS policies defined in the SQL schema by making anonymous requests from the browser/client-side code to ensure data security.
*   **Task:** **Code Cleanup & Consistency:**
    *   `[ ]` Run `npm run lint -- --fix` and `npm run format`. Address any reported issues.
    *   `[ ]` Review props across all custom components (`WoltButton`, `InfoCard`, `ContentSection`, etc.) for consistent naming conventions and types.
    *   `[ ]` Search for and remove any commented-out or unused code blocks, variables, or imports.
    *   `[ ]` Check error handling in `src/app/api/pledge/route.ts` and `src/app/api/verify/route.ts` - ensure meaningful error messages are returned to the client (`NextResponse.json({ success: false, message: ... })`).

### **Phase 6: Testing & Deployment**

*   **Task:** **Cross-Browser/Device Testing:**
    *   `[ ]` Test core flows (navigation, viewing content pages, pledge submission/verification) on latest Chrome, Firefox, Safari (desktop & iOS), and Edge.
    *   `[ ]` Test layout integrity and readability on various screen sizes: large desktop, standard laptop, tablet (portrait/landscape), mobile (portrait/landscape). Pay close attention to grids (`InfoCardGrid`, `ComparisonTable` responsiveness), header layout, and text wrapping.
    *   `[ ]` Verify forms, buttons, language switcher dropdown, and mobile menu are easily usable via touch input.
*   **Task:** **Review Deployment:**
    *   `[ ]` Double-check that `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and potentially `ADMIN_EMAIL` and `NEXT_PUBLIC_DEV_MODE` (set to `false` for production) are correctly configured in Vercel environment variables for the production deployment.
    *   `[ ]` Trigger a production build and deployment on Vercel and monitor the build logs for errors. Test the deployed site.

---

This revised checklist incorporates the detailed styling and layout requirements for the critical components, providing a much clearer roadmap for the AI coding assistant.