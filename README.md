# The Searchers Podcast Network Website

## Overview

This project is a full-stack web application for "The Searchers Podcast Network," a professional podcast studio and production service based in Brisbane, Australia. The website is designed to serve as a showcase of software development competency, demonstrating proficiency across a modern technology stack for a real-world business application.

Here's a glimpse of the professional landing page:
![The Searchers Podcast Network Landing Page]([https://github.com/atemmalaat/podcast-agency-landing-page/src/assets/landing-page.png?raw=true](https://raw.githubusercontent.com/atemmalaat/Podcast-Agency-Landing-Page/refs/heads/main/src/assets/landing-page2.png?token=GHSAT0AAAAAADJPAT3EFYIW2AVJZYJ6XXXC2F6GVAA))

## Project Goals

The primary goal of this project is to provide a compelling portfolio piece for recruiters and tech lead specialists. It showcases a strong understanding of the entire development lifecycle, from front-end design and back-end logic to deployment and continuous integration.

As a self-taught developer currently studying IT at QUT, this project highlights my enthusiasm for software development and my ability to build a robust and functional product that meets business needs.

## Technology Stack

This project is built using a modern and efficient full-stack architecture.

### Front-End:

  * **React:** The application is built with React, leveraging its component-based architecture for a modular and maintainable user interface.
  * **TypeScript:** Type-checking is enforced with TypeScript to ensure code quality and reduce errors.
  * **Tailwind CSS:** Styling is handled using Tailwind CSS, allowing for rapid and consistent UI development directly within the markup.
  * **React Router:** The application uses `react-router-dom` for handling client-side routing and navigation between pages.

### Back-End:

  * **Express.js:** A robust back-end server is created using Express.js to handle business logic and API requests.
  * **Stripe:** Secure and seamless payment processing is integrated using the Stripe API. The back-end handles the creation of secure checkout sessions, while the front-end uses Stripe's embedded checkout for a smooth user experience.

### Deployment & Tools:

  * **Vercel:** The application is deployed to Vercel, demonstrating experience with a leading platform for front-end and full-stack applications.
  * **GitHub Pages:** A space is allocated for GitHub Pages as a potential alternative or additional deployment option.
  * **Gemini in the CLI:** This project leverages Gemini, an AI-powered code assistant, in the CLI for real-time codebase context and debugging. This highlights the use of cutting-edge AI tools to improve efficiency and solve complex problems during development.

## Features

  * **Professional Landing Page:** A comprehensive landing page showcasing the company's services, success stories, and pricing.
  * **Secure Payment Integration:** Customers can securely book services using a seamless embedded checkout powered by Stripe.
  * **Responsive Design:** The website is designed to be fully responsive, providing an optimal viewing experience across all devices.
  * **Dynamic Content:** The structure is set up to handle dynamic content sections for easy updates to services, testimonials, and other information.
  * **Email Confirmation:** The system is set up to provide an email confirmation after a successful payment.

## How to Run Locally

1.  Clone the repository: `git clone [repository-url]`
2.  Navigate to the project directory.
3.  Install dependencies for both front-end and back-end.
      * `npm install` (in the root directory)
      * `cd server && npm install`
4.  Set up environment variables for Stripe. Create a `.env` file in the `server` directory and add your Stripe secret key and domain.
      * `STRIPE_SECRET_KEY=your_secret_key`
      * `DOMAIN=http://localhost:3000`
5.  Start the front-end and back-end servers.
      * `npm run dev` (in the root directory)
      * `node server/server.js`
