# Murb-Merch Project Structure & File Documentation

A comprehensive guide to every file and folder in the Murb e-commerce application.

---

## 📁 Root Directory

| File | Description |
|------|-------------|
| `index.html` | Entry HTML file with app mount point and meta tags |
| `package.json` | Project dependencies and npm scripts |
| `package-lock.json` | Locked dependency versions |
| `bun.lockb` | Bun package manager lock file |
| `vite.config.ts` | Vite build tool configuration |
| `tailwind.config.ts` | Tailwind CSS theme customization and design tokens |
| `postcss.config.js` | PostCSS plugins configuration |
| `tsconfig.json` | TypeScript base configuration |
| `tsconfig.app.json` | TypeScript config for the app source |
| `tsconfig.node.json` | TypeScript config for Node.js tooling |
| `eslint.config.js` | ESLint code linting rules |
| `components.json` | shadcn/ui component configuration |
| `README.md` | Project overview and setup instructions |
| `.gitignore` | Git ignored files list |

---

## 📁 /public

Static assets served directly (currently empty - assets are in `/src/assets`).

---

## 📁 /src

Main source code directory.

### Core Files

| File | Description |
|------|-------------|
| `main.tsx` | Application entry point, renders App to DOM |
| `App.tsx` | Root component with routing, providers (Theme, Cart, Query, Tooltip), and route definitions |
| `index.css` | Global styles, CSS variables, Tailwind directives, custom fonts (Gilroy/Poppins), animations |
| `vite-env.d.ts` | Vite TypeScript environment declarations |

---

## 📁 /src/pages

Page-level components (each represents a route).

| File | Route | Description |
|------|-------|-------------|
| `Index.tsx` | `/` | Homepage with Hero, Categories, Featured Products, Newsletter, Footer |
| `Shop.tsx` | `/shop` | Product listing page with all products displayed in a grid |
| `Product.tsx` | `/product/:id` | Individual product detail page with size/color selection and add-to-cart |
| `Cart.tsx` | `/cart` | Shopping cart with item list, quantity controls, and order summary |
| `Checkout.tsx` | `/checkout` | Checkout form with shipping, billing, and payment fields |
| `NotFound.tsx` | `*` | 404 error page for undefined routes |

---

## 📁 /src/components

Reusable UI components.

| File | Description |
|------|-------------|
| `Header.tsx` | Site header with logo, search bar, navigation, theme toggle, cart icon, mobile menu |
| `Hero.tsx` | Hero carousel with 5 slides, navigation arrows, dots, overlay text and CTA button |
| `Categories.tsx` | Sport category cards/grid for browsing by category |
| `FeaturedProducts.tsx` | Featured products showcase section with product cards |
| `Newsletter.tsx` | Email newsletter subscription form |
| `Footer.tsx` | Site footer with links, social icons, and copyright |
| `NavLink.tsx` | Styled navigation link component |

---

## 📁 /src/components/ui

shadcn/ui component library (49 components). Pre-built, accessible UI primitives:

| Component | Purpose |
|-----------|---------|
| `accordion.tsx` | Expandable/collapsible content sections |
| `alert-dialog.tsx` | Modal dialog for confirmations |
| `alert.tsx` | Alert/notification banners |
| `aspect-ratio.tsx` | Maintains aspect ratio for media |
| `avatar.tsx` | User avatar with image/fallback |
| `badge.tsx` | Small status/label badges |
| `breadcrumb.tsx` | Navigation breadcrumbs |
| `button.tsx` | Button variants (primary, secondary, ghost, etc.) |
| `calendar.tsx` | Date picker calendar |
| `card.tsx` | Card container with header, content, footer |
| `carousel.tsx` | Image/content carousel component |
| `chart.tsx` | Charting components (Recharts wrapper) |
| `checkbox.tsx` | Checkbox input |
| `collapsible.tsx` | Simple collapsible wrapper |
| `command.tsx` | Command palette/search component |
| `context-menu.tsx` | Right-click context menus |
| `dialog.tsx` | Modal dialog component |
| `drawer.tsx` | Slide-out drawer/panel |
| `dropdown-menu.tsx` | Dropdown menu component |
| `form.tsx` | Form wrapper with react-hook-form integration |
| `hover-card.tsx` | Popover on hover |
| `input-otp.tsx` | One-time password input |
| `input.tsx` | Text input field |
| `label.tsx` | Form label |
| `menubar.tsx` | Horizontal menu bar |
| `navigation-menu.tsx` | Navigation menu with dropdowns |
| `pagination.tsx` | Pagination controls |
| `popover.tsx` | Popover tooltip container |
| `progress.tsx` | Progress bar |
| `radio-group.tsx` | Radio button group |
| `resizable.tsx` | Resizable panel component |
| `scroll-area.tsx` | Custom scrollbar container |
| `select.tsx` | Dropdown select input |
| `separator.tsx` | Visual separator line |
| `sheet.tsx` | Slide-out sheet (drawer variant) |
| `sidebar.tsx` | Sidebar navigation component |
| `skeleton.tsx` | Loading skeleton placeholder |
| `slider.tsx` | Range slider input |
| `sonner.tsx` | Toast notifications (Sonner library) |
| `switch.tsx` | Toggle switch |
| `table.tsx` | Data table components |
| `tabs.tsx` | Tabbed interface |
| `textarea.tsx` | Multi-line text input |
| `toast.tsx` | Toast notification component |
| `toaster.tsx` | Toast container/provider |
| `toggle-group.tsx` | Group of toggle buttons |
| `toggle.tsx` | Toggle button |
| `tooltip.tsx` | Tooltip on hover |
| `use-toast.ts` | Re-export of toast hook |

---

## 📁 /src/contexts

React Context providers for global state.

| File | Description |
|------|-------------|
| `CartContext.tsx` | Shopping cart state: items, add/remove/update functions, total calculations |
| `ThemeContext.tsx` | Theme state: light/dark mode toggle, persists to localStorage |

---

## 📁 /src/data

Static data and data types.

| File | Description |
|------|-------------|
| `products.ts` | Product data array with 4 products (shoes, jacket, leggings, backpack), Product interface, `getProductById()` helper |

---

## 📁 /src/hooks

Custom React hooks.

| File | Description |
|------|-------------|
| `use-mobile.tsx` | Detects mobile viewport (screen width < 768px) |
| `use-toast.ts` | Toast notification hook for showing alerts/messages |

---

## 📁 /src/lib

Utility functions.

| File | Description |
|------|-------------|
| `utils.ts` | `cn()` utility for merging Tailwind classes (clsx + tailwind-merge) |

---

## 📁 /src/assets

Static assets imported into components.

| File | Description |
|------|-------------|
| `hero-athlete.jpg` | Hero section background image |
| `product-shoes.jpg` | Product image: Stealth Runner X shoes |
| `product-jacket.jpg` | Product image: Storm Track Jacket |
| `product-leggings.jpg` | Product image: Compression Pro leggings |
| `product-backpack.jpg` | Product image: Endurance Pack backpack |

---

## 📁 /src/assets/fonts
| File | Description |
| Gilroy | Gilroy locally installed |


## 🔧 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: React Router v6
- **State**: React Context (Cart, Theme)
- **UI Components**: shadcn/ui (Radix primitives)
- **Animations**: Framer Motion
- **Data Fetching**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Fonts**: Gilroy (headings), Poppins (body)

---

## 📍 Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Index | Homepage |
| `/shop` | Shop | Product listing |
| `/product/:id` | Product | Product details |
| `/cart` | Cart | Shopping cart |
| `/checkout` | Checkout | Checkout flow |
| `*` | NotFound | 404 page |
