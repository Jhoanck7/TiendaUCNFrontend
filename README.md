# TiendaUCN Frontend

A modern web interface for the e-commerce platform of the **Universidad Católica del Norte (UCN)**.  
Built with **Next.js 14**, this frontend provides a fast, secure, and optimized user experience for product browsing, shopping cart management, authentication, and basic user operations.

---

## Features

### Core Functionality
- **Product Catalog**: Product listing, search, filtering, and detailed views.
- **Shopping Cart**: Full cart management with persistent state.
- **User Authentication**: Login, registration, and session handling.
- **Checkout Flow**: Prepared to integrate with the backend order system.
- **Modern & Responsive UI**: Clean, fast, and optimized for both desktop and mobile.

### Technical Features
- **Next.js App Router**: Modern architecture using the `/app` directory.
- **TypeScript** for static typing and increased robustness.
- **Centralized API Service Layer** located in `/services`.
- **State Management** with a dedicated store for cart and products.
- **Middleware** for route protection through authentication.
- **Optimized assets** including images, fonts, and caching provided by Next.js.
- **Direct connectivity with the TiendaUCN Backend API** (ASP.NET Core).

---

## Technology Stack

| Category          | Technology           |
|------------------|----------------------|
| Framework        | Next.js 14           |
| Language         | TypeScript           |
| Styling          | CSS modules + Next.js optimizations |
| State Management | Custom store (Cart + Products) |
| API Layer        | Services using fetch + token handling |
| Authentication   | Middleware + JWT from backend |
| Build            | Vercel / Node.js     |

---

## Project Structure
```
TiendaUCNFrontend/ 
├── app/ # App Router pages and UI components
│ ├── products/ # Product list and detail pages 
│ ├── cart/ # Shopping cart page 
│ └── ... # Other public/private routes 
│ 
├── lib/ # Shared utilities and helpers 
│
├── services/ # Backend API communication layer
│ ├── products.service.ts # Product CRUD and fetching
│ ├── auth.service.ts # Login and registration
│ └── ... # Additional services 
│
├── store/ # Global application state (cart, products, etc.)
│
├── public/ # Images and public assets
│
├── middleware.ts # Route protection via JWT validation
├── next.config.ts # Next.js configuration file
└── package.json
```

---
```
## Getting Started

### Prerequisites
- Node.js 18+
- npm, pnpm, yarn, or bun (any package manager works)

### Installation
bash
git clone <repository-url>
cd TiendaUCNFrontend
npm install
```
## Development Mode
  npm run dev

The app will be available at:
  http://localhost:3000

## Backend Connection
This frontend is designed to connect to the TiendaUCN Backend API (ASP.NET Core).
Configure the API URL in your environment variables:
  .env.local
    NEXT_PUBLIC_API_URL=http://localhost:5001/api

## Development
### Useful Scripts
| Script          | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run start` | Runs the production build     |
| `npm run lint`  | Runs the code linter          |

### Testing
(If tests are added later)
You may include Jest, Playwright, or other testing frameworks.
Deployment
### Deploy on Vercel
Recommended due to native compatibility with Next.js.

## teps:
  1. Push your repository to GitHub
  
  2. Import the repo into Vercel
  
  3. Set environment variables:
  
      NEXT_PUBLIC_API_URL=https://<your-backend-url>/api
      
  4. Deployment will occur automatically.

## Contributing
  - Fork the repository
  - Create a feature branch
  - Implement your changes
  - Submit a Pull Request
  - Wait for review

## License
This project is licensed under the MIT License, same as the backend.

## Support
For support and questions, please open an issue in the repository or contact the development team.


