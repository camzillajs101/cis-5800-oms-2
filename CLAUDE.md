# CLAUDE.md - CIS 5800 OMS Development Guide

## Project Overview
This is a capstone project building an **Online Order Management System (OMS)** / e-commerce store. The system serves both customers (storefront) and administrators (dashboard), with core features around product catalog, orders, and fulfillment.

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint 9+
- **Runtime**: Node.js 20+
- **Database**: Neon (PostgreSQL)
- **Deployment**: Vercel

## Development Guidelines

### Code Standards

#### Component Structure Patterns
- **React Server Components** (RSC): Use by default for data-heavy pages
- **Client Components**: Only when interactivity is required (mark with `"use client"`)
- **Naming**: PascalCase for components (e.g., `ProductCard.tsx`, `OrderForm.tsx`)
- **Location**:
  - UI components: `app/components/`
  - Page components: `app/[route]/page.tsx`
  - Shared utilities: `lib/`

**Example component structure:**
```tsx
// app/components/ProductCard.tsx
'use client';

import { Product } from '@/lib/types';

export default function ProductCard({ product }: { product: Product }) {
  return <div>{product.name}</div>;
}
```

#### API Routes & Conventions
- Route handlers: `app/api/[resource]/route.ts`
- RESTful naming: `/api/products`, `/api/orders`, `/api/users`
- Status codes: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error)
- Response format: Always return JSON with consistent shape

**Example API response:**
```json
{
  "success": true,
  "data": { /* resource */ },
  "error": null
}
```

#### Naming Conventions
- **Files**: kebab-case for routes and utilities (`product-service.ts`)
- **Components**: PascalCase (`OrderForm.tsx`)
- **Functions**: camelCase (`fetchOrders()`, `calculateTotal()`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS_PER_PAGE`)
- **Types/Interfaces**: PascalCase (`Product`, `Order`)

### Coding Practices
- Use TypeScript strict mode (required)
- Implement proper error handling in API routes
- Avoid prop drilling; consider context or composition for shared state
- Keep components focused and single-purpose
- Document complex logic with comments

## Architecture

### Database Schema & Relationships
The system uses the following core entities:

**Customers**
- customer_id (PK), first_name, last_name, email, password_hash, phone, is_admin
- created_at, updated_at

**Addresses**
- address_id (PK), customer_id (FK), street1, street2, city, state, zip_code

**Products**
- product_id (PK), name, description, category_id (FK), brand, base_price
- created_at

**Categories**
- category_id (PK), name, parent_category_id (FK) — supports hierarchical categories

**Product Variants**
- variant_id (PK), product_id (FK), size, color, sku, quantity_available
- updated_at

**Orders**
- order_id (PK), customer_id (FK), status (pending|confirmed|shipped|delivered), total_amount
- shipping_address_id (FK), billing_address_id (FK)
- created_at, updated_at

**Order Items**
- order_item_id (PK), order_id (FK), variant_id (FK), quantity_ordered, quantity_confirmed
- unit_price

**Shipments**
- shipment_id (PK), order_id (FK), shipment_date, carrier, tracking_number
- status (pending|in_transit|delivered), estimated_delivery

**Key Relationships**
- Customers → Addresses: one-to-many (customer has multiple addresses)
- Customers → Orders: one-to-many (customer places multiple orders)
- Categories → Products: one-to-many with hierarchy support (via parent_category_id)
- Products → Product Variants: one-to-many (product has multiple SKU variants)
- Orders → Order Items: one-to-many (order contains multiple items)
- Order Items → Product Variants: many-to-one (item references specific variant)
- Orders → Shipments: one-to-many (order can have multiple shipments)
- Orders → Addresses: many-to-one (references shipping and billing addresses)

### Authentication & Security
- **Database**: Neon PostgreSQL for all data persistence and user management
- **Session management**: Use Neon for user sessions and authentication state
- **Password hashing**: Never store plaintext passwords; use bcrypt or similar
- **Authorization**: Implement role-based access control (RBAC) for admin vs. customer
- **API security**: Validate and sanitize all inputs
- **Environment variables**: Store secrets in `.env.local` (never commit); configure Neon connection strings in Vercel environment settings

### UI/Component Organization

#### Storefront (Customer-facing)
- Product listing & search
- Product detail pages
- Shopping cart
- Checkout flow
- Order history/tracking
- User account management

#### Admin Dashboard
- Product management (CRUD)
- Order management and fulfillment
- User management
- Inventory tracking
- Analytics/reports (optional)

**Dashboard structure:**
```
app/
├── admin/
│   ├── layout.tsx
│   ├── page.tsx (dashboard home)
│   ├── products/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── orders/
│   │   └── page.tsx
│   └── users/
│       └── page.tsx
```

## Team Workflow

### Branching Strategy
- `main`: Production-ready code
- `develop`: Integration branch
- Feature branches: `feat/[feature-name]` from `develop`
- Bug fixes: `fix/[issue-name]` from `develop`

### PR Checklist
- [ ] Code follows established conventions
- [ ] TypeScript types are properly defined
- [ ] API responses follow standard format
- [ ] Tests included (if applicable)
- [ ] No hardcoded secrets or sensitive data
- [ ] PR description explains the "why" and "what"

### Code Review Focus Areas
1. Component reusability and structure
2. Type safety and proper typing
3. Error handling and edge cases
4. Security (no XSS, CSRF, injection vulnerabilities)
5. Performance (avoid N+1 queries, proper memoization)

## Getting Started

### Local Development
```bash
npm install
npm run dev
```
App runs at `http://localhost:3000`

### Building for Production
```bash
npm run build
npm run start
```

## Useful Commands
- `npm run dev`: Start dev server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Auto-fix linting issues

## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---
*Last updated: April 2026*
