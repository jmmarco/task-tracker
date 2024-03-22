# Lodgify - FE Technical Challenge

This project is a front-end technical challenge for Lodgify.

## Dependencies

This project uses the following dependencies:

- React: A JavaScript library for building user interfaces
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs
- Axios: Promise based HTTP client for the browser and node.js
- clsx: A tiny utility for constructing className strings conditionally
- tailwind-merge: Efficiently merge Tailwind CSS classes in JS without style conflicts
- HeadlessUI: Accessible UI components for React
- react-error-boundary: A simple reusable React error boundary component with useful features

## Getting Started

To run this project, follow these steps:

1. Clone the repository: `git clone https://github.com/jmmarco/lodgify-task-tracker.git`
2. Navigate to the project directory: `cd lodgify-task-tracker`
3. Install the dependencies: `npm install`
4. Locate the file `.env.example` in the root of the project and rename it to `.env`. Update and save the entry with the correct value for the API URL. In this case, it should be:

```
VITE_API_URL=https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress
```

4. Start the development server: `npm start`

The application will be available at `http://localhost:3000`.

## Building the Project

To build the project for production, run `npm run build`. This will create a `build` directory with the compiled project.

### Development Notes

#### State Management

One of the challenges to build this project was to decide how state would be handled in the application. I opted to use React's useReducer hook to manage the state of the application inside a single reducer file. The state was expanded to included additional properties that were not present in the API response.
This allowed me to have a single source of truth for the application state and to have a clear separation of concerns between the components that manage the state and the components that consume the state.

The main application state `AppState` includes three additional properties:

- `groups` - An array of groups that includes the tasks for each group
- `groupsTotalTaskValues` - The sum of all the task values for all groups
- `groupsTotalCheckedTaskValues` - The sum of all the checked task values for all groups
- `normalizedProgress` - The normalized progress value for the progress bar

Each group `GroupState` has its own state that includes the following properties:

- `name` - The name of the group (present in the API response)
- `tasks` - An array of tasks for the group (present in the API response)
- `isVisible` - A boolean value that determines if the group is visible or not (useful for UI interactions)
- `totalTaskValues` - The sum of all the task values for the group
- `completedTasks` - The number of completed (checked) tasks for the group

There are three actions that can be dispatched to the reducer:

1. `LOAD_TASKS` - Load the tasks from the API response and expands the application state with the additional properties mentioned above. In an effort to keep the code as simple and clean as possible, the following helper functions were created to help:

- `initializeGroups` - Initializes the groups array with the tasks from the API response and additional properties mentioned above
- `calculateGroupTotalTaskValues` - Calculates the total task values for each group
- `calculateGroupsTotalCheckedTaskValues` - Calculates the total checked task values for all groups
- `calculateNormalizedProgress` - Calculates the normalized progress value for the progress bar

2. `TOGGLE_GROUP` - Toggles the visibility of a group by changing the `isVisible` property

3. `TOGGLE_TASK` - Toggles the specific task's `checked` boolean value and updates the group state so the application state is updated accordingly. This action also makes use of the same helper functions used in the `LOAD_TASKS` action to update the state.

#### Components

Components were created to be as reusable as possible. They're are placed inside the `components` folder and are divided into categories for better organization. This was done to make the components more modular and easier to maintain.

#### Data Fetching

The fetching of data was done by creating a custom hook `useGetTasks` that uses Axios to fetch the data from the API. The hook also includes a loading state and an error state to handle the different states of the request. The hook is used in the `App` component to fetch the data when the application is loaded.

#### Error Handling

React ErrorBoundary component is used around the main `App` component to "catch" errors and render a fallback UI. In this case an `ErrorPage` component.
It also supports several ways to render a fallback UI as well as a useful hook and logging capabilities.

#### Styling

Styling has been handled by using Tailwind CSS. The utility-first approach of Tailwind CSS allowed me to quickly style the components. The `tailwind.config.js` file was also updated to include additional configurations for the project. The HeadlessUI library was employed for managing transitions, as it enables the addition of enter/leave transitions to conditionally rendered elements.
Since the project didn't contain a lot of icons I decided to not include a separate icon library and instead opted to create custom icon components from the SVG code provided in the original Figma design.
