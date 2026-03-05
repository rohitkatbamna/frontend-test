# Frontend Test

**Live Demo:** [https://frontend-test-eight-indol.vercel.app/product-list](https://frontend-test-eight-indol.vercel.app/product-list)

A product management and gifting frontend application built with React, TypeScript, and Ant Design. It provides two core workflows: managing a product catalogue and sending items as gifts to recipients.

## Features

### Product List (`/product-list`)

- Browse all products in a paginated, searchable list
- Filter by status — **All**, **Active**, or **Inactive** — with live counts
- Filter by category via dropdown
- Search products by name with instant filtering
- Add new products through a full-featured modal form:
  - General information: name, description, category, processing time, and price
  - Product media: drag-and-drop image upload
- Products are added to the global store and appear in the list immediately

### Send Item (`/send-item`)

- Browse an item grid with search and sort controls
- Side filter panel for refining the item list
- Click an item card to open a details modal
- Send the item as a gift through a multi-step flow:
  1. **Item Details** — review the selected item
  2. **Send Gift** — fill in recipient details (name, email, company) and delivery address (line 1, line 2, country, zip, city, state)
  3. **Order Confirmation** — success modal on valid submission

### General

- Responsive layout: collapsible sidebar on desktop, mobile-friendly drawer navigation on smaller screens
- Consistent Ant Design component library throughout

## Tech Stack

| Category         | Library                     |
| ---------------- | --------------------------- |
| Framework        | React 19                    |
| Language         | TypeScript 5.9              |
| Build Tool       | Vite 7                      |
| UI Library       | Ant Design 6                |
| State Management | Redux Toolkit + React-Redux |
| Routing          | React Router DOM 7          |
| HTTP Client      | Axios                       |
| Date Utility     | Day.js                      |
| Styling          | CSS Modules                 |
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
├── types/              # Shared TypeScript interfaces (Product, Item)
└── utils/              # Utility helpers (e.g. getScreenHeight)
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
