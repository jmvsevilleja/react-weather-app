## Introduction

This is a weather app built with React, TailwindCSS, and TypeScript that makes use of the OpenWeatherMap API to display the weather for a given location. The app also includes authentication through Auth0.

## Getting Started

1.  Clone the repository to your local machine.
    `git clone https://github.com/jmvsevilleja/react-weather-app.git`
2.  Navigate to the project folder and run `npm install` to install all the dependencies.
3.  Create an account on [Auth0](https://auth0.com/) to set up your authentication and obtain the necessary credentials.
4.  Replace Auth0Provider config with your Auth0 credentials.
5.  Register on [OpenWeatherMap API](https://openweathermap.org/api) to obtain an API key to access their weather data.
6.  Replace the app_id key in the `src/api/api.tsx` file with your API key.
7.  Run `npm start` to start the development server.

## Packages

The following packages were used in this project:

- `@auth0/auth0-react`: used for authentication through Auth0.
- `axios`: used for making HTTP requests to the OpenWeatherMap API.
- `moment`: used for formatting dates.
- `react`: the main React library.
- `tailwindcss`: used for styling the app with Tailwind CSS.
- `typescript`: used for type handling.

## Folder Structure

```
/src
    /api
    /components
    /layout
    /pages
    /screens
    /index.tsx
    /App.tsx`
```

- The `src/index.tsx` file is the entry point of the app.
- The `src/App.tsx` file handles all the routes, pages, and authenticated pages.
- The `src/page` folder contains the different pages of the app, such as the Home and Login pages.
- The `src/layout` folder contains reusable components that make up the layout of the pages, such as the Header Navigation.
- The `src/screens` folder contains reusable feature components of the page, such as the Weather screen.
- The `src/components` folder contains reusable components that can be used throughout the app, such as the Button.
- The `src/api` folder contains all the API configurations and calls to third-party APIs, such as OpenWeatherMap API.
