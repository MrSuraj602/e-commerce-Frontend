# E-Commerce Frontend

The existing React storefront includes customer authentication, catalog browsing, cart, checkout, payment return, order history, and an administrator panel.

## Stack

- React 19 and Vite 8
- React Router 7
- Redux 5 with Redux Thunk
- Axios, Material UI, Tailwind CSS, Headless UI, and Heroicons

## Install And Run

```powershell
npm install
npm run dev
```

Production build and lint commands:

```powershell
npm run build
npm run lint
```

## API Configuration

`src/config/apiConfig.js` reads `VITE_API_BASE_URL`. Leave it unset for local development: Vite proxies `/api` and `/auth` to `http://localhost:8080`. For a separately hosted API, set `VITE_API_BASE_URL` to its origin in the frontend environment. Do not put credentials or JWT secrets in frontend environment variables.

## Customer Flow

Customers register or sign in through the existing auth modal. The JWT is sent by the shared Axios client for protected requests. Catalog, cart, checkout, payment return, profile, and order pages continue to use the existing route and Redux structure. The order list fetches `GET /api/orders/user`; order details fetches `GET /api/orders/{id}` each time it opens, so administrator status changes appear on the next fetch or refresh.

## Admin Flow

An authenticated `ADMIN` account is routed to `/admin`. Admin routes fetch the current profile and reject users without the `ADMIN` role; the backend independently enforces `ROLE_ADMIN` for `/api/admin/**`.

The admin navigation contains Dashboard, Products, and Orders. Product management uses the existing backend create/update/delete APIs. Order management views the current order list and uses the backend's existing confirm, ship, deliver, and cancel operations.

Order status values come from the backend lifecycle: `PENDING`, `PLACED`, `CONFIRMED`, `SHIPPED`, `DELIVERED`, and `CANCELLED`. The customer order list and details display the latest status returned by the API; no real-time connection is used.

## Source Layout

- `src/customer/`: customer pages, auth, and storefront components
- `src/admin/`: protected admin guard, layout, dashboard, and management pages
- `src/State/`: Redux actions and reducers for auth, products, cart, and orders
- `src/Routers/`: customer route composition
- `src/config/`: Axios client and API base URL
- `src/App.jsx`: top-level customer/admin route selection

The backend URL and administrator role are configured on the backend. New signups are always customers; an administrator role must be provisioned by a trusted backend operator.