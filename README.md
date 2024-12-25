# NestJS Temperature API

This project is a NestJS-based API that provides mock temperature data with features like rate limiting, JWT-based authentication, and detailed error handling.

## Features

- Provides random temperature data via a `/temperature` endpoint.
- Implements rate limiting (100 requests per second).
- Secured with JWT-based authentication.
- Includes error handling and logging.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)   (Git Destop or Git Bash)

---

## Getting Started

1.  Install Dependencies

Run the following command to install required packages:

```bash
npm install
```

2. Configure Environment Variables

Create a .env file in the project root and add the following:

```bash
JWT_SECRET=yourSecretKey
PORT=3000
```

Replace yourSecretKey with a secure secret key for JWT.

3. Start the Development Server

To start the server in development mode:

```bash
npm run start:dev
```

4. Access the API

Access the API at
`http://localhost:3000/auth/login`,
`http://localhost:3000/temperature/temperatureData`.

## Project Structure

The project structure is as follows:

```bash
src/
├── auth/                # Authentication module
│   ├── auth.module.ts   # Auth module definition
│   ├── jwt.strategy.ts  # JWT strategy for authentication
│   └── jwt-auth.guard.ts # Auth guard for protected routes
├── temperature/         # Temperature module
│   ├── temperature.controller.ts # API controller
│   ├── temperature.service.ts    # Temperature service logic
│   └── temperature.module.ts     # Module definition
├── app.module.ts        # Main application module
├── app.service.ts       # Main application service
├── app.controller.spec.ts # Main application controller tests
├── main.ts              # Application entry point
└── app.controller.ts    # Main application controller

```
