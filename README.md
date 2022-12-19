# About App

An implemented Weather App SPA that helps to find weather in selected cities.  
The link to the demo is [HERE](https://yuliacoolinich.github.io/weather-search/)  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use

1. Enter a city name from the proposed list. There are a lot of cities that have the same name.
   That's why for collision resolution was added information about the country was (by adding a flag for user-friendly design), state (only for the USA), and GPS coordinates (for countries that also have cities with the same names but not in the USA).
2. Press the 'Go' button and a new card with this city with a short weather description will be created.
3. The card can be deleted, updated (weather info), open in a modal with details (the card is clickable).
4. Modal with details contains all detailed weather info that is provided by API. Also, there is a chart with a forecast of temperature for 1 day for every 3 hours (free version). The chart component is built with Kendo-react-ui and is available until 01.14.2023. Looking at the chart you understand which temperature is below zero and vice-versa. Close the modal by clicking on a close icon or clicking somewhere outside the modal.
5. List of added cities is saved at session storage that's why after the page refreshing the list is kept. After the page refreshes, the weather for every card is refreshed.
6. Available for use on the mobile browsers (Safari).

## Used Technologies

- React 18 with hooks, no classes, custom hook
- Typescript
- UI library:
  - [Material UI](https://mui.com/)
  - [Kendo-react-ui](https://www.telerik.com/kendo-react-ui/components/charts/)
- State manager:
  - Redux (Redux Thunk)
- Environment tools:
  - ESLint
  - Prettier
  - husky
- Saving data in local storage
- Follow the Git workflow
- Open APIs:
  - [Weather API](https://openweathermap.org/)
  - [API of flags](https://flagcdn.com/)
- Some help packages:
  - id generator [uuid](https://www.npmjs.com/package/uuid)
  - library for working with data and times [moment](https://momentjs.com/)
  - etc. you name it.

## Available Scripts

In the project directory, you can run:

### `npm init`

Sets up a new or existing npm packages.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm format`

Formats project code at './src' folder according to described rules using eslint --fix.
This option instructs ESLint to try to fix as many issues as possible. The fixes are made to the actual files themselves and only the remaining unfixed issues are output.

### `npm prettier`

This command formats and overwrites all files supported by Prettier in the current directory and its subdirectories. (Except for files that are listed at .prettierignore file to ignore things that should not be formatted).

### `npm test`

Launches the test runner in the interactive watch mode.
