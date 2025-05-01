# Cancel-Wolt: Design & Style Guide

This document provides a comprehensive guide for recreating Wolt's visual identity in our protest website. The goal is to maintain visual familiarity while presenting critical information about Wolt's business practices.

## 1. Color Palette

### Primary Colors
- **Wolt Blue:** `#009DE0` - The defining brand color, used for primary buttons, icons, and accents
- **White:** `#FFFFFF` - Used for text on dark backgrounds and card backgrounds
- **Black:** `#000000` - Used for dark backgrounds and some text elements

### Secondary Colors
- **Light Gray:** `#F5F5F5` - Used for alternate section backgrounds
- **Dark Gray:** `#333333` - Used for body text
- **Error Red:** `#FF4444` - Used to highlight negative aspects of Wolt's practices
- **Success Green:** `#44CC88` - Used to highlight positive alternatives

## 2. Typography

### Font Families
- **Headings:** Omnes Bold - Used for all headings and large display text
- **Body:** Inter - Used for body text and UI elements

### Font Sizes
- **Hero Headline:** 48px (mobile: 36px)
- **Section Headings:** 36px (mobile: 28px)
- **Subheadings:** 24px (mobile: 20px)
- **Body Text:** 16px (mobile: 16px)
- **Small Text/Captions:** 14px (mobile: 14px)

### Font Weights
- **Headings:** Bold (700)
- **Subheadings:** SemiBold (600)
- **Body:** Regular (400)
- **Emphasized text:** Medium (500)

## 3. Components

### Buttons
- **Primary Button:** Wolt Blue background (#009DE0), white text, fully rounded corners (8px radius), padding 12px 24px
- **Secondary Button:** White background, Wolt Blue text and border, same rounding and padding
- **Hover states:** Slight darkening (10%) of the background color, with a subtle scale transform (1.02)

### Cards
- White background
- Light shadow: `0 4px 6px rgba(0, 0, 0, 0.05)`
- Rounded corners (12px radius)
- Padding: 24px
- Optional Wolt Blue accent (top border or icon)

### Icons
- Circular background in Wolt Blue (#009DE0)
- White icon within the circle
- Simple, minimal line-style icons
- Size: 48px diameter for feature highlighting, 24px for UI elements

### Statistics Display
- Large numbers in Omnes Bold (48px+)
- Smaller label text underneath
- Often displayed in groups of 3-4 across the page
- Each statistic accompanied by a circular icon

## 4. Layout & Spacing

### Grid System
- 12-column grid for desktop
- 4-column grid for mobile
- Gutter: 24px (desktop), 16px (mobile)

### Section Spacing
- Vertical spacing between sections: 80px (desktop), 60px (mobile)
- Section padding: 80px 0 (desktop), 60px 0 (mobile)

### Content Width
- Maximum content width: 1200px
- Edge padding: 24px (desktop), 16px (mobile)

## 5. UI Patterns

### Hero Sections
- Dark background (black or very dark blue)
- Large headline in Omnes Bold
- Short, impactful subtitle
- Primary CTA button
- Full-width design with centered text

### Content Sections
- Alternating background colors (white and light gray)
- Consistent width content container
- Section heading at the top, centered
- Content follows in a clean, readable layout

### Navigation
- Simple horizontal navigation
- Wolt Blue highlight for active page
- Mobile: Hamburger menu with slide-in panel

## 6. Illustrations & Imagery

### Style
- Simplified, cartoon-like illustrations
- Flat design with minimal shading
- Limited color palette with Wolt Blue as a prominent color
- Rounded edges and friendly appearance

### Usage
- Hero backgrounds
- Section accents
- Feature explanations
- Statistical representation

## 7. Animations & Interactions

### Page Transitions
- Subtle fade-in effects when loading new pages
- Smooth scrolling for in-page navigation

### Content Animations
- Elements fade and slide up as they enter the viewport
- Statistics counters animate from 0 to their final value
- Subtle hover effects on interactive elements

### Button States
- Hover: Scale slightly (1.02) and lighten/darken
- Active: Scale down slightly (0.98)
- Focus: Visible outline for accessibility

## 8. Responsive Design

### Breakpoints
- Mobile: 0-639px
- Tablet: 640px-1023px
- Desktop: 1024px+

### Mobile Adaptations
- Stacked layout instead of side-by-side content
- Simplified navigation via hamburger menu
- Larger touch targets for buttons (min 44px height)
- Reduced horizontal padding
- Simplified statistics display

## 9. Accessibility Considerations

While mimicking Wolt's style, we must ensure:
- Color contrast meets WCAG 2.1 AA standard (4.5:1 for normal text)
- Interactive elements are keyboard accessible
- Focus states are clearly visible
- Text remains readable at various sizes
- Alt text for all images and icons

## 10. Implementation Notes

- Use Tailwind CSS with extended theme configuration
- Set up font loading optimization for Omnes and Inter
- Create reusable React components for buttons, cards, and icons
- Use Framer Motion for animations
- Implement dark mode variations of all components 