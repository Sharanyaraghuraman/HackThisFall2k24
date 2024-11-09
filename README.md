
# Mera Guide

**Mera Guide** is a travel platform designed to connect travelers with local guides and fellow adventurers. Whether you’re exploring popular tourist spots or off-the-beaten-path locations, Mera Guide provides recommendations, allows users to book local guides, connect with other travelers, and share travel experiences. The app also features a personalized dashboard for users to manage their trips, plan itineraries, and find travel companions.

---

## Table of Contents
- [About Mera Guide](#about-mera-guide)
- [Features](#features)
- [Installation Instructions](#installation-instructions)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## About Mera Guide

Mera Guide is a platform built for travel enthusiasts, allowing them to:
- **Explore Destinations**: View popular tourist spots with detailed information.
- **Find Local Guides**: Discover verified local guides, read reviews, and book their services directly.
- **Connect with Fellow Travelers**: Match with others traveling to the same destinations.
- **Plan Trips**: Create detailed itineraries and share them with other travelers.
- **Share Experiences**: Contribute to the community with travel blogs and reviews.

The application is built using the **Vite** bundler for fast and optimized development.

---

## Features
- **Search Bar**: Quickly search for destinations, guides, or travel companions.
- **User Dashboard**: A personalized space to view upcoming trips, saved destinations, and recommended guides.
- **Local Guide Directory**: Browse through a list of local guides with profiles, ratings, and booking options.
- **Find Fellow Travelers**: Match with travelers heading to the same destination.
- **Trip Planner**: Create and share your travel itinerary with others.
- **Blog Section**: Share your experiences and tips with the community.

---

## Installation Instructions

To run **Mera Guide** locally, follow the instructions below:

### 1. Clone the repository

```bash
git clone https://github.com/Sharanyaraghuraman/HackThisFall2k24.git
```

### 2. Install dependencies

Navigate into the project folder and install the required dependencies using npm (or yarn).

```bash
cd HackThisFall2k24
npm install
```

Or if you are using yarn:

```bash
yarn install
```

### 3. Run the Development Server

To start the project in development mode, run:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

This will start the Vite development server, and you can view the application in your browser at `http://localhost:3000`.

---

## Project Structure

The project structure for **Mera Guide** is organized as follows:

```
/public               # Static assets like images, fonts, etc.
/src                  # Main source code for the app
  /assets             # Images, icons, and other assets
  /components         # React components (for UI building blocks)
  /pages              # Page components (e.g., Home, Login, Dashboard)
  /store              # Application state management
  /styles             # Global CSS and styling
  /utils              # Helper functions and utilities
  App.jsx             # Main app component
  main.js             # Entry point of the app
/package.json         # Project dependencies and scripts
/vite.config.js       # Vite configuration file
```

---

## Usage

Once the app is running locally, you can:

- **Sign Up / Log In**: Create a new account or log in to manage your trips, local guides, and travel companions.
- **Explore Destinations**: Browse through featured destinations and guides.
- **Plan and Share Trips**: Use the trip planner to create itineraries and share them with others.
- **Find Local Guides**: Search for guides based on location, ratings, and services offered.
- **Connect with Fellow Travelers**: Use the "Find Fellow Travelers" feature to match with people heading to the same place.

---

## Contributing

We welcome contributions to **Mera Guide**. If you would like to contribute, please fork the repository, create a new branch, and submit a pull request with your changes.

Here are some guidelines to keep in mind:
- Ensure your code passes linting and formatting checks.
- Write clear, descriptive commit messages.
- If you add a new feature, please include tests where applicable.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
