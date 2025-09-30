# MyHomePage — Modern React E-commerce Demo

---

## Overview

**MyHomePage** is a demo e-commerce website built with modern technologies:
- ⚡️ [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🔐 Firebase Auth (Email, Google)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Deployed on [Vercel](https://vercel.com/)

---

## Features

- Authentication: register, login (email, Google), password reset
- Product catalog: laptops, smartphones, accessories, special offers
- Beautiful alerts for errors and success
- Responsive design with Tailwind CSS
- Carousel (slider) for product images

---
## Quick Start

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Andreyka9999/WebApp.git
    cd WebApp
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Configure your environment variables** (if you want to use your own Firebase project):
    ```
    VITE_FIREBASE_API_KEY=...
    VITE_FIREBASE_AUTH_DOMAIN=...
    # ...other Firebase parameters
    ```

4. **Run the development server:**
    ```sh
    npm run dev
    ```

5. **Build for production:**
    ```sh
    npm run build
    ```

---
src/
assets/ # Logos and images
components/
auth/ # Auth screens (Login, Register, Reset Password)
ui/ # Reusable UI components (alert, carousel)
Header/ Footer/ # Navigation bar and footer
context/ # Auth context
firebase/ # Firebase config
pages/ # Catalog, Home, NotFound pages
lib/ # Utility functions (cn, etc)

---

## Deployment

This project is automatically deployed on Vercel when pushing to `main`.

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

---

## Author

- [Andreyka9999 on GitHub](https://github.com/Andreyka9999)

---

## License

This project is for educational/demo purposes only.
