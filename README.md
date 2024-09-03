This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Product Listing App

This is a product listing application built with [Next.js 13](https://nextjs.org/) that showcases CRUD (Create, Read, Update, Delete) functionalities. The app allows users to create, view, update, and delete product listings.

## Features

- **Add Products:** Create new product listings with details such as name, description, price, and image.
- **View Products:** Display a list of all products.
- **Update Products:** Edit existing product details.
- **Delete Products:** Remove product listings from the app.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Technologies Used

- [Next.js 13](https://nextjs.org/) - React framework with a focus on server-rendering and static site generation.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling.
- [Vercel](https://vercel.com/) - Deployment platform for serverless applications.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 18.x)
- npm (>= 8.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/nextjs-product-listing-app.git
    cd nextjs-product-listing-app
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Create a Product**: Click on the "Add Product" button and fill in the product details.
2. **View Products**: Navigate through the list of products on the homepage.
3. **Update a Product**: Click on the "Edit" button next to a product to update its details.
4. **Delete a Product**: Click on the "Delete" button next to a product to remove it.

## Project Structure

```markdown
.
├── public          # Static files (e.g., images, fonts)
├── src             
│   ├── app         # Next.js app directory (routes, pages, and layout)
│       ├── components  # React components
│       └── products
│       └── utils       # Utility functions
└── README.md       # Project documentation


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying the content of  `src/app`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
