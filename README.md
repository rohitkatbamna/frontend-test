# Frontend Test

**Live Demo:** [https://frontend-test-eight-indol.vercel.app/product-list](https://frontend-test-eight-indol.vercel.app/product-list)

A product management and gifting frontend application built with React, TypeScript, and Ant Design. It provides two core workflows: managing a product catalogue and sending items as gifts to recipients.

## Features

### Product List (`/product-list`)

- Browse all products in a searchable list with a pagination UI
- Filter by status — **All**, **Active**, or **Inactive** — with live counts
- Category dropdown present in the toolbar (currently shows "All Categories" only)
- Search products by name with instant filtering
- Add new products through a modal form:
  - General information: name, category, and price (stored); description and processing time fields are present in the form but not persisted
  - Product media: drag-and-drop image upload
- New products are dispatched to the Redux store and appear in the list immediately
- Delete products via the `deleteProduct` action

### Send Item (`/send-item`)

- Browse an item grid
- Search bar, sort control, and side filter panel are present in the UI
- Click an item card to open a details modal
- Send the item as a gift through a multi-step flow:
  1. **Item Details** — review the selected item
  2. **Send Gift** — fill in recipient details (name, email, company) and delivery address (line 1, line 2, country, zip, city, state)
  3. **Order Confirmation** — success modal on valid submission

### General

- Responsive layout: collapsible sidebar on desktop, drawer navigation on screens narrower than 992 px
- Consistent Ant Design component library throughout
- All product and item data is sourced from local mock files — no API calls are made

## Tech Stack

| Category         | Library                     |
| ---------------- | --------------------------- |
| Framework        | React 19                    |
| Language         | TypeScript 5.9              |
| Build Tool       | Vite 7                      |
| UI Library       | Ant Design 6                |
| State Management | Redux Toolkit + React-Redux |
| Routing          | React Router DOM 7          |
| Styling          | Plain CSS                   |
| Linting          | ESLint + typescript-eslint  |
| Formatting       | Prettier                    |

## Project Structure

```
src/
├── assets/             # Static assets and icon components
├── components/         # Shared layout components (Sidebar, PageFooter)
├── hooks/              # Typed Redux hooks (useAppDispatch, useAppSelector)
├── mock/               # Mock data for products and items
├── pages/
│   ├── ProductPage/    # Product list, add product modal, success modal
│   └── SendItemPage/   # Item grid, item details, send gift, order success
├── store/              # Redux store, productSlice, itemSlice
└── types/              # Shared TypeScript interfaces (Product, Item)
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173` with hot module replacement.

### Build

```bash
npm run build
```

Compiles TypeScript and outputs production assets to `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Format

```bash
# Check formatting
npm run format:check

# Apply formatting
npm run format
```
