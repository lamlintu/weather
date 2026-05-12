# Weather

A simple weather app that tells you what's going on outside at the moment, later today, and for the week ahead. Search any city in the world and get the full picture of their weather.

## Features
- Shows current temperature, how it actually feels outside, humidity, wind, and chance of rain
- Hourly forecast for the next 8 hours
- 7-day forecast with max and min temperatures
- Search any city 
- Switch between Celsius and Fahrenheit units
- The UI theme goes dark at night, light during the day based on wherever city you're looking up
- Works on mobile as well

## Built with

- React 19 + TypeScript
- Vite
- TanStack Query for fetching weather data
- Sass with CSS Modules for styling
- Vitest + React Testing Library for unit tests
- Open-Meteo — a free weather API, no key required
- GitHub Actions for CI/CD — runs tests and deploys to GitHub Pages on every push to `main`

## How to run locally

Make sure to have Node.js and pnpm installed.

- [Node.js](https://nodejs.org/) — v18 or higher
- [pnpm](https://pnpm.io/) — or run `npm install -g pnpm`

Clone the repo and jump into the folder:
```
git clone https://github.com/lamlintu/weather.git
cd weather
```
Install dependencies:
```
pnpm install
```
Start the dev server:
```
pnpm dev
```
The app will be available at `http://localhost:5173`.

## To be developed

- Save the selected city in the URL query string so refreshing the page doesn't reset it back to Helsinki (the default city)
- Set user's location as the default city instead of having it always as Helsinki
- Data visualization with charts using possibly Recharts
